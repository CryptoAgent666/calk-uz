'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import UtilityRegionSelect from '@/components/calculators/UtilityRegionSelect'
import { calculateUtilitiesTotal, getUtilityRegion } from '@/lib/calculators/utilities'
import { DEFAULT_REGION_ID } from '@/lib/constants/utility-regions'
import { HEATING_RATE_PER_M2_DAY, WATER_HOT_RATE } from '@/lib/constants/utility-tariffs'
import { formatCurrency } from '@/lib/utils'

export default function UtilitiesTotalCalculator() {
  const locale = useLocale()
  const [regionId, setRegionId] = useState(DEFAULT_REGION_ID)
  const [electricity, setElectricity] = useState('200')
  const [hasStove, setHasStove] = useState(false)
  const [gas, setGas] = useState('50')
  const [isSummer, setIsSummer] = useState(true)
  const [coldWater, setColdWater] = useState('5')
  const [hotWater, setHotWater] = useState('3')
  const [hasSewerage, setHasSewerage] = useState(true)
  const [centralHotWater, setCentralHotWater] = useState(() => getUtilityRegion(DEFAULT_REGION_ID).water.centralHotWaterDefault)
  const [heatingArea, setHeatingArea] = useState('60')
  const [persons, setPersons] = useState('3')
  const [hotRate, setHotRate] = useState(String(WATER_HOT_RATE))
  const [heatingRate, setHeatingRate] = useState(String(HEATING_RATE_PER_M2_DAY))

  const changeRegion = (id: string) => {
    setRegionId(id)
    // Центральное горячее водоснабжение — норма для Ташкента и редкость в областях.
    setCentralHotWater(getUtilityRegion(id).water.centralHotWaterDefault)
  }

  const result = useMemo(() => {
    const elec = parseFloat(electricity) || 0
    const g = parseFloat(gas) || 0
    const cw = parseFloat(coldWater) || 0
    const hw = parseFloat(hotWater) || 0
    const ha = parseFloat(heatingArea) || 0
    const p = parseInt(persons) || 1
    if (elec <= 0 && g <= 0 && cw <= 0 && hw <= 0) return null
    const hr = parseFloat(hotRate.replace(',', '.'))
    const htr = parseFloat(heatingRate.replace(',', '.'))
    return calculateUtilitiesTotal({
      electricityKwh: elec, hasElectricStove: hasStove, gasM3: g, isSummer,
      coldWaterM3: cw, hotWaterM3: hw, heatingAreaM2: ha, persons: p,
      regionId, hasSewerage, centralHotWater,
      hotWaterRate: Number.isFinite(hr) && hr >= 0 ? hr : WATER_HOT_RATE,
      heatingRatePerM2PerDay: Number.isFinite(htr) && htr >= 0 ? htr : HEATING_RATE_PER_M2_DAY,
    })
  }, [electricity, hasStove, gas, isSummer, coldWater, hotWater, heatingArea, persons, regionId, hasSewerage, centralHotWater, hotRate, heatingRate])

  const t = locale === 'uz'
    ? {
        region: 'Hudud', regionNote: 'Suv va chiqindi olib chiqish hudud tariflari bo\'yicha hisoblanadi. Elektr va gaz tariflari butun mamlakatda bir xil.',
        electricity: 'Elektr (kVt*soat)', stove: 'Elektr plita', gas: 'Gaz (m³)', summer: 'Yoz',
        coldWater: 'Sovuq suv (m³)', hotWater: 'Issiq suv (m³)', heatingArea: 'Isitish maydoni (m²)',
        sewerage: 'Kanalizatsiyaga ulangan', centralHot: 'Markaziy issiq suv',
        persons: 'Oila a\'zolari', hotRate: 'Issiq suv tarifi (so\'m/m³)', heatingRate: 'Isitish tarifi (so\'m/m² kuniga)',
        ratesNote: 'Issiq suv va isitish — standart holda Toshkent tariflari. Viloyatlarda ular boshqacha: kvitansiyadagi tariflarni kiriting.',
        results: 'Natijalar', elecCost: 'Elektr energiya', gasCost: 'Gaz',
        waterCost: 'Suv', heatingCost: 'Isitish', wasteCost: 'Chiqindi', perPerson: 'so\'m/kishi', grandTotal: 'Jami kommunal',
      }
    : {
        region: 'Регион', regionNote: 'Вода и вывоз мусора считаются по тарифам региона. Электричество и газ стоят одинаково по всей стране.',
        electricity: 'Электричество (кВт*ч)', stove: 'Эл. плита', gas: 'Газ (м³)', summer: 'Лето',
        coldWater: 'Холодная вода (м³)', hotWater: 'Горячая вода (м³)', heatingArea: 'Площадь отопления (м²)',
        sewerage: 'Канализация', centralHot: 'Центральное ГВС',
        persons: 'Членов семьи', hotRate: 'Тариф горячей воды (сум/м³)', heatingRate: 'Тариф отопления (сум/м² в сутки)',
        ratesNote: 'Горячая вода и отопление по умолчанию — по тарифам Ташкента. В областях они другие: укажите тарифы из квитанции.',
        results: 'Результаты', elecCost: 'Электричество', gasCost: 'Газ',
        waterCost: 'Вода', heatingCost: 'Отопление', wasteCost: 'Мусор', perPerson: 'сум/чел.', grandTotal: 'Итого коммунальные',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label htmlFor="utilities-region">{t.region}</Label>
            <UtilityRegionSelect id="utilities-region" value={regionId} onChange={changeRegion} />
            <p className="mt-1 text-xs text-muted-foreground">{t.regionNote}</p>
          </div>
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
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2"><Switch id="stove" checked={hasStove} onCheckedChange={setHasStove} /><Label htmlFor="stove" className="cursor-pointer">{t.stove}</Label></div>
            <div className="flex items-center gap-2"><Switch id="summer" checked={isSummer} onCheckedChange={setIsSummer} /><Label htmlFor="summer" className="cursor-pointer">{t.summer}</Label></div>
            <div className="flex items-center gap-2"><Switch id="utilities-sewerage" checked={hasSewerage} onCheckedChange={setHasSewerage} /><Label htmlFor="utilities-sewerage" className="cursor-pointer">{t.sewerage}</Label></div>
            <div className="flex items-center gap-2"><Switch id="utilities-central-hot" checked={hasSewerage && centralHotWater} onCheckedChange={setCentralHotWater} disabled={!hasSewerage} /><Label htmlFor="utilities-central-hot" className="cursor-pointer">{t.centralHot}</Label></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label htmlFor="utilities-hot-rate">{t.hotRate}</Label><Input id="utilities-hot-rate" type="number" value={hotRate} onChange={(e) => setHotRate(e.target.value)} className="mt-1" min={0} step={0.01} /></div>
            <div><Label htmlFor="utilities-heating-rate">{t.heatingRate}</Label><Input id="utilities-heating-rate" type="number" value={heatingRate} onChange={(e) => setHeatingRate(e.target.value)} className="mt-1" min={0} step={0.01} /></div>
          </div>
          <p className="text-xs text-muted-foreground">{t.ratesNote}</p>
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
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{t.wasteCost} · {result.wastePerPerson.toLocaleString('ru-RU')} {t.perPerson}</span><span>{formatCurrency(result.waste, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.grandTotal}</span><span className="text-primary">{formatCurrency(result.grandTotal, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
