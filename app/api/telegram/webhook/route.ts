import { NextRequest, NextResponse } from "next/server"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ""
const ADMIN_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ""

const WELCOME_MESSAGE = `🇷🇺 Здравствуйте! Это бот обратной связи Calk.UZ.

Напишите ваше сообщение — мы ответим в течение 24 часов. Вы можете:
• Сообщить об ошибке в расчётах
• Предложить новый калькулятор
• Задать вопрос по работе сайта

———

🇺🇿 Assalomu alaykum! Bu Calk.UZ aloqa boti.

Xabaringizni yozing — biz 24 soat ichida javob beramiz. Siz quyidagilarni qilishingiz mumkin:
• Hisob-kitoblardagi xatolik haqida xabar berish
• Yangi kalkulyator taklif qilish
• Sayt ishlashi bo'yicha savol berish`

async function sendMessage(chatId: number | string, text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  })
}

export async function POST(request: NextRequest) {
  if (!BOT_TOKEN) {
    return NextResponse.json({ error: "Bot token not configured" }, { status: 500 })
  }

  try {
    const body = await request.json()
    const message = body.message

    if (!message) {
      return NextResponse.json({ ok: true })
    }

    const chatId = message.chat.id
    const text = message.text || ""
    const from = message.from

    // Handle /start command
    if (text === "/start") {
      await sendMessage(chatId, WELCOME_MESSAGE)
      return NextResponse.json({ ok: true })
    }

    // Forward user messages to admin
    if (ADMIN_CHAT_ID && String(chatId) !== ADMIN_CHAT_ID) {
      const userName = from?.first_name || "Unknown"
      const userHandle = from?.username ? `@${from.username}` : "no username"
      const forwarded = `📩 <b>Новое сообщение от ${userName}</b> (${userHandle}, ID: ${chatId})\n\n${text}`
      await sendMessage(ADMIN_CHAT_ID, forwarded)

      // Confirm to user
      const confirmation =
        "✅ Спасибо! Ваше сообщение получено. Мы ответим в ближайшее время.\n\n✅ Rahmat! Xabaringiz qabul qilindi. Tez orada javob beramiz."
      await sendMessage(chatId, confirmation)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true })
  }
}
