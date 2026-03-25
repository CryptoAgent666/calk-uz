import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { FileText } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("terms_title"),
    description:
      locale === "uz"
        ? "Calk.UZ veb-saytidan foydalanish shartlari"
        : "Условия использования сайта Calk.UZ",
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        ru: "/ru/terms",
        uz: "/uz/terms",
        "x-default": "/ru/terms",
      },
    },
  }
}

export default async function TermsPage({
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
          <FileText className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t("terms_title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isUz ? "Oxirgi yangilanish: 2026-yil mart" : "Последнее обновление: март 2026"}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        {/* General */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "1. Umumiy qoidalar" : "1. Общие положения"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Ushbu foydalanish shartlari Calk.UZ veb-saytidan (keyingi o'rinlarda \"Sayt\") foydalanish tartibini belgilaydi. Saytdan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Agar siz ushbu shartlarga rozi bo'lmasangiz, iltimos, saytdan foydalanmang."
              : "Настоящие Условия использования определяют порядок использования сайта Calk.UZ (далее — «Сайт»). Используя Сайт, вы соглашаетесь с данными условиями. Если вы не согласны с условиями, пожалуйста, не используйте Сайт."}
          </p>
        </section>

        {/* Services */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "2. Xizmatlar tavsifi" : "2. Описание услуг"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Calk.UZ O'zbekiston aholisi uchun bepul onlayn kalkulyatorlarni taqdim etadi: soliqlar, ish haqi, kreditlar, omonatlar, valyuta konvertatsiyasi va boshqa moliyaviy hisob-kitoblar. Barcha kalkulyatorlar bepul va ro'yxatdan o'tishni talab qilmaydi."
              : "Calk.UZ предоставляет бесплатные онлайн-калькуляторы для жителей Узбекистана: налоги, зарплата, кредиты, вклады, конвертация валют и другие финансовые расчёты. Все калькуляторы бесплатны и не требуют регистрации."}
          </p>
        </section>

        {/* Disclaimer */}
        <section className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/20 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "3. Javobgarlikni cheklash" : "3. Ограничение ответственности"}
          </h2>
          <div className="text-muted-foreground leading-relaxed text-sm space-y-3">
            <p className="font-medium text-foreground">
              {isUz
                ? "MUHIM: Barcha hisob-kitob natijalari faqat ma'lumot uchun mo'ljallangan."
                : "ВАЖНО: Все результаты расчётов носят исключительно информационный характер."}
            </p>
            <p>
              {isUz
                ? "Saytdagi kalkulyatorlar natijalari moliyaviy, yuridik yoki soliq maslahati hisoblanmaydi. Aniq hisob-kitoblar uchun malakali mutaxassislarga murojaat qiling."
                : "Результаты расчётов калькуляторов на сайте не являются финансовой, юридической или налоговой консультацией. Для точных расчётов обращайтесь к квалифицированным специалистам."}
            </p>
            <p>
              {isUz
                ? "Calk.UZ kalkulyator natijalariga asoslangan qarorlar uchun javobgar emas. Stavkalar va tariflar o'zgarishi mumkin — biz ularni yangilab turishga harakat qilamiz, lekin to'liq aniqlikni kafolatlay olmaymiz."
                : "Calk.UZ не несёт ответственности за решения, принятые на основе результатов калькуляторов. Ставки и тарифы могут изменяться — мы стараемся поддерживать их актуальность, но не можем гарантировать полную точность."}
            </p>
            <p>
              {isUz
                ? "Sayt «qanday bo'lsa, shunday» asosida taqdim etiladi, hech qanday aniq yoki nazarda tutilgan kafolatlarsiz. Foydalanuvchi saytdan foydalanish bilan bog'liq barcha xavflarni o'z zimmasiga oladi."
                : "Сайт предоставляется «как есть», без каких-либо явных или подразумеваемых гарантий. Пользователь принимает на себя все риски, связанные с использованием сайта."}
            </p>
          </div>
        </section>

        {/* Intellectual property */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "4. Intellektual mulk" : "4. Интеллектуальная собственность"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Saytning barcha kontenti, jumladan dizayn, logotip, matnlar, kodlar va kalkulyator algoritmlari Calk.UZ intellektual mulki hisoblanadi va mualliflik huquqi bilan himoyalangan. Sayt materiallarini yozma ruxsatsiz ko'chirib olish, tarqatish yoki boshqa saytlarda joylashtirish taqiqlanadi."
              : "Всё содержимое Сайта, включая дизайн, логотип, тексты, программный код и алгоритмы калькуляторов, является интеллектуальной собственностью Calk.UZ и защищено авторским правом. Копирование, распространение или размещение материалов Сайта на других ресурсах без письменного разрешения запрещено."}
          </p>
        </section>

        {/* User obligations */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "5. Foydalanuvchi majburiyatlari" : "5. Обязательства пользователя"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            {isUz
              ? "Saytdan foydalanish jarayonida foydalanuvchi quyidagilarga rozi bo'ladi:"
              : "При использовании Сайта пользователь обязуется:"}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
            <li>
              {isUz
                ? "Saytdan faqat qonuniy maqsadlarda foydalanish"
                : "Использовать Сайт только в законных целях"}
            </li>
            <li>
              {isUz
                ? "Sayt ishlashiga xalaqit bermaslik"
                : "Не нарушать работу Сайта"}
            </li>
            <li>
              {isUz
                ? "Sayt materiallarini mualliflik huquqini buzgan holda ishlatmaslik"
                : "Не использовать материалы Сайта с нарушением авторских прав"}
            </li>
            <li>
              {isUz
                ? "Saytga avtomatlashtirilgan so'rovlarni yubormaslik (agar oldindan kelishilmagan bo'lsa)"
                : "Не отправлять автоматизированные запросы к Сайту (без предварительного согласования)"}
            </li>
          </ul>
        </section>

        {/* Third-party links */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "6. Tashqi havolalar" : "6. Ссылки на сторонние ресурсы"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Saytda uchinchi tomon veb-saytlariga havolalar bo'lishi mumkin (rasmiy davlat organlari saytlari, Markaziy bank va boshqalar). Calk.UZ tashqi saytlarning kontenti, maxfiylik siyosati yoki xavfsizligi uchun javobgar emas. Tashqi havolalarga o'tish foydalanuvchining o'z xavfi va ixtiyoriga ko'ra amalga oshiriladi."
              : "Сайт может содержать ссылки на сторонние веб-ресурсы (официальные сайты государственных органов, Центрального банка и др.). Calk.UZ не несёт ответственности за содержание, политику конфиденциальности или безопасность внешних сайтов. Переход по внешним ссылкам осуществляется на усмотрение и риск пользователя."}
          </p>
        </section>

        {/* Changes to terms */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "7. Shartlarni o'zgartirish" : "7. Изменение условий"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Calk.UZ ushbu foydalanish shartlarini istalgan vaqtda o'zgartirish huquqini o'zida saqlab qoladi. O'zgarishlar saytda e'lon qilingan paytdan kuchga kiradi. Saytdan davomiy foydalanish yangilangan shartlarga rozilikni anglatadi."
              : "Calk.UZ оставляет за собой право изменять настоящие Условия использования в любое время. Изменения вступают в силу с момента их публикации на Сайте. Продолжение использования Сайта означает согласие с обновлёнными условиями."}
          </p>
        </section>

        {/* Governing law */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "8. Qo'llaniladigan huquq" : "8. Применимое право"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            {isUz
              ? "Ushbu foydalanish shartlari O'zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi va talqin qilinadi."
              : "Настоящие Условия использования регулируются и толкуются в соответствии с законодательством Республики Узбекистан."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Ushbu shartlar bilan bog'liq har qanday kelishmovchiliklar muzokaralar yo'li bilan hal qilinadi. Muzokaralar natija bermaganida, nizolar O'zbekiston Respublikasi qonunchiligida belgilangan tartibda hal qilinadi."
              : "Все споры, связанные с настоящими условиями, решаются путём переговоров. При невозможности достижения согласия споры разрешаются в порядке, установленном законодательством Республики Узбекистан."}
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "9. Bog'lanish" : "9. Контакты"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Foydalanish shartlari bo'yicha savollar bo'lsa, info@calk.uz manzilga yozing yoki Telegram @calkuz_bot orqali murojaat qiling."
              : "По вопросам, связанным с условиями использования, пишите на info@calk.uz или обращайтесь через Telegram @calkuz_bot."}
          </p>
        </section>
      </div>
    </div>
  )
}
