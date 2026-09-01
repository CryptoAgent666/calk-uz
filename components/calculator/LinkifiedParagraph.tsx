import { Fragment } from "react"
import { Link } from "@/i18n/navigation"
import { getSlugByLocale } from "@/lib/data/calculator-slugs"

/**
 * Converts plain article-paragraph strings into JSX where the first occurrence
 * of selected key terms is wrapped in an internal `<Link>` to the relevant
 * calculator. This adds contextual perma-links inside body copy rather than
 * dumping all cross-links at the end of the article.
 *
 * Linking is conservative: each term is only linked once per paragraph, and we
 * skip self-references (the calculator the user is already on).
 */

type LinkRule = {
  term: string
  slug: string
  /** Match case-insensitively (default true) */
  caseInsensitive?: boolean
}

// Russian and Uzbek terms that map to specific calculator slugs.
// Order matters: longer/more-specific terms first.
const RULES_RU: LinkRule[] = [
  { term: "калькулятор зарплаты", slug: "salary" },
  { term: "калькулятор ипотеки", slug: "mortgage" },
  { term: "калькулятор кредита", slug: "credit" },
  { term: "калькулятор НДС", slug: "vat" },
  { term: "калькулятор НДФЛ", slug: "income-tax" },
  { term: "калькулятор депозита", slug: "deposit" },
  { term: "калькулятор валют", slug: "currency-converter" },
  { term: "калькулятор автокредита", slug: "auto-credit" },
  { term: "калькулятор ОСАГО", slug: "osago" },
  { term: "калькулятор растаможки", slug: "customs" },
  { term: "ставка рефинансирования", slug: "bank-rates" },
  { term: "автокредит", slug: "auto-credit" },
  { term: "ипотека", slug: "mortgage" },
  { term: "ОСАГО", slug: "osago" },
  { term: "ИНПС", slug: "salary" },
  { term: "соцналог", slug: "employer-cost" },
  { term: "БРВ", slug: "brv" },
  { term: "НДФЛ", slug: "income-tax" },
  { term: "НДС", slug: "vat" },
]

const RULES_UZ: LinkRule[] = [
  { term: "ish haqi kalkulyatori", slug: "salary" },
  { term: "ipoteka kalkulyatori", slug: "mortgage" },
  { term: "kredit kalkulyatori", slug: "credit" },
  { term: "QQS kalkulyatori", slug: "vat" },
  { term: "JShShS kalkulyatori", slug: "income-tax" },
  { term: "depozit kalkulyatori", slug: "deposit" },
  { term: "valyuta kalkulyatori", slug: "currency-converter" },
  { term: "avtokredit", slug: "auto-credit" },
  { term: "ipoteka", slug: "mortgage" },
  { term: "OSAGO", slug: "osago" },
  { term: "IJPH", slug: "salary" },
  { term: "BHK", slug: "brv" },
  { term: "JShShS", slug: "income-tax" },
  { term: "QQS", slug: "vat" },
]

function getRules(locale: string): LinkRule[] {
  return locale === "uz" ? RULES_UZ : RULES_RU
}

interface Props {
  text: string
  locale: string
  /** Slug of the current calculator — links pointing here are skipped. */
  currentSlug: string
}

export function LinkifiedParagraph({ text, locale, currentSlug }: Props) {
  const rules = getRules(locale).filter((r) => r.slug !== currentSlug)

  // Track terms already linked in this paragraph (link each at most once)
  const used = new Set<string>()

  // Find all match positions, then replace from longest term to shortest at the
  // earliest position. Simpler: greedy scan — for each rule (in order), find
  // the first unused match and split.
  type Segment = { type: "text"; value: string } | { type: "link"; value: string; slug: string }
  let segments: Segment[] = [{ type: "text", value: text }]

  for (const rule of rules) {
    if (used.has(rule.term.toLowerCase())) continue
    const flags = rule.caseInsensitive === false ? "" : "i"
    const re = new RegExp(`(${escapeRegex(rule.term)})`, flags)
    const next: Segment[] = []
    let consumed = false
    for (const seg of segments) {
      if (consumed || seg.type !== "text") {
        next.push(seg)
        continue
      }
      const match = seg.value.match(re)
      if (!match) {
        next.push(seg)
        continue
      }
      const idx = match.index!
      const before = seg.value.slice(0, idx)
      const matched = seg.value.slice(idx, idx + match[0].length)
      const after = seg.value.slice(idx + match[0].length)
      if (before) next.push({ type: "text", value: before })
      next.push({ type: "link", value: matched, slug: rule.slug })
      if (after) next.push({ type: "text", value: after })
      consumed = true
      used.add(rule.term.toLowerCase())
    }
    segments = next
  }

  return (
    <>
      {segments.map((seg, idx) => {
        if (seg.type === "text") {
          return <Fragment key={idx}>{seg.value}</Fragment>
        }
        const localizedSlug = getSlugByLocale(seg.slug, locale)
        return (
          <Link
            key={idx}
            href={`/calculator/${localizedSlug}`}
            className="text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-2 decoration-emerald-500/40 font-medium"
          >
            {seg.value}
          </Link>
        )
      })}
    </>
  )
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
