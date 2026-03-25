import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import {
  ShieldCheck,
  BookOpen,
  RefreshCw,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("methodology_title"),
    description: t("methodology_description"),
    alternates: {
      canonical: `/${locale}/methodology`,
      languages: {
        ru: "/ru/methodology",
        uz: "/uz/methodology",
        "x-default": "/ru/methodology",
      },
    },
    other: {
      "article:modified_time": "2026-03-25T00:00:00+05:00",
    },
  }
}

const RATE_SOURCES = [
  { key: "methodology_rates_source_lex", url: "https://lex.uz" },
  { key: "methodology_rates_source_cbu", url: "https://cbu.uz" },
  { key: "methodology_rates_source_soliq", url: "https://soliq.uz" },
  { key: "methodology_rates_source_gazeta", url: "https://gazeta.uz" },
] as const

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  const isUz = locale === "uz"

  const methodologySchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t("methodology_title"),
      description: t("methodology_description"),
      url: `https://calk.uz/${locale}/methodology`,
      datePublished: "2025-01-01T00:00:00+05:00",
      dateModified: "2026-03-25T00:00:00+05:00",
      author: { "@type": "Organization", name: "Calk.UZ", url: "https://calk.uz" },
      publisher: { "@type": "Organization", name: "Calk.UZ", url: "https://calk.uz" },
      inLanguage: isUz ? "uz" : "ru",
      mainEntityOfPage: `https://calk.uz/${locale}/methodology`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("breadcrumb_home"), item: `https://calk.uz/${locale}` },
        { "@type": "ListItem", position: 2, name: t("methodology_title"), item: `https://calk.uz/${locale}/methodology` },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
      />
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/25 mb-6">
          <ShieldCheck className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t("methodology_title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("methodology_description")}
        </p>
      </div>

      {/* Intro */}
      <section className="mb-12">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("methodology_intro_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("methodology_intro_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("methodology_intro_p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulas */}
      <section className="mb-12">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
              <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("methodology_formulas_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("methodology_formulas_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("methodology_formulas_p2")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                {t("methodology_formulas_p3")}
              </p>

              {/* Formula examples */}
              <h3 className="text-base font-semibold text-foreground mb-3">
                {isUz ? "Formulalar misollari" : "Примеры формул"}
              </h3>
              <div className="space-y-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {isUz ? "JShShS (NDFL)" : "НДФЛ"}
                  </p>
                  <p className="text-sm font-mono text-foreground">
                    {isUz ? "Soliq = Daromad × Stavka (12%)" : "Налог = Доход × Ставка (12%)"}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {isUz ? "Annuitet kredit to'lovi" : "Аннуитетный платёж по кредиту"}
                  </p>
                  <p className="text-sm font-mono text-foreground">
                    P = S × [r(1+r)^n] / [(1+r)^n - 1]
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {isUz ? "Omonat foiz daromadi" : "Доход по вкладу"}
                  </p>
                  <p className="text-sm font-mono text-foreground">
                    {isUz ? "Daromad = Summa × (Stavka / 12) × Oylar" : "Доход = Сумма × (Ставка / 12) × Месяцы"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Updates */}
      <section className="mb-12">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <RefreshCw className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("methodology_rates_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("methodology_rates_p1")}
              </p>
            </div>
          </div>
          <div className="space-y-3 ml-14">
            {RATE_SOURCES.map((source) => (
              <a
                key={source.key}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30 group"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <p className="text-sm font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors">
                  {t(source.key)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Update frequency by type */}
      <section className="mb-12">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
              <Clock className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {isUz ? "Kalkulyator turlariga ko'ra yangilanish chastotasi" : "Частота обновлений по типам калькуляторов"}
              </h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">
                        {isUz ? "Kalkulyator turi" : "Тип калькулятора"}
                      </th>
                      <th className="text-left py-2 font-semibold text-foreground">
                        {isUz ? "Yangilanish chastotasi" : "Частота обновления"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2.5 pr-4">{isUz ? "Soliq kalkulyatorlari" : "Налоговые калькуляторы"}</td>
                      <td className="py-2.5">{isUz ? "Yiliga 1 marta (yanvar) yoki qonun o'zgarganda" : "1 раз в год (январь) или при изменении НК"}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2.5 pr-4">{isUz ? "Valyuta kalkulyatorlari" : "Валютные калькуляторы"}</td>
                      <td className="py-2.5">{isUz ? "Har kuni (Markaziy bank kurslari)" : "Ежедневно (курсы ЦБ РУз)"}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2.5 pr-4">{isUz ? "Kredit va omonat" : "Кредиты и вклады"}</td>
                      <td className="py-2.5">{isUz ? "Har chorakda yoki qayta moliyalash stavkasi o'zgarganda" : "Ежеквартально или при изменении ставки рефинансирования"}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2.5 pr-4">{isUz ? "Kommunal xizmatlar" : "Коммунальные услуги"}</td>
                      <td className="py-2.5">{isUz ? "Tariflar o'zgarganda (odatda yiliga 1-2 marta)" : "При изменении тарифов (обычно 1-2 раза в год)"}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">{isUz ? "Ish haqi kalkulyatorlari" : "Зарплатные калькуляторы"}</td>
                      <td className="py-2.5">{isUz ? "Har chorakda (minimal ish haqi va ajratmalar)" : "Ежеквартально (МРОТ и отчисления)"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="mb-12">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("methodology_verification_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("methodology_verification_p1")}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {isUz ? "Tekshirish bosqichlari" : "Этапы проверки"}
              </h3>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-2 mb-4">
                <li>
                  {isUz
                    ? "Formulani rasmiy manba (Soliq kodeksi, Markaziy bank) bilan solishtirish"
                    : "Сверка формулы с официальным источником (НК, ЦБ)"}
                </li>
                <li>
                  {isUz
                    ? "Natijalarni rasmiy kalkulyatorlar yoki misollardagi ma'lumotlar bilan taqqoslash"
                    : "Сравнение результатов с данными из официальных калькуляторов или примеров"}
                </li>
                <li>
                  {isUz
                    ? "Chegaraviy holatlarni tekshirish (nol qiymatlar, maksimal summalar)"
                    : "Проверка граничных случаев (нулевые значения, максимальные суммы)"}
                </li>
                <li>
                  {isUz
                    ? "Nashr etishdan oldin ko'p bosqichli tekshiruv"
                    : "Многоэтапная проверка перед публикацией"}
                </li>
              </ol>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {t("methodology_verification_date")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for corrections */}
      <section>
        <div className="rounded-2xl border border-border bg-amber-50 dark:bg-amber-950/20 p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("methodology_contact_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("methodology_contact_p1")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
