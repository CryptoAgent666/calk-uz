import { getTranslations, getLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Calculator, Mail, Send, Smartphone } from "lucide-react"
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
            <div className="space-y-2 pt-2">
              <a
                href="mailto:info@calk.uz"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@calk.uz
              </a>
              <a
                href="https://t.me/calkuz_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="h-4 w-4" />
                Telegram @calkuz_bot
              </a>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=uz.calk.calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Google Play
            </a>
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
                      href={`/category/${catId}`}
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
                  href="/category/tax"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_tax")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/credit"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_credit")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/salary"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_salary")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/utilities"
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
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_methodology")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("contact_title")}
                </Link>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/70 leading-relaxed pt-2">
              {t("footer_disclaimer")}
            </p>
            <p className="text-xs text-muted-foreground/50 leading-relaxed pt-1 font-medium">
              {t("footer_not_government")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer_copyright", { year: `2025-${currentYear}` })}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground/60">
            <p>{t("footer_data_verified")}</p>
            <span className="hidden sm:inline">|</span>
            <p>
              {locale === "uz"
                ? "O'zbekiston aholisi uchun bepul onlayn kalkulyatorlar"
                : "Бесплатные онлайн-калькуляторы для жителей Узбекистана"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
