import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { CALCULATORS } from "@/lib/data/calculators"
import { CATEGORIES, CATEGORY_IDS } from "@/lib/data/categories"
import { CATEGORY_DESCRIPTIONS } from "@/lib/data/category-descriptions"
import { getSlugByLocale } from "@/lib/data/calculator-slugs"
import type { CategoryId } from "@/lib/types/calculator"
import { ChevronRight, Home, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/calculator/DynamicIcon"

const BASE_URL = "https://calk.uz"
const LOCALES = ["ru", "uz"]

export function generateStaticParams() {
  const params: { locale: string; id: string }[] = []
  for (const locale of LOCALES) {
    for (const id of CATEGORY_IDS) {
      params.push({ locale, id })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params

  if (!CATEGORIES[id as CategoryId]) {
    return { title: "404" }
  }

  const catId = id as CategoryId
  const desc = CATEGORY_DESCRIPTIONS[catId]

  const title = locale === "uz" ? desc.seoTitleUz : desc.seoTitleRu
  const description = locale === "uz" ? desc.seoDescriptionUz : desc.seoDescriptionRu
  const canonicalUrl = `${BASE_URL}/${locale}/category/${catId}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ru: `${BASE_URL}/ru/category/${catId}`,
        uz: `${BASE_URL}/uz/category/${catId}`,
        "x-default": `${BASE_URL}/ru/category/${catId}`,
      },
    },
    openGraph: {
      title: `${title} | Calk.UZ`,
      description,
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : "ru_RU",
      alternateLocale: locale === "uz" ? "ru_RU" : "uz_UZ",
      url: canonicalUrl,
      siteName: "Calk.UZ",
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const catId = id as CategoryId
  const category = CATEGORIES[catId]
  if (!category) {
    notFound()
  }

  const desc = CATEGORY_DESCRIPTIONS[catId]
  const categoryName = locale === "uz" ? category.nameUz : category.nameRu
  const categoryTitle = locale === "uz" ? desc.titleUz : desc.titleRu
  const categoryDescription = locale === "uz" ? desc.descriptionUz : desc.descriptionRu

  const calculators = CALCULATORS.filter((c) => c.category === catId).sort(
    (a, b) => a.priority - b.priority
  )

  // Other categories for navigation
  const otherCategories = CATEGORY_IDS.filter((c) => c !== catId)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("breadcrumb_home"),
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${BASE_URL}/${locale}/category/${catId}`,
      },
    ],
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: categoryTitle,
    description: locale === "uz" ? desc.seoDescriptionUz : desc.seoDescriptionRu,
    url: `${BASE_URL}/${locale}/category/${catId}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Calk.UZ",
      url: BASE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: calculators.length,
      itemListElement: calculators.map((calc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: locale === "uz" ? calc.titleUz : calc.titleRu,
        url: `${BASE_URL}/${locale}/calculator/${getSlugByLocale(calc.slug, locale)}`,
      })),
    },
  }

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, collectionSchema]),
        }}
      />

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
            <span className="text-foreground font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}
            >
              <DynamicIcon
                name={category.icon}
                className={`h-7 w-7 ${category.iconColor}`}
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {categoryTitle}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {t("category_calculators_count", { count: calculators.length })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {calculators.map((calc) => {
                const calcTitle = locale === "uz" ? calc.titleUz : calc.titleRu
                const calcDescription = locale === "uz" ? calc.descriptionUz : calc.descriptionRu
                const localizedSlug = getSlugByLocale(calc.slug, locale)
                return (
                  <Link
                    key={calc.slug}
                    href={`/calculator/${localizedSlug}`}
                    className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${category.color}`}
                      >
                        <DynamicIcon
                          name={calc.icon}
                          className={`h-5 w-5 ${category.iconColor}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {calcTitle}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {calcDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2 group-hover:gap-1.5 transition-all">
                          {t("category_open_calculator")}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Category Description */}
            <div className="mt-10">
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
                <p className="leading-relaxed">{categoryDescription}</p>
              </div>
            </div>
          </div>

          {/* Sidebar — Other Categories */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">
                {t("all_categories")}
              </h3>
              <div className="space-y-2">
                {otherCategories.map((otherId) => {
                  const otherCat = CATEGORIES[otherId]
                  const otherName = locale === "uz" ? otherCat.nameUz : otherCat.nameRu
                  const otherCount = CALCULATORS.filter((c) => c.category === otherId).length
                  return (
                    <Link
                      key={otherId}
                      href={`/category/${otherId}`}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-accent transition-colors"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${otherCat.color}`}
                      >
                        <DynamicIcon
                          name={otherCat.icon}
                          className={`h-4 w-4 ${otherCat.iconColor}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                          {otherName}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {otherCount}
                      </Badge>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
