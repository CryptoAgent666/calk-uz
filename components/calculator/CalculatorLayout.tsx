'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ChevronRight, Home } from 'lucide-react'
import { CALCULATORS } from '@/lib/data/calculators'
import { CATEGORIES } from '@/lib/data/categories'
import { RelatedCalculators } from './RelatedCalculators'
import type { CategoryId } from '@/lib/types/calculator'

interface CalculatorLayoutProps {
  slug: string
  children: React.ReactNode
  locale: string
}

export function CalculatorLayout({
  slug,
  children,
  locale,
}: CalculatorLayoutProps) {
  const t = useTranslations()

  const calculator = CALCULATORS.find((c) => c.slug === slug)
  if (!calculator) return null

  const category = CATEGORIES[calculator.category as CategoryId]
  const title = locale === 'uz' ? calculator.titleUz : calculator.titleRu
  const description =
    locale === 'uz' ? calculator.descriptionUz : calculator.descriptionRu
  const categoryName =
    locale === 'uz' ? category?.nameUz : category?.nameRu

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description,
    url: `https://calk.uz/${locale}/calculator/${slug}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'UZS',
    },
    inLanguage: locale === 'uz' ? 'uz-Latn' : 'ru',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 overflow-x-auto"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-foreground transition-colors shrink-0"
          >
            <Home className="size-3.5" />
            <span>{t('breadcrumb_home')}</span>
          </Link>
          <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/50" />
          <span className="shrink-0">{categoryName}</span>
          <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/50" />
          <span className="text-foreground font-medium truncate">
            {title}
          </span>
        </nav>

        {/* Title & Description */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
            {title}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        </header>

        {/* Calculator Content */}
        <main>{children}</main>

        {/* Related Calculators */}
        <RelatedCalculators
          currentSlug={slug}
          category={calculator.category}
          locale={locale}
        />
      </div>
    </>
  )
}
