import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import {
  Calculator,
  Globe,
  Smartphone,
  Moon,
  CheckCircle,
  Users,
  Sparkles,
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
      },
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
              <p className="text-muted-foreground leading-relaxed text-base">
                {t("about_mission")}
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

      {/* Team placeholder */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {locale === "uz" ? "Bizning jamoa" : "Наша команда"}
        </h2>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-muted mb-4">
            <Users className="h-7 w-7 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm">
            {locale === "uz"
              ? "Jamoa haqida ma'lumot tez orada qo'shiladi."
              : "Информация о команде скоро появится."}
          </p>
        </div>
      </section>
    </div>
  )
}
