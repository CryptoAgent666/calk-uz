#!/usr/bin/env bash
#
# calk.uz auto-deploy — pull latest main, rebuild if changed, restart the server.
#
# Designed to be run every minute by cron on the VPS:
#   * * * * * flock -n /tmp/calk-deploy.lock /bin/bash /PATH/TO/calk-uz/scripts/deploy.sh
#
# It no-ops when there is nothing new, so running it every minute is cheap.
# Repo dir is resolved from the script's own location — no path to hard-code.
# The restart method is auto-detected from how `node app.js` is ACTUALLY running
# (pm2 → systemd → plain nohup), so it won't spawn a duplicate process.
#
# Run once with `--detect` to see what it would do without changing anything:
#   bash scripts/deploy.sh --detect
#
set -euo pipefail

# --- make node/npm reachable under cron's minimal PATH (incl. nvm installs) ---
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh" >/dev/null 2>&1 || true
for d in "$HOME/.nvm/versions/node/"*/bin "$HOME/.local/bin" /root/.nvm/versions/node/*/bin; do
  [ -d "$d" ] && export PATH="$d:$PATH"
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
BRANCH="${CALK_BRANCH:-main}"
PORT="${PORT:-3000}"
cd "$REPO_DIR"

log() { echo "[$(date '+%F %T')] $*"; }

# --- detect how the running `node app.js` is supervised (no side effects) ---
detect_restart() {
  if command -v pm2 >/dev/null 2>&1; then
    local name
    name=$(pm2 pid app.js >/dev/null 2>&1 && echo app.js || true)
    # match by name OR by exec path containing app.js
    name=$(pm2 jlist 2>/dev/null | tr ',' '\n' \
      | grep -iE '"name":"[^"]*(calk|app)[^"]*"' | head -1 \
      | sed -E 's/.*"name":"([^"]*)".*/\1/' || true)
    [ -n "$name" ] && { echo "pm2:$name"; return; }
  fi
  local pid unit
  pid=$(pgrep -f "node .*app\.js" | head -1 || true)
  if [ -n "$pid" ]; then
    unit=$(grep -oE '[a-zA-Z0-9_@.-]+\.service' "/proc/$pid/cgroup" 2>/dev/null | head -1 || true)
    [ -n "$unit" ] && { echo "systemd:$unit"; return; }
  fi
  echo "nohup"
}

do_restart() {
  local m; m="$(detect_restart)"
  case "$m" in
    pm2:*)     log "restart via pm2 (${m#pm2:})"; pm2 reload "${m#pm2:}" --update-env ;;
    systemd:*) log "restart via systemd (${m#systemd:})"; sudo -n systemctl restart "${m#systemd:}" 2>/dev/null || systemctl restart "${m#systemd:}" ;;
    nohup)     log "restart via nohup"; pkill -f "node .*app\.js" || true; sleep 1
               ( PORT="$PORT" nohup node app.js >> "$REPO_DIR/app.log" 2>&1 & ) ;;
  esac
}

# --- dry run ------------------------------------------------------------------
if [ "${1:-}" = "--detect" ]; then
  git fetch origin "$BRANCH" --quiet || true
  echo "repo dir     : $REPO_DIR"
  echo "branch       : $BRANCH"
  echo "local HEAD   : $(git rev-parse --short HEAD 2>/dev/null)"
  echo "origin HEAD  : $(git rev-parse --short "origin/$BRANCH" 2>/dev/null)"
  echo "node         : $(command -v node || echo MISSING) $(node -v 2>/dev/null || true)"
  echo "restart via  : $(detect_restart)"
  echo "(dry run — nothing changed)"
  exit 0
fi

# --- deploy if there are new commits -----------------------------------------
git fetch origin "$BRANCH" --quiet
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse "origin/$BRANCH")"
if [ "$LOCAL" = "$REMOTE" ]; then
  exit 0   # up to date — silent no-op
fi

log "new commits ${LOCAL:0:7} -> ${REMOTE:0:7} — deploying"
git reset --hard "origin/$BRANCH"

if ! git diff --quiet "$LOCAL" "$REMOTE" -- package-lock.json package.json 2>/dev/null; then
  log "dependencies changed — npm ci"
  npm ci
fi

log "building"
npm run build

do_restart
log "deployed ${REMOTE:0:7} OK"
