'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateCottonYield } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function CottonYieldCalculator() {
  const locale = useLocale()
  const [area, setArea] = useState('')
  const [yieldPerHa, setYieldPerHa] = useState('2800')
  const [pricePerKg, setPricePerKg] = useState('6000')
  const [costsPerHa, setCostsPerHa] = useState('8000000')

  const result = useMemo(() => {
    const a = parseFloat(area) || 0
    const y = parseFloat(yieldPerHa) || 0
    const p = parseFloat(pricePerKg) || 0
    const c = parseFloat(costsPerHa.replace(/\s/g, '')) || 0
    if (a <= 0) return null
    return calculateCottonYield(a, y, p, c)
  }, [area, yieldPerHa, pricePerKg, costsPerHa])

  const t = locale === 'uz'
    ? { area: 'Maydon (gektar)', yield: 'Hosildorlik (kg/ga)', price: 'Narx (UZS/kg)', costs: 'Xarajatlar (UZS/ga)', results: 'Natijalar', totalYield: 'Jami hosil (kg)', grossRevenue: 'Yalpi daromad', totalCosts: 'Jami xarajatlar', netProfit: 'Sof foyda', placeholder: 'Gektarni kiriting' }
    : { area: 'Площадь (гектар)', yield: 'Урожайность (кг/га)', price: 'Цена (UZS/кг)', costs: 'Затраты (UZS/га)', results: 'Результаты', totalYield: 'Общий урожай (кг)', grossRevenue: 'Валовой доход', totalCosts: 'Общие затраты', netProfit: 'Чистая прибыль', placeholder: 'Введите площадь' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.area}</Label><Input type="number" placeholder={t.placeholder} value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 text-lg" min={0.1} step={0.1} /></div>
          <div className="grid grid-cols-3 gap-4">
            <div><Label>{t.yield}</Label><Input type="number" value={yieldPerHa} onChange={(e) => setYieldPerHa(e.target.value)} className="mt-1" /></div>
            <div><Label>{t.price}</Label><Input type="number" value={pricePerKg} onChange={(e) => setPricePerKg(e.target.value)} className="mt-1" /></div>
            <div><Label>{t.costs}</Label><Input type="text" inputMode="numeric" value={costsPerHa} onChange={(e) => setCostsPerHa(e.target.value)} className="mt-1" /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalYield}</span><span>{formatNumber(result.totalYieldKg, locale)} kg</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.grossRevenue}</span><span>{formatCurrency(result.grossRevenue, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalCosts}</span><span className="text-destructive">{formatCurrency(result.costs, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.netProfit}</span><span className={result.netProfit >= 0 ? 'text-green-600' : 'text-destructive'}>{formatCurrency(result.netProfit, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
