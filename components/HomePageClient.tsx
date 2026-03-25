"use client"

import { useState, useMemo } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import {
  Search,
  Calculator,
  Receipt,
  Banknote,
  CreditCard,
  PiggyBank,
  ArrowLeftRight,
  Car,
  Zap,
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  Moon,
  Wrench,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CALCULATORS } from "@/lib/data/calculators"
import { CATEGORIES } from "@/lib/data/categories"
import { getSlugByLocale } from "@/lib/data/calculator-slugs"
import { LazyCalculatorCard } from "@/components/calculator/LazyCalculatorCard"
import type { CategoryId, CalculatorMeta } from "@/lib/types/calculator"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Receipt,
  Banknote,
  CreditCard,
  PiggyBank,
  ArrowLeftRight,
  Car,
  Zap,
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  Moon,
  Wrench,
  Star,
  Calculator,
  Sparkles,
}

const CATEGORY_ICONS: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
  tax: Receipt,
  salary: Banknote,
  credit: CreditCard,
  deposit: PiggyBank,
  currency: ArrowLeftRight,
  auto: Car,
  utilities: Zap,
  realestate: Home,
  business: Briefcase,
  health: Heart,
  education: GraduationCap,
  religion: Moon,
  tools: Wrench,
  unique: Star,
}


export default function HomePageClient() {
  const t = useTranslations()
  const locale = useLocale()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredCalculators = useMemo(() => {
    let result: CalculatorMeta[] = [...CALCULATORS]

    if (activeCategory !== "all") {
      result = result.filter((c) => c.category === activeCategory)
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim()
      result = result.filter(
        (c) =>
          c.titleRu.toLowerCase().includes(query) ||
          c.titleUz.toLowerCase().includes(query) ||
          c.descriptionRu.toLowerCase().includes(query) ||
          c.descriptionUz.toLowerCase().includes(query) ||
          c.keywords.some((k) => k.toLowerCase().includes(query))
      )
    }

    return result.sort((a, b) => a.priority - b.priority)
  }, [search, activeCategory])

  const getTitle = (c: CalculatorMeta) => (locale === "uz" ? c.titleUz : c.titleRu)
  const getDescription = (c: CalculatorMeta) => (locale === "uz" ? c.descriptionUz : c.descriptionRu)
  const getCategoryName = (id: string) => {
    if (id === "all") return t("category_all")
    const cat = CATEGORIES[id as CategoryId]
    return locale === "uz" ? cat.nameUz : cat.nameRu
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 dark:from-emerald-900 dark:via-emerald-950 dark:to-teal-950">
        {/* Background pattern */}
        <div className="absolute inset-0 uzbek-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute top-40 right-1/4 h-48 w-48 rounded-full bg-teal-300/10 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium mb-6"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                {locale === "uz" ? "78 ta bepul kalkulyator" : "78 бесплатных калькуляторов"}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              {t("hero_title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed"
            >
              {t("hero_description")}
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/60 group-focus-within:text-emerald-600 transition-colors" />
                <Input
                  type="text"
                  placeholder={t("hero_search_placeholder")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 text-base rounded-2xl bg-background/95 backdrop-blur-sm border-white/20 shadow-xl shadow-black/10 focus:border-emerald-400 focus:ring-emerald-400/20 placeholder:text-muted-foreground/50"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 56V20C240 4 480 0 720 8C960 16 1200 36 1440 20V56H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Intro text for SEO */}
      <section className="relative -mt-2 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("home_intro_title")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              {t("home_intro_p1")}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home_intro_p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative -mt-2 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground border-border hover:bg-accent hover:text-foreground"
              }`}
            >
              <Calculator className="h-4 w-4" />
              {t("category_all")}
              <span className="ml-1 text-xs opacity-70">{CALCULATORS.length}</span>
            </button>

            {(Object.keys(CATEGORIES) as CategoryId[]).map((catId) => {
              const Icon = CATEGORY_ICONS[catId]
              const count = CALCULATORS.filter((c) => c.category === catId).length
              return (
                <button
                  key={catId}
                  onClick={() => setActiveCategory(catId)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    activeCategory === catId
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                      : "bg-card text-muted-foreground border-border hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {getCategoryName(catId)}
                  <span className="ml-1 text-xs opacity-70">{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-8 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {locale === "uz"
                ? `${filteredCalculators.length} ta kalkulyator topildi`
                : `Найдено ${filteredCalculators.length} калькуляторов`}
            </p>
          </div>

          {filteredCalculators.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-4">
                <Search className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {locale === "uz" ? "Hech narsa topilmadi" : "Ничего не найдено"}
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                {locale === "uz"
                  ? "Qidiruv so'rovingizni o'zgartirib ko'ring"
                  : "Попробуйте изменить поисковый запрос"}
              </p>
            </div>
          ) : (
            <div
              key={`${activeCategory}-${search}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredCalculators.map((calc, index) => {
                const cat = CATEGORIES[calc.category]
                const CatIcon = CATEGORY_ICONS[calc.category]
                const localizedSlug = getSlugByLocale(calc.slug, locale)

                return (
                  <LazyCalculatorCard key={calc.slug} index={index}>
                    <Link
                      href={`/calculator/${localizedSlug}`}
                      className="group block h-full"
                    >
                      <div className="relative h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                        {/* Priority indicator */}
                        {calc.priority === 1 && (
                          <div className="absolute top-3 right-3">
                            <div className="h-2 w-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                          </div>
                        )}

                        {/* Icon */}
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${cat.color} dark:bg-opacity-20 mb-4 transition-transform group-hover:scale-110`}
                        >
                          <CatIcon className={`h-5 w-5 ${cat.iconColor}`} />
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-foreground mb-1.5 leading-tight group-hover:text-primary transition-colors">
                          {getTitle(calc)}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                          {getDescription(calc)}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                          <Badge variant="secondary" className="text-xs font-medium">
                            {getCategoryName(calc.category)}
                          </Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  </LazyCalculatorCard>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
