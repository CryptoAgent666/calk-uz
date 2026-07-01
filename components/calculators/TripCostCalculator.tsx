'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateTripCost } from '@/lib/calculators/auto'
import { formatCurrency } from '@/lib/utils'

export default function TripCostCalculator() {
  const locale = useLocale()
  const [distance, setDistance] = useState('')
  const [consumption, setConsumption] = useState('8')
  const [fuelPrice, setFuelPrice] = useState('12000')
  const [tollRoads, setTollRoads] = useState('0')
  const [parking, setParking] = useState('0')
  const [passengers, setPassengers] = useState('1')

  const result = useMemo(() => {
    const d = parseFloat(distance) || 0
    const c = parseFloat(consumption) || 0
    const fp = parseFloat(fuelPrice) || 0
    const toll = parseFloat(tollRoads) || 0
    const park = parseFloat(parking) || 0
    const pass = parseInt(passengers) || 1
    if (d <= 0 || c <= 0 || fp <= 0) return null
    return calculateTripCost(d, c, fp, toll, park, pass)
  }, [distance, consumption, fuelPrice, tollRoads, parking, passengers])

  const t = locale === 'uz'
    ? {
        distance: 'Masofa (km)', consumption: 'Sarfiyot (l/100km)', fuelPrice: 'Yoqilg\'i narxi (UZS/l)',
        tollRoads: 'Yo\'l to\'lovi (UZS)', parking: 'Avtoturargoh (UZS)', passengers: 'Yo\'lovchilar soni',
        results: 'Natijalar', fuelCost: 'Yoqilg\'i xarajati', totalCost: 'Jami xarajat',
        costPerPassenger: 'Har bir yo\'lovchi uchun', placeholder: 'Masofani kiriting',
      }
    : {
        distance: 'Расстояние (км)', consumption: 'Расход (л/100км)', fuelPrice: 'Цена топлива (UZS/л)',
        tollRoads: 'Платные дороги (UZS)', parking: 'Парковка (UZS)', passengers: 'Пассажиров',
        results: 'Результаты', fuelCost: 'Стоимость топлива', totalCost: 'Общая стоимость',
        costPerPassenger: 'На каждого пассажира', placeholder: 'Введите расстояние',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.distance}</Label>
            <Input type="number" placeholder={t.placeholder} value={distance} onChange={(e) => setDistance(e.target.value)} className="mt-1 text-lg" min={1} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.consumption}</Label>
              <Input type="number" value={consumption} onChange={(e) => setConsumption(e.target.value)} className="mt-1" min={1} step={0.1} />
            </div>
            <div>
              <Label>{t.fuelPrice}</Label>
              <Input type="number" value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)} className="mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>{t.tollRoads}</Label>
              <Input type="number" value={tollRoads} onChange={(e) => setTollRoads(e.target.value)} className="mt-1" min={0} />
            </div>
            <div>
              <Label>{t.parking}</Label>
              <Input type="number" value={parking} onChange={(e) => setParking(e.target.value)} className="mt-1" min={0} />
            </div>
            <div>
              <Label>{t.passengers}</Label>
              <Input type="number" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="mt-1" min={1} max={50} />
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.fuelCost}</span><span>{formatCurrency(result.fuelCost, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span>
            </div>
            {parseInt(passengers) > 1 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.costPerPassenger}</span>
                <span>{formatCurrency(result.costPerPassenger, 'UZS', locale)}</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
