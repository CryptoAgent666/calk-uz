'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateSelfEmployedTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function SelfEmployedCalculator() {
  const locale = useLocale()
  const [revenue, setRevenue] = useState('')

  const result = useMemo(() => {
    const val = parseFloat(revenue.replace(/\s/g, '')) || 0
    if (val <= 0) return null
    return calculateSelfEmployedTax(val)
  }, [revenue])

  const t = locale === 'uz'
    ? {
        revenue: 'Daromad (UZS)',
        results: 'Natijalar',
        taxRate: 'Soliq stavkasi',
        taxAmount: 'Soliq summasi',
        netIncome: 'Sof daromad',
        monthly: 'Oylik soliq (o\'rtacha)',
        placeholder: 'Summani kiriting',
      }
    : {
        revenue: 'Доход (UZS)',
        results: 'Результаты',
        taxRate: 'Ставка налога',
        taxAmount: 'Сумма налога',
        netIncome: 'Чистый доход',
        monthly: 'Ежемесячный налог (в среднем)',
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
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.taxRate}</span>
              <span>{result.taxRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.taxAmount}</span>
              <span className="text-destructive">{formatCurrency(result.taxAmount, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.monthly}</span>
              <span>{formatCurrency(result.taxAmount / 12, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.netIncome}</span>
              <span className="text-primary">{formatCurrency(result.netIncome, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
