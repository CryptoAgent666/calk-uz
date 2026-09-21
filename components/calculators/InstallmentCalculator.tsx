'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { calculateCredit } from '@/lib/calculators/credit'
import { formatCurrency } from '@/lib/utils'

export default function InstallmentCalculator() {
  const locale = useLocale()
  const [price, setPrice] = useState('')
  const [rate, setRate] = useState('0')
  const [term, setTerm] = useState('12')

  const result = useMemo(() => {
    const p = parseFloat(price.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    if (p <= 0 || t <= 0) return null
    return calculateCredit({ amount: p, annualRate: r, termMonths: t, type: 'annuity' })
  }, [price, rate, term])

  const t = locale === 'uz'
    ? {
        price: 'Tovar narxi (UZS)',
        rate: 'Yillik ustama (%)',
        term: 'Muddat (oy)',
        monthlyPayment: 'Oylik to\'lov',
        totalPayment: 'Jami to\'lov',
        overpayment: 'Ortiqcha to\'lov',
        placeholder: 'Summani kiriting',
      }
    : {
        price: 'Стоимость товара (UZS)',
        rate: 'Годовая надбавка (%)',
        term: 'Срок (месяцев)',
        monthlyPayment: 'Ежемесячный платёж',
        totalPayment: 'Общая сумма',
        overpayment: 'Переплата',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <Label>{t.price}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.rate}</Label>
              <span className="text-sm font-medium text-primary">{rate}%</span>
            </div>
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={0} max={50} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.term}</Label>
              <span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span>
            </div>
            <Slider value={[parseInt(term) || 0]} onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))} min={1} max={36} step={1} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              <p className="text-sm text-muted-foreground">{t.overpayment}</p>
              <p className="text-lg font-bold text-destructive mt-1">{formatCurrency(result.totalInterest, 'UZS', locale)}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
