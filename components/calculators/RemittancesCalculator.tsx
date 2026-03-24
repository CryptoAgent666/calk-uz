'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateRemittance } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function RemittancesCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('1000')
  const [currency, setCurrency] = useState('USD')
  const [feePercent, setFeePercent] = useState('1.5')
  const [rate, setRate] = useState('12850')

  const CURRENCIES = ['USD', 'EUR', 'RUB', 'GBP', 'KZT']

  const result = useMemo(() => {
    const a = parseFloat(amount) || 0
    const f = parseFloat(feePercent) || 0
    const r = parseFloat(rate) || 0
    if (a <= 0 || r <= 0) return null
    return calculateRemittance(a, currency, r, f)
  }, [amount, currency, feePercent, rate])

  const t = locale === 'uz'
    ? { amount: 'Jo\'natma summasi', currency: 'Valyuta', fee: 'Komissiya (%)', rate: 'Kurs', results: 'Natijalar', sendAmount: 'Jo\'natma', feeAmount: 'Komissiya', receiveAmount: 'Qabul qiluvchi oladi', effectiveRate: 'Samarali kurs' }
    : { amount: 'Сумма отправки', currency: 'Валюта', fee: 'Комиссия (%)', rate: 'Курс', results: 'Результаты', sendAmount: 'Отправка', feeAmount: 'Комиссия', receiveAmount: 'Получатель получит', effectiveRate: 'Эффективный курс' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.amount}</Label><Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" min={1} /></div>
            <div><Label>{t.currency}</Label><select value={currency} onChange={(e) => setCurrency(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.fee}</Label><Input type="number" value={feePercent} onChange={(e) => setFeePercent(e.target.value)} className="mt-1" min={0} max={10} step={0.1} /></div>
            <div><Label>{t.rate}</Label><Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-1" /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.sendAmount}</span><span>{formatNumber(result.sendAmount, locale)} {currency}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.feeAmount} ({result.feePercent}%)</span><span className="text-destructive">-{formatNumber(result.fee, locale)} {currency}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.receiveAmount}</span><span className="text-primary">{formatCurrency(result.receiveAmount, 'UZS', locale)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.effectiveRate}</span><span>{formatNumber(Math.round(result.effectiveRate), locale)} UZS/{currency}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
