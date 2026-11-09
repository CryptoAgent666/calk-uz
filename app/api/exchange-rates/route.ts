import { NextResponse } from 'next/server'

interface CBURate {
  id: string
  Code: string
  Ccy: string
  CcyNm_RU: string
  CcyNm_UZ: string
  CcyNm_UZC: string
  CcyNm_EN: string
  Nominal: string
  Rate: string
  Diff: string
  Date: string
}

interface ExchangeRate {
  code: string
  name: string
  nameUz: string
  rate: number
  nominal: number
  diff: string
  date: string
}

const MAJOR_CURRENCIES = [
  'USD', 'EUR', 'RUB', 'GBP', 'CNY',
  'KZT', 'KGS', 'TRY', 'AED', 'KRW', 'JPY',
]

export async function GET() {
  try {
    const response = await fetch('https://cbu.uz/ru/arkhiv-kursov-valyut/json/', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`CBU API responded with status ${response.status}`)
    }

    const data: CBURate[] = await response.json()

    const rates: ExchangeRate[] = data
      .filter((item) => MAJOR_CURRENCIES.includes(item.Ccy))
      .map((item) => ({
        code: item.Ccy,
        name: item.CcyNm_RU,
        nameUz: item.CcyNm_UZ,
        rate: parseFloat(item.Rate),
        nominal: parseInt(item.Nominal, 10),
        diff: item.Diff,
        date: item.Date,
      }))

    // Sort by the order in MAJOR_CURRENCIES
    rates.sort(
      (a, b) =>
        MAJOR_CURRENCIES.indexOf(a.code) - MAJOR_CURRENCIES.indexOf(b.code)
    )

    return NextResponse.json({
      rates,
      lastUpdated: new Date().toISOString(),
      source: 'Central Bank of Uzbekistan',
    })
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error)

    return NextResponse.json(
      {
        error: 'Failed to fetch exchange rates',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 502 }
    )
  }
}
