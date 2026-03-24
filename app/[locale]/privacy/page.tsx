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
          {isUz ? "Oxirgi yangilanish: 2025-yil mart" : "Последнее обновление: март 2025"}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        {/* Introduction */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "1. Umumiy qoidalar" : "1. Общие положения"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Ushbu maxfiylik siyosati Calk.UZ veb-saytida (keyingi o'rinlarda \"Sayt\") foydalanuvchilarning shaxsiy ma'lumotlarini to'plash, saqlash va ishlatish tartibini belgilaydi. Saytdan foydalanish orqali siz ushbu siyosat shartlariga rozilik bildirasiz."
              : "Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных пользователей сайта Calk.UZ (далее — «Сайт»). Используя Сайт, вы соглашаетесь с условиями данной политики."}
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
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
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
              ? "Ushbu xizmatlar o'zlarining maxfiylik siyosatlariga ega. Batafsil ma'lumot uchun Google Maxfiylik Siyosatiga murojaat qiling."
              : "Данные сервисы имеют собственные политики конфиденциальности. Подробнее — в Политике конфиденциальности Google."}
          </p>
        </section>

        {/* Data protection */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "5. Ma'lumotlarni himoya qilish" : "5. Защита данных"}
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
            {isUz ? "6. Bog'lanish" : "6. Контакты"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Maxfiylik siyosati bo'yicha savollar bo'lsa, info@calk.uz manzilga yozing."
              : "По вопросам, связанным с политикой конфиденциальности, пишите на info@calk.uz."}
          </p>
        </section>
      </div>
    </div>
  )
}
