'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { calculateCredit } from '@/lib/calculators/credit'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function MortgageCalculator() {
  const locale = useLocale()
  const [propertyPrice, setPropertyPrice] = useState('500000000')
  const [downPaymentPercent, setDownPaymentPercent] = useState('20')
  const [rate, setRate] = useState('22')
  const [term, setTerm] = useState('180')
  const [type, setType] = useState<'annuity' | 'differentiated'>('annuity')

  const result = useMemo(() => {
    const price = parseFloat(propertyPrice.replace(/\s/g, '')) || 0
    const dp = parseFloat(downPaymentPercent) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    if (price <= 0 || r <= 0 || t <= 0) return null
    const downPayment = price * dp / 100
    const loanAmount = price - downPayment
    return { ...calculateCredit({ amount: loanAmount, annualRate: r, termMonths: t, type }), downPayment, loanAmount }
  }, [propertyPrice, downPaymentPercent, rate, term, type])

  const t = locale === 'uz'
    ? {
        propertyPrice: 'Uy-joy narxi (UZS)',
        downPayment: 'Boshlang\'ich to\'lov (%)',
        rate: 'Yillik foiz stavkasi (%)',
        term: 'Muddat (oy)',
        annuity: 'Annuitet',
        differentiated: 'Differensial',
        results: 'Natijalar',
        downPaymentAmount: 'Boshlang\'ich to\'lov',
        loanAmount: 'Kredit summasi',
        monthlyPayment: 'Oylik to\'lov',
        totalPayment: 'Jami to\'lov',
        totalInterest: 'Jami foiz',
        overpayment: 'Ortiqcha to\'lov',
      }
    : {
        propertyPrice: 'Стоимость жилья (UZS)',
        downPayment: 'Первоначальный взнос (%)',
        rate: 'Годовая ставка (%)',
        term: 'Срок (месяцев)',
        annuity: 'Аннуитетный',
        differentiated: 'Дифференцированный',
        results: 'Результаты',
        downPaymentAmount: 'Первоначальный взнос',
        loanAmount: 'Сумма кредита',
        monthlyPayment: 'Ежемесячный платёж',
        totalPayment: 'Общая сумма выплат',
        totalInterest: 'Общая сумма процентов',
        overpayment: 'Переплата',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <Label>{t.propertyPrice}</Label>
            <Input type="text" inputMode="numeric" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.downPayment}</Label>
              <span className="text-sm font-medium text-primary">{downPaymentPercent}%</span>
            </div>
            <Slider value={[parseFloat(downPaymentPercent) || 0]} onValueChange={(v) => setDownPaymentPercent(String(Array.isArray(v) ? v[0] : v))} min={0} max={90} step={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.rate}</Label>
              <span className="text-sm font-medium text-primary">{rate}%</span>
            </div>
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={1} max={40} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.term}</Label>
              <span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span>
            </div>
            <Slider value={[parseInt(term) || 0]} onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))} min={12} max={360} step={12} />
          </div>
          <Tabs value={type} onValueChange={(v) => setType(v as typeof type)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="annuity">{t.annuity}</TabsTrigger>
              <TabsTrigger value="differentiated">{t.differentiated}</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.downPaymentAmount}</p>
              <p className="text-lg font-bold mt-1">{formatCurrency(result.downPayment, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.loanAmount}</p>
              <p className="text-lg font-bold mt-1">{formatCurrency(result.loanAmount, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.monthlyPayment}</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.monthlyPayment, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalPayment}</p>
              <p className="text-lg font-bold mt-1">{formatCurrency(result.totalPayment, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalInterest}</p>
              <p className="text-lg font-bold text-destructive mt-1">{formatCurrency(result.totalInterest, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.overpayment}</p>
              <p className="text-lg font-bold mt-1">{result.overpaymentPercent.toFixed(1)}%</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
