'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from './DynamicIcon'
import { CATEGORIES } from '@/lib/data/categories'
import { getSlugByLocale } from '@/lib/data/calculator-slugs'
import type { CategoryId } from '@/lib/types/calculator'

interface CalculatorCardProps {
  slug: string
  titleRu: string
  titleUz: string
  descriptionRu: string
  descriptionUz: string
  category: string
  icon: string
  locale: string
}

export function CalculatorCard({
  slug,
  titleRu,
  titleUz,
  descriptionRu,
  descriptionUz,
  category,
  icon,
  locale,
}: CalculatorCardProps) {
  const title = locale === 'uz' ? titleUz : titleRu
  const description = locale === 'uz' ? descriptionUz : descriptionRu
  const cat = CATEGORIES[category as CategoryId]
  const categoryName = locale === 'uz' ? cat?.nameUz : cat?.nameRu
  const localizedSlug = getSlugByLocale(slug, locale)

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/${locale}/calculator/${localizedSlug}`}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      >
        <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 group cursor-pointer">
          <CardContent className="flex flex-col gap-3 pt-1">
            <div className="flex items-start justify-between gap-2">
              <div
                className={`flex items-center justify-center size-10 rounded-lg ${cat?.color || 'bg-muted'} transition-colors`}
              >
                <DynamicIcon
                  name={icon}
                  className={`size-5 ${cat?.iconColor || 'text-foreground'}`}
                />
              </div>
              <Badge variant="secondary" className="text-[10px] shrink-0">
                {categoryName}
              </Badge>
            </div>

            <div className="space-y-1.5 min-h-0">
              <h3 className="font-heading text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
