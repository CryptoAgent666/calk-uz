'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateTaxPenalty } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function TaxPenaltyCalculator() {
  const locale = useLocale()
  const [debt, setDebt] = useState('')
  const [days, setDays] = useState('')

  const result = useMemo(() => {
    const d = parseFloat(debt.replace(/\s/g, '')) || 0
    const dys = parseInt(days) || 0
    if (d <= 0 || dys <= 0) return null
    return calculateTaxPenalty(d, dys)
  }, [debt, days])

  const t = locale === 'uz'
    ? {
        debt: 'Qarzdorlik summasi (UZS)',
        days: 'Kechikish kunlari',
        results: 'Natijalar',
        dailyRate: 'Kunlik stavka',
        totalPenalty: 'Jami penya',
        totalWithDebt: 'Qarz + penya',
        placeholder: 'Summani kiriting',
        daysPlaceholder: 'Kunlar sonini kiriting',
      }
    : {
        debt: 'Сумма задолженности (UZS)',
        days: 'Дней просрочки',
        results: 'Результаты',
        dailyRate: 'Дневная ставка',
        totalPenalty: 'Итого пеня',
        totalWithDebt: 'Долг + пеня',
        placeholder: 'Введите сумму',
        daysPlaceholder: 'Введите количество дней',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.debt}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={debt} onChange={(e) => setDebt(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.days}</Label>
            <Input type="number" placeholder={t.daysPlaceholder} value={days} onChange={(e) => setDays(e.target.value)} className="mt-1 text-lg" min={1} />
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
              <span className="text-muted-foreground">{t.dailyRate}</span>
              <span>{result.dailyRate.toFixed(4)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.totalPenalty}</span>
              <span className="text-destructive">{formatCurrency(result.totalPenalty, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.totalWithDebt}</span>
              <span className="text-primary">{formatCurrency(result.totalWithDebt, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
