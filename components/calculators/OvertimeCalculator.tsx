'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateOvertime } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function OvertimeCalculator() {
  const locale = useLocale()
  const [salary, setSalary] = useState('')
  const [hours, setHours] = useState('')
  const [isHoliday, setIsHoliday] = useState(false)

  const result = useMemo(() => {
    const sal = parseFloat(salary.replace(/\s/g, '')) || 0
    const h = parseFloat(hours) || 0
    if (sal <= 0 || h <= 0) return null
    return calculateOvertime(sal, h, isHoliday)
  }, [salary, hours, isHoliday])

  const t = locale === 'uz'
    ? {
        salary: 'Oylik maosh (UZS)',
        hours: 'Qo\'shimcha soatlar',
        isHoliday: 'Dam olish / bayram kuni',
        results: 'Natijalar',
        hourlyRate: 'Soatlik stavka',
        multiplier: 'Koeffitsiyent',
        overtimePay: 'Qo\'shimcha haq',
        placeholder: 'Summani kiriting',
      }
    : {
        salary: 'Месячная зарплата (UZS)',
        hours: 'Часов переработки',
        isHoliday: 'Выходной / праздничный день',
        results: 'Результаты',
        hourlyRate: 'Часовая ставка',
        multiplier: 'Коэффициент',
        overtimePay: 'Оплата переработки',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.salary}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.hours}</Label>
            <Input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className="mt-1" min={1} step={0.5} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="holiday" className="cursor-pointer">{t.isHoliday}</Label>
            <Switch id="holiday" checked={isHoliday} onCheckedChange={setIsHoliday} />
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
              <span className="text-muted-foreground">{t.hourlyRate}</span>
              <span>{formatCurrency(result.hourlyRate, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.multiplier}</span>
              <span>x{result.overtimeMultiplier}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.overtimePay}</span>
              <span className="text-primary">{formatCurrency(result.overtimePay, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
