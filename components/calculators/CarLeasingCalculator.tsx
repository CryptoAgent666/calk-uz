'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { calculateLeasing } from '@/lib/calculators/auto'
import { formatCurrency } from '@/lib/utils'

export default function CarLeasingCalculator() {
  const locale = useLocale()
  const [carPrice, setCarPrice] = useState('300000000')
  const [downPayment, setDownPayment] = useState('20')
  const [term, setTerm] = useState('36')
  const [rate, setRate] = useState('22')
  const [residual, setResidual] = useState('10')

  const result = useMemo(() => {
    const p = parseFloat(carPrice.replace(/\s/g, '')) || 0
    const dp = parseFloat(downPayment) || 0
    const t = parseInt(term) || 0
    const r = parseFloat(rate) || 0
    const res = parseFloat(residual) || 0
    if (p <= 0 || t <= 0) return null
    return calculateLeasing(p, dp, t, r, res)
  }, [carPrice, downPayment, term, rate, residual])

  const t = locale === 'uz'
    ? {
        carPrice: 'Avtomobil narxi (UZS)', downPayment: 'Boshlang\'ich to\'lov (%)',
        term: 'Muddat (oy)', rate: 'Yillik stavka (%)', residual: 'Qoldiq qiymat (%)',
        monthlyPayment: 'Oylik to\'lov', totalPayments: 'Jami to\'lovlar',
        totalInterest: 'Jami foiz', totalCost: 'Jami xarajat',
      }
    : {
        carPrice: 'Стоимость авто (UZS)', downPayment: 'Первоначальный взнос (%)',
        term: 'Срок (месяцев)', rate: 'Годовая ставка (%)', residual: 'Остаточная стоимость (%)',
        monthlyPayment: 'Ежемесячный платёж', totalPayments: 'Общая сумма платежей',
        totalInterest: 'Общая сумма процентов', totalCost: 'Общая стоимость',
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
            <div className="flex justify-between mb-2"><Label>{t.downPayment}</Label><span className="text-sm font-medium text-primary">{downPayment}%</span></div>
            <Slider value={[parseFloat(downPayment) || 0]} onValueChange={(v) => setDownPayment(String(Array.isArray(v) ? v[0] : v))} min={0} max={70} step={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2"><Label>{t.rate}</Label><span className="text-sm font-medium text-primary">{rate}%</span></div>
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={1} max={40} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2"><Label>{t.term}</Label><span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span></div>
            <Slider value={[parseInt(term) || 0]} onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))} min={6} max={60} step={6} />
          </div>
          <div>
            <div className="flex justify-between mb-2"><Label>{t.residual}</Label><span className="text-sm font-medium text-primary">{residual}%</span></div>
            <Slider value={[parseFloat(residual) || 0]} onValueChange={(v) => setResidual(String(Array.isArray(v) ? v[0] : v))} min={0} max={40} step={5} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.monthlyPayment}</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.monthlyPayment, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalPayments}</p>
              <p className="text-lg font-bold mt-1">{formatCurrency(result.totalPayments, 'UZS', locale)}</p>
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
              <p className="text-sm text-muted-foreground">{t.totalCost}</p>
              <p className="text-lg font-bold mt-1">{formatCurrency(result.totalCost, 'UZS', locale)}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
