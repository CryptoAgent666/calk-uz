'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'

export default function RenovationCalculator() {
  const locale = useLocale()
  const [area, setArea] = useState('')
  const [level, setLevel] = useState<'economy' | 'standard' | 'premium'>('standard')

  const PRICES: Record<string, number> = { economy: 1_500_000, standard: 3_000_000, premium: 6_000_000 }

  const result = useMemo(() => {
    const a = parseFloat(area) || 0
    if (a <= 0) return null
    const pricePerM2 = PRICES[level]
    const materialsCost = a * pricePerM2 * 0.6
    const laborCost = a * pricePerM2 * 0.4
    const totalCost = materialsCost + laborCost
    return { pricePerM2, materialsCost, laborCost, totalCost }
  }, [area, level])

  const t = locale === 'uz'
    ? { area: 'Maydon (m\u00B2)', level: 'Darajasi', economy: 'Iqtisodiy', standard: 'Standart', premium: 'Premium', results: 'Natijalar', materials: 'Materiallar', labor: 'Ish haqi', total: 'Jami xarajat', perM2: 'Narx/m\u00B2', placeholder: 'Maydonni kiriting' }
    : { area: 'Площадь (м\u00B2)', level: 'Уровень', economy: 'Эконом', standard: 'Стандарт', premium: 'Премиум', results: 'Результаты', materials: 'Материалы', labor: 'Работа', total: 'Общая стоимость', perM2: 'Цена/м\u00B2', placeholder: 'Введите площадь' }

  const levelOptions = { economy: t.economy, standard: t.standard, premium: t.premium }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.area}</Label><Input type="number" placeholder={t.placeholder} value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 text-lg" min={1} /></div>
          <div>
            <Label>{t.level}</Label>
            <select value={level} onChange={(e) => setLevel(e.target.value as typeof level)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(levelOptions).map(([k, v]) => <option key={k} value={k}>{v} — {formatCurrency(PRICES[k], 'UZS', locale)}/m\u00B2</option>)}
            </select>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.perM2}</span><span>{formatCurrency(result.pricePerM2, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.materials}</span><span>{formatCurrency(result.materialsCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.labor}</span><span>{formatCurrency(result.laborCost, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.total}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
