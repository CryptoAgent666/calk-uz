'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateCorporateTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function CorporateTaxCalculator() {
  const locale = useLocale()
  const [revenue, setRevenue] = useState('')
  const [expenses, setExpenses] = useState('')
  const [taxRate, setTaxRate] = useState('15')

  const result = useMemo(() => {
    const r = parseFloat(revenue.replace(/\s/g, '')) || 0
    const e = parseFloat(expenses.replace(/\s/g, '')) || 0
    const rate = parseFloat(taxRate) || 15
    if (r <= 0) return null
    return calculateCorporateTax(r, e, rate / 100)
  }, [revenue, expenses, taxRate])

  const t = locale === 'uz'
    ? {
        revenue: 'Daromad (UZS)',
        expenses: 'Xarajatlar (UZS)',
        taxRate: 'Soliq stavkasi (%)',
        results: 'Natijalar',
        profit: 'Foyda',
        taxAmount: 'Soliq summasi',
        netProfit: 'Sof foyda',
        placeholder: 'Summani kiriting',
      }
    : {
        revenue: 'Доход (UZS)',
        expenses: 'Расходы (UZS)',
        taxRate: 'Ставка налога (%)',
        results: 'Результаты',
        profit: 'Прибыль',
        taxAmount: 'Сумма налога',
        netProfit: 'Чистая прибыль',
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
            <Label>{t.expenses}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={expenses} onChange={(e) => setExpenses(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.taxRate}</Label>
            <Input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="mt-1 w-24" min={0} max={100} step={0.5} />
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
              <span className="text-muted-foreground">{t.profit}</span>
              <span>{formatCurrency(result.profit, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.taxAmount} ({result.taxRate}%)</span>
              <span className="text-destructive">{formatCurrency(result.taxAmount, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.netProfit}</span>
              <span className="text-primary">{formatCurrency(result.netProfit, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
