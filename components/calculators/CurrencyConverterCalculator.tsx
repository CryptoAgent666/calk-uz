'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatNumber } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

const FALLBACK_RATES: Record<string, number> = {
  USD: 12_850,
  EUR: 14_200,
  RUB: 135,
  GBP: 16_500,
  KZT: 26,
  TRY: 380,
  CNY: 1_780,
  KRW: 9.5,
  KGS: 145,
  AED: 3_500,
  JPY: 86,
}

export default function CurrencyConverterCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [amount, setAmount] = useState('100')
  const [currency, setCurrency] = useState('USD')

  // Build a rates map: prefer live rates, fall back to hardcoded
  const ratesMap = useMemo(() => {
    const map: Record<string, { rate: number; nominal: number; diff: string }> = {}

    // Start with fallback rates
    for (const [code, rate] of Object.entries(FALLBACK_RATES)) {
      map[code] = { rate, nominal: 1, diff: '0' }
    }

    // Override with live rates from CBU
    for (const lr of liveRates) {
      map[lr.code] = {
        rate: lr.rate / lr.nominal, // normalize to 1 unit
        nominal: lr.nominal,
        diff: lr.diff,
      }
    }

    return map
  }, [liveRates])

  const currencyCodes = useMemo(() => Object.keys(ratesMap), [ratesMap])

  const result = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    if (a <= 0) return null
    const entry = ratesMap[currency]
    if (!entry) return null
    return { uzsAmount: a * entry.rate, rate: entry.rate, diff: entry.diff }
  }, [amount, currency, ratesMap])

  const t = locale === 'uz'
    ? {
        amount: 'Summa',
        currency: 'Valyuta',
        result: 'UZS da',
        rate: 'Kurs',
        placeholder: 'Summani kiriting',
        loading: 'Kurslar yuklanmoqda...',
        error: 'Kurslarni yuklashda xatolik',
        source: 'Manba: O\'zbekiston Markaziy banki',
        updated: 'Yangilangan',
        change: "O'zgarish",
      }
    : {
        amount: 'Сумма',
        currency: 'Валюта',
        result: 'В UZS',
        rate: 'Курс',
        placeholder: 'Введите сумму',
        loading: 'Загрузка курсов...',
        error: 'Ошибка загрузки курсов',
        source: 'Источник: Центральный банк Узбекистана',
        updated: 'Обновлено',
        change: 'Изменение',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.amount}</Label>
            <Input
              type="text"
              inputMode="numeric"
              placeholder={t.placeholder}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 text-lg"
            />
          </div>
          <div>
            <Label>{t.currency}</Label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {currencyCodes.map((c) => (
                <option key={c} value={c}>
                  {c} — {formatNumber(Math.round(ratesMap[c].rate), locale)} UZS
                </option>
              ))}
            </select>
          </div>

          {/* Status indicator */}
          {loading && (
            <p className="text-xs text-muted-foreground animate-pulse">
              {t.loading}
            </p>
          )}
          {error && !loading && (
            <p className="text-xs text-destructive">
              {t.error}
            </p>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/30">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {amount} {currency} =
            </p>
            <p className="text-2xl font-bold text-primary mt-2">
              {formatNumber(Math.round(result.uzsAmount), locale)} UZS
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t.rate}: 1 {currency} = {formatNumber(result.rate, locale)} UZS
            </p>
            {result.diff && result.diff !== '0' && (
              <p className={`text-xs mt-1 ${parseFloat(result.diff) > 0 ? 'text-green-600' : 'text-destructive'}`}>
                {t.change}: {parseFloat(result.diff) > 0 ? '+' : ''}{result.diff} UZS
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Source attribution */}
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">{t.source}</p>
        {lastUpdated && (
          <p className="text-xs text-muted-foreground">
            {t.updated}: {new Date(lastUpdated).toLocaleString(locale === 'uz' ? 'uz-UZ' : 'ru-RU')}
          </p>
        )}
      </div>
    </div>
  )
}
