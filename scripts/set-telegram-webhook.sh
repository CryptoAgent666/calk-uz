#!/bin/bash
# Set Telegram webhook for the Calk.UZ feedback bot.
#
# Usage:
#   TELEGRAM_BOT_TOKEN=xxx bash scripts/set-telegram-webhook.sh
#
# Or, if a .env file exists in the project root, it will be sourced automatically.

set -euo pipefail

# Auto-load .env if present (and not committed — see .gitignore)
if [ -f ".env" ]; then
  set -o allexport
  # shellcheck disable=SC1091
  source .env
  set +o allexport
fi

if [ -z "${TELEGRAM_BOT_TOKEN:-}" ]; then
  echo "Error: TELEGRAM_BOT_TOKEN is not set." >&2
  echo "Set it via env var or place it in .env (untracked):" >&2
  echo "  TELEGRAM_BOT_TOKEN=xxx bash scripts/set-telegram-webhook.sh" >&2
  exit 1
fi

WEBHOOK_URL="${TELEGRAM_WEBHOOK_URL:-https://calk.uz/api/telegram/webhook}"

curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}" \
  | python3 -m json.tool 2>/dev/null \
  || curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}"

echo ""
echo "Webhook set to: ${WEBHOOK_URL}"
