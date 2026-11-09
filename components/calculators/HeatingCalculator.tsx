'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateHeating } from '@/lib/calculators/utilities'
import { HEATING_RATE_PER_M2_DAY } from '@/lib/constants/utility-tariffs'
import { formatCurrency } from '@/lib/utils'

export default function HeatingCalculator() {
  const locale = useLocale()
  const [area, setArea] = useState('')
  const [days, setDays] = useState('30')
  const [rate, setRate] = useState(String(HEATING_RATE_PER_M2_DAY))

  const result = useMemo(() => {
    const a = parseFloat(area) || 0
    const d = parseInt(days) || 30
    if (a <= 0) return null
    const r = parseFloat(rate.replace(',', '.'))
    return calculateHeating(a, d, Number.isFinite(r) && r >= 0 ? r : HEATING_RATE_PER_M2_DAY)
  }, [area, days, rate])

  const t = locale === 'uz'
    ? { area: 'Maydon (m²)', days: 'Oydagi kunlar', rate: 'Tarif (so\'m/m² kuniga)', rateNote: 'Standart qiymat — Toshkent tarifi. Boshqa shaharlarda tarif o\'zgacha: uni kvitansiyadan oling. Agar unda oylik narx ko\'rsatilgan bo\'lsa, uni kunlar soniga bo\'ling.', results: 'Natijalar', dailyRate: 'Kunlik tarif (m²)', total: 'Jami to\'lov', placeholder: 'Maydonni kiriting', offSeason: 'Isitish mavsumi: oktyabr — mart. Hozir mavsumdan tashqarida bo\'lishi mumkin.' }
    : { area: 'Площадь (м²)', days: 'Дней в месяце', rate: 'Тариф (сум/м² в сутки)', rateNote: 'По умолчанию — тариф Ташкента. В других городах тариф свой: возьмите его из квитанции. Если там указана цена за месяц, разделите её на число дней.', results: 'Результаты', dailyRate: 'Дневной тариф (м²)', total: 'Итого к оплате', placeholder: 'Введите площадь', offSeason: 'Отопительный сезон: октябрь — март. Сейчас может быть вне сезона.' }

  const currentMonth = new Date().getMonth() + 1
  const isHeatingSeason = [10, 11, 12, 1, 2, 3].includes(currentMonth)

  return (
    <div className="space-y-6">
      {!isHeatingSeason && (
        <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
          {t.offSeason}
        </div>
      )}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.area}</Label>
            <Input type="number" placeholder={t.placeholder} value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 text-lg" min={1} />
          </div>
          <div>
            <Label>{t.days}</Label>
            <Input type="number" value={days} onChange={(e) => setDays(e.target.value)} className="mt-1 w-24" min={1} max={31} />
          </div>
          <div>
            <Label htmlFor="heating-rate">{t.rate}</Label>
            <Input id="heating-rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-1 w-32" min={0} step={0.01} />
            <p className="mt-1 text-xs text-muted-foreground">{t.rateNote}</p>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.dailyRate}</span><span>{formatCurrency(result.dailyRate, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.total}</span><span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
