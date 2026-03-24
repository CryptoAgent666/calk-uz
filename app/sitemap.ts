import type { MetadataRoute } from "next"
import { CALCULATORS } from "@/lib/data/calculators"

const BASE_URL = "https://calk.uz"
const LOCALES = ["ru", "uz"]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Home page for each locale
  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    })
  }

  // Static pages
  const staticPages = ["about", "contact", "privacy", "terms"]
  for (const page of staticPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      })
    }
  }

  // All 78 calculators for each locale
  for (const calc of CALCULATORS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/calculator/${calc.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: calc.priority === 1 ? 0.9 : calc.priority === 2 ? 0.7 : 0.6,
      })
    }
  }

  return entries
}
