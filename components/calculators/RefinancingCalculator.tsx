'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateCredit } from '@/lib/calculators/credit'
import { formatCurrency } from '@/lib/utils'

export default function RefinancingCalculator() {
  const locale = useLocale()
  const [remainingDebt, setRemainingDebt] = useState('')
  const [currentRate, setCurrentRate] = useState('28')
  const [currentTerm, setCurrentTerm] = useState('18')
  const [newRate, setNewRate] = useState('22')
  const [newTerm, setNewTerm] = useState('18')

  const result = useMemo(() => {
    const debt = parseFloat(remainingDebt.replace(/\s/g, '')) || 0
    const cr = parseFloat(currentRate) || 0
    const ct = parseInt(currentTerm) || 0
    const nr = parseFloat(newRate) || 0
    const nt = parseInt(newTerm) || 0
    if (debt <= 0 || cr <= 0 || ct <= 0 || nr <= 0 || nt <= 0) return null
    const current = calculateCredit({ amount: debt, annualRate: cr, termMonths: ct, type: 'annuity' })
    const refined = calculateCredit({ amount: debt, annualRate: nr, termMonths: nt, type: 'annuity' })
    return {
      currentMonthly: current.monthlyPayment,
      currentTotal: current.totalPayment,
      currentInterest: current.totalInterest,
      newMonthly: refined.monthlyPayment,
      newTotal: refined.totalPayment,
      newInterest: refined.totalInterest,
      monthlySaving: current.monthlyPayment - refined.monthlyPayment,
      totalSaving: current.totalPayment - refined.totalPayment,
    }
  }, [remainingDebt, currentRate, currentTerm, newRate, newTerm])

  const t = locale === 'uz'
    ? {
        remainingDebt: 'Qolgan qarz (UZS)',
        currentRate: 'Joriy stavka (%)',
        currentTerm: 'Qolgan muddat (oy)',
        newRate: 'Yangi stavka (%)',
        newTerm: 'Yangi muddat (oy)',
        results: 'Natijalar',
        currentMonthly: 'Joriy oylik to\'lov',
        newMonthly: 'Yangi oylik to\'lov',
        monthlySaving: 'Oylik tejamkorlik',
        totalSaving: 'Jami tejamkorlik',
        placeholder: 'Summani kiriting',
      }
    : {
        remainingDebt: 'Остаток долга (UZS)',
        currentRate: 'Текущая ставка (%)',
        currentTerm: 'Оставшийся срок (мес.)',
        newRate: 'Новая ставка (%)',
        newTerm: 'Новый срок (мес.)',
        results: 'Результаты',
        currentMonthly: 'Текущий платёж',
        newMonthly: 'Новый платёж',
        monthlySaving: 'Экономия в месяц',
        totalSaving: 'Общая экономия',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.remainingDebt}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={remainingDebt} onChange={(e) => setRemainingDebt(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.currentRate}</Label>
              <Input type="number" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} className="mt-1" min={1} max={50} step={0.5} />
            </div>
            <div>
              <Label>{t.currentTerm}</Label>
              <Input type="number" value={currentTerm} onChange={(e) => setCurrentTerm(e.target.value)} className="mt-1" min={1} max={360} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.newRate}</Label>
              <Input type="number" value={newRate} onChange={(e) => setNewRate(e.target.value)} className="mt-1" min={1} max={50} step={0.5} />
            </div>
            <div>
              <Label>{t.newTerm}</Label>
              <Input type="number" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} className="mt-1" min={1} max={360} />
            </div>
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
              <span className="text-muted-foreground">{t.currentMonthly}</span>
              <span>{formatCurrency(result.currentMonthly, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.newMonthly}</span>
              <span className="text-primary">{formatCurrency(result.newMonthly, 'UZS', locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>{t.monthlySaving}</span>
              <span className={result.monthlySaving > 0 ? 'text-green-600' : 'text-destructive'}>
                {formatCurrency(result.monthlySaving, 'UZS', locale)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>{t.totalSaving}</span>
              <span className={result.totalSaving > 0 ? 'text-green-600' : 'text-destructive'}>
                {formatCurrency(result.totalSaving, 'UZS', locale)}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
