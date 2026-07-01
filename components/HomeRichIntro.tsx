import { getTranslations, getLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import {
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
  Sparkles,
  ShieldCheck,
  Calendar,
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react"
import { CALCULATORS } from "@/lib/data/calculators"
import { CATEGORIES } from "@/lib/data/categories"
import { getSlugByLocale } from "@/lib/data/calculator-slugs"
import { getCalculatorArticle } from "@/lib/data/calculator-articles"
import { getAuthorBySlug, PRIMARY_AUTHOR_SLUG } from "@/lib/data/authors"
import { UPDATES } from "@/lib/data/updates"
import type { CategoryId, CalculatorMeta } from "@/lib/types/calculator"

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

// Featured calculators — manually curated (top of search/business value)
const FEATURED_SLUGS = [
  "income-tax",
  "salary",
  "credit",
  "mortgage",
  "currency-converter",
  "vat",
  "deposit",
  "utilities-total",
] as const

export async function HomeRichIntro() {
  const t = await getTranslations()
  const locale = await getLocale()
  const isUz = locale === "uz"
  const author = getAuthorBySlug(PRIMARY_AUTHOR_SLUG)

  // Resolve featured calculators to metadata + recent update dates
  const featured = FEATURED_SLUGS.map((slug) => {
    const calc = CALCULATORS.find((c) => c.slug === slug)
    if (!calc) return null
    const article = getCalculatorArticle(slug)
    return { calc, article }
  }).filter((x): x is { calc: CalculatorMeta; article: ReturnType<typeof getCalculatorArticle> } => x !== null)

  // "What's recently updated" — pulled from the same source as /updates page.
  // We take items from the most recent date block, up to 4 entries.
  const latestBlock = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date))[0]
  const recentItems = latestBlock?.items.slice(0, 4) ?? []
  const latestDateLabel = latestBlock
    ? (isUz ? latestBlock.dateLabelUz : latestBlock.dateLabelRu)
    : ""

  return (
    <>
      {/* Intro / value proposition */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              {t("home_intro_title")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
              {t("home_intro_p1")}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("home_intro_p2")}
            </p>

            {/* Trust signals */}
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {[
                {
                  icon: ShieldCheck,
                  textRu: "Формулы из Налогового и Трудового кодексов РУз",
                  textUz: "O'zbekiston Soliq va Mehnat kodekslaridan formulalar",
                },
                {
                  icon: Calendar,
                  textRu: "Обновляется ежеквартально и при выходе новых актов",
                  textUz: "Har chorakda va yangi hujjatlar chiqqanda yangilanadi",
                },
                {
                  icon: TrendingUp,
                  textRu: "Курсы валют — прямой импорт с cbu.uz",
                  textUz: "Valyuta kurslari — to'g'ridan-to'g'ri cbu.uz dan",
                },
                {
                  icon: BookOpen,
                  textRu: "78 калькуляторов с подробными статьями и примерами",
                  textUz: "Batafsil maqolalar va misollar bilan 78 kalkulyator",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {isUz ? item.textUz : item.textRu}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Author / authority card */}
          {author && (
            <Link
              href={`/author/${author.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-14 w-14 shrink-0 rounded-xl overflow-hidden ring-2 ring-emerald-500/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={author.imagePath}
                    alt={author.alternateName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                    <Award className="h-3 w-3 text-emerald-600" />
                    {isUz ? "Loyiha asoschisi" : "Основатель проекта"}
                  </p>
                  <p className="font-semibold text-foreground text-sm truncate">
                    {author.alternateName}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                {isUz ? author.shortBioUz : author.shortBioRu}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 group-hover:gap-1.5 transition-all">
                {isUz ? "Profilni ko'rish" : "Открыть профиль"}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Featured calculators — server-rendered */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                {isUz ? "Eng ko'p so'raladigan" : "Самые востребованные"}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {isUz ? "Tavsiya etamiz boshlash uchun" : "Рекомендуем начать с этих"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {featured.map(({ calc, article }) => {
            const cat = CATEGORIES[calc.category]
            const CatIcon = CATEGORY_ICONS[calc.category]
            const localizedSlug = getSlugByLocale(calc.slug, locale)
            const title = isUz ? calc.titleUz : calc.titleRu
            return (
              <Link
                key={calc.slug}
                href={`/calculator/${localizedSlug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:border-emerald-500/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.color} mb-3`}
                >
                  <CatIcon className={`h-5 w-5 ${cat.iconColor}`} />
                </div>
                <h3 className="font-semibold text-sm text-foreground leading-tight group-hover:text-primary transition-colors mb-1">
                  {title}
                </h3>
                {article?.lastUpdated && (
                  <span className="text-[10px] text-muted-foreground/80 mt-auto pt-2 inline-flex items-center gap-1">
                    <Calendar className="h-2.5 w-2.5" />
                    {article.lastUpdated}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </section>

      {/* What's new / recently updated — synced with /updates page */}
      {recentItems.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/updates"
            className="block rounded-2xl border border-border bg-gradient-to-br from-emerald-50/40 to-transparent dark:from-emerald-950/20 dark:to-transparent p-6 sm:p-8 transition-all hover:border-emerald-500/30"
          >
            <div className="flex items-end justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {latestDateLabel}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {isUz ? "So'nggi yangilanishlar" : "Что недавно обновили"}
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {isUz ? "Barchasi" : "Все обновления"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>

            <ul className="space-y-3">
              {recentItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm leading-snug mb-0.5">
                      {isUz ? item.titleUz : item.titleRu}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {isUz ? item.descUz : item.descRu}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Link>
        </section>
      )}

      {/* How we calculate */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          {isUz ? "Biz qanday hisoblaymiz" : "Как мы считаем"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              titleRu: "НДФЛ 12% (Узбекистан, 2026)",
              titleUz: "JShShS 12% (O'zbekiston, 2026)",
              formulaRu: "НДФЛ = Зарплата × 12%",
              formulaUz: "JShShS = Ish haqi × 12%",
              exampleRu: "10 000 000 × 12% = 1 200 000 сум",
              exampleUz: "10 000 000 × 12% = 1 200 000 so'm",
              sourceRu: "Налоговый кодекс РУз, гл. 31",
              sourceUz: "O'zbekiston SK, 31-bob",
            },
            {
              titleRu: "Аннуитетный платёж",
              titleUz: "Annuitet to'lov",
              formulaRu: "P = S × i / (1 − (1 + i)⁻ⁿ)",
              formulaUz: "P = S × i / (1 − (1 + i)⁻ⁿ)",
              exampleRu: "100 млн на 5 лет под 22% → 2 762 354 сум/мес",
              exampleUz: "100 mln 5 yilga 22% → 2 762 354 so'm/oy",
              sourceRu: "Стандарт банковской математики",
              sourceUz: "Bank matematikasi standarti",
            },
            {
              titleRu: "Сложный процент по вкладу",
              titleUz: "Omonatda murakkab foiz",
              formulaRu: "FV = PV × (1 + r/n)^(n·t)",
              formulaUz: "FV = PV × (1 + r/n)^(n·t)",
              exampleRu: "50 млн @ 22% годовых, ежемесячная капитализация → +12,18 млн за год",
              exampleUz: "50 mln @ 22% yillik, oylik kapitalizatsiya → yiliga +12,18 mln",
              sourceRu: "Стандартная формула FV",
              sourceUz: "Standart FV formulasi",
            },
          ].map((card, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground text-sm mb-2">
                {isUz ? card.titleUz : card.titleRu}
              </h3>
              <code className="block font-mono text-xs bg-muted/50 rounded-lg px-3 py-2 mb-2 text-foreground">
                {isUz ? card.formulaUz : card.formulaRu}
              </code>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {isUz ? "Misol: " : "Пример: "}
                {isUz ? card.exampleUz : card.exampleRu}
              </p>
              <p className="text-[10px] text-muted-foreground/70 inline-flex items-center gap-1">
                <BookOpen className="h-2.5 w-2.5" />
                {isUz ? card.sourceUz : card.sourceRu}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:gap-2 transition-all"
          >
            <ShieldCheck className="h-4 w-4" />
            {isUz
              ? "Hisoblash metodologiyasini to'liq o'qish"
              : "Полная методология расчётов"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
