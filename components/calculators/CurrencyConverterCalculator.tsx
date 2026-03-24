'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatNumber } from '@/lib/utils'

const RATES: Record<string, number> = {
  USD: 12_850,
  EUR: 14_200,
  RUB: 135,
  GBP: 16_500,
  KZT: 26,
  TRY: 380,
  CNY: 1_780,
  KRW: 9.5,
}

export default function CurrencyConverterCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('100')
  const [currency, setCurrency] = useState('USD')

  const result = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    if (a <= 0) return null
    const rate = RATES[currency] || 12_850
    return { uzsAmount: a * rate, rate }
  }, [amount, currency])

  const t = locale === 'uz'
    ? { amount: 'Summa', currency: 'Valyuta', result: 'UZS da', rate: 'Kurs', placeholder: 'Summani kiriting' }
    : { amount: 'Сумма', currency: 'Валюта', result: 'В UZS', rate: 'Курс', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.currency}</Label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.keys(RATES).map(c => (
                <option key={c} value={c}>{c} — {formatNumber(RATES[c], locale)} UZS</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/30">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">{amount} {currency} =</p>
            <p className="text-2xl font-bold text-primary mt-2">{formatNumber(Math.round(result.uzsAmount), locale)} UZS</p>
            <p className="text-sm text-muted-foreground mt-2">{t.rate}: 1 {currency} = {formatNumber(result.rate, locale)} UZS</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
