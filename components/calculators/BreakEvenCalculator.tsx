'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateBreakEven } from '@/lib/calculators/business'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function BreakEvenCalculator() {
  const locale = useLocale()
  const [fixedCosts, setFixedCosts] = useState('')
  const [variableCost, setVariableCost] = useState('')
  const [price, setPrice] = useState('')

  const result = useMemo(() => {
    const fc = parseFloat(fixedCosts.replace(/\s/g, '')) || 0
    const vc = parseFloat(variableCost.replace(/\s/g, '')) || 0
    const p = parseFloat(price.replace(/\s/g, '')) || 0
    if (fc <= 0 || p <= 0) return null
    return calculateBreakEven(fc, vc, p)
  }, [fixedCosts, variableCost, price])

  const t = locale === 'uz'
    ? { fixedCosts: 'Doimiy xarajatlar (UZS)', variableCost: 'O\'zgaruvchan xarajat/birlik (UZS)', price: 'Sotish narxi/birlik (UZS)', breakEvenUnits: 'Zarar ko\'rmaslik nuqtasi (birlik)', breakEvenRevenue: 'Zarar ko\'rmaslik nuqtasi (UZS)', contributionMargin: 'Kontribusion marja', placeholder: 'Summani kiriting' }
    : { fixedCosts: 'Постоянные расходы (UZS)', variableCost: 'Переменные расходы/ед. (UZS)', price: 'Цена продажи/ед. (UZS)', breakEvenUnits: 'Точка безубыточности (ед.)', breakEvenRevenue: 'Точка безубыточности (UZS)', contributionMargin: 'Маржинальная прибыль', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.fixedCosts}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.variableCost}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={variableCost} onChange={(e) => setVariableCost(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.price}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1" /></div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-primary/30"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.breakEvenUnits}</p><p className="text-xl font-bold text-primary mt-1">{formatNumber(result.breakEvenUnits, locale)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.breakEvenRevenue}</p><p className="text-xl font-bold mt-1">{formatCurrency(result.breakEvenRevenue, 'UZS', locale)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.contributionMargin}</p><p className="text-xl font-bold mt-1">{(result.contributionMarginRatio * 100).toFixed(1)}%</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
