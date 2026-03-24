'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { calculateCredit } from '@/lib/calculators/credit'
import { formatCurrency } from '@/lib/utils'

export default function AutoCreditCalculator() {
  const locale = useLocale()
  const [carPrice, setCarPrice] = useState('200000000')
  const [downPaymentPercent, setDownPaymentPercent] = useState('30')
  const [rate, setRate] = useState('24')
  const [term, setTerm] = useState('36')

  const result = useMemo(() => {
    const price = parseFloat(carPrice.replace(/\s/g, '')) || 0
    const dp = parseFloat(downPaymentPercent) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    if (price <= 0 || r <= 0 || t <= 0) return null
    const downPayment = price * dp / 100
    const loanAmount = price - downPayment
    return { ...calculateCredit({ amount: loanAmount, annualRate: r, termMonths: t, type: 'annuity' }), downPayment, loanAmount }
  }, [carPrice, downPaymentPercent, rate, term])

  const t = locale === 'uz'
    ? {
        carPrice: 'Avtomobil narxi (UZS)',
        downPayment: 'Boshlang\'ich to\'lov (%)',
        rate: 'Yillik foiz stavkasi (%)',
        term: 'Muddat (oy)',
        downPaymentAmount: 'Boshlang\'ich to\'lov',
        loanAmount: 'Kredit summasi',
        monthlyPayment: 'Oylik to\'lov',
        totalPayment: 'Jami to\'lov',
        totalInterest: 'Jami foiz',
        overpayment: 'Ortiqcha to\'lov',
      }
    : {
        carPrice: 'Стоимость авто (UZS)',
        downPayment: 'Первоначальный взнос (%)',
        rate: 'Годовая ставка (%)',
        term: 'Срок (месяцев)',
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
            <Label>{t.carPrice}</Label>
            <Input type="text" inputMode="numeric" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} className="mt-1 text-lg" />
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
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={1} max={50} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.term}</Label>
              <span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span>
            </div>
            <Slider value={[parseInt(term) || 0]} onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))} min={6} max={84} step={6} />
          </div>
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
        </div>
      )}
    </div>
  )
}
