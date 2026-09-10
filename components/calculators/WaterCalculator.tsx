'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import UtilityRegionSelect from '@/components/calculators/UtilityRegionSelect'
import { calculateWater, getUtilityRegion } from '@/lib/calculators/utilities'
import { DEFAULT_REGION_ID, VAT_RATE } from '@/lib/constants/utility-regions'
import { WATER_HOT_RATE } from '@/lib/constants/utility-tariffs'
import { formatCurrency } from '@/lib/utils'

export default function WaterCalculator() {
  const locale = useLocale()
  const [regionId, setRegionId] = useState(DEFAULT_REGION_ID)
  const [hasSewerage, setHasSewerage] = useState(true)
  const [centralHotWater, setCentralHotWater] = useState(() => getUtilityRegion(DEFAULT_REGION_ID).water.centralHotWaterDefault)
  const [coldWater, setColdWater] = useState('')
  const [hotWater, setHotWater] = useState('')
  const [hotRate, setHotRate] = useState(String(WATER_HOT_RATE))

  const region = getUtilityRegion(regionId)

  const changeRegion = (id: string) => {
    setRegionId(id)
    // Центральное горячее водоснабжение — норма для Ташкента и редкость в областях.
    setCentralHotWater(getUtilityRegion(id).water.centralHotWaterDefault)
  }

  const result = useMemo(() => {
    const cold = parseFloat(coldWater) || 0
    const hot = parseFloat(hotWater) || 0
    if (cold <= 0 && hot <= 0) return null
    const rate = parseFloat(hotRate.replace(',', '.'))
    return calculateWater(cold, hot, {
      regionId,
      hasSewerage,
      centralHotWater,
      hotWaterRate: Number.isFinite(rate) && rate >= 0 ? rate : WATER_HOT_RATE,
    })
  }, [coldWater, hotWater, hotRate, regionId, hasSewerage, centralHotWater])

  const water = Math.round(region.water.waterNet * (1 + VAT_RATE)).toLocaleString('ru-RU')
  const sewerage = Math.round(region.water.sewerageNet * (1 + VAT_RATE)).toLocaleString('ru-RU')
  const since = region.water.effectiveDate.split('-').reverse().join('.')

  const t = locale === 'uz'
    ? {
        region: 'Hudud', sewerage: 'Kanalizatsiyaga ulangan', centralHot: 'Markaziy issiq suv ta\'minoti',
        coldWater: 'Sovuq suv (m³)', hotWater: 'Issiq suv (m³)', hotRate: 'Issiq suv tarifi (so\'m/m³)',
        results: 'Natijalar', coldCost: 'Sovuq suv', hotCost: 'Issiq suv', total: 'Jami', placeholder: 'm³ kiriting',
        perM3: 'so\'m/m³',
        tariff: `Tarif: ichimlik suvi ${water} va oqova suv ${sewerage} so'm/m³ QQS bilan, ${since} dan.`,
        hotNote: 'Standart qiymat — Toshkent tarifi. Viloyatlarda u boshqacha: kvitansiyadagi tarifni kiriting.',
      }
    : {
        region: 'Регион', sewerage: 'Подключено к канализации', centralHot: 'Центральное горячее водоснабжение',
        coldWater: 'Холодная вода (м³)', hotWater: 'Горячая вода (м³)', hotRate: 'Тариф горячей воды (сум/м³)',
        results: 'Результаты', coldCost: 'Холодная вода', hotCost: 'Горячая вода', total: 'Итого', placeholder: 'Введите м³',
        perM3: 'сум/м³',
        tariff: `Тариф: питьевая вода ${water} и стоки ${sewerage} сум/м³ с НДС, с ${since}.`,
        hotNote: 'По умолчанию — тариф Ташкента. В областях он другой: укажите тариф из квитанции.',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label htmlFor="water-region">{t.region}</Label>
            <UtilityRegionSelect id="water-region" value={regionId} onChange={changeRegion} />
            <p className="mt-1 text-xs text-muted-foreground">{t.tariff}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2"><Switch id="water-sewerage" checked={hasSewerage} onCheckedChange={setHasSewerage} /><Label htmlFor="water-sewerage" className="cursor-pointer">{t.sewerage}</Label></div>
            <div className="flex items-center gap-2"><Switch id="water-central-hot" checked={hasSewerage && centralHotWater} onCheckedChange={setCentralHotWater} disabled={!hasSewerage} /><Label htmlFor="water-central-hot" className="cursor-pointer">{t.centralHot}</Label></div>
          </div>
          <div>
            <Label>{t.coldWater}</Label>
            <Input type="number" placeholder={t.placeholder} value={coldWater} onChange={(e) => setColdWater(e.target.value)} className="mt-1 text-lg" min={0} step={0.1} />
          </div>
          <div>
            <Label>{t.hotWater}</Label>
            <Input type="number" placeholder={t.placeholder} value={hotWater} onChange={(e) => setHotWater(e.target.value)} className="mt-1 text-lg" min={0} step={0.1} />
          </div>
          <div>
            <Label htmlFor="water-hot-rate">{t.hotRate}</Label>
            <Input id="water-hot-rate" type="number" value={hotRate} onChange={(e) => setHotRate(e.target.value)} className="mt-1 w-40" min={0} step={0.01} />
            <p className="mt-1 text-xs text-muted-foreground">{t.hotNote}</p>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{t.coldCost} · {result.coldRate.toLocaleString('ru-RU')} {t.perM3}</span><span>{formatCurrency(result.coldCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{t.hotCost}</span><span>{formatCurrency(result.hotCost, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.total}</span><span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
