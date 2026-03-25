import type { MetadataRoute } from "next"
import { CALCULATORS } from "@/lib/data/calculators"
import { CATEGORY_IDS } from "@/lib/data/categories"
import { getSlugByLocale } from "@/lib/data/calculator-slugs"

const BASE_URL = "https://calk.uz"
const LOCALES = ["ru", "uz"]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Home page for each locale
  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
    })
  }

  // Static pages
  const staticPages = ["about", "contact", "privacy", "terms", "methodology"]
  for (const page of staticPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/${page}`,
        lastModified: new Date(),
      })
    }
  }

  // Category pages for each locale
  for (const catId of CATEGORY_IDS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/category/${catId}`,
        lastModified: new Date(),
      })
    }
  }

  // All 78 calculators for each locale — use localized slugs
  for (const calc of CALCULATORS) {
    for (const locale of LOCALES) {
      const localizedSlug = getSlugByLocale(calc.slug, locale)
      entries.push({
        url: `${BASE_URL}/${locale}/calculator/${localizedSlug}`,
        lastModified: new Date(),
      })
    }
  }

  return entries
}
