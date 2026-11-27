'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateFuelConsumption, FUEL_PRICES, FUEL_PRICES_DATE } from '@/lib/calculators/auto'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function FuelConsumptionCalculator() {
  const locale = useLocale()
  const [distance, setDistance] = useState('100')
  const [consumption, setConsumption] = useState('8')
  const [fuelType, setFuelType] = useState('ai-92')
  // Цены не регулируются и отличаются по сетям — пользователь может вписать свою с чека.
  const [customPrice, setCustomPrice] = useState('')

  const result = useMemo(() => {
    const d = parseFloat(distance) || 0
    const c = parseFloat(consumption) || 0
    if (d <= 0 || c <= 0) return null
    const p = parseFloat(customPrice)
    return calculateFuelConsumption(d, c, fuelType, p > 0 ? p : undefined)
  }, [distance, consumption, fuelType, customPrice])

  const t = locale === 'uz'
    ? {
        distance: 'Masofa (km)', consumption: 'Sarfiyot (l/100km)', fuelType: 'Yoqilg\'i turi',
        results: 'Natijalar', unit: 'l', totalFuel: 'Jami yoqilg\'i (l)', fuelPrice: 'Yoqilg\'i narxi',
        totalCost: 'Jami xarajat', costPerKm: 'Km uchun xarajat',
        ownPrice: "O'z narxingiz (so'm/l), ixtiyoriy", defaults: "Standart narxlar: Toshkent, «O'zbekneftgaz» shoxobchalari, holati",
      }
    : {
        distance: 'Расстояние (км)', consumption: 'Расход (л/100км)', fuelType: 'Тип топлива',
        results: 'Результаты', unit: 'л', totalFuel: 'Всего топлива (л)', fuelPrice: 'Цена топлива',
        totalCost: 'Общая стоимость', costPerKm: 'Стоимость за км',
        ownPrice: 'Своя цена (сум/л), необязательно', defaults: 'Цены по умолчанию: Ташкент, сеть «Узбекнефтегаз», на',
      }

  const fuelLabels: Record<string, string> = locale === 'uz'
    ? { 'ai-92': 'AI-92', 'ai-95': 'AI-95', 'ai-100': 'AI-100', diesel: 'Dizel', gas_lpg: 'Propan', gas_cng: 'Metan' }
    : { 'ai-92': 'АИ-92', 'ai-95': 'АИ-95', 'ai-100': 'АИ-100', diesel: 'Дизель', gas_lpg: 'Пропан', gas_cng: 'Метан' }

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
            <select value={fuelType} onChange={(e) => { setFuelType(e.target.value); setCustomPrice('') }} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(fuelLabels).map(([k, v]) => <option key={k} value={k}>{v} — {formatNumber(FUEL_PRICES[k], locale)} UZS/l</option>)}
            </select>
            <p className="mt-1 text-xs text-muted-foreground">{t.defaults} {FUEL_PRICES_DATE.split('-').reverse().join('.')}</p>
          </div>
          <div>
            <Label>{t.ownPrice}</Label>
            <Input type="number" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} className="mt-1" min={0} placeholder={String(FUEL_PRICES[fuelType] ?? '')} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalFuel}</span><span>{result.totalFuelLiters.toFixed(1)} {t.unit}</span></div>
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
