#!/bin/bash
# Set Telegram webhook for calkuz_bot
# Run once after deployment: bash scripts/set-telegram-webhook.sh

BOT_TOKEN="8600312575:AAGz6AsMaAgbm3Nqe16UQAxb8Q2tL3AfX7g"
WEBHOOK_URL="https://calk.uz/api/telegram/webhook"

curl -s "https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}" | python3 -m json.tool 2>/dev/null || curl -s "https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}"

echo ""
echo "Webhook set to: ${WEBHOOK_URL}"
