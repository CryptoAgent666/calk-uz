import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import HomePageClient from "@/components/HomePageClient"

const BASE_URL = "https://calk.uz"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === "uz"
      ? "Calk.UZ — O'zbekiston uchun 78 ta bepul onlayn kalkulyator"
      : "Calk.UZ — 78 бесплатных онлайн-калькуляторов для Узбекистана"

  const description =
    locale === "uz"
      ? "O'zbekiston uchun onlayn kalkulyatorlar: ish haqi, soliqlar, kreditlar, ipoteka, kommunal xizmatlar, valyuta va boshqa hisob-kitoblar."
      : "Онлайн-калькуляторы для Узбекистана: зарплата, налоги, кредиты, ипотека, коммунальные услуги, валюта и другие расчёты."

  const canonicalUrl = `${BASE_URL}/${locale}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ru: `${BASE_URL}/ru`,
        uz: `${BASE_URL}/uz`,
        "x-default": `${BASE_URL}/ru`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "uz" ? "uz_UZ" : "ru_RU",
      alternateLocale: locale === "uz" ? "ru_RU" : "uz_UZ",
      url: canonicalUrl,
      siteName: "Calk.UZ",
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: locale === "uz"
      ? "Calk.UZ — O'zbekiston uchun 78 ta bepul onlayn kalkulyator"
      : "Calk.UZ — 78 бесплатных онлайн-калькуляторов для Узбекистана",
    description: locale === "uz"
      ? "O'zbekiston uchun onlayn kalkulyatorlar: ish haqi, soliqlar, kreditlar, ipoteka, kommunal xizmatlar, valyuta va boshqa hisob-kitoblar."
      : "Онлайн-калькуляторы для Узбекистана: зарплата, налоги, кредиты, ипотека, коммунальные услуги, валюта и другие расчёты.",
    url: `${BASE_URL}/${locale}`,
    isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: BASE_URL },
    inLanguage: locale === "uz" ? "uz" : "ru",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <HomePageClient />
    </>
  )
}
