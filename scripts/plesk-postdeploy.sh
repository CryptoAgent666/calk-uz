#!/usr/bin/env bash
#
# Plesk "additional deployment action" for calk.uz.
# Runs after Plesk pulls & deploys the repo to the server path (/calk.uz).
#
# Set it in Plesk → Git repo → deployment settings →
#   [x] Включить дополнительные действия развёртывания
#   command:  bash scripts/plesk-postdeploy.sh
#
# It installs deps (postinstall runs `next build`) and restarts the Node app,
# auto-detecting the supervisor (Passenger → pm2 → systemd) so it never spawns
# a duplicate. All output goes to deploy.log in the repo root.
#
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$(dirname "$SCRIPT_DIR")"   # repo root (== Plesk server path)

{
  echo "=== $(date '+%F %T') post-deploy ==="

  # Make node/npm reachable (Plesk Node.js lives under /opt/plesk/node/*/bin).
  for d in /opt/plesk/node/*/bin "$HOME/.nvm/versions/node/"*/bin /usr/local/bin; do
    [ -d "$d" ] && export PATH="$d:$PATH"
  done
  export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"
  echo "node: $(command -v node || echo MISSING) $(node -v 2>/dev/null || true)"

  if ! command -v npm >/dev/null 2>&1; then
    echo "!! npm not found in PATH — set the correct Node.js path at the top of this script"
    exit 1
  fi

  # Install deps + build. package.json has "postinstall": "next build",
  # so this single step also produces the .next build. --include=dev ensures
  # build-time packages are present even if NODE_ENV=production.
  echo "-- npm install (+ postinstall next build) --"
  if ! npm install --include=dev --no-audit --no-fund; then
    echo "!! npm install/build FAILED"; exit 1
  fi

  # --- restart the running server (safe auto-detect, no duplicates) ---
  echo "-- restart --"
  # 1) Passenger / Plesk Node.js: touch restart trigger (no-op if unused)
  mkdir -p tmp && touch tmp/restart.txt && echo "touched tmp/restart.txt (Passenger)"
  # 2) pm2, if it manages a calk/app process
  if command -v pm2 >/dev/null 2>&1; then
    n=$(pm2 jlist 2>/dev/null | tr ',' '\n' \
        | grep -iE '"name":"[^"]*(calk|app)[^"]*"' | head -1 \
        | sed -E 's/.*"name":"([^"]*)".*/\1/')
    [ -n "${n:-}" ] && pm2 reload "$n" --update-env && echo "pm2 reloaded $n"
  fi
  # 3) systemd, only if the running `node app.js` belongs to a unit
  pid=$(pgrep -f "node .*app\.js" | head -1 || true)
  if [ -n "${pid:-}" ]; then
    unit=$(grep -oE '[a-zA-Z0-9_@.-]+\.service' "/proc/$pid/cgroup" 2>/dev/null | head -1 || true)
    if [ -n "${unit:-}" ]; then
      (sudo -n systemctl restart "$unit" 2>/dev/null || systemctl --user restart "$unit" 2>/dev/null) \
        && echo "systemd restarted $unit"
    fi
  fi

  echo "post-deploy done"
} >> deploy.log 2>&1
