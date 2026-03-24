import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { CALCULATORS, getCalculatorBySlug } from "@/lib/data/calculators"
import { CATEGORIES } from "@/lib/data/categories"
import { CALCULATOR_COMPONENTS } from "@/lib/data/calculator-components"
import { getCalculatorArticle } from "@/lib/data/calculator-articles"
import type { CategoryId } from "@/lib/types/calculator"
import { ChevronRight, Home, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/calculator/DynamicIcon"
import { ErrorBoundary } from "@/components/calculator/ErrorBoundary"
import { SharePrintButtons } from "@/components/calculator/SharePrintButtons"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const BASE_URL = "https://calk.uz"

function CalculatorRenderer({ slug }: { slug: string }) {
  const Component = CALCULATOR_COMPONENTS[slug]

  if (!Component) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <DynamicIcon name="Calculator" className="h-12 w-12 mx-auto mb-4 opacity-50" />
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
  const canonicalUrl = `${BASE_URL}/${locale}/calculator/${slug}`

  return {
    title,
    description,
    keywords: calc.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ru: `${BASE_URL}/ru/calculator/${slug}`,
        uz: `${BASE_URL}/uz/calculator/${slug}`,
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
    twitter: {
      card: "summary_large_image",
      title: `${title} | Calk.UZ`,
      description,
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

  // Get article data
  const article = getCalculatorArticle(slug)
  const articleParagraphs = article
    ? locale === "uz"
      ? article.paragraphsUz
      : article.paragraphsRu
    : null
  const faqItems = article
    ? article.faq.map((item) => ({
        question: locale === "uz" ? item.questionUz : item.questionRu,
        answer: locale === "uz" ? item.answerUz : item.answerRu,
      }))
    : null

  // Schema.org JSON-LD
  const canonicalUrl = `${BASE_URL}/${locale}/calculator/${slug}`

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    url: canonicalUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "UZS",
    },
    inLanguage: locale === "uz" ? "uz" : "ru",
    publisher: {
      "@type": "Organization",
      name: "Calk.UZ",
      url: BASE_URL,
    },
  }

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
        item: `${BASE_URL}/${locale}#${calc.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  }

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLdArray: Record<string, any>[] = [webApplicationSchema, breadcrumbSchema]
  if (faqSchema) {
    jsonLdArray.push(faqSchema)
  }

  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArray),
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
                  <DynamicIcon
                    name={calc.icon}
                    className={`h-6 w-6 ${category.iconColor}`}
                  />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    {categoryName}
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {title}
                  </h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>
              <div className="mt-3">
                <SharePrintButtons />
              </div>
            </div>

            {/* Calculator Component */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ErrorBoundary locale={locale}>
                <CalculatorRenderer slug={slug} />
              </ErrorBoundary>
            </div>

            {/* SEO Article Section */}
            {articleParagraphs && articleParagraphs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {t("article_heading")}
                </h2>
                <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground space-y-4">
                  {articleParagraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* FAQ Accordion */}
                {faqItems && faqItems.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                      {t("faq_heading")}
                    </h3>
                    <Accordion className="rounded-xl border border-border bg-card px-4">
                      {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left text-foreground">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Related Calculators */}
            {relatedCalculators.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  {t("related_title")}
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
                          <DynamicIcon
                            name={related.icon}
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
                {t("calculator_about")}
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
