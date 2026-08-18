import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number, locale: string = 'ru'): string {
  return new Intl.NumberFormat(locale === 'uz' ? 'uz-Latn' : 'ru-RU', {
    maximumFractionDigits: 2,
  }).format(num)
}

export function formatCurrency(amount: number, currency: string = 'UZS', locale: string = 'ru'): string {
  const formatted = formatNumber(Math.round(amount), locale)
  if (currency === 'UZS') {
    return locale === 'uz' ? `${formatted} so'm` : `${formatted} сум`
  }
  return new Intl.NumberFormat(locale === 'uz' ? 'uz-Latn' : 'ru-RU', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`
}

export function parseNumericInput(value: string): number {
  const cleaned = value.replace(/[^\d.,]/g, '').replace(',', '.')
  return parseFloat(cleaned) || 0
}

export function numberToWordsUz(num: number): string {
  if (num === 0) return "nol"
  const ones = ['', 'bir', 'ikki', 'uch', "to'rt", 'besh', 'olti', 'yetti', 'sakkiz', "to'qqiz"]
  const tens = ['', "o'n", 'yigirma', "o'ttiz", 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', "to'qson"]
  const scales = ['', 'ming', 'million', 'milliard', 'trillion']

  if (num < 0) return `minus ${numberToWordsUz(-num)}`

  const parts: string[] = []
  let scaleIndex = 0
  let remaining = Math.floor(num)

  while (remaining > 0) {
    const chunk = remaining % 1000
    if (chunk > 0) {
      const chunkWords: string[] = []
      const h = Math.floor(chunk / 100)
      const t = Math.floor((chunk % 100) / 10)
      const o = chunk % 10
      if (h > 0) chunkWords.push(`${ones[h]} yuz`)
      if (t > 0) chunkWords.push(tens[t])
      if (o > 0) chunkWords.push(ones[o])
      const chunkStr = chunkWords.join(' ')
      parts.unshift(scales[scaleIndex] ? `${chunkStr} ${scales[scaleIndex]}` : chunkStr)
    }
    remaining = Math.floor(remaining / 1000)
    scaleIndex++
  }
  return parts.join(' ').trim()
}

export function numberToWordsRu(num: number): string {
  if (num === 0) return "ноль"
  const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
  const onesF = ['', 'одна', 'две']
  const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
  const tensArr = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  const hundredsArr = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']

  if (num < 0) return `минус ${numberToWordsRu(-num)}`

  const convertChunk = (n: number, feminine: boolean = false): string => {
    const p: string[] = []
    const h = Math.floor(n / 100)
    const rem = n % 100
    const t = Math.floor(rem / 10)
    const o = rem % 10
    if (h > 0) p.push(hundredsArr[h])
    if (t === 1) { p.push(teens[o]) }
    else {
      if (t > 0) p.push(tensArr[t])
      if (o > 0) p.push(feminine && o <= 2 ? onesF[o] : ones[o])
    }
    return p.join(' ')
  }

  const getSuffix = (n: number, s1: string, s2: string, s5: string): string => {
    const lt = n % 100, lo = n % 10
    if (lt >= 11 && lt <= 19) return s5
    if (lo === 1) return s1
    if (lo >= 2 && lo <= 4) return s2
    return s5
  }

  const floor = Math.floor(num)
  const parts: string[] = []
  const b = Math.floor(floor / 1_000_000_000)
  const m = Math.floor((floor % 1_000_000_000) / 1_000_000)
  const t = Math.floor((floor % 1_000_000) / 1_000)
  const r = floor % 1_000

  if (b > 0) parts.push(`${convertChunk(b)} ${getSuffix(b, 'миллиард', 'миллиарда', 'миллиардов')}`)
  if (m > 0) parts.push(`${convertChunk(m)} ${getSuffix(m, 'миллион', 'миллиона', 'миллионов')}`)
  if (t > 0) parts.push(`${convertChunk(t, true)} ${getSuffix(t, 'тысяча', 'тысячи', 'тысяч')}`)
  if (r > 0) parts.push(convertChunk(r))

  return parts.join(' ').trim()
}

export function declension(num: number, one: string, few: string, many: string): string {
  const abs = Math.abs(num)
  const lt = abs % 100, lo = abs % 10
  if (lt >= 11 && lt <= 19) return many
  if (lo === 1) return one
  if (lo >= 2 && lo <= 4) return few
  return many
}
