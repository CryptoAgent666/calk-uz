'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateVisaCost, visaFeeCurrency } from '@/lib/calculators/unique'
import { FX_FALLBACK_UZS } from '@/lib/constants/fx'
import { formatCurrency, formatMoney } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

export default function VisaCostCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [country, setCountry] = useState('schengen')
  const [insuranceDays, setInsuranceDays] = useState('30')

  // Сбор пересчитывается по курсу ЦБ для его валюты: евро, фунта или доллара
  const feeCurrency = visaFeeCurrency(country)
  const feeRate = useMemo(() => {
    const live = liveRates.find((r) => r.code === feeCurrency)
    if (live) return live.rate / live.nominal
    return FX_FALLBACK_UZS[feeCurrency]
  }, [liveRates, feeCurrency])

  const usingFallback = liveRates.length === 0 && !loading

  const result = useMemo(() => {
    const d = parseInt(insuranceDays) || 30
    return calculateVisaCost(country, feeRate, d)
  }, [country, insuranceDays, feeRate])

  const countryLabels: Record<string, string> = locale === 'uz'
    ? { schengen: 'Shengen', usa: 'AQSH', uk: 'Buyuk Britaniya', south_korea: 'Janubiy Koreya', japan: 'Yaponiya', china: 'Xitoy (30 kungacha vizasiz)', turkey: 'Turkiya (vizasiz)', uae: 'BAA (vizasiz)' }
    : { schengen: 'Шенген', usa: 'США', uk: 'Великобритания', south_korea: 'Южная Корея', japan: 'Япония', china: 'Китай (безвиз до 30 дней)', turkey: 'Турция (безвиз)', uae: 'ОАЭ (безвиз)' }

  const t = locale === 'uz'
    ? {
        country: 'Mamlakat',
        insuranceDays: 'Sug\'urta muddati (kun)',
        results: 'Natijalar',
        consulateFee: 'Konsullik yig\'imi',
        serviceFee: 'Xizmat yig\'imi',
        additionalFee: "Mumkin bo'lgan yig'im, jamiga kirmaydi",
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
        additionalFee: 'Возможный сбор, не входит в итог',
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
            {t.exchangeRate}: 1 {feeCurrency} = {formatMoney(feeRate, locale)} UZS
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
          {result.possibleFee > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {t.additionalFee}
                <span className="block text-xs">{locale === 'uz' ? result.possibleFeeNoteUz : result.possibleFeeNoteRu}</span>
              </span>
              <span>{formatCurrency(result.possibleFee, 'UZS', locale)}</span>
            </div>
          )}
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
