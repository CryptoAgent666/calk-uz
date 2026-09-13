'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'

export default function RentalCalculator() {
  const locale = useLocale()
  const [monthlyRent, setMonthlyRent] = useState('')
  const [utilities, setUtilities] = useState('500000')
  const [deposit, setDeposit] = useState('1')
  const [months, setMonths] = useState('12')

  const result = useMemo(() => {
    const rent = parseFloat(monthlyRent.replace(/\s/g, '')) || 0
    const util = parseFloat(utilities.replace(/\s/g, '')) || 0
    const dep = parseInt(deposit) || 0
    const m = parseInt(months) || 12
    if (rent <= 0) return null
    const depositAmount = rent * dep
    const monthlyTotal = rent + util
    const annualTotal = monthlyTotal * m + depositAmount
    return { monthlyTotal, depositAmount, annualTotal, rentOnly: rent * m, utilitiesTotal: util * m }
  }, [monthlyRent, utilities, deposit, months])

  const t = locale === 'uz'
    ? { rent: 'Oylik ijara (UZS)', utilities: 'Kommunal (UZS/oy)', deposit: 'Depozit (oylar)', months: 'Oylar soni', results: 'Natijalar', monthlyTotal: 'Oylik jami', depositAmount: 'Depozit', annualTotal: 'Jami xarajat', placeholder: 'Summani kiriting' }
    : { rent: 'Ежемесячная аренда (UZS)', utilities: 'Коммунальные (UZS/мес.)', deposit: 'Депозит (месяцев)', months: 'Кол-во месяцев', results: 'Результаты', monthlyTotal: 'Ежемесячно всего', depositAmount: 'Депозит', annualTotal: 'Итого за период', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.rent}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.utilities}</Label><Input type="text" inputMode="numeric" value={utilities} onChange={(e) => setUtilities(e.target.value)} className="mt-1" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.deposit}</Label><Input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} className="mt-1" min={0} max={6} /></div>
            <div><Label>{t.months}</Label><Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1" min={1} max={60} /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.monthlyTotal}</span><span>{formatCurrency(result.monthlyTotal, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.depositAmount}</span><span>{formatCurrency(result.depositAmount, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.annualTotal}</span><span className="text-primary">{formatCurrency(result.annualTotal, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
