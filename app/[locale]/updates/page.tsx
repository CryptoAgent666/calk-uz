import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Sparkles } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isUz = locale === "uz"
  return {
    title: isUz ? "Yangilanishlar" : "Обновления",
    description: isUz
      ? "Calk.UZ yangilanishlari — kalkulyatorlar, stavkalar va tariflardagi oʼzgarishlar."
      : "Обновления Calk.UZ — что изменилось в калькуляторах, ставках и тарифах.",
    alternates: {
      canonical: `/${locale}/updates`,
      languages: {
        ru: "/ru/updates",
        uz: "/uz/updates",
        "x-default": "/ru/updates",
      },
    },
  }
}

interface UpdateItem {
  titleRu: string
  titleUz: string
  descRu: string
  descUz: string
}

interface UpdateBlock {
  date: string
  dateLabelRu: string
  dateLabelUz: string
  items: UpdateItem[]
}

const UPDATES: UpdateBlock[] = [
  {
    date: "2026-04-18",
    dateLabelRu: "18 апреля 2026",
    dateLabelUz: "2026-yil 18-aprel",
    items: [
      {
        titleRu: "Больничный и декретный — новая формула 2026",
        titleUz: "Kasallik varaqasi va dekret — 2026-ning yangi formulasi",
        descRu:
          "С 1 января 2026 пособия платит Фонд государственного социального страхования. Расчёт теперь по страховому стажу (в месяцах), а не по общему стажу. Больничный — нужно минимум 6 месяцев стажа, декретный — минимум 10 месяцев.",
        descUz:
          "2026-yil 1-yanvardan nafaqalarni Davlat ijtimoiy sug‘urtasi jamg‘armasi to‘laydi. Hisob-kitob sug‘urta staji bo‘yicha (oylarda). Kasallik varaqasi — kamida 6 oy, dekret — kamida 10 oy staj kerak.",
      },
      {
        titleRu: "Пенсия — возраст женщин 55 лет",
        titleUz: "Pensiya — ayollar uchun 55 yosh",
        descRu:
          "Исправлен возраст выхода на пенсию для женщин: 55 лет (54 года при стаже от 20 лет). Для мужчин — 60 лет, без изменений.",
        descUz:
          "Ayollar uchun pensiya yoshi tuzatildi: 55 yil (20+ yillik staj bilan 54 yil). Erkaklar uchun — 60 yil, o‘zgarishsiz.",
      },
      {
        titleRu: "Закят — актуальная цена золота",
        titleUz: "Zakat — oltinning dolzarb narxi",
        descRu:
          "Цена грамма золота по умолчанию поднята до 1 900 000 сум — это рыночная цена на апрель 2026. Нисаб теперь считается корректно.",
        descUz:
          "Gram oltin narxi 1 900 000 so‘mga yangilandi — bu 2026-yil aprelidagi bozor narxi. Nisob endi to‘g‘ri hisoblanadi.",
      },
      {
        titleRu: "Фитр-садака — все 6 вариантов на Рамадан-2026",
        titleUz: "Fitr-sadaqa — Ramazon-2026 uchun 6 ta variant",
        descRu:
          "По данным Управления мусульман Узбекистана: пшеница 10 000, мука 12 000, ячмень 20 000, изюм 110 000, финики 200 000 сум на человека. Цена подставляется автоматически при выборе продукта.",
        descUz:
          "O‘zbekiston musulmonlari idorasi ma‘lumotlariga ko‘ra: bug‘doy 10 000, un 12 000, arpa 20 000, mayiz 110 000, xurmo 200 000 so‘m kishi boshiga. Mahsulot tanlanganda narx avtomatik qo‘yiladi.",
      },
      {
        titleRu: "Цены на топливо — апрель 2026",
        titleUz: "Yoqilg‘i narxlari — 2026-yil aprel",
        descRu:
          "АИ-92 — 11 200, АИ-95 — 13 500, АИ-100 — 16 000, дизель — 12 500, метан — 5 350, пропан — 5 500 сум. AI-91 убран — больше не продаётся.",
        descUz:
          "AI-92 — 11 200, AI-95 — 13 500, AI-100 — 16 000, dizel — 12 500, metan — 5 350, propan — 5 500 so‘m. AI-91 olib tashlandi — endi sotilmaydi.",
      },
      {
        titleRu: "Ставки банков — реальный рынок на апрель 2026",
        titleUz: "Banklar stavkalari — 2026-yil aprel real bozori",
        descRu:
          "Обновлены ставки 16 банков. Вклады в сумах — 18–22,5% годовых, кредиты — 22–28%, ипотека — 17–23%. Частные банки дают чуть больше, государственные — стабильнее.",
        descUz:
          "16 bank stavkalari yangilandi. So‘mdagi omonatlar — yillik 18–22,5%, kreditlar — 22–28%, ipoteka — 17–23%. Xususiy banklar biroz ko‘proq, davlat banklari barqarorroq.",
      },
      {
        titleRu: "Тариф канализации — 1 456 сум/м³",
        titleUz: "Kanalizatsiya tarifi — 1 456 so‘m/m³",
        descRu:
          "Обновлён на актуальный тариф Ташкентской области с июля 2025 (с НДС). Раньше калькулятор считал по устаревшему тарифу 2 182 сум/м³.",
        descUz:
          "2025-yil iyuldan Toshkent viloyati uchun amaldagi tarifga yangilandi (QQS bilan). Ilgari kalkulyator eski 2 182 so‘m/m³ bilan hisoblagan.",
      },
    ],
  },
  {
    date: "2026-04-16",
    dateLabelRu: "16 апреля 2026",
    dateLabelUz: "2026-yil 16-aprel",
    items: [
      {
        titleRu: "ОСАГО — новые тарифы 2026",
        titleUz: "OSAGO — 2026-yil yangi tariflari",
        descRu:
          "С 1 января 2026 ОСАГО подорожало: Ташкент и область — 192 000 сум, другие регионы — 160 000. Лимит страховой выплаты удвоен — до 80 млн сум.",
        descUz:
          "2026-yil 1-yanvardan OSAGO qimmatladi: Toshkent shahri va viloyati — 192 000 so‘m, boshqa hududlar — 160 000. Sug‘urta to‘lovi limiti 80 mln so‘mgacha ikki barobar oshdi.",
      },
      {
        titleRu: "Живые курсы Центрального банка",
        titleUz: "Markaziy bankning jonli valyuta kurslari",
        descRu:
          "Валютные калькуляторы (конвертер, переводы, таможня и др.) теперь подтягивают актуальные курсы USD, EUR, RUB и других валют с сайта ЦБ РУз автоматически.",
        descUz:
          "Valyuta kalkulyatorlari (konverter, pul o‘tkazmalari, bojxona va h.k.) endi USD, EUR, RUB va boshqa valyutalarning dolzarb kurslarini O‘zR MB saytidan avtomatik oladi.",
      },
      {
        titleRu: "Сверхурочные по Трудовому кодексу",
        titleUz: "Mehnat kodeksi bo‘yicha ish vaqtidan tashqari",
        descRu:
          "Калькулятор переработки теперь считает правильно: первые 2 часа — 1,5×, дальше — 2×. В праздники — всегда 2×.",
        descUz:
          "Ish vaqtidan tashqari kalkulyatori endi to‘g‘ri hisoblaydi: birinchi 2 soat — 1,5×, keyin — 2×. Bayram kunlarida — doim 2×.",
      },
      {
        titleRu: "Мобильное приложение в Google Play",
        titleUz: "Google Play’dagi mobil ilova",
        descRu:
          "Теперь Calk.UZ доступен как приложение на Android. Ссылка в футере сайта.",
        descUz:
          "Endi Calk.UZ Android uchun ilova sifatida mavjud. Havola sayt footerida.",
      },
    ],
  },
]

export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  await getTranslations({ locale })
  const isUz = locale === "uz"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isUz ? "Calk.UZ yangilanishlari" : "Обновления Calk.UZ",
    url: `https://calk.uz/${locale}/updates`,
    isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: "https://calk.uz" },
    inLanguage: isUz ? "uz" : "ru",
    dateModified: UPDATES[0].date,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-6">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {isUz ? "Yangilanishlar" : "Обновления"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {isUz
            ? "Kalkulyatorlar, stavkalar va tariflarda nima o‘zgardi — qisqa va sanalari bilan."
            : "Что изменилось в калькуляторах, ставках и тарифах — кратко и по датам."}
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {UPDATES.map((block) => (
          <section key={block.date}>
            <h2 className="text-lg font-semibold text-foreground mb-5 pb-2 border-b border-border">
              {isUz ? block.dateLabelUz : block.dateLabelRu}
            </h2>
            <div className="space-y-3">
              {block.items.map((item, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground leading-snug mb-1.5">
                    {isUz ? item.titleUz : item.titleRu}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isUz ? item.descUz : item.descRu}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-muted-foreground text-center">
        {isUz
          ? "Kalkulyatorda xatolikni topdingizmi? info@calk.uz ga yozing."
          : "Нашли ошибку в калькуляторе? Напишите на info@calk.uz."}
      </p>
    </div>
  )
}
