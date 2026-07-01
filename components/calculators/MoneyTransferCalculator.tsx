'use client'

import { useState, useMemo, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateRemittance } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

const FALLBACK_USD_RATE = 12_850

export default function MoneyTransferCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [amount, setAmount] = useState('500')
  const [feePercent, setFeePercent] = useState('1.5')
  const [exchangeRate, setExchangeRate] = useState('12850')

  // Auto-populate USD exchange rate from live data
  const liveUsdRate = useMemo(() => {
    const usd = liveRates.find((r) => r.code === 'USD')
    if (usd) return Math.round(usd.rate / usd.nominal)
    return FALLBACK_USD_RATE
  }, [liveRates])

  const usingFallback = liveRates.length === 0 && !loading

  // Update exchange rate when live data loads
  useEffect(() => {
    setExchangeRate(String(liveUsdRate))
  }, [liveUsdRate])

  const result = useMemo(() => {
    const a = parseFloat(amount) || 0
    const fee = parseFloat(feePercent) || 0
    const rate = parseFloat(exchangeRate) || 0
    if (a <= 0 || rate <= 0) return null
    return calculateRemittance(a, 'USD', rate, fee)
  }, [amount, feePercent, exchangeRate])

  const t = locale === 'uz'
    ? {
        amount: 'Jo\'natma summasi (USD)',
        fee: 'Komissiya (%)',
        rate: 'Ayirboshlash kursi',
        results: 'Natijalar',
        sendAmount: 'Jo\'natma summasi',
        feeAmount: 'Komissiya',
        receiveAmount: 'Qabul qiluvchi oladi',
        effectiveRate: 'Samarali kurs',
        placeholder: 'Summani kiriting',
        loading: 'Kurslar yuklanmoqda...',
        error: 'Kurslarni yuklashda xatolik',
        fallbackWarning: 'Joriy kurslar yuklanmadi, taxminiy kurs ishlatilmoqda',
        source: 'Kurs manba: O\'zbekiston Markaziy banki',
        updated: 'Yangilangan',
        rateNote: 'Kurs avtomatik yuklanadi. Kerak bo\'lsa qo\'lda o\'zgartiring.',
      }
    : {
        amount: 'Сумма перевода (USD)',
        fee: 'Комиссия (%)',
        rate: 'Курс обмена',
        results: 'Результаты',
        sendAmount: 'Сумма отправки',
        feeAmount: 'Комиссия',
        receiveAmount: 'Получатель получит',
        effectiveRate: 'Эффективный курс',
        placeholder: 'Введите сумму',
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
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.fee}</Label>
            <Input type="number" value={feePercent} onChange={(e) => setFeePercent(e.target.value)} className="mt-1 w-24" min={0} max={10} step={0.1} />
          </div>
          <div>
            <Label>{t.rate}</Label>
            <Input type="number" value={exchangeRate} onChange={(e) => setExchangeRate(e.target.value)} className="mt-1" />
            <p className="text-xs text-muted-foreground mt-1">{t.rateNote}</p>
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
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.sendAmount}</span>
              <span>${formatNumber(result.sendAmount, locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.feeAmount} ({result.feePercent}%)</span>
              <span className="text-destructive">-${formatNumber(result.fee, locale)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.receiveAmount}</span>
              <span className="text-primary">{formatCurrency(result.receiveAmount, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t.effectiveRate}</span>
              <span>{formatNumber(Math.round(result.effectiveRate), locale)} UZS/$</span>
            </div>
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
