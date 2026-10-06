import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Sparkles } from "lucide-react"
import { UPDATES } from "@/lib/data/updates"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isUz = locale === "uz"
  return {
    title: isUz ? "Yangilanishlar" : "Обновления",
    description: isUz
      ? "Calk.UZ yangilanishlari — kalkulyatorlar, stavkalar va tariflardagi o'zgarishlar."
      : "Обновления Calk.UZ — что изменилось в калькуляторах, ставках и тарифах.",
    alternates: {
      canonical: `/${locale}/updates`,
      languages: {
        ru: "/ru/updates",
        uz: "/uz/updates",
        "x-default": "/ru/updates",
      },
    },
  }
}


export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  await getTranslations({ locale })
  const isUz = locale === "uz"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isUz ? "Calk.UZ yangilanishlari" : "Обновления Calk.UZ",
    url: `https://calk.uz/${locale}/updates`,
    isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: "https://calk.uz" },
    inLanguage: isUz ? "uz" : "ru",
    dateModified: UPDATES[0].date,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-6">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {isUz ? "Yangilanishlar" : "Обновления"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {isUz
            ? "Kalkulyatorlar, stavkalar va tariflarda nima o'zgardi — qisqa va sanalari bilan."
            : "Что изменилось в калькуляторах, ставках и тарифах — кратко и по датам."}
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {UPDATES.map((block) => (
          <section key={block.date}>
            <h2 className="text-lg font-semibold text-foreground mb-5 pb-2 border-b border-border">
              {isUz ? block.dateLabelUz : block.dateLabelRu}
            </h2>
            <div className="space-y-3">
              {block.items.map((item, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground leading-snug mb-1.5">
                    {isUz ? item.titleUz : item.titleRu}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isUz ? item.descUz : item.descRu}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-muted-foreground text-center">
        {isUz
          ? "Kalkulyatorda xatolikni topdingizmi? info@calk.uz ga yozing."
          : "Нашли ошибку в калькуляторе? Напишите на info@calk.uz."}
      </p>
    </div>
  )
}
