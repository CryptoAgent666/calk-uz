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

  const description =
    locale === "uz"
      ? "Calk.UZ maxfiylik siyosati — shaxsiy ma'lumotlaringiz qanday himoya qilinadi"
      : "Политика конфиденциальности Calk.UZ — как защищены ваши персональные данные"

  return {
    title: t("privacy_title"),
    description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        ru: "/ru/privacy",
        uz: "/uz/privacy",
        "x-default": "/ru/privacy",
      },
    },
    openGraph: {
      title: t("privacy_title"),
      description,
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : "ru_RU",
      alternateLocale: locale === "uz" ? "ru_RU" : "uz_UZ",
      url: `/${locale}/privacy`,
      siteName: "Calk.UZ",
      // Re-attach the segment-level file image (replaced once openGraph is defined).
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630 }],
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

        {/* Google AdSense detailed disclosure */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz
              ? "5. Google AdSense va reklama cookie fayllari"
              : "5. Google AdSense и рекламные cookie"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Saytimizda reklama ko'rsatish uchun Google AdSense xizmatidan foydalaniladi. Google va uning sheriklari — uchinchi tomon vendorlar — o'z cookie fayllaridan, jumladan DoubleClick DART cookie faylidan foydalanib, foydalanuvchining ushbu saytga va boshqa saytlarga oldingi tashriflariga asoslanib reklama ko'rsatadi."
              : "На нашем сайте используется сервис Google AdSense для показа рекламы. Google и его партнёры — сторонние вендоры — используют файлы cookie, включая DoubleClick DART cookie, для показа рекламы на основе предыдущих посещений пользователем этого и других сайтов."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Reklama cookie fayllari Google va uning sheriklariga foydalanuvchi qiziqishlariga mos reklamalarni ko'rsatishga imkon beradi. Sayt egasi sifatida biz foydalanuvchilarning shaxsiy ma'lumotlariga to'g'ridan-to'g'ri kirish imkoniga ega emasmiz."
              : "Рекламные cookie позволяют Google и его партнёрам показывать пользователям релевантную их интересам рекламу. Как владелец сайта мы не имеем прямого доступа к персональным данным пользователей."}
          </p>
          <h3 className="text-base font-semibold text-foreground mb-2">
            {isUz
              ? "Shaxsiylashtirilgan reklamadan voz kechish"
              : "Как отказаться от персонализированной рекламы"}
          </h3>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 mb-4">
            <li>
              {isUz
                ? "Google reklama sozlamalari sahifasida DART cookie faylidan va shaxsiylashtirilgan reklamadan voz kechishingiz mumkin: "
                : "Вы можете отключить DART cookie и персонализированную рекламу в настройках рекламы Google: "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                google.com/settings/ads
              </a>
            </li>
            <li>
              {isUz
                ? "Google reklama texnologiyalari haqida batafsil: "
                : "Подробнее о рекламных технологиях Google: "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                policies.google.com/technologies/ads
              </a>
            </li>
            <li>
              {isUz
                ? "Uchinchi tomon vendorlaridan cookie fayllarini rad etish uchun Network Advertising Initiative sahifasiga tashrif buyuring: "
                : "Для отказа от cookie сторонних вендоров посетите страницу Network Advertising Initiative: "}
              <a
                href="https://optout.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                optout.networkadvertising.org
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Yevropa Iqtisodiy Hududi, Buyuk Britaniya va Shveytsariya foydalanuvchilariga birinchi tashrifda Google'ning rozilik so'rovi (CMP) ko'rsatiladi: reklama cookie fayllariga rozilik berish yoki ularni rad etish mumkin (Google Consent Mode v2). Tanlovni istalgan vaqtda sayt pastidagi «Maxfiylik sozlamalari» havolasi orqali o'zgartirish mumkin."
              : "Пользователям из Европейской экономической зоны, Великобритании и Швейцарии при первом посещении показывается запрос согласия Google (CMP): можно дать согласие на рекламные cookie или отказаться от них (Google Consent Mode v2). Выбор можно изменить в любой момент по ссылке «Настройки конфиденциальности» внизу сайта."}
          </p>
        </section>

        {/* Children's Privacy (COPPA) */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "6. Bolalar maxfiyligi" : "6. Конфиденциальность детей"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            {isUz
              ? "Calk.UZ 13 yoshdan kichik bolalardan atayin shaxsiy ma'lumotlarni to'plamaydi. Sayt moliyaviy hisob-kitoblar uchun mo'ljallangan bo'lib, asosan kattalar auditoriyasiga qaratilgan."
              : "Calk.UZ не собирает намеренно персональные данные от детей младше 13 лет. Сайт предназначен для финансовых расчётов и ориентирован преимущественно на взрослую аудиторию."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Agar siz 13 yoshdan kichik bolaning ota-onasi yoki vasiysi bo'lsangiz va bolangiz bizga shaxsiy ma'lumot taqdim etgan deb hisoblasangiz, iltimos, info@calk.uz manzilga murojaat qiling — biz bunday ma'lumotlarni o'chirish uchun zarur choralarni ko'ramiz. Google AdSense ham 13 yoshdan kichik bolalarga yo'naltirilgan reklamani ko'rsatmaslik siyosatiga amal qiladi."
              : "Если вы родитель или опекун ребёнка младше 13 лет и считаете, что ваш ребёнок предоставил нам персональные данные, пожалуйста, свяжитесь с нами по адресу info@calk.uz — мы примем необходимые меры для удаления таких данных. Google AdSense также следует политике неотображения рекламы, направленной на детей младше 13 лет."}
          </p>
        </section>

        {/* User rights */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "7. Foydalanuvchi huquqlari" : "7. Права пользователей"}
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
            {isUz ? "8. Ma'lumotlarni saqlash muddati" : "8. Срок хранения данных"}
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
            {isUz ? "9. Ma'lumotlarni himoya qilish" : "9. Защита данных"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Biz foydalanuvchi ma'lumotlarini himoya qilish uchun zamonaviy xavfsizlik choralarini qo'llaymiz, jumladan HTTPS shifrlash protokoli. Biz shaxsiy ma'lumotlarni uchinchi tomonlarga sotmaymiz yoki bermaymiz."
              : "Мы применяем современные меры безопасности для защиты данных пользователей, включая протокол шифрования HTTPS. Мы не продаём и не передаём персональные данные третьим лицам."}
          </p>
        </section>

        {/* Mobile apps — Apple и Google ожидают отдельный раздел про то, что
            происходит в бинаре: реклама, покупка, rewarded-ролик и OTA. */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "10. Calk.UZ mobil ilovasi" : "10. Мобильное приложение Calk.UZ"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            {isUz
              ? "Calk.UZ mobil ilovasida (iOS va Android) saytdagi kabi tamoyillar amal qiladi: hisob-kitoblar qurilmangizda bajariladi va serverga yuborilmaydi. Quyida faqat ilovaga xos jihatlar keltirilgan."
              : "В мобильном приложении Calk.UZ (iOS и Android) действуют те же принципы, что и на сайте: расчёты выполняются на вашем устройстве и не отправляются на сервер. Ниже — то, что относится только к приложению."}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
            <li>
              {isUz
                ? "Reklama Google AdMob orqali ko'rsatiladi. Reklamani tanlash uchun AdMob qurilmaning reklama identifikatoridan foydalanadi. iOS'da biz kuzatuvga ruxsat so'raymiz (App Tracking Transparency): rad etsangiz, reklama shaxsiylashtirilmagan holda ko'rsatiladi."
                : "Реклама показывается через Google AdMob. Для подбора объявлений AdMob использует рекламный идентификатор устройства. На iOS мы запрашиваем разрешение на отслеживание (App Tracking Transparency): если вы откажете, реклама будет неперсонализированной."}
            </li>
            <li>
              {isUz
                ? "«Reklamani olib tashlash» bir martalik xaridini ilova do'koni (App Store yoki Google Play) va RevenueCat xizmati amalga oshiradi. Biz to'lov ma'lumotlarini ko'rmaymiz va saqlamaymiz — bizga faqat xaridning holati yetib keladi."
                : "Разовая покупка «Убрать рекламу» проводится магазином приложений (App Store или Google Play) и сервисом RevenueCat. Мы не видим и не храним платёжные данные — до нас доходит только статус покупки."}
            </li>
            <li>
              {isUz
                ? "Videorolik ko'rish evaziga reklamani vaqtincha o'chirish ixtiyoriy. Muddat tugash vaqti faqat shu qurilmaning xotirasida saqlanadi va serverga yuborilmaydi."
                : "Временное отключение рекламы за просмотр видеоролика — добровольное. Момент окончания срока хранится только в памяти этого устройства и на сервер не передаётся."}
            </li>
            <li>
              {isUz
                ? "Ilova vaqti-vaqti bilan serverimizdan ma'lumotnoma qiymatlari va interfeys yangilanishlarini so'raydi. Bunday so'rovlarda shaxsiy ma'lumotlar bo'lmaydi."
                : "Приложение периодически запрашивает у нашего сервера справочные значения и обновления интерфейса. Такие запросы не содержат персональных данных."}
            </li>
            <li>
              {isUz
                ? "Ilovani o'chirsangiz, qurilmada saqlangan barcha ma'lumotlar (sozlamalar, hisob-kitoblar tarixi, reklamasiz muddat) o'chib ketadi. Xarid do'kon hisobingizga bog'langan va qayta o'rnatishdan keyin tiklanadi."
                : "При удалении приложения все данные, хранящиеся на устройстве (настройки, история расчётов, срок без рекламы), удаляются. Покупка привязана к вашей учётной записи в магазине и восстанавливается после переустановки."}
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {isUz ? "11. Bog'lanish" : "11. Контакты"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {isUz
              ? "Maxfiylik siyosati bo'yicha savollar bo'lsa, info@calk.uz manzilga yozing yoki Telegram @calkuz_bot orqali murojaat qiling."
              : "По вопросам, связанным с политикой конфиденциальности, пишите на info@calk.uz или обращайтесь через Telegram @calkuz_bot."}
          </p>
        </section>
      </div>
    </div>
  )
}
