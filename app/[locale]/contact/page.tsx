import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Mail, Send, MessageCircle, Clock, HelpCircle, AlertCircle, Lightbulb, Users, ChevronDown } from "lucide-react"

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

  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: t("contact_title"),
      description: t("contact_description"),
      url: `https://calk.uz/${locale}/contact`,
      isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: "https://calk.uz" },
      inLanguage: locale === "uz" ? "uz" : "ru",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("breadcrumb_home"), item: `https://calk.uz/${locale}` },
        { "@type": "ListItem", position: 2, name: t("contact_title"), item: `https://calk.uz/${locale}/contact` },
      ],
    },
  ]

  const faqs = [
    { q: t("contact_faq_accuracy_q"), a: t("contact_faq_accuracy_a") },
    { q: t("contact_faq_update_q"), a: t("contact_faq_update_a") },
    { q: t("contact_faq_new_q"), a: t("contact_faq_new_a") },
  ]

  const reasons = [
    { icon: AlertCircle, text: t("contact_when_error") },
    { icon: Lightbulb, text: t("contact_when_suggest") },
    { icon: HelpCircle, text: t("contact_when_question") },
    { icon: Users, text: t("contact_when_cooperation") },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
          href="https://t.me/calkuz_bot"
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
              @calkuz_bot
            </p>
          </div>
        </a>
      </div>

      {/* Response time */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12">
        <Clock className="h-4 w-4" />
        <span>{t("contact_response_time")}</span>
      </div>

      {/* When to contact */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {t("contact_when_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {reason.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {t("contact_faq_title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm font-semibold text-foreground">
                  {faq.q}
                </h3>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 -mt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
