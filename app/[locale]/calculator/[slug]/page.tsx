import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { CALCULATORS, getCalculatorBySlug } from "@/lib/data/calculators"
import { CATEGORIES } from "@/lib/data/categories"
import { CALCULATOR_COMPONENTS } from "@/lib/data/calculator-components"
import type { CategoryId } from "@/lib/types/calculator"
import { ChevronRight, Home, ArrowRight, Calculator } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function CalculatorRenderer({ slug }: { slug: string }) {
  const Component = CALCULATOR_COMPONENTS[slug]

  if (!Component) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Calculator component not found for: {slug}</p>
      </div>
    )
  }

  return <Component />
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    for (const calc of CALCULATORS) {
      params.push({ locale, slug: calc.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const calc = getCalculatorBySlug(slug)

  if (!calc) {
    return { title: "404" }
  }

  const title = locale === "uz" ? calc.titleUz : calc.titleRu
  const description = locale === "uz" ? calc.descriptionUz : calc.descriptionRu

  return {
    title,
    description,
    keywords: calc.keywords,
    openGraph: {
      title: `${title} | Calk.UZ`,
      description,
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : "ru_RU",
    },
  }
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const calc = getCalculatorBySlug(slug)
  if (!calc) {
    notFound()
  }

  const category = CATEGORIES[calc.category]
  const categoryName = locale === "uz" ? category.nameUz : category.nameRu
  const title = locale === "uz" ? calc.titleUz : calc.titleRu
  const description = locale === "uz" ? calc.descriptionUz : calc.descriptionRu

  // Get related calculators (same category, excluding current)
  const relatedCalculators = CALCULATORS.filter(
    (c) => c.category === calc.category && c.slug !== calc.slug
  )
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              {t("breadcrumb_home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/#${calc.category}`}
              className="hover:text-foreground transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {title}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Calculator Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}
                >
                  <Calculator className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    {categoryName}
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* Calculator Component */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <CalculatorRenderer slug={slug} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Related Calculators */}
            {relatedCalculators.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  {locale === "uz" ? "Tegishli kalkulyatorlar" : "Похожие калькуляторы"}
                </h3>
                <div className="space-y-3">
                  {relatedCalculators.map((related) => {
                    const relatedTitle =
                      locale === "uz" ? related.titleUz : related.titleRu
                    return (
                      <Link
                        key={related.slug}
                        href={`/calculator/${related.slug}`}
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${category.color}`}
                        >
                          <Calculator
                            className={`h-4 w-4 ${category.iconColor}`}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                            {relatedTitle}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* SEO Info */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-3">
                {locale === "uz" ? "Kalkulyator haqida" : "О калькуляторе"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
              {calc.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {calc.keywords.slice(0, 6).map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="text-xs"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
