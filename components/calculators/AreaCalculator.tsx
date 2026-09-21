'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { convertArea } from '@/lib/calculators/tools'
import { formatNumber } from '@/lib/utils'

const UNITS = ['sqm', 'sqkm', 'hectare', 'sotka', 'sqft', 'acre'] as const

export default function AreaCalculator() {
  const locale = useLocale()
  const [value, setValue] = useState('100')
  const [fromUnit, setFromUnit] = useState('sqm')

  const result = useMemo(() => {
    const v = parseFloat(value) || 0
    if (v <= 0) return null
    return convertArea(v, fromUnit)
  }, [value, fromUnit])

  const unitLabels: Record<string, string> = locale === 'uz'
    ? { sqm: 'm\u00B2', sqkm: 'km\u00B2', hectare: 'Gektar', sotka: 'Sotka', sqft: 'fut\u00B2', acre: 'Akr' }
    : { sqm: 'м\u00B2', sqkm: 'км\u00B2', hectare: 'Гектар', sotka: 'Сотка', sqft: 'фут\u00B2', acre: 'Акр' }

  const t = locale === 'uz'
    ? { value: 'Qiymat', from: 'Dan', results: 'Natijalar' }
    : { value: 'Значение', from: 'Из', results: 'Результаты' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.value}</Label><Input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="mt-1 text-lg" min={0} step="any" /></div>
          <div><Label>{t.from}</Label><select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{UNITS.map(u => <option key={u} value={u}>{unitLabels[u]}</option>)}</select></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.sqm}</span><span>{formatNumber(result.squareMeters, locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.sqkm}</span><span>{formatNumber(result.squareKilometers, locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.hectare}</span><span>{formatNumber(result.hectares, locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.sotka}</span><span>{formatNumber(result.sotka, locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.sqft}</span><span>{formatNumber(result.squareFeet, locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{unitLabels.acre}</span><span>{formatNumber(result.acres, locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
