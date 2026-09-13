'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { CalculatorCard } from './CalculatorCard'
import type { CalculatorMeta, Category } from '@/lib/types/calculator'

interface CalculatorGridProps {
  locale: string
  calculators: CalculatorMeta[]
  categories: Category[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
}

export function CalculatorGrid({
  locale,
  calculators,
  categories,
}: CalculatorGridProps) {
  const t = useTranslations()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let result = calculators

    if (activeCategory) {
      result = result.filter((c) => c.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      result = result.filter(
        (c) =>
          c.titleRu.toLowerCase().includes(q) ||
          c.titleUz.toLowerCase().includes(q) ||
          c.descriptionRu.toLowerCase().includes(q) ||
          c.descriptionUz.toLowerCase().includes(q) ||
          c.keywords.some((k) => k.toLowerCase().includes(q))
      )
    }

    return result
  }, [calculators, activeCategory, search])

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('hero_search_placeholder')}
          className="h-10 pl-9 pr-9 rounded-lg"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={cn(
            'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all',
            !activeCategory
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          )}
        >
          {t('category_all')}
        </button>
        {categories.map((cat) => {
          const name = locale === 'uz' ? cat.nameUz : cat.nameRu
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() =>
                setActiveCategory(isActive ? null : cat.id)
              }
              className={cn(
                'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              )}
            >
              {name}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${search}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filtered.map((calc) => (
              <motion.div key={calc.slug} variants={itemVariants}>
                <CalculatorCard
                  slug={calc.slug}
                  titleRu={calc.titleRu}
                  titleUz={calc.titleUz}
                  descriptionRu={calc.descriptionRu}
                  descriptionUz={calc.descriptionUz}
                  category={calc.category}
                  icon={calc.icon}
                  locale={locale}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <Search className="size-12 text-muted-foreground/30 mb-4" />
            <p className="text-lg font-medium text-muted-foreground">
              {t('no_results_title')}
            </p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              {t('no_results_description')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
