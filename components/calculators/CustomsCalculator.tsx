'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateCustomsClearance, type AgeBand } from '@/lib/calculators/customs'
import { formatCurrency } from '@/lib/utils'

export default function CustomsCalculator() {
  const locale = useLocale()
  const [price, setPrice] = useState('15000')
  const [engineVolume, setEngineVolume] = useState('2000')
  const [year, setYear] = useState('2022')
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'electric' | 'hybrid'>('petrol')
  // Возрастных групп по тарифу ПП-3818 три, а не две — бинарный переключатель
  // «новый до 3 лет» отправлял авто 1–3 лет в льготные 15% вместо 30%.
  const [ageBand, setAgeBand] = useState<AgeBand>('upTo1')

  const result = useMemo(() => {
    const p = parseFloat(price) || 0
    const ev = parseInt(engineVolume) || 0
    const y = parseInt(year) || 0
    if (p <= 0 || ev <= 0 || y <= 0) return null
    return calculateCustomsClearance({ carPrice: p, engineVolumeCc: ev, carYear: y, fuelType, ageBand })
  }, [price, engineVolume, year, fuelType, ageBand])

  const labels: Record<string, Record<string, string>> = {
    uz: {
      price: 'Avtomobil narxi (USD)', engineVolume: 'Dvigatel hajmi (sm\u00B3)', year: 'Yili',
      fuelType: 'Yoqilg\'i turi', ageBand: 'Avtomobil yoshi',
      ageUpTo1: '1 yilgacha (yangi)', ageFrom1To3: '1–3 yil', ageUsed: '3 yildan ortiq',
      results: 'Natijalar', customsDuty: 'Bojxona boji', exciseTax: 'Aksiz solig\'i',
      vat: 'QQS', utilizationFee: 'Utilizatsiya yig\'imi', registrationFee: 'Ro\'yxatga olish',
      certificationFee: 'Sertifikatsiya', totalCustoms: 'Jami rasmiylashtirish',
      totalWithCar: 'Avtomobil + rasmiylashtirish',
    },
    ru: {
      price: 'Цена авто (USD)', engineVolume: 'Объём двигателя (см\u00B3)', year: 'Год выпуска',
      fuelType: 'Тип топлива', ageBand: 'Возраст автомобиля',
      ageUpTo1: 'До 1 года (новый)', ageFrom1To3: 'От 1 до 3 лет', ageUsed: 'Старше 3 лет',
      results: 'Результаты', customsDuty: 'Таможенная пошлина', exciseTax: 'Акцизный налог',
      vat: 'НДС', utilizationFee: 'Утилизационный сбор', registrationFee: 'Регистрация',
      certificationFee: 'Сертификация', totalCustoms: 'Итого растаможка',
      totalWithCar: 'Авто + растаможка',
    }
  }
  const tl = labels[locale] || labels.ru

  const fuelOptions = locale === 'uz'
    ? { petrol: 'Benzin', diesel: 'Dizel', electric: 'Elektr', hybrid: 'Gibrid' }
    : { petrol: 'Бензин', diesel: 'Дизель', electric: 'Электро', hybrid: 'Гибрид' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{tl.price}</Label>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 text-lg" min={100} />
          </div>
          <div>
            <Label>{tl.engineVolume}</Label>
            <Input type="number" value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} className="mt-1" min={0} max={10000} />
          </div>
          <div>
            <Label>{tl.year}</Label>
            <Input type="number" value={year} onChange={(e) => setYear(e.target.value)} className="mt-1" min={1990} max={2026} />
          </div>
          <div>
            <Label>{tl.fuelType}</Label>
            <select value={fuelType} onChange={(e) => setFuelType(e.target.value as typeof fuelType)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(fuelOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <Label>{tl.ageBand}</Label>
            <select value={ageBand} onChange={(e) => setAgeBand(e.target.value as AgeBand)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="upTo1">{tl.ageUpTo1}</option>
              <option value="from1to3">{tl.ageFrom1To3}</option>
              <option value="used">{tl.ageUsed}</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{tl.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{tl.customsDuty}</span><span>{formatCurrency(result.customsDuty, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{tl.exciseTax}</span><span>{formatCurrency(result.exciseTax, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{tl.vat}</span><span>{formatCurrency(result.vat, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{tl.utilizationFee}</span><span>{formatCurrency(result.utilizationFee, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{tl.registrationFee}</span><span>{formatCurrency(result.registrationFee, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>{tl.totalCustoms}</span>
              <span className="text-destructive">{formatCurrency(result.totalCustomsCost, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>{tl.totalWithCar}</span>
              <span className="text-primary">{formatCurrency(result.totalWithCarPrice, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
