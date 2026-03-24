'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateTurnoverTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function TurnoverTaxCalculator() {
  const locale = useLocale()
  const [revenue, setRevenue] = useState('')
  const [rate, setRate] = useState('4')

  const result = useMemo(() => {
    const val = parseFloat(revenue.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 4
    if (val <= 0) return null
    return calculateTurnoverTax(val, r / 100)
  }, [revenue, rate])

  const t = locale === 'uz'
    ? {
        revenue: 'Tushum (UZS)',
        rate: 'Soliq stavkasi (%)',
        results: 'Natijalar',
        taxAmount: 'Soliq summasi',
        netRevenue: 'Sof tushum',
        placeholder: 'Summani kiriting',
      }
    : {
        revenue: 'Выручка (UZS)',
        rate: 'Ставка налога (%)',
        results: 'Результаты',
        taxAmount: 'Сумма налога',
        netRevenue: 'Чистая выручка',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.revenue}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={revenue} onChange={(e) => setRevenue(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.rate}</Label>
            <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-1 w-24" min={0} max={100} step={0.5} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.taxAmount} ({result.taxRate}%)</span>
              <span className="text-destructive">{formatCurrency(result.taxAmount, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.netRevenue}</span>
              <span className="text-primary">{formatCurrency(result.netRevenue, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
