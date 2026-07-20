'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateIPTax } from '@/lib/calculators/business'
import { formatCurrency } from '@/lib/utils'

export default function IpCalculator() {
  const locale = useLocale()
  const [revenue, setRevenue] = useState('')
  const [regime, setRegime] = useState<'turnover' | 'self_employed' | 'general'>('turnover')

  const result = useMemo(() => {
    const r = parseFloat(revenue.replace(/\s/g, '')) || 0
    if (r <= 0) return null
    return calculateIPTax(r, regime)
  }, [revenue, regime])

  const t = locale === 'uz'
    ? { revenue: 'Yillik daromad (UZS)', regime: 'Soliq rejimi', turnover: 'Aylanma solig\'i (4%)', selfEmployed: 'O\'z-o\'zini band (1%)', general: 'Umumiy rejim (12%)', results: 'Natijalar', tax: 'Soliq', socialTax: 'Ijtimoiy soliq', inps: 'MHTJ', totalBurden: 'Jami soliq yuki', netIncome: 'Sof daromad', effectiveRate: 'Samarali stavka', placeholder: 'Summani kiriting' }
    : { revenue: 'Годовой доход (UZS)', regime: 'Налоговый режим', turnover: 'Налог с оборота (4%)', selfEmployed: 'Самозанятый (1%)', general: 'Общий режим (12%)', results: 'Результаты', tax: 'Налог', socialTax: 'Социальный налог', inps: 'ИНПС', totalBurden: 'Общая нагрузка', netIncome: 'Чистый доход', effectiveRate: 'Эффективная ставка', placeholder: 'Введите сумму' }

  const regimeOptions = { turnover: t.turnover, self_employed: t.selfEmployed, general: t.general }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.revenue}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={revenue} onChange={(e) => setRevenue(e.target.value)} className="mt-1 text-lg" /></div>
          <div>
            <Label>{t.regime}</Label>
            <select value={regime} onChange={(e) => setRegime(e.target.value as typeof regime)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(regimeOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.tax} ({result.taxRate}%)</span><span className="text-destructive">{formatCurrency(result.taxAmount, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.socialTax}</span><span>{formatCurrency(result.socialTax, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.inps}</span><span>{formatCurrency(result.inps, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalBurden}</span><span className="text-destructive">{formatCurrency(result.totalTaxBurden, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.netIncome}</span><span className="text-primary">{formatCurrency(result.netIncome, 'UZS', locale)}</span></div>
            <div className="text-center pt-2"><Badge variant="secondary">{t.effectiveRate}: {result.effectiveTaxRate.toFixed(1)}%</Badge></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
