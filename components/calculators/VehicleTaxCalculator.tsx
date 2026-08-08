'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateVehicleTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function VehicleTaxCalculator() {
  const locale = useLocale()
  const [engineVolume, setEngineVolume] = useState('1600')
  const [year, setYear] = useState('2020')

  const result = useMemo(() => {
    const vol = parseInt(engineVolume) || 0
    const y = parseInt(year) || 0
    if (vol <= 0 || y <= 0) return null
    return calculateVehicleTax(vol, y)
  }, [engineVolume, year])

  const t = locale === 'uz'
    ? {
        engineVolume: 'Dvigatel hajmi (sm\u00B3)',
        year: 'Ishlab chiqarilgan yil',
        results: 'Natijalar',
        vehicleAge: 'Avtomobil yoshi',
        baseTax: 'Bazaviy soliq',
        ageFactor: 'Yosh koeffitsiyenti',
        annualTax: 'Yillik soliq',
        years: 'yil',
      }
    : {
        engineVolume: 'Объём двигателя (см\u00B3)',
        year: 'Год выпуска',
        results: 'Результаты',
        vehicleAge: 'Возраст авто',
        baseTax: 'Базовый налог',
        ageFactor: 'Коэффициент возраста',
        annualTax: 'Годовой налог',
        years: 'лет',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.engineVolume}</Label>
            <Input type="number" value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} className="mt-1 text-lg" min={100} max={10000} />
          </div>
          <div>
            <Label>{t.year}</Label>
            <Input type="number" value={year} onChange={(e) => setYear(e.target.value)} className="mt-1 text-lg" min={1990} max={2026} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.vehicleAge}</span>
              <span>{result.vehicleAge} {t.years}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.baseTax}</span>
              <span>{formatCurrency(result.baseTax, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.ageFactor}</span>
              <span>{result.ageFactor}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.annualTax}</span>
              <span className="text-primary">{formatCurrency(result.annualTax, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
