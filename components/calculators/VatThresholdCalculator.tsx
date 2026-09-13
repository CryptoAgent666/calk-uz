'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateVatThreshold } from '@/lib/calculators/vat'
import { formatCurrency } from '@/lib/utils'

export default function VatThresholdCalculator() {
  const locale = useLocale()
  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [months, setMonths] = useState('12')

  const result = useMemo(() => {
    const rev = parseFloat(monthlyRevenue.replace(/\s/g, '')) || 0
    const m = parseInt(months) || 12
    if (rev <= 0) return null
    const turnovers = Array(m).fill(rev)
    return calculateVatThreshold(turnovers)
  }, [monthlyRevenue, months])

  const t = locale === 'uz'
    ? {
        monthlyRevenue: 'Oylik tushum (UZS)',
        months: 'Oylar soni',
        results: 'Natijalar',
        currentTurnover: 'Joriy aylanma',
        threshold: 'QQS chegarasi',
        remaining: 'Chegaraga qolgan',
        percentUsed: 'Ishlatilgan foiz',
        mustRegister: "QQSga ro'yxatdan o'tish kerak",
        noNeed: "QQSga ro'yxat shart emas",
        monthsToThreshold: 'Chegaraga yetguncha (oy)',
        placeholder: 'Summani kiriting',
      }
    : {
        monthlyRevenue: 'Ежемесячная выручка (UZS)',
        months: 'Количество месяцев',
        results: 'Результаты',
        currentTurnover: 'Текущий оборот',
        threshold: 'Порог НДС',
        remaining: 'Осталось до порога',
        percentUsed: 'Использовано',
        mustRegister: 'Необходима регистрация НДС',
        noNeed: 'Регистрация НДС не требуется',
        monthsToThreshold: 'Месяцев до порога',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.monthlyRevenue}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.months}</Label>
            <Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1 w-24" min={1} max={24} />
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
              <span className="text-muted-foreground">{t.currentTurnover}</span>
              <span>{formatCurrency(result.currentTurnover, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.threshold}</span>
              <span>{formatCurrency(result.threshold, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.remaining}</span>
              <span>{formatCurrency(result.remainingToThreshold, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.percentUsed}</span>
              <span>{result.percentUsed.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${Math.min(100, result.percentUsed)}%` }} />
            </div>
            {result.estimatedMonthsToThreshold > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.monthsToThreshold}</span>
                <span>{result.estimatedMonthsToThreshold}</span>
              </div>
            )}
            <div className="text-center pt-2">
              <Badge variant={result.mustRegister ? 'destructive' : 'secondary'}>
                {result.mustRegister ? t.mustRegister : t.noNeed}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
