/**
 * Utility/tool calculators: percentage, discount, date, area, units, age, random
 */

// Percentage Calculator
export interface PercentageResult {
  mode: string
  value1: number
  value2: number
  result: number
}

export function calculatePercentage(value: number, percent: number): PercentageResult {
  return { mode: 'percent_of', value1: value, value2: percent, result: value * percent / 100 }
}

export function calculateWhatPercent(part: number, whole: number): PercentageResult {
  return { mode: 'what_percent', value1: part, value2: whole, result: whole > 0 ? (part / whole) * 100 : 0 }
}

export function calculatePercentChange(oldValue: number, newValue: number): PercentageResult {
  const change = oldValue > 0 ? ((newValue - oldValue) / oldValue) * 100 : 0
  return { mode: 'percent_change', value1: oldValue, value2: newValue, result: change }
}

// Discount Calculator
export interface DiscountResult {
  originalPrice: number
  discountPercent: number
  discountAmount: number
  finalPrice: number
  savedAmount: number
}

export function calculateDiscount(originalPrice: number, discountPercent: number): DiscountResult {
  const discountAmount = originalPrice * discountPercent / 100
  const finalPrice = originalPrice - discountAmount
  return { originalPrice, discountPercent, discountAmount, finalPrice, savedAmount: discountAmount }
}

export function calculateDiscountFromPrices(originalPrice: number, finalPrice: number): DiscountResult {
  const discountAmount = originalPrice - finalPrice
  const discountPercent = originalPrice > 0 ? (discountAmount / originalPrice) * 100 : 0
  return { originalPrice, discountPercent, discountAmount, finalPrice, savedAmount: discountAmount }
}

// Date Calculator
export interface DateDiffResult {
  startDate: Date
  endDate: Date
  totalDays: number
  years: number
  months: number
  days: number
  weeks: number
  workingDays: number
}

export function calculateDateDiff(start: Date, end: Date): DateDiffResult {
  const diffMs = Math.abs(end.getTime() - start.getTime())
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0)
    days += prevMonth.getDate()
  }
  if (months < 0) {
    years--
    months += 12
  }

  const weeks = Math.floor(totalDays / 7)

  // Approximate working days (exclude weekends)
  let workingDays = 0
  const current = new Date(start)
  while (current <= end) {
    const day = current.getDay()
    if (day !== 0 && day !== 6) workingDays++
    current.setDate(current.getDate() + 1)
  }

  return { startDate: start, endDate: end, totalDays, years, months, days, weeks, workingDays }
}

export function addDaysToDate(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

// Area Calculator
export interface AreaConversion {
  squareMeters: number
  squareKilometers: number
  hectares: number
  sotka: number // 100 sq.m, popular in CIS
  squareFeet: number
  acres: number
}

export function convertArea(value: number, fromUnit: string): AreaConversion {
  let sqm: number
  switch (fromUnit) {
    case 'sqm': sqm = value; break
    case 'sqkm': sqm = value * 1_000_000; break
    case 'hectare': sqm = value * 10_000; break
    case 'sotka': sqm = value * 100; break
    case 'sqft': sqm = value * 0.092903; break
    case 'acre': sqm = value * 4046.86; break
    default: sqm = value
  }

  return {
    squareMeters: sqm,
    squareKilometers: sqm / 1_000_000,
    hectares: sqm / 10_000,
    sotka: sqm / 100,
    squareFeet: sqm / 0.092903,
    acres: sqm / 4046.86,
  }
}

// Unit Converter
export type UnitCategory = 'length' | 'weight' | 'volume' | 'temperature'

const LENGTH_TO_METERS: Record<string, number> = {
  mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, ft: 0.3048, yard: 0.9144, mile: 1609.34,
}

const WEIGHT_TO_KG: Record<string, number> = {
  mg: 0.000001, g: 0.001, kg: 1, ton: 1000, lb: 0.453592, oz: 0.0283495,
}

const VOLUME_TO_LITERS: Record<string, number> = {
  ml: 0.001, l: 1, m3: 1000, gal: 3.78541, qt: 0.946353,
}

export function convertUnit(value: number, from: string, to: string, category: UnitCategory): number {
  if (category === 'temperature') {
    return convertTemperature(value, from, to)
  }

  const tables: Record<string, Record<string, number>> = {
    length: LENGTH_TO_METERS,
    weight: WEIGHT_TO_KG,
    volume: VOLUME_TO_LITERS,
  }

  const table = tables[category]
  if (!table || !table[from] || !table[to]) return 0

  const baseValue = value * table[from]
  return baseValue / table[to]
}

function convertTemperature(value: number, from: string, to: string): number {
  let celsius: number
  if (from === 'C') celsius = value
  else if (from === 'F') celsius = (value - 32) * 5 / 9
  else celsius = value - 273.15

  if (to === 'C') return celsius
  if (to === 'F') return celsius * 9 / 5 + 32
  return celsius + 273.15
}

// Age Calculator
export interface AgeResult {
  birthDate: Date
  years: number
  months: number
  days: number
  totalDays: number
  totalMonths: number
  nextBirthday: Date
  daysUntilBirthday: number
}

export function calculateAge(birthDate: Date): AgeResult {
  const now = new Date()
  const diff = calculateDateDiff(birthDate, now)

  const nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate())
  if (nextBirthday <= now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
  }
  const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  return {
    birthDate,
    years: diff.years,
    months: diff.months,
    days: diff.days,
    totalDays: diff.totalDays,
    totalMonths: diff.years * 12 + diff.months,
    nextBirthday,
    daysUntilBirthday,
  }
}

// Random Number Generator
export function generateRandomNumber(min: number, max: number, count: number = 1, allowDuplicates: boolean = true): number[] {
  const results: number[] = []
  const range = max - min + 1

  if (!allowDuplicates && count > range) {
    throw new Error('Cannot generate more unique numbers than the range allows')
  }

  const used = new Set<number>()

  for (let i = 0; i < count; i++) {
    let num: number
    do {
      num = Math.floor(Math.random() * range) + min
    } while (!allowDuplicates && used.has(num))

    used.add(num)
    results.push(num)
  }

  return results
}
