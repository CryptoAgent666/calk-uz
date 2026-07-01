/**
 * Localized slug mapping for all 78 calculators.
 * English slug → { ru: Russian transliterated slug, uz: Uzbek transliterated slug }
 */
export const CALCULATOR_SLUGS: Record<string, { ru: string; uz: string }> = {
  // TAX (10)
  'income-tax': { ru: 'ndfl', uz: 'jshshs' },
  'vat': { ru: 'nds', uz: 'qqs' },
  'vat-threshold': { ru: 'porog-nds', uz: 'qqs-chegarasi' },
  'property-tax': { ru: 'nalog-na-imushchestvo', uz: 'mol-mulk-soligi' },
  'land-tax': { ru: 'zemelnyy-nalog', uz: 'yer-soligi' },
  'vehicle-tax': { ru: 'transportnyy-nalog', uz: 'transport-soligi' },
  'corporate-tax': { ru: 'nalog-na-pribyl', uz: 'foyda-soligi' },
  'tax-penalty': { ru: 'peni-po-nalogam', uz: 'soliq-peniyasi' },
  'self-employed': { ru: 'nalog-samozanyatyh', uz: 'oz-ozini-band-qilganlar-soligi' },
  'turnover-tax': { ru: 'nalog-s-oborota', uz: 'aylanma-soligi' },

  // SALARY (8)
  'salary': { ru: 'zarplata', uz: 'ish-haqi' },
  'vacation-pay': { ru: 'otpusknye', uz: 'tatil-puli' },
  'sick-leave': { ru: 'bolnichnyy', uz: 'kasallik-varaqasi' },
  'maternity': { ru: 'dekretnye', uz: 'tugruq-tatili' },
  'severance': { ru: 'kompensatsiya-pri-uvolnenii', uz: 'ishdan-boshatish-kompensatsiyasi' },
  'alimony': { ru: 'alimenty', uz: 'nafaqa' },
  'overtime': { ru: 'sverhuroochnye', uz: 'ortiqcha-ish-vaqti' },
  'pension': { ru: 'pensiya', uz: 'pensiya' },

  // CREDIT (6)
  'credit': { ru: 'kredit', uz: 'kredit' },
  'mortgage': { ru: 'ipoteka', uz: 'ipoteka' },
  'auto-credit': { ru: 'avtokredit', uz: 'avtokredit' },
  'installment': { ru: 'rassrochka', uz: 'bolib-tolash' },
  'early-repayment': { ru: 'dosrochnoe-pogashenie', uz: 'muddatidan-oldin-tolash' },
  'refinancing': { ru: 'refinansirovanie', uz: 'qayta-moliyalashtirish' },

  // DEPOSIT (3)
  'deposit': { ru: 'depozit', uz: 'depozit' },
  'compound-interest': { ru: 'slozhnyy-protsent', uz: 'murakkab-foiz' },
  'deposit-comparison': { ru: 'sravnenie-depozitov', uz: 'depozitlarni-solishtirish' },

  // CURRENCY (3)
  'currency-converter': { ru: 'valyuta', uz: 'valyuta-konvertori' },
  'bank-rates': { ru: 'kursy-bankov', uz: 'bank-kurslari' },
  'money-transfer': { ru: 'denezhnye-perevody', uz: 'pul-otkazmalari' },

  // AUTO (5)
  'customs': { ru: 'rastamozhka', uz: 'rastamozhka' },
  'osago': { ru: 'osago', uz: 'osago' },
  'fuel-consumption': { ru: 'rashod-topliva', uz: 'yoqilgi-sarfi' },
  'trip-cost': { ru: 'stoimost-poezdki', uz: 'sayohat-narxi' },
  'car-leasing': { ru: 'lizing-avto', uz: 'avto-lizing' },

  // UTILITIES (6)
  'electricity': { ru: 'elektrichestvo', uz: 'elektr-energiya' },
  'gas': { ru: 'gaz', uz: 'gaz' },
  'water': { ru: 'voda', uz: 'suv' },
  'heating': { ru: 'otoplenie', uz: 'isitish' },
  'internet': { ru: 'internet', uz: 'internet' },
  'utilities-total': { ru: 'obshchaya-kommunalka', uz: 'umumiy-kommunal' },

  // REAL ESTATE (4)
  'apartment-cost': { ru: 'stoimost-kvartiry', uz: 'kvartira-narxi' },
  'rental': { ru: 'arenda-vs-pokupka', uz: 'ijara-vs-sotib-olish' },
  'renovation': { ru: 'stoimost-remonta', uz: 'tamirlash-narxi' },
  'moving': { ru: 'stoimost-pereezda', uz: 'kochish-narxi' },

  // BUSINESS (6)
  'ip-calculator': { ru: 'kalkulyator-ip', uz: 'yatt-kalkulyatori' },
  'llc-calculator': { ru: 'kalkulyator-ooo', uz: 'mchj-kalkulyatori' },
  'margin': { ru: 'marzhinalnost', uz: 'marjinallik' },
  'break-even': { ru: 'tochka-bezubytochnosti', uz: 'zararsizlik-nuqtasi' },
  'roi': { ru: 'vozvrat-investitsiy', uz: 'investitsiya-qaytimi' },
  'employer-cost': { ru: 'stoimost-sotrudnika', uz: 'xodim-narxi' },

  // HEALTH (5)
  'calories': { ru: 'kaloriy', uz: 'kaloriya' },
  'bmi': { ru: 'indeks-massy-tela', uz: 'tana-massa-indeksi' },
  'ideal-weight': { ru: 'idealnyy-ves', uz: 'ideal-vazn' },
  'macros': { ru: 'bzhu', uz: 'oyu' },
  'pregnancy': { ru: 'beremennost', uz: 'homiladorlik' },

  // EDUCATION (3)
  'tuition': { ru: 'stoimost-obucheniya', uz: 'oqish-narxi' },
  'education-loan': { ru: 'obrazovatelnyy-kredit', uz: 'talim-krediti' },
  'gpa': { ru: 'gpa', uz: 'gpa' },

  // RELIGION (4)
  'zakat': { ru: 'zakat', uz: 'zakot' },
  'fitr-sadaka': { ru: 'fitr-sadaka', uz: 'fitr-sadaqa' },
  'fidiya-sadaka': { ru: 'fidiya-sadaka', uz: 'fidiya-sadaqa' },
  'kurban': { ru: 'kurban', uz: 'qurbon' },

  // TOOLS (8)
  'percentage': { ru: 'protsenty', uz: 'foiz' },
  'discount': { ru: 'skidki', uz: 'chegirma' },
  'date-calc': { ru: 'kalkulyator-dat', uz: 'sana-kalkulyatori' },
  'area': { ru: 'ploshchad', uz: 'maydon' },
  'unit-converter': { ru: 'konverter-edinits', uz: 'birlik-konvertori' },
  'number-to-words': { ru: 'chislo-propisyu', uz: 'sonni-soz-bilan' },
  'age': { ru: 'vozrast', uz: 'yosh' },
  'random': { ru: 'generator-chisel', uz: 'son-generatori' },

  // UNIQUE UZ (7)
  'passport-fees': { ru: 'pasportnye-sbory', uz: 'pasport-yigimlari' },
  'state-duties': { ru: 'gosposhliny', uz: 'davlat-boji' },
  'wedding': { ru: 'svadba', uz: 'toy' },
  'cotton-yield': { ru: 'urozhaynost-khlopka', uz: 'paxta-hosildorligi' },
  'remittances': { ru: 'perevody-iz-za-rubezha', uz: 'xorijdan-pul-otkazmalari' },
  'visa-cost': { ru: 'stoimost-vizy', uz: 'viza-narxi' },
  'brv': { ru: 'brv', uz: 'bhm' },
}

// Build reverse lookup maps for fast resolution
const _reverseRu = new Map<string, string>()
const _reverseUz = new Map<string, string>()

for (const [englishSlug, localized] of Object.entries(CALCULATOR_SLUGS)) {
  _reverseRu.set(localized.ru, englishSlug)
  _reverseUz.set(localized.uz, englishSlug)
  // Also map english slug to itself for backwards compat
  _reverseRu.set(englishSlug, englishSlug)
  _reverseUz.set(englishSlug, englishSlug)
}

/**
 * Get the localized slug for a given English slug and locale.
 * Falls back to the English slug if no mapping exists.
 */
export function getSlugByLocale(englishSlug: string, locale: string): string {
  const mapping = CALCULATOR_SLUGS[englishSlug]
  if (!mapping) return englishSlug
  if (locale === 'ru') return mapping.ru
  if (locale === 'uz') return mapping.uz
  return englishSlug
}

/**
 * Resolve a localized slug back to the original English slug.
 * Returns undefined if the slug is not found in any mapping.
 */
export function getEnglishSlug(localizedSlug: string, locale: string): string | undefined {
  if (locale === 'ru') return _reverseRu.get(localizedSlug)
  if (locale === 'uz') return _reverseUz.get(localizedSlug)
  // For unknown locales, try both reverse maps then fall back to direct match
  return _reverseRu.get(localizedSlug) ?? _reverseUz.get(localizedSlug)
}

/**
 * Get all localized slugs for generateStaticParams.
 * Returns an array of { slug, locale } for every combination.
 */
export function getAllLocalizedSlugs(): { slug: string; locale: string }[] {
  const result: { slug: string; locale: string }[] = []
  for (const [englishSlug, localized] of Object.entries(CALCULATOR_SLUGS)) {
    // Localized slugs
    result.push({ slug: localized.ru, locale: 'ru' })
    result.push({ slug: localized.uz, locale: 'uz' })
    // English slugs for backwards compatibility
    result.push({ slug: englishSlug, locale: 'ru' })
    result.push({ slug: englishSlug, locale: 'uz' })
  }
  return result
}
