import { getTranslations, getLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Calculator } from "lucide-react"
import { CATEGORIES } from "@/lib/data/categories"
import type { CategoryId } from "@/lib/types/calculator"

const FOOTER_CATEGORIES: CategoryId[] = [
  "tax",
  "salary",
  "credit",
  "deposit",
  "currency",
  "utilities",
  "realestate",
]

export async function Footer() {
  const t = await getTranslations()
  const locale = await getLocale()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/20">
                <Calculator className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-gradient-uzbek">Calk</span>
                <span className="text-muted-foreground">.UZ</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer_description")}
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer_categories")}
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_CATEGORIES.map((catId) => {
                const cat = CATEGORIES[catId]
                const name = locale === "uz" ? cat.nameUz : cat.nameRu
                return (
                  <li key={catId}>
                    <Link
                      href={`/#${catId}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer_quick_links")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#tax"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_tax")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#credit"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_credit")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#salary"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_salary")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#utilities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_utilities")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer_legal")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_terms")}
                </Link>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/70 leading-relaxed pt-2">
              {t("footer_disclaimer")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer_copyright", { year: `2025-${currentYear}` })}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {locale === "uz"
              ? "O'zbekiston aholisi uchun bepul onlayn kalkulyatorlar"
              : "Бесплатные онлайн-калькуляторы для жителей Узбекистана"}
          </p>
        </div>
      </div>
    </footer>
  )
}
