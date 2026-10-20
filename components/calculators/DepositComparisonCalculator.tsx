'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateDeposit } from '@/lib/calculators/deposit'
import { formatCurrency } from '@/lib/utils'

export default function DepositComparisonCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('10000000')
  const [term, setTerm] = useState('12')
  const [rate1, setRate1] = useState('22')
  const [rate2, setRate2] = useState('24')
  const [rate3, setRate3] = useState('20')

  const results = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    const t = parseInt(term) || 0
    if (a <= 0 || t <= 0) return null
    const rates = [parseFloat(rate1) || 0, parseFloat(rate2) || 0, parseFloat(rate3) || 0].filter(r => r > 0)
    return rates.map(rate => ({
      rate,
      result: calculateDeposit({ initialAmount: a, annualRate: rate, termMonths: t, capitalization: 'monthly' })
    }))
  }, [amount, term, rate1, rate2, rate3])

  const t = locale === 'uz'
    ? {
        amount: 'Summa (UZS)',
        term: 'Muddat (oy)',
        rate: 'Stavka',
        bank: 'Bank',
        results: 'Solishtirish',
        finalAmount: 'Yakuniy summa',
        interest: 'Foiz daromadi',
        placeholder: 'Summani kiriting',
      }
    : {
        amount: 'Сумма (UZS)',
        term: 'Срок (месяцев)',
        rate: 'Ставка',
        bank: 'Банк',
        results: 'Сравнение',
        finalAmount: 'Итоговая сумма',
        interest: 'Процентный доход',
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
          <div>
            <Label>{t.term}</Label>
            <Input type="number" value={term} onChange={(e) => setTerm(e.target.value)} className="mt-1 w-24" min={1} max={60} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>{t.bank} 1 (%)</Label>
              <Input type="number" value={rate1} onChange={(e) => setRate1(e.target.value)} className="mt-1" min={0} max={50} step={0.5} />
            </div>
            <div>
              <Label>{t.bank} 2 (%)</Label>
              <Input type="number" value={rate2} onChange={(e) => setRate2(e.target.value)} className="mt-1" min={0} max={50} step={0.5} />
            </div>
            <div>
              <Label>{t.bank} 3 (%)</Label>
              <Input type="number" value={rate3} onChange={(e) => setRate3(e.target.value)} className="mt-1" min={0} max={50} step={0.5} />
            </div>
          </div>
        </CardContent>
      </Card>

      {results && results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {results.map((item, i) => (
            <Card key={i} className={i === results.reduce((best, curr, idx) => curr.result.totalInterest > results[best].result.totalInterest ? idx : best, 0) ? 'border-primary/30' : ''}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{t.bank} {i + 1} — {item.rate}%</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.finalAmount}</span>
                  <span className="font-medium">{formatCurrency(item.result.finalAmount, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.interest}</span>
                  <span className="font-medium text-green-600">{formatCurrency(item.result.totalInterest, 'UZS', locale)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
