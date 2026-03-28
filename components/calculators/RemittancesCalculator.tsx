'use client'

import { useState, useMemo, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateRemittance } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

const FALLBACK_RATES: Record<string, number> = {
  USD: 12_850,
  EUR: 14_200,
  RUB: 135,
  GBP: 16_500,
  KZT: 26,
}

const CURRENCIES = ['USD', 'EUR', 'RUB', 'GBP', 'KZT']

export default function RemittancesCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [amount, setAmount] = useState('1000')
  const [currency, setCurrency] = useState('USD')
  const [feePercent, setFeePercent] = useState('1.5')
  const [rate, setRate] = useState('12850')

  // Build a map of per-unit rates from live data
  const ratesMap = useMemo(() => {
    const map: Record<string, number> = { ...FALLBACK_RATES }
    for (const lr of liveRates) {
      if (CURRENCIES.includes(lr.code)) {
        map[lr.code] = lr.rate / lr.nominal
      }
    }
    return map
  }, [liveRates])

  // Auto-populate rate when currency changes or live rates load
  useEffect(() => {
    const perUnit = ratesMap[currency]
    if (perUnit) {
      setRate(String(Math.round(perUnit)))
    }
  }, [currency, ratesMap])

  const usingFallback = liveRates.length === 0 && !loading

  const result = useMemo(() => {
    const a = parseFloat(amount) || 0
    const f = parseFloat(feePercent) || 0
    const r = parseFloat(rate) || 0
    if (a <= 0 || r <= 0) return null
    return calculateRemittance(a, currency, r, f)
  }, [amount, currency, feePercent, rate])

  const t = locale === 'uz'
    ? {
        amount: 'Jo\'natma summasi',
        currency: 'Valyuta',
        fee: 'Komissiya (%)',
        rate: 'Kurs (UZS)',
        results: 'Natijalar',
        sendAmount: 'Jo\'natma',
        feeAmount: 'Komissiya',
        receiveAmount: 'Qabul qiluvchi oladi',
        effectiveRate: 'Samarali kurs',
        loading: 'Kurslar yuklanmoqda...',
        error: 'Kurslarni yuklashda xatolik',
        fallbackWarning: 'Joriy kurslar yuklanmadi, taxminiy kurs ishlatilmoqda',
        source: 'Kurs manba: O\'zbekiston Markaziy banki',
        updated: 'Yangilangan',
        rateNote: 'Kurs avtomatik yuklanadi. Kerak bo\'lsa qo\'lda o\'zgartiring.',
      }
    : {
        amount: 'Сумма отправки',
        currency: 'Валюта',
        fee: 'Комиссия (%)',
        rate: 'Курс (UZS)',
        results: 'Результаты',
        sendAmount: 'Отправка',
        feeAmount: 'Комиссия',
        receiveAmount: 'Получатель получит',
        effectiveRate: 'Эффективный курс',
        loading: 'Загрузка курсов...',
        error: 'Ошибка загрузки курсов',
        fallbackWarning: 'Не удалось загрузить актуальные курсы, используются приблизительные',
        source: 'Курс: Центральный банк Узбекистана',
        updated: 'Обновлено',
        rateNote: 'Курс загружается автоматически. При необходимости измените вручную.',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.amount}</Label>
              <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" min={1} />
            </div>
            <div>
              <Label>{t.currency}</Label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t.fee}</Label>
              <Input type="number" value={feePercent} onChange={(e) => setFeePercent(e.target.value)} className="mt-1" min={0} max={10} step={0.1} />
            </div>
            <div>
              <Label>{t.rate}</Label>
              <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-1" />
              <p className="text-xs text-muted-foreground mt-1">{t.rateNote}</p>
            </div>
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

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.sendAmount}</span><span>{formatNumber(result.sendAmount, locale)} {currency}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.feeAmount} ({result.feePercent}%)</span><span className="text-destructive">-{formatNumber(result.fee, locale)} {currency}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.receiveAmount}</span><span className="text-primary">{formatCurrency(result.receiveAmount, 'UZS', locale)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.effectiveRate}</span><span>{formatNumber(Math.round(result.effectiveRate), locale)} UZS/{currency}</span></div>
          </CardContent>
        </Card>
      )}

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
