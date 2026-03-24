'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateVacationPay } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function VacationPayCalculator() {
  const locale = useLocale()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [vacationDays, setVacationDays] = useState('15')
  const [workingDays, setWorkingDays] = useState('247')

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    const days = parseInt(vacationDays) || 0
    const wd = parseInt(workingDays) || 247
    if (earnings <= 0 || days <= 0) return null
    return calculateVacationPay(earnings, days, wd)
  }, [totalEarnings, vacationDays, workingDays])

  const t = locale === 'uz'
    ? {
        totalEarnings: '12 oylik jami daromad (UZS)',
        vacationDays: 'Ta\'til kunlari',
        workingDays: '12 oydagi ish kunlari',
        results: 'Natijalar',
        avgDaily: 'O\'rtacha kunlik daromad',
        vacationPay: 'Ta\'til puli',
        ndfl: 'JSHSHS (12%)',
        netPay: 'Qo\'lga olinadigan summa',
        placeholder: 'Summani kiriting',
      }
    : {
        totalEarnings: 'Общий заработок за 12 мес. (UZS)',
        vacationDays: 'Дней отпуска',
        workingDays: 'Рабочих дней за 12 мес.',
        results: 'Результаты',
        avgDaily: 'Среднедневной заработок',
        vacationPay: 'Отпускные (брутто)',
        ndfl: 'НДФЛ (12%)',
        netPay: 'К выплате (нетто)',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.totalEarnings}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={totalEarnings} onChange={(e) => setTotalEarnings(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.vacationDays}</Label>
            <Input type="number" value={vacationDays} onChange={(e) => setVacationDays(e.target.value)} className="mt-1" min={1} max={56} />
          </div>
          <div>
            <Label>{t.workingDays}</Label>
            <Input type="number" value={workingDays} onChange={(e) => setWorkingDays(e.target.value)} className="mt-1" min={1} max={365} />
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
              <span className="text-muted-foreground">{t.avgDaily}</span>
              <span>{formatCurrency(result.averageDailyEarnings, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.vacationPay}</span>
              <span>{formatCurrency(result.vacationPay, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.ndfl}</span>
              <span className="text-destructive">-{formatCurrency(result.ndflAmount, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.netPay}</span>
              <span className="text-primary">{formatCurrency(result.netVacationPay, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
