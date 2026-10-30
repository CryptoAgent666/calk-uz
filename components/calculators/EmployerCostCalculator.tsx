'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { calculateEmployerCost } from '@/lib/calculators/business'
import { formatCurrency } from '@/lib/utils'

export default function EmployerCostCalculator() {
  const locale = useLocale()
  const [salary, setSalary] = useState('')
  const [isBudgetOrg, setIsBudgetOrg] = useState(false)

  const result = useMemo(() => {
    const s = parseFloat(salary.replace(/\s/g, '')) || 0
    if (s <= 0) return null
    return calculateEmployerCost(s, isBudgetOrg)
  }, [salary, isBudgetOrg])

  const t = locale === 'uz'
    ? { salary: 'Brutto maosh (UZS)', budgetOrg: 'Byudjet tashkiloti', results: 'Natijalar', grossSalary: 'Brutto maosh', socialTax: 'Ijtimoiy soliq', netSalary: 'Xodim qo\'lga oladi', totalCost: 'Ish beruvchi uchun jami', overhead: 'Qo\'shimcha xarajat', placeholder: 'Summani kiriting' }
    : { salary: 'Зарплата брутто (UZS)', budgetOrg: 'Бюджетная организация', results: 'Результаты', grossSalary: 'Зарплата брутто', socialTax: 'Социальный налог', netSalary: 'Сотрудник получит', totalCost: 'Затраты работодателя', overhead: 'Накладные расходы', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.salary}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 text-lg" /></div>
          <div className="flex items-center justify-between"><Label htmlFor="budget" className="cursor-pointer">{t.budgetOrg}</Label><Switch id="budget" checked={isBudgetOrg} onCheckedChange={setIsBudgetOrg} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.grossSalary}</span><span>{formatCurrency(result.grossSalary, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.socialTax}</span><span className="text-destructive">{formatCurrency(result.socialTax, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.netSalary}</span><span>{formatCurrency(result.netSalary, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
            <div className="text-center pt-2"><Badge variant="secondary">{t.overhead}: {result.overheadPercent.toFixed(1)}%</Badge></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
