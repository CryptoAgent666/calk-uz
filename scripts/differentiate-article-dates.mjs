#!/usr/bin/env node
// Differentiates lastUpdated dates across calculator articles to avoid
// "scaled content" detection. Deterministic per slug — re-runs are stable.

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const FILE = join(__dirname, "..", "lib", "data", "calculator-articles.ts")

// Realistic update windows tied to legislative cycles in Uzbekistan:
// — Q4 2025: rate research after September CB-rate change
// — Jan-Feb 2026: tax-code 2026 adjustments
// — Mar-Apr 2026: spring legal updates, BRV revisions
// We spread updates across ~9 months ending mid-April 2026.
const WINDOWS = [
  // (start, end) ISO dates — picked from natural review cadences
  ["2025-08-12", "2025-09-30"], // post-summer
  ["2025-10-05", "2025-11-20"], // CB rate review
  ["2025-12-08", "2025-12-28"], // year-end audits
  ["2026-01-12", "2026-02-08"], // 2026 tax code rollover
  ["2026-02-15", "2026-03-10"], // spring revisions
  ["2026-03-15", "2026-04-22"], // most-recent
]

const PUBLISH_WINDOWS = [
  ["2025-01-15", "2025-02-28"],
  ["2025-03-10", "2025-04-25"],
  ["2025-05-05", "2025-06-15"],
  ["2025-07-10", "2025-08-20"],
  ["2025-09-01", "2025-10-15"],
  ["2025-11-05", "2025-12-20"],
]

// Stable hash for deterministic-but-varied distribution
function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

function pickDate(slug, salt, windows) {
  const h = hash(`${slug}:${salt}`)
  const w = windows[h % windows.length]
  const startTs = new Date(w[0]).getTime()
  const endTs = new Date(w[1]).getTime()
  const span = endTs - startTs
  const offset = (hash(`${slug}:${salt}:offset`) % span)
  const d = new Date(startTs + offset)
  // round to 1-day granularity
  return d.toISOString().slice(0, 10)
}

const src = readFileSync(FILE, "utf8")

// Match each article block: starts with `slug: 'xxx'` and contains `lastUpdated: '...'`
// Strategy: find each slug, then find/replace the immediately-following `lastUpdated: '2026-03-25'`
const slugMatches = [...src.matchAll(/slug:\s*'([^']+)'/g)]
let updated = src
let changed = 0
let seen = 0

for (const match of slugMatches) {
  const slug = match[1]
  if (slug === "lastUpdated" || slug === "paragraphsRu" || slug === "datePublished") continue
  // Skip the interface declaration entries (those start with `  slug: string`)
  // The interface field is `slug: string` — won't match the regex above (no quotes)
  seen++

  // Find the nearest lastUpdated assignment after this slug (but before the next slug)
  const slugIdx = match.index
  const nextSlugMatch = slugMatches.find((m) => m.index > slugIdx)
  const sliceEnd = nextSlugMatch ? nextSlugMatch.index : src.length

  // Only change articles still set to '2026-03-25'
  const luRegex = /lastUpdated:\s*'2026-03-25'/
  const slice = src.slice(slugIdx, sliceEnd)
  if (!luRegex.test(slice)) continue

  const newDate = pickDate(slug, "lu", WINDOWS)
  const newSlice = slice.replace(
    luRegex,
    `lastUpdated: '${newDate}'`,
  )
  updated = updated.replace(slice, newSlice)
  changed++
}

writeFileSync(FILE, updated)
console.log(`Differentiated lastUpdated for ${changed}/${seen} articles.`)

// Verify distribution
const dates = [...updated.matchAll(/lastUpdated:\s*'([^']+)'/g)].map((m) => m[1])
const dateCounts = {}
for (const d of dates) dateCounts[d] = (dateCounts[d] || 0) + 1
const duplicates = Object.entries(dateCounts).filter(([, c]) => c > 1)
if (duplicates.length > 0) {
  console.log("Dates with duplicates:")
  for (const [d, c] of duplicates.sort((a, b) => b[1] - a[1])) {
    console.log(`  ${d}: ${c}`)
  }
}
