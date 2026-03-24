"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import { Link, useRouter, usePathname } from "@/i18n/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calculator,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
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
  Moon as MoonIcon,
  Wrench,
  Star,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { CATEGORIES } from "@/lib/data/categories"
import type { CategoryId } from "@/lib/types/calculator"

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
  religion: MoonIcon,
  tools: Wrench,
  unique: Star,
}

const NAV_CATEGORIES: CategoryId[] = [
  "tax",
  "salary",
  "credit",
  "deposit",
  "currency",
  "auto",
  "utilities",
  "realestate",
]

const MORE_CATEGORIES: CategoryId[] = [
  "business",
  "health",
  "education",
  "religion",
  "tools",
  "unique",
]

export function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as "ru" | "uz" })
  }

  const getCategoryName = (id: CategoryId) => {
    const cat = CATEGORIES[id]
    return locale === "uz" ? cat.nameUz : cat.nameRu
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
              <Calculator className="h-5 w-5 text-white" />
              <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-amber-400 border-2 border-background" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-uzbek">Calk</span>
              <span className="text-muted-foreground">.UZ</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_CATEGORIES.map((catId) => {
              const Icon = CATEGORY_ICONS[catId]
              return (
                <Link
                  key={catId}
                  href={`/#${catId}`}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground rounded-lg hover:text-foreground hover:bg-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden xl:inline">{getCategoryName(catId)}</span>
                </Link>
              )
            })}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("more")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-lg hover:text-foreground hover:bg-accent transition-colors">
                <span>{locale === "uz" ? "Yana" : "Ещё"}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${openDropdown === "more" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === "more" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-56 rounded-xl border border-border bg-popover p-2 shadow-xl shadow-black/10"
                  >
                    {MORE_CATEGORIES.map((catId) => {
                      const Icon = CATEGORY_ICONS[catId]
                      return (
                        <Link
                          key={catId}
                          href={`/#${catId}`}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg hover:bg-accent transition-colors"
                        >
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${CATEGORIES[catId].color}`}
                          >
                            <Icon className={`h-4 w-4 ${CATEGORIES[catId].iconColor}`} />
                          </div>
                          <span className="font-medium">{getCategoryName(catId)}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side: lang + theme + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
              <button
                onClick={() => switchLocale("ru")}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  locale === "ru"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => switchLocale("uz")}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  locale === "uz"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UZ
              </button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={mounted && theme === "dark" ? t("theme_light") : t("theme_dark")}
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetTitle className="sr-only">
                  {locale === "uz" ? "Navigatsiya menyusi" : "Навигация"}
                </SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700">
                        <Calculator className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-bold">
                        <span className="text-gradient-uzbek">Calk</span>
                        <span className="text-muted-foreground">.UZ</span>
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Nav */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    <Link
                      href="/"
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium hover:bg-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Globe className="h-5 w-5 text-emerald-600" />
                      {t("nav_home")}
                    </Link>

                    <div className="pt-2 pb-1 px-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t("footer_categories")}
                      </p>
                    </div>

                    {(Object.keys(CATEGORIES) as CategoryId[]).map((catId) => {
                      const Icon = CATEGORY_ICONS[catId]
                      return (
                        <Link
                          key={catId}
                          href={`/#${catId}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${CATEGORIES[catId].color}`}
                          >
                            <Icon className={`h-4 w-4 ${CATEGORIES[catId].iconColor}`} />
                          </div>
                          {getCategoryName(catId)}
                        </Link>
                      )
                    })}
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
                        <button
                          onClick={() => switchLocale("ru")}
                          className={`flex-1 px-3 py-2 text-sm font-semibold rounded-md transition-all ${
                            locale === "ru"
                              ? "bg-background text-foreground shadow-sm"
                              : "text-muted-foreground"
                          }`}
                        >
                          {t("language_ru")}
                        </button>
                        <button
                          onClick={() => switchLocale("uz")}
                          className={`flex-1 px-3 py-2 text-sm font-semibold rounded-md transition-all ${
                            locale === "uz"
                              ? "bg-background text-foreground shadow-sm"
                              : "text-muted-foreground"
                          }`}
                        >
                          {t("language_uz")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
