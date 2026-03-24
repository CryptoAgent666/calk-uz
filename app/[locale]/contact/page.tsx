import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Mail, Send, MessageCircle } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("contact_title"),
    description: t("contact_description"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        ru: "/ru/contact",
        uz: "/uz/contact",
        "x-default": "/ru/contact",
      },
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-6">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t("contact_title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {t("contact_feedback")}
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <a
          href="mailto:info@calk.uz"
          className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 transition-transform group-hover:scale-110">
            <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground mb-1">
              {t("contact_email")}
            </h2>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              info@calk.uz
            </p>
          </div>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/calkuz"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30 transition-transform group-hover:scale-110">
            <Send className="h-6 w-6 text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground mb-1">
              {t("contact_telegram")}
            </h2>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              @calkuz
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
