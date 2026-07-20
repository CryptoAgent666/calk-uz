'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateAlimony } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function AlimonyCalculator() {
  const locale = useLocale()
  const [income, setIncome] = useState('')
  const [children, setChildren] = useState('1')

  const result = useMemo(() => {
    const val = parseFloat(income.replace(/\s/g, '')) || 0
    const c = parseInt(children) || 1
    if (val <= 0) return null
    return calculateAlimony(val, c)
  }, [income, children])

  const t = locale === 'uz'
    ? {
        income: 'Oylik daromad — soliqdan keyin (UZS)',
        children: 'Bolalar soni',
        results: 'Natijalar',
        rate: 'Alimentlar stavkasi',
        amount: 'Alimentlar summasi',
        remaining: 'Qolgan daromad',
        placeholder: 'Summani kiriting',
      }
    : {
        income: 'Ежемесячный доход — после налогов (UZS)',
        children: 'Количество детей',
        results: 'Результаты',
        rate: 'Ставка алиментов',
        amount: 'Сумма алиментов',
        remaining: 'Остаток дохода',
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
          <div>
            <Label>{t.children}</Label>
            <Input type="number" value={children} onChange={(e) => setChildren(e.target.value)} className="mt-1 w-24" min={1} max={10} />
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
              <span className="text-muted-foreground">{t.rate}</span>
              <span>{result.alimonyRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.amount}</span>
              <span className="text-destructive">{formatCurrency(result.alimonyAmount, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.remaining}</span>
              <span className="text-primary">{formatCurrency(result.remainingIncome, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
