'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateUtilitiesTotal } from '@/lib/calculators/utilities'
import { formatCurrency } from '@/lib/utils'

export default function UtilitiesTotalCalculator() {
  const locale = useLocale()
  const [electricity, setElectricity] = useState('200')
  const [hasStove, setHasStove] = useState(false)
  const [gas, setGas] = useState('50')
  const [isSummer, setIsSummer] = useState(true)
  const [coldWater, setColdWater] = useState('5')
  const [hotWater, setHotWater] = useState('3')
  const [heatingArea, setHeatingArea] = useState('60')
  const [persons, setPersons] = useState('3')

  const result = useMemo(() => {
    const elec = parseFloat(electricity) || 0
    const g = parseFloat(gas) || 0
    const cw = parseFloat(coldWater) || 0
    const hw = parseFloat(hotWater) || 0
    const ha = parseFloat(heatingArea) || 0
    const p = parseInt(persons) || 1
    if (elec <= 0 && g <= 0 && cw <= 0 && hw <= 0) return null
    return calculateUtilitiesTotal({ electricityKwh: elec, hasElectricStove: hasStove, gasM3: g, isSummer, coldWaterM3: cw, hotWaterM3: hw, heatingAreaM2: ha, persons: p })
  }, [electricity, hasStove, gas, isSummer, coldWater, hotWater, heatingArea, persons])

  const t = locale === 'uz'
    ? {
        electricity: 'Elektr (kVt*soat)', stove: 'Elektr plita', gas: 'Gaz (m\u00B3)', summer: 'Yoz',
        coldWater: 'Sovuq suv (m\u00B3)', hotWater: 'Issiq suv (m\u00B3)', heatingArea: 'Isitish maydoni (m\u00B2)',
        persons: 'Oila a\'zolari', results: 'Natijalar', elecCost: 'Elektr energiya', gasCost: 'Gaz',
        waterCost: 'Suv', heatingCost: 'Isitish', wasteCost: 'Chiqindi', grandTotal: 'Jami kommunal',
      }
    : {
        electricity: 'Электричество (кВт*ч)', stove: 'Эл. плита', gas: 'Газ (м\u00B3)', summer: 'Лето',
        coldWater: 'Холодная вода (м\u00B3)', hotWater: 'Горячая вода (м\u00B3)', heatingArea: 'Площадь отопления (м\u00B2)',
        persons: 'Членов семьи', results: 'Результаты', elecCost: 'Электричество', gasCost: 'Газ',
        waterCost: 'Вода', heatingCost: 'Отопление', wasteCost: 'Мусор', grandTotal: 'Итого коммунальные',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.electricity}</Label><Input type="number" value={electricity} onChange={(e) => setElectricity(e.target.value)} className="mt-1" min={0} /></div>
            <div><Label>{t.gas}</Label><Input type="number" value={gas} onChange={(e) => setGas(e.target.value)} className="mt-1" min={0} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.coldWater}</Label><Input type="number" value={coldWater} onChange={(e) => setColdWater(e.target.value)} className="mt-1" min={0} step={0.1} /></div>
            <div><Label>{t.hotWater}</Label><Input type="number" value={hotWater} onChange={(e) => setHotWater(e.target.value)} className="mt-1" min={0} step={0.1} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.heatingArea}</Label><Input type="number" value={heatingArea} onChange={(e) => setHeatingArea(e.target.value)} className="mt-1" min={0} /></div>
            <div><Label>{t.persons}</Label><Input type="number" value={persons} onChange={(e) => setPersons(e.target.value)} className="mt-1" min={1} max={20} /></div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2"><Switch id="stove" checked={hasStove} onCheckedChange={setHasStove} /><Label htmlFor="stove" className="cursor-pointer">{t.stove}</Label></div>
            <div className="flex items-center gap-2"><Switch id="summer" checked={isSummer} onCheckedChange={setIsSummer} /><Label htmlFor="summer" className="cursor-pointer">{t.summer}</Label></div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.elecCost}</span><span>{formatCurrency(result.electricity.finalTotal, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.gasCost}</span><span>{formatCurrency(result.gas.total, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.waterCost}</span><span>{formatCurrency(result.water.total, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.heatingCost}</span><span>{formatCurrency(result.heating.total, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.wasteCost}</span><span>{formatCurrency(result.waste, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.grandTotal}</span><span className="text-primary">{formatCurrency(result.grandTotal, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
