import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import {
  Calculator,
  Globe,
  Smartphone,
  Moon,
  CheckCircle,
  Sparkles,
  BookOpen,
  ShieldCheck,
  ExternalLink,
  BarChart3,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("about_title"),
    description: t("about_description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        ru: "/ru/about",
        uz: "/uz/about",
        "x-default": "/ru/about",
      },
    },
    other: {
      "article:modified_time": "2026-03-24T00:00:00+05:00",
    },
  }
}

const FEATURES_ICONS = [
  Calculator,
  Globe,
  CheckCircle,
  Smartphone,
  Moon,
  Sparkles,
]

const FEATURES_KEYS = [
  "about_feature_calculators",
  "about_feature_bilingual",
  "about_feature_accurate",
  "about_feature_mobile",
  "about_feature_dark",
  "about_feature_free",
] as const

const DATA_SOURCES = [
  { key: "about_source_lex", url: "https://lex.uz", domain: "lex.uz" },
  { key: "about_source_cbu", url: "https://cbu.uz", domain: "cbu.uz" },
  { key: "about_source_soliq", url: "https://soliq.uz", domain: "soliq.uz" },
  { key: "about_source_stat", url: "https://stat.uz", domain: "stat.uz" },
  { key: "about_source_mf", url: "https://mf.uz", domain: "mf.uz" },
] as const

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: t("about_title"),
      description: t("about_description"),
      url: `https://calk.uz/${locale}/about`,
      isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: "https://calk.uz" },
      inLanguage: locale === "uz" ? "uz" : "ru",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("breadcrumb_home"), item: `https://calk.uz/${locale}` },
        { "@type": "ListItem", position: 2, name: t("about_title"), item: `https://calk.uz/${locale}/about` },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-6">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t("about_title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("about_description")}
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {locale === "uz" ? "Bizning maqsadimiz" : "Наша миссия"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("about_mission_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("about_mission_p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {t("about_features_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES_KEYS.map((key, index) => {
            const Icon = FEATURES_ICONS[index]
            return (
              <div
                key={key}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed pt-1.5">
                  {t(key)}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-16">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("about_methodology_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("about_methodology_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("about_methodology_p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="mb-16">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("about_editorial_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("about_editorial_p1")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
              <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("about_team_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t("about_team_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("about_team_p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {t("about_audience_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { key: "about_audience_accountants", icon: Calculator },
            { key: "about_audience_entrepreneurs", icon: Briefcase },
            { key: "about_audience_citizens", icon: User },
            { key: "about_audience_students", icon: GraduationCap },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.key}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed pt-1.5">
                  {t(item.key)}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Data Sources */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {t("about_sources_title")}
        </h2>
        <div className="space-y-3">
          {DATA_SOURCES.map((source) => (
            <a
              key={source.key}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <ExternalLink className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors">
                  {t(source.key)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {t("about_stats_title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { key: "about_stats_calculators", icon: Calculator },
            { key: "about_stats_categories", icon: BarChart3 },
            { key: "about_stats_updates", icon: CheckCircle },
            { key: "about_stats_languages", icon: Globe },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.key}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {t(stat.key)}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
