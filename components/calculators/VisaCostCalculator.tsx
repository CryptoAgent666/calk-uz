'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateVisaCost } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

const FALLBACK_USD_RATE = 12_850

export default function VisaCostCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [country, setCountry] = useState('schengen')
  const [insuranceDays, setInsuranceDays] = useState('30')

  // Get the live USD rate from CBU
  const usdRate = useMemo(() => {
    const usd = liveRates.find((r) => r.code === 'USD')
    if (usd) return usd.rate / usd.nominal
    return FALLBACK_USD_RATE
  }, [liveRates])

  const usingFallback = liveRates.length === 0 && !loading

  const result = useMemo(() => {
    const d = parseInt(insuranceDays) || 30
    return calculateVisaCost(country, usdRate, d)
  }, [country, insuranceDays, usdRate])

  const countryLabels: Record<string, string> = locale === 'uz'
    ? { schengen: 'Shengen', usa: 'AQSH', uk: 'Buyuk Britaniya', south_korea: 'Janubiy Koreya', japan: 'Yaponiya', china: 'Xitoy', turkey: 'Turkiya (vizasiz)', uae: 'BAA (vizasiz)' }
    : { schengen: 'Шенген', usa: 'США', uk: 'Великобритания', south_korea: 'Южная Корея', japan: 'Япония', china: 'Китай', turkey: 'Турция (безвиз)', uae: 'ОАЭ (безвиз)' }

  const t = locale === 'uz'
    ? {
        country: 'Mamlakat',
        insuranceDays: 'Sug\'urta muddati (kun)',
        results: 'Natijalar',
        consulateFee: 'Konsullik yig\'imi',
        serviceFee: 'Xizmat yig\'imi',
        insurance: 'Sug\'urta',
        photo: 'Fotosurat',
        totalCost: 'Jami xarajat',
        exchangeRate: 'Ayirboshlash kursi',
        loading: 'Kurslar yuklanmoqda...',
        error: 'Kurslarni yuklashda xatolik',
        fallbackWarning: 'Joriy kurslar yuklanmadi, taxminiy kurs ishlatilmoqda',
        source: 'Kurs manba: O\'zbekiston Markaziy banki',
        updated: 'Yangilangan',
      }
    : {
        country: 'Страна',
        insuranceDays: 'Срок страховки (дней)',
        results: 'Результаты',
        consulateFee: 'Консульский сбор',
        serviceFee: 'Сервисный сбор',
        insurance: 'Страховка',
        photo: 'Фотография',
        totalCost: 'Общая стоимость',
        exchangeRate: 'Курс обмена',
        loading: 'Загрузка курсов...',
        error: 'Ошибка загрузки курсов',
        fallbackWarning: 'Не удалось загрузить актуальные курсы, используются приблизительные',
        source: 'Курс: Центральный банк Узбекистана',
        updated: 'Обновлено',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.country}</Label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(countryLabels).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>{t.insuranceDays}</Label>
            <Input type="number" value={insuranceDays} onChange={(e) => setInsuranceDays(e.target.value)} className="mt-1 w-24" min={1} max={365} />
          </div>

          {/* Current exchange rate display */}
          <div className="text-sm text-muted-foreground">
            {t.exchangeRate}: 1 USD = {formatNumber(Math.round(usdRate), locale)} UZS
          </div>

          {/* Status indicator */}
          {loading && (
            <p className="text-xs text-muted-foreground animate-pulse">{t.loading}</p>
          )}
          {error && !loading && (
            <p className="text-xs text-destructive">{t.error}</p>
          )}
          {usingFallback && !loading && (
            <p className="text-xs text-amber-600">{t.fallbackWarning}</p>
          )}
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.consulateFee}</span><span>{formatCurrency(result.consulateFee, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.serviceFee}</span><span>{formatCurrency(result.serviceFee, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.insurance}</span><span>{formatCurrency(result.insuranceCost, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.photo}</span><span>{formatCurrency(result.photoCost, 'UZS', locale)}</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
        </CardContent>
      </Card>

      {/* Source attribution */}
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">{t.source}</p>
        {lastUpdated && (
          <p className="text-xs text-muted-foreground">
            {t.updated}: {new Date(lastUpdated).toLocaleString(locale === 'uz' ? 'uz-UZ' : 'ru-RU')}
          </p>
        )}
      </div>
    </div>
  )
}
