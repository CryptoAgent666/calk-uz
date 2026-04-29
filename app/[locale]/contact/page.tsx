import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import {
  Mail,
  Send,
  MessageCircle,
  Clock,
  HelpCircle,
  AlertCircle,
  Lightbulb,
  Users,
  ChevronDown,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import { getAuthorBySlug, PRIMARY_AUTHOR_SLUG } from "@/lib/data/authors"

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
  const author = getAuthorBySlug(PRIMARY_AUTHOR_SLUG)
  const isUz = locale === "uz"

  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: t("contact_title"),
      description: t("contact_description"),
      url: `https://calk.uz/${locale}/contact`,
      isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: "https://calk.uz" },
      inLanguage: isUz ? "uz" : "ru",
      mainEntity: {
        "@type": "Organization",
        "@id": "https://calk.uz/#organization",
        name: "Calk.UZ",
        email: "info@calk.uz",
        url: "https://calk.uz",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "info@calk.uz",
            availableLanguage: ["Russian", "Uzbek", "English"],
            areaServed: "UZ",
          },
          {
            "@type": "ContactPoint",
            contactType: "technical support",
            url: "https://t.me/calkuz_bot",
            availableLanguage: ["Russian", "Uzbek"],
          },
        ],
      },
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
    {
      q: isUz
        ? "Loyiha rasmiy davlat xizmatimi?"
        : "Является ли проект государственным сервисом?",
      a: isUz
        ? "Yo'q. Calk.UZ — Konstantin Yakovlev tomonidan yuritiladigan mustaqil xususiy loyiha. Biz O'zbekiston davlat organlari bilan bog'liq emasmiz. Barcha hisob-kitoblar ma'lumot uchun beriladi va rasmiy maslahat o'rnini bosmaydi."
        : "Нет. Calk.UZ — независимый частный проект, который ведёт Константин Яковлев. Мы не связаны с государственными органами Узбекистана. Все расчёты носят справочный характер и не заменяют консультацию официальных специалистов.",
    },
    {
      q: isUz
        ? "Saytda mualliflik huquqi yoki ma'lumotlardan foydalanish bo'yicha shartlar nimadan iborat?"
        : "Какие условия использования контента и данных сайта?",
      a: isUz
        ? "Calk.UZ kontenti bepul shaxsiy foydalanish uchun mo'ljallangan. Tijorat maqsadlarida — masalan, kalkulyatorlarni boshqa saytda joylashtirishdan oldin info@calk.uz manziliga yozing."
        : "Контент Calk.UZ предоставляется бесплатно для личного использования. Для коммерческого применения — например, встраивания калькуляторов на сторонний сайт — напишите на info@calk.uz.",
    },
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

      {/* Author / contact owner */}
      {author && (
        <Link
          href={`/author/${author.slug}`}
          className="mb-8 group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
        >
          <div className="relative h-14 w-14 shrink-0 rounded-2xl overflow-hidden ring-2 ring-emerald-500/20">
            <Image
              src={author.imagePath}
              alt={author.alternateName}
              width={400}
              height={400}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-0.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              {isUz ? "Sizga shaxsan javob beradi" : "Вам отвечает лично"}
            </div>
            <p className="font-semibold text-foreground">{author.alternateName}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {isUz ? author.jobTitleUz : author.jobTitleRu}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
        </Link>
      )}

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
            <p className="text-xs text-muted-foreground/70 mt-1">
              {isUz ? "Ish kunlari, 1 kun ichida" : "В будни, в течение 1 рабочего дня"}
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
            <p className="text-xs text-muted-foreground/70 mt-1">
              {isUz ? "Tezkor savollar, 9:00–21:00 (UZT)" : "Быстрые вопросы, 9:00–21:00 (UZT)"}
            </p>
          </div>
        </a>
      </div>

      {/* Legal entity / location info */}
      <div className="mb-8 rounded-2xl border border-border bg-muted/30 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                {isUz ? "Joylashuv" : "Локация"}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isUz ? "Toshkent, O'zbekiston" : "Ташкент, Узбекистан"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Globe className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                {isUz ? "Mas'ul shaxs" : "Ответственное лицо"}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Konstantin Yakovlev
                <br />
                {isUz
                  ? "Calk.UZ asoschisi va rahbari"
                  : "Основатель и руководитель Calk.UZ"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                {isUz ? "Ish vaqti" : "Часы работы"}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isUz
                  ? "Dushanba–Juma, 9:00–21:00 UZT"
                  : "Пн–Пт, 9:00–21:00 (UZT)"}
              </p>
            </div>
          </div>
        </div>
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

      {/* Disclaimer */}
      <section className="mb-12 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/20 p-5">
        <h2 className="text-base font-semibold text-amber-900 dark:text-amber-200 mb-2">
          {isUz ? "Muhim eslatma" : "Важное уточнение"}
        </h2>
        <p className="text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
          {isUz
            ? "Calk.UZ — bu mustaqil xususiy loyiha. Biz O'zbekiston davlat organlari bilan bog'liq emasmiz va rasmiy davlat xizmati emasmiz. Hisob-kitoblar ochiq ma'lumotlar (lex.uz, cbu.uz, soliq.uz) asosida tuziladi va ma'lumot xarakteriga ega."
            : "Calk.UZ — независимый частный проект. Мы не связаны с государственными органами Узбекистана и не являемся официальным государственным сервисом. Расчёты построены на открытых данных (lex.uz, cbu.uz, soliq.uz) и носят справочный характер."}
        </p>
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
