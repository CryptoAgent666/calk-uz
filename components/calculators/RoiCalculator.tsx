'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateROI } from '@/lib/calculators/business'
import { formatCurrency } from '@/lib/utils'

export default function RoiCalculator() {
  const locale = useLocale()
  const [investment, setInvestment] = useState('')
  const [monthlyReturns, setMonthlyReturns] = useState('')
  const [period, setPeriod] = useState('12')

  const result = useMemo(() => {
    const inv = parseFloat(investment.replace(/\s/g, '')) || 0
    const ret = parseFloat(monthlyReturns.replace(/\s/g, '')) || 0
    const p = parseInt(period) || 0
    if (inv <= 0 || ret <= 0 || p <= 0) return null
    return calculateROI(inv, ret, p)
  }, [investment, monthlyReturns, period])

  const t = locale === 'uz'
    ? { investment: 'Investitsiya (UZS)', monthlyReturns: 'Oylik daromad (UZS)', period: 'Davr (oy)', roi: 'ROI', netProfit: 'Sof foyda', payback: 'Qaytarilish muddati (oy)', totalReturns: 'Jami daromad', placeholder: 'Summani kiriting' }
    : { investment: 'Инвестиция (UZS)', monthlyReturns: 'Ежемесячный доход (UZS)', period: 'Период (мес.)', roi: 'ROI', netProfit: 'Чистая прибыль', payback: 'Срок окупаемости (мес.)', totalReturns: 'Общий доход', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.investment}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={investment} onChange={(e) => setInvestment(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.monthlyReturns}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={monthlyReturns} onChange={(e) => setMonthlyReturns(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.period}</Label><Input type="number" value={period} onChange={(e) => setPeriod(e.target.value)} className="mt-1 w-24" min={1} max={120} /></div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-primary/30"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.roi}</p><p className="text-xl font-bold text-primary mt-1">{result.roi.toFixed(1)}%</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.payback}</p><p className="text-xl font-bold mt-1">{result.paybackMonths}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.netProfit}</p><p className="text-xl font-bold mt-1 text-green-600">{formatCurrency(result.netProfit, 'UZS', locale)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.totalReturns}</p><p className="text-xl font-bold mt-1">{formatCurrency(result.returns, 'UZS', locale)}</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
