'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateFuelConsumption, FUEL_PRICES } from '@/lib/calculators/auto'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function FuelConsumptionCalculator() {
  const locale = useLocale()
  const [distance, setDistance] = useState('100')
  const [consumption, setConsumption] = useState('8')
  const [fuelType, setFuelType] = useState('ai-92')

  const result = useMemo(() => {
    const d = parseFloat(distance) || 0
    const c = parseFloat(consumption) || 0
    if (d <= 0 || c <= 0) return null
    return calculateFuelConsumption(d, c, fuelType)
  }, [distance, consumption, fuelType])

  const t = locale === 'uz'
    ? {
        distance: 'Masofa (km)', consumption: 'Sarfiyot (l/100km)', fuelType: 'Yoqilg\'i turi',
        results: 'Natijalar', totalFuel: 'Jami yoqilg\'i (l)', fuelPrice: 'Yoqilg\'i narxi',
        totalCost: 'Jami xarajat', costPerKm: 'Km uchun xarajat',
      }
    : {
        distance: 'Расстояние (км)', consumption: 'Расход (л/100км)', fuelType: 'Тип топлива',
        results: 'Результаты', totalFuel: 'Всего топлива (л)', fuelPrice: 'Цена топлива',
        totalCost: 'Общая стоимость', costPerKm: 'Стоимость за км',
      }

  const fuelLabels: Record<string, string> = locale === 'uz'
    ? { 'ai-91': 'AI-91', 'ai-92': 'AI-92', 'ai-95': 'AI-95', 'ai-98': 'AI-98', diesel: 'Dizel', gas_lpg: 'Propan', gas_cng: 'Metan' }
    : { 'ai-91': 'АИ-91', 'ai-92': 'АИ-92', 'ai-95': 'АИ-95', 'ai-98': 'АИ-98', diesel: 'Дизель', gas_lpg: 'Пропан', gas_cng: 'Метан' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.distance}</Label>
            <Input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="mt-1 text-lg" min={1} />
          </div>
          <div>
            <Label>{t.consumption}</Label>
            <Input type="number" value={consumption} onChange={(e) => setConsumption(e.target.value)} className="mt-1" min={1} max={50} step={0.1} />
          </div>
          <div>
            <Label>{t.fuelType}</Label>
            <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(fuelLabels).map(([k, v]) => <option key={k} value={k}>{v} — {formatNumber(FUEL_PRICES[k], locale)} UZS/l</option>)}
            </select>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalFuel}</span><span>{result.totalFuelLiters.toFixed(1)} l</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.fuelPrice}</span><span>{formatCurrency(result.fuelPricePerLiter, 'UZS', locale)}/l</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.costPerKm}</span><span>{formatCurrency(result.costPerKm, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.totalCost}</span>
              <span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
