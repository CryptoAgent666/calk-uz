import { useTranslations } from 'next-intl'
import { CALCULATORS } from '@/lib/data/calculators'
import { CalculatorCard } from './CalculatorCard'

interface RelatedCalculatorsProps {
  currentSlug: string
  category: string
  locale: string
}

export function RelatedCalculators({
  currentSlug,
  category,
  locale,
}: RelatedCalculatorsProps) {
  const t = useTranslations()
  const related = CALCULATORS.filter(
    (c) => c.category === category && c.slug !== currentSlug
  ).slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-xl font-heading font-semibold mb-6 text-foreground">
        {t('related_calculators')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((calc) => (
          <CalculatorCard
            key={calc.slug}
            slug={calc.slug}
            titleRu={calc.titleRu}
            titleUz={calc.titleUz}
            descriptionRu={calc.descriptionRu}
            descriptionUz={calc.descriptionUz}
            category={calc.category}
            icon={calc.icon}
            locale={locale}
          />
        ))}
      </div>
    </section>
  )
}
