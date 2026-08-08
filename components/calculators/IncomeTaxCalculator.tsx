'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateIncomeTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function IncomeTaxCalculator() {
  const locale = useLocale()
  const [income, setIncome] = useState('')
  const [isITPark, setIsITPark] = useState(false)

  const result = useMemo(() => {
    const val = parseFloat(income.replace(/\s/g, '')) || 0
    if (val <= 0) return null
    return calculateIncomeTax(val, isITPark)
  }, [income, isITPark])

  const t = locale === 'uz'
    ? {
        income: 'Daromad summasi (UZS)',
        itPark: 'IT Park rezidenti (7.5%)',
        results: 'Natijalar',
        taxRate: 'Soliq stavkasi',
        taxAmount: 'Soliq summasi',
        netIncome: 'Sof daromad',
        placeholder: 'Summani kiriting',
      }
    : {
        income: 'Сумма дохода (UZS)',
        itPark: 'Резидент IT Park (7.5%)',
        results: 'Результаты',
        taxRate: 'Ставка налога',
        taxAmount: 'Сумма налога',
        netIncome: 'Чистый доход',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.income}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={income} onChange={(e) => setIncome(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="itpark" className="cursor-pointer">{t.itPark}</Label>
            <Switch id="itpark" checked={isITPark} onCheckedChange={setIsITPark} />
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
