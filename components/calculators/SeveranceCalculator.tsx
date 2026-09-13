'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateSeverance } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function SeveranceCalculator() {
  const locale = useLocale()
  const [avgSalary, setAvgSalary] = useState('')
  const [months, setMonths] = useState('2')
  const [unusedDays, setUnusedDays] = useState('0')

  const result = useMemo(() => {
    const sal = parseFloat(avgSalary.replace(/\s/g, '')) || 0
    const m = parseInt(months) || 0
    const d = parseInt(unusedDays) || 0
    if (sal <= 0) return null
    return calculateSeverance(sal, m, d)
  }, [avgSalary, months, unusedDays])

  const t = locale === 'uz'
    ? {
        avgSalary: 'O\'rtacha oylik maosh (UZS)',
        months: 'Kompensatsiya oylari',
        unusedDays: 'Ishlatilmagan ta\'til kunlari',
        results: 'Natijalar',
        severancePay: 'Ishdan bo\'shatish puli',
        vacationComp: 'Ta\'til kompensatsiyasi',
        totalPayout: 'Jami to\'lov',
        placeholder: 'Summani kiriting',
      }
    : {
        avgSalary: 'Средняя зарплата (UZS)',
        months: 'Месяцев компенсации',
        unusedDays: 'Неиспользованных дней отпуска',
        results: 'Результаты',
        severancePay: 'Выходное пособие',
        vacationComp: 'Компенсация отпуска',
        totalPayout: 'Итого к выплате',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.avgSalary}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={avgSalary} onChange={(e) => setAvgSalary(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.months}</Label>
            <Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1" min={1} max={12} />
          </div>
          <div>
            <Label>{t.unusedDays}</Label>
            <Input type="number" value={unusedDays} onChange={(e) => setUnusedDays(e.target.value)} className="mt-1" min={0} max={56} />
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
              <span className="text-muted-foreground">{t.severancePay}</span>
              <span>{formatCurrency(result.severancePay, 'UZS', locale)}</span>
            </div>
            {result.vacationCompensation > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.vacationComp}</span>
                <span>{formatCurrency(result.vacationCompensation, 'UZS', locale)}</span>
              </div>
            )}
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.totalPayout}</span>
              <span className="text-primary">{formatCurrency(result.totalPayout, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
