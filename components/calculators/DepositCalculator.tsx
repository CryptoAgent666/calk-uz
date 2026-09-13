'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { calculateDeposit, type CapitalizationType } from '@/lib/calculators/deposit'
import { formatCurrency } from '@/lib/utils'

export default function DepositCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('10000000')
  const [rate, setRate] = useState('23')
  const [term, setTerm] = useState('12')
  const [capitalization, setCapitalization] = useState<CapitalizationType>('monthly')
  const [monthlyTopUp, setMonthlyTopUp] = useState('0')

  const result = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    const topUp = parseFloat(monthlyTopUp.replace(/\s/g, '')) || 0
    if (a <= 0 || r <= 0 || t <= 0) return null
    return calculateDeposit({ initialAmount: a, annualRate: r, termMonths: t, capitalization, monthlyTopUp: topUp })
  }, [amount, rate, term, capitalization, monthlyTopUp])

  const t = locale === 'uz'
    ? {
        amount: 'Boshlang\'ich summa (UZS)',
        rate: 'Yillik foiz stavkasi (%)',
        term: 'Muddat (oy)',
        capitalization: 'Kapitalizatsiya',
        none: 'Yo\'q',
        monthly: 'Oylik',
        quarterly: 'Choraklik',
        annually: 'Yillik',
        monthlyTopUp: 'Oylik to\'ldirish (UZS)',
        results: 'Natijalar',
        finalAmount: 'Yakuniy summa',
        totalInterest: 'Jami foiz',
        effectiveRate: 'Samarali stavka',
        placeholder: 'Summani kiriting',
      }
    : {
        amount: 'Начальная сумма (UZS)',
        rate: 'Годовая ставка (%)',
        term: 'Срок (месяцев)',
        capitalization: 'Капитализация',
        none: 'Нет',
        monthly: 'Ежемес.',
        quarterly: 'Ежекварт.',
        annually: 'Ежегодно',
        monthlyTopUp: 'Ежемесячное пополнение (UZS)',
        results: 'Результаты',
        finalAmount: 'Итоговая сумма',
        totalInterest: 'Общий процент',
        effectiveRate: 'Эффективная ставка',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.rate}</Label>
              <span className="text-sm font-medium text-primary">{rate}%</span>
            </div>
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={1} max={35} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.term}</Label>
              <span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span>
            </div>
            <Slider value={[parseInt(term) || 0]} onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))} min={1} max={60} step={1} />
          </div>
          <div>
            <Label>{t.capitalization}</Label>
            <Tabs value={capitalization} onValueChange={(v) => setCapitalization(v as CapitalizationType)} className="mt-1">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="none">{t.none}</TabsTrigger>
                <TabsTrigger value="monthly">{t.monthly}</TabsTrigger>
                <TabsTrigger value="quarterly">{t.quarterly}</TabsTrigger>
                <TabsTrigger value="annually">{t.annually}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div>
            <Label>{t.monthlyTopUp}</Label>
            <Input type="text" inputMode="numeric" value={monthlyTopUp} onChange={(e) => setMonthlyTopUp(e.target.value)} className="mt-1" />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.finalAmount}</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.finalAmount, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalInterest}</p>
              <p className="text-xl font-bold text-green-600 mt-1">{formatCurrency(result.totalInterest, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.effectiveRate}</p>
              <p className="text-xl font-bold mt-1">{result.effectiveRate.toFixed(2)}%</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
