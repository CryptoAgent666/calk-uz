import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Sparkles, CheckCircle2 } from "lucide-react"

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
      ? "Calk.UZ yangilanishlari — kalkulyatorlar, stavkalar va tariflardagi oʼzgarishlar jurnali."
      : "Обновления Calk.UZ — журнал изменений в калькуляторах, ставках и тарифах.",
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

type Severity = "critical" | "high" | "medium" | "low"

interface UpdateItem {
  titleRu: string
  titleUz: string
  descRu: string
  descUz: string
  severity: Severity
}

interface UpdateBlock {
  date: string // ISO date
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
        severity: "critical",
        titleRu: "Закят: цена золота обновлена до рыночной (апр 2026)",
        titleUz: "Zakat: oltin narxi bozor narxiga yangilandi (apr 2026)",
        descRu:
          "Дефолт цены грамма золота поднят с 950 000 до 1 900 000 сум — это реальная стоимость на 17 апреля 2026. Нисаб теперь рассчитывается корректно (85 г × 1 900 000 ≈ 161,5 млн сум).",
        descUz:
          "Gram oltin uchun standart narx 950 000 dan 1 900 000 so‘mga oshirildi — bu 17-aprel 2026 dagi haqiqiy narx. Nisob endi to‘g‘ri hisoblanadi (85 g × 1 900 000 ≈ 161,5 mln so‘m).",
      },
      {
        severity: "critical",
        titleRu: "Фитр-садака: официальные суммы от Управления мусульман Узбекистана",
        titleUz: "Fitr-sadaqa: O‘zbekiston musulmonlari idorasining rasmiy raqamlari",
        descRu:
          "Добавлены все 6 официальных вариантов на Рамадан-2026: пшеница 10 000 / мука 12 000 / ячмень 20 000 / рис / изюм 110 000 / финики 200 000 сум на человека. Цена автоматически подставляется при выборе продукта.",
        descUz:
          "Ramazon-2026 uchun barcha 6 rasmiy variant qo‘shildi: bug‘doy 10 000 / un 12 000 / arpa 20 000 / guruch / mayiz 110 000 / xurmo 200 000 so‘m kishi boshiga. Mahsulot tanlanganda narx avtomatik to‘ldiriladi.",
      },
      {
        severity: "critical",
        titleRu: "Больничный и декретный: новая методика ФГСС с 01.01.2026",
        titleUz: "Kasallik varaqasi va dekret: DIS jamg‘armasining 01.01.2026 dan yangi metodikasi",
        descRu:
          "Калькуляторы переведены на новую систему (ПКМ №796 от 17.12.2025). Расчёт теперь по страховому стажу (месяцы), а не по общему стажу (годы). Больничный: мин. 6 мес. стажа. Декрет: мин. 10 мес. Платит Фонд государственного социального страхования напрямую.",
        descUz:
          "Kalkulyatorlar yangi tizimga o‘tkazildi (17.12.2025-dagi VMQ №796). Hisob-kitob endi sug‘urta staji bo‘yicha (oylar), umumiy staj emas. Kasallik varaqasi: min. 6 oy staj. Dekret: min. 10 oy. DIS jamg‘armasi to‘g‘ridan-to‘g‘ri to‘laydi.",
      },
      {
        severity: "critical",
        titleRu: "Пенсия: возраст женщин исправлен на 55 лет",
        titleUz: "Pensiya: ayollarning yoshi 55 yilga tuzatildi",
        descRu:
          "По закону пенсионный возраст для женщин — 55 лет (54 года при стаже от 20 лет). Раньше калькулятор показывал 57. Мужчины — без изменений, 60 лет.",
        descUz:
          "Qonun bo‘yicha ayollarning pensiya yoshi — 55 yil (20+ yillik staj bilan 54 yil). Ilgari kalkulyator 57 ko‘rsatgan. Erkaklar — o‘zgarishsiz, 60 yil.",
      },
      {
        severity: "high",
        titleRu: "Топливо: цены на апрель 2026, убран AI-91",
        titleUz: "Yoqilg‘i: 2026-yil aprel narxlari, AI-91 olib tashlandi",
        descRu:
          "AI-92 11 200 · AI-95 13 500 · AI-100 16 000 · дизель 12 500 · метан 5 350 · пропан 5 500. AI-91 удалён (больше не продаётся). AI-98 заменён на AI-100.",
        descUz:
          "AI-92 11 200 · AI-95 13 500 · AI-100 16 000 · dizel 12 500 · metan 5 350 · propan 5 500. AI-91 olib tashlandi (endi sotilmaydi). AI-98 o‘rniga AI-100.",
      },
      {
        severity: "medium",
        titleRu: "Ставки банков приведены к реальному рынку (апр 2026)",
        titleUz: "Banklarning stavkalari real bozorga moslashtirildi (apr 2026)",
        descRu:
          "Депозиты UZS 18–22,5% (раньше 22–26%), кредиты 22–28%, ипотека 17–23%. Частные банки: AVO до 22,5%, TBC/Orient/Trust ≈ 21%. Госбанки: 18–19%.",
        descUz:
          "UZS omonatlar 18–22,5% (ilgari 22–26%), kreditlar 22–28%, ipoteka 17–23%. Xususiy banklar: AVO 22,5% gacha, TBC/Orient/Trust ≈ 21%. Davlat banklari: 18–19%.",
      },
      {
        severity: "medium",
        titleRu: "Канализация: обновлён тариф на реальный (1 456 сум/м³)",
        titleUz: "Kanalizatsiya: tarif real qiymatga yangilandi (1 456 so‘m/m³)",
        descRu:
          "Раньше было 2 182 сум/м³ — завышено. Актуальный тариф для Ташкентской области с 01.07.2025 — 1 456 сум/м³ с НДС.",
        descUz:
          "Ilgari 2 182 so‘m/m³ edi — oshirilgan. Toshkent viloyati uchun 01.07.2025 dan amaldagi tarif — 1 456 so‘m/m³ QQS bilan.",
      },
    ],
  },
  {
    date: "2026-04-17",
    dateLabelRu: "17 апреля 2026",
    dateLabelUz: "2026-yil 17-aprel",
    items: [
      {
        severity: "high",
        titleRu: "Соответствие Google AdSense",
        titleUz: "Google AdSense talablariga muvofiqlik",
        descRu:
          "Реальный ID издателя в ads.txt, раскрытие про DART cookie и COPPA в Политике, раздел о рекламе в Условиях, блок «Основатель» (Константин Яковлев) + Person schema.org.",
        descUz:
          "ads.txt da haqiqiy nashriyot ID si, DART cookie va COPPA haqida ma‘lumot Maxfiylik siyosatida, Shartlarda reklama bo‘limi, «Asoschi» bloki (Konstantin Yakovlev) + Person schema.org.",
      },
    ],
  },
  {
    date: "2026-04-16",
    dateLabelRu: "16 апреля 2026",
    dateLabelUz: "2026-yil 16-aprel",
    items: [
      {
        severity: "high",
        titleRu: "Массовый аудит калькуляторов + живые курсы ЦБ",
        titleUz: "Kalkulyatorlarning ommaviy auditi + Markaziy bank jonli kurslari",
        descRu:
          "ОСАГО на тарифы 2026 (по регионам, лимит 80 млн), порог НДС 1 млрд UZS, 5 валютных калькуляторов на живые курсы CBU, сверхурочные 1,5×/2×, декретные — календарные дни, централизация БРВ.",
        descUz:
          "OSAGO 2026 tariflari (hududlar bo‘yicha, limit 80 mln), QQS chegarasi 1 mlrd UZS, 5 valyuta kalkulyatori CBU jonli kurslarida, ishdan tashqari 1,5×/2×, dekret — kalendar kunlar, BHM markazlashtirildi.",
      },
      {
        severity: "medium",
        titleRu: "Кнопка Google Play в футере",
        titleUz: "Footerda Google Play tugmasi",
        descRu: "Добавлена ссылка на мобильное приложение в Google Play.",
        descUz: "Google Play-dagi mobil ilovaga havola qo‘shildi.",
      },
    ],
  },
]

const SEVERITY_STYLES: Record<Severity, { label: string; labelUz: string; bg: string; text: string; ring: string }> = {
  critical: {
    label: "Критично",
    labelUz: "Muhim",
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-300",
    ring: "ring-red-500/20",
  },
  high: {
    label: "Важно",
    labelUz: "Yuqori",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    ring: "ring-amber-500/20",
  },
  medium: {
    label: "Заметно",
    labelUz: "O‘rta",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-blue-500/20",
  },
  low: {
    label: "Мелкое",
    labelUz: "Kichik",
    bg: "bg-muted",
    text: "text-muted-foreground",
    ring: "ring-border",
  },
}

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
    datePublished: "2026-04-16",
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
            ? "Kalkulyatorlar, stavkalar, tariflar va sayt funksiyalaridagi oʼzgarishlar jurnali. Qisqa va sanalari bilan."
            : "Журнал изменений в калькуляторах, ставках, тарифах и функциях сайта. Кратко и с датами."}
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {UPDATES.map((block) => (
          <section key={block.date}>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                {isUz ? block.dateLabelUz : block.dateLabelRu}
              </h2>
            </div>
            <div className="space-y-3 pl-11">
              {block.items.map((item, i) => {
                const style = SEVERITY_STYLES[item.severity]
                return (
                  <article
                    key={i}
                    className={`rounded-xl border border-border bg-card p-5 ring-1 ${style.ring}`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${style.bg} ${style.text}`}
                      >
                        {isUz ? style.labelUz : style.label}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground leading-snug mb-1">
                          {isUz ? item.titleUz : item.titleRu}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isUz ? item.descUz : item.descRu}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-muted-foreground text-center">
        {isUz
          ? "Ilova yoki kalkulyatorda xatolikni topdingizmi? info@calk.uz ga yozing."
          : "Нашли ошибку в калькуляторе или тарифе? Напишите на info@calk.uz."}
      </p>
    </div>
  )
}
