import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Shield } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("privacy_title"),
    description:
      locale === "uz"
        ? "Calk.UZ maxfiylik siyosati — shaxsiy ma'lumotlaringiz qanday himoya qilinadi"
        : "Политика конфиденциальности Calk.UZ — как защищены ваши персональные данные",
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        ru: "/ru/privacy",
        uz: "/uz/privacy",
        "x-default": "/ru/privacy",
      },
    },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  const isUz = locale === "uz"

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-6">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t("privacy_title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isUz ? "Oxirgi yangilanish: 2026-yil mart" : "Последнее обновление: март 2026"}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        {/* Introduction */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "1. Umumiy qoidalar" : "1. Общие положения"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            {isUz
              ? "Ushbu maxfiylik siyosati Calk.UZ veb-saytida (keyingi o'rinlarda \"Sayt\") foydalanuvchilarning shaxsiy ma'lumotlarini to'plash, saqlash va ishlatish tartibini belgilaydi. Saytdan foydalanish orqali siz ushbu siyosat shartlariga rozilik bildirasiz."
              : "Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных пользователей сайта Calk.UZ (далее — «Сайт»). Используя Сайт, вы соглашаетесь с условиями данной политики."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Ushbu siyosat O'zbekiston Respublikasining 2019-yil 2-iyuldagi \"Shaxsiy ma'lumotlar to'g'risida\"gi Qonuniga muvofiq ishlab chiqilgan."
              : "Настоящая политика разработана в соответствии с Законом Республики Узбекистан «О персональных данных» от 2 июля 2019 года."}
          </p>
        </section>

        {/* Data collection */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "2. Ma'lumotlarni to'plash" : "2. Сбор данных"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Calk.UZ minimal miqdorda ma'lumot to'playdi. Biz shaxsiy ma'lumotlarni (ism, elektron pochta, telefon raqami) to'plamaymiz. Sayt foydalanuvchilardan ro'yxatdan o'tishni talab qilmaydi."
              : "Calk.UZ собирает минимальное количество данных. Мы не собираем персональные данные (имя, email, номер телефона). Сайт не требует регистрации пользователей."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Biz avtomatik ravishda quyidagi ma'lumotlarni to'playmiz:"
              : "Мы автоматически собираем следующую информацию:"}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 mt-3">
            <li>
              {isUz
                ? "Google Analytics 4 orqali anonim foydalanish statistikasi (sahifalar ko'rishlari, sessiya davomiyligi, qurilma turi)"
                : "Анонимная статистика использования через Google Analytics 4 (просмотры страниц, длительность сессии, тип устройства)"}
            </li>
            <li>
              {isUz
                ? "IP manzil (Google Analytics tomonidan avtomatik anonimlashtiriladigan)"
                : "IP-адрес (автоматически анонимизируется Google Analytics)"}
            </li>
            <li>
              {isUz
                ? "Brauzer turi va operatsion tizim ma'lumotlari"
                : "Тип браузера и данные об операционной системе"}
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "3. Cookie fayllar" : "3. Файлы cookie"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Sayt cookie fayllardan foydalanadi. Cookie — brauzeringizda saqlanadigan kichik matn fayllari bo'lib, quyidagi maqsadlarda ishlatiladi:"
              : "Сайт использует файлы cookie. Cookie — это небольшие текстовые файлы, которые сохраняются в вашем браузере для следующих целей:"}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 mb-4">
            <li>
              {isUz
                ? "Sayt sozlamalarini saqlash (til, mavzu)"
                : "Сохранение настроек сайта (язык, тема оформления)"}
            </li>
            <li>
              {isUz
                ? "Google Analytics tahlil cookie fayllari"
                : "Аналитические cookie от Google Analytics"}
            </li>
            <li>
              {isUz
                ? "Google AdSense reklama cookie fayllari"
                : "Рекламные cookie от Google AdSense"}
            </li>
          </ul>
          <h3 className="text-base font-semibold text-foreground mb-2">
            {isUz ? "Cookie fayllarni boshqarish" : "Управление файлами cookie"}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Siz brauzer sozlamalarida cookie fayllarni o'chirib qo'yishingiz yoki o'chirishingiz mumkin. Shuni esda tutingki, cookie fayllarni o'chirish saytning ba'zi funksiyalariga ta'sir qilishi mumkin (masalan, til sozlamalari saqlanmasligi). Shuningdek, saytga birinchi kirishda cookie xabarnomasi orqali analitik va reklama cookie fayllarini rad etishingiz mumkin."
              : "Вы можете отключить или удалить cookie в настройках браузера. Обратите внимание, что отключение cookie может повлиять на некоторые функции сайта (например, не сохранятся языковые настройки). Также при первом посещении сайта вы можете отклонить аналитические и рекламные cookie через уведомление о cookie."}
          </p>
        </section>

        {/* Third party */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "4. Uchinchi tomon xizmatlari" : "4. Сторонние сервисы"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Saytda quyidagi uchinchi tomon xizmatlari qo'llaniladi:"
              : "На сайте используются следующие сторонние сервисы:"}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
            <li>
              <span className="font-medium text-foreground">Google Analytics 4</span>{" "}
              — {isUz
                ? "sayt trafikini tahlil qilish uchun"
                : "для анализа посещаемости сайта"}
            </li>
            <li>
              <span className="font-medium text-foreground">Google AdSense</span>{" "}
              — {isUz
                ? "reklama ko'rsatish uchun"
                : "для показа рекламных объявлений"}
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm mt-4">
            {isUz
              ? "Ushbu xizmatlar o'zlarining maxfiylik siyosatlariga ega. Batafsil ma'lumot uchun "
              : "Данные сервисы имеют собственные политики конфиденциальности. Подробнее — в "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {isUz ? "Google Maxfiylik Siyosati" : "Политике конфиденциальности Google"}
            </a>.
          </p>
        </section>

        {/* User rights */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "5. Foydalanuvchi huquqlari" : "5. Права пользователей"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "O'zbekiston Respublikasining \"Shaxsiy ma'lumotlar to'g'risida\"gi Qonuniga muvofiq siz quyidagi huquqlarga egasiz:"
              : "В соответствии с Законом Республики Узбекистан «О персональных данных» вы имеете следующие права:"}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
            <li>
              {isUz
                ? "Siz haqingizda qanday ma'lumotlar to'planganini bilish huquqi"
                : "Право знать, какие данные о вас собираются"}
            </li>
            <li>
              {isUz
                ? "Anonim tahliliy ma'lumotlarni o'chirishni so'rash huquqi"
                : "Право запросить удаление анонимных аналитических данных"}
            </li>
            <li>
              {isUz
                ? "Analitik va reklama cookie fayllarini rad etish huquqi"
                : "Право отказаться от аналитических и рекламных cookie"}
            </li>
            <li>
              {isUz
                ? "Maxfiylik siyosati bo'yicha savollar bilan murojaat qilish huquqi"
                : "Право обратиться с вопросами по политике конфиденциальности"}
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm mt-4">
            {isUz
              ? "Huquqlaringizni amalga oshirish uchun info@calk.uz manziliga yozing."
              : "Для реализации ваших прав напишите на info@calk.uz."}
          </p>
        </section>

        {/* Data retention */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "6. Ma'lumotlarni saqlash muddati" : "6. Срок хранения данных"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Google Analytics ma'lumotlari standart saqlash muddati — 14 oy. Cookie fayllar brauzer sozlamalariga qarab yoki ularning amal qilish muddati tugagandan so'ng o'chiriladi. Sayt sozlamalari cookie fayllari (til, mavzu) 1 yil davomida saqlanadi."
              : "Данные Google Analytics хранятся стандартный период — 14 месяцев. Файлы cookie удаляются в зависимости от настроек браузера или по истечении их срока действия. Cookie настроек сайта (язык, тема) хранятся 1 год."}
          </p>
        </section>

        {/* Data protection */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "7. Ma'lumotlarni himoya qilish" : "7. Защита данных"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Biz foydalanuvchi ma'lumotlarini himoya qilish uchun zamonaviy xavfsizlik choralarini qo'llaymiz, jumladan HTTPS shifrlash protokoli. Biz shaxsiy ma'lumotlarni uchinchi tomonlarga sotmaymiz yoki bermaymiz."
              : "Мы применяем современные меры безопасности для защиты данных пользователей, включая протокол шифрования HTTPS. Мы не продаём и не передаём персональные данные третьим лицам."}
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "8. Bog'lanish" : "8. Контакты"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Maxfiylik siyosati bo'yicha savollar bo'lsa, info@calk.uz manzilga yozing yoki Telegram @calkuz orqali murojaat qiling."
              : "По вопросам, связанным с политикой конфиденциальности, пишите на info@calk.uz или обращайтесь через Telegram @calkuz."}
          </p>
        </section>
      </div>
    </div>
  )
}
