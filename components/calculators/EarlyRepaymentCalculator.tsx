'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { calculateEarlyRepayment } from '@/lib/calculators/credit'
import { formatCurrency } from '@/lib/utils'

export default function EarlyRepaymentCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('24')
  const [term, setTerm] = useState('24')
  const [earlyMonth, setEarlyMonth] = useState('6')
  const [earlyAmount, setEarlyAmount] = useState('')
  const [reduceType, setReduceType] = useState<'term' | 'payment'>('term')

  const result = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    const em = parseInt(earlyMonth) || 0
    const ea = parseFloat(earlyAmount.replace(/\s/g, '')) || 0
    if (a <= 0 || r <= 0 || t <= 0 || em <= 0 || ea <= 0 || em > t) return null
    return calculateEarlyRepayment(a, r, t, em, ea, reduceType)
  }, [amount, rate, term, earlyMonth, earlyAmount, reduceType])

  const t = locale === 'uz'
    ? {
        amount: 'Kredit summasi (UZS)',
        rate: 'Yillik stavka (%)',
        term: 'Muddat (oy)',
        earlyMonth: 'Muddatidan oldin to\'lash oyi',
        earlyAmount: 'Muddatidan oldin to\'lash summasi (UZS)',
        reduceTerm: 'Muddatni qisqartirish',
        reducePayment: 'To\'lovni kamaytirish',
        results: 'Natijalar',
        savedInterest: 'Tejab qolingan foiz',
        newTerm: 'Yangi muddat (oy)',
        newPayment: 'Yangi oylik to\'lov',
        placeholder: 'Summani kiriting',
      }
    : {
        amount: 'Сумма кредита (UZS)',
        rate: 'Годовая ставка (%)',
        term: 'Срок (месяцев)',
        earlyMonth: 'Месяц досрочного погашения',
        earlyAmount: 'Сумма досрочного погашения (UZS)',
        reduceTerm: 'Сократить срок',
        reducePayment: 'Уменьшить платёж',
        results: 'Результаты',
        savedInterest: 'Экономия на процентах',
        newTerm: 'Новый срок (мес.)',
        newPayment: 'Новый ежемесячный платёж',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.rate}</Label>
              <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-1" min={1} max={50} step={0.5} />
            </div>
            <div>
              <Label>{t.term}</Label>
              <Input type="number" value={term} onChange={(e) => setTerm(e.target.value)} className="mt-1" min={1} max={360} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.earlyMonth}</Label>
              <Input type="number" value={earlyMonth} onChange={(e) => setEarlyMonth(e.target.value)} className="mt-1" min={1} max={parseInt(term) || 360} />
            </div>
            <div>
              <Label>{t.earlyAmount}</Label>
              <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={earlyAmount} onChange={(e) => setEarlyAmount(e.target.value)} className="mt-1" />
            </div>
          </div>
          <Tabs value={reduceType} onValueChange={(v) => setReduceType(v as typeof reduceType)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="term">{t.reduceTerm}</TabsTrigger>
              <TabsTrigger value="payment">{t.reducePayment}</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between font-bold text-lg">
              <span className="text-muted-foreground">{t.savedInterest}</span>
              <span className="text-green-600">{formatCurrency(result.savedInterest, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.newTerm}</span>
              <span>{result.newTermMonths}</span>
            </div>
            {result.newMonthlyPayment > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.newPayment}</span>
                <span className="text-primary">{formatCurrency(result.newMonthlyPayment, 'UZS', locale)}</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
