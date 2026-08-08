'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatNumber } from '@/lib/utils'
import { useCurrencyRates } from '@/lib/hooks/useCurrencyRates'

const FALLBACK_USD_RATE = 12_850

export default function BankRatesCalculator() {
  const locale = useLocale()
  const { rates: liveRates, loading, error, lastUpdated } = useCurrencyRates()
  const [amount, setAmount] = useState('1000')

  // Get the CBU official USD rate
  const cbuUsdRate = useMemo(() => {
    const usd = liveRates.find((r) => r.code === 'USD')
    if (usd) return usd.rate / usd.nominal
    return FALLBACK_USD_RATE
  }, [liveRates])

  const usingFallback = liveRates.length === 0 && !loading

  const results = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    if (a <= 0) return null
    return { uzsAmount: a * cbuUsdRate }
  }, [amount, cbuUsdRate])

  const t = locale === 'uz'
    ? {
        amount: 'Summa (USD)',
        placeholder: 'Summani kiriting',
        cbuRate: 'Markaziy bank kursi',
        result: 'Natija',
        total: 'Jami (UZS)',
        loading: 'Kurslar yuklanmoqda...',
        error: 'Kurslarni yuklashda xatolik',
        fallbackWarning: 'Joriy kurslar yuklanmadi, taxminiy kurs ishlatilmoqda',
        source: 'Manba: O\'zbekiston Markaziy banki (CBU)',
        updated: 'Yangilangan',
        bankNote: 'Diqqat: tijorat banklari kurslari Markaziy bank kursidan farq qiladi. Aniq kurslarni o\'z bankingizdan tekshiring.',
      }
    : {
        amount: 'Сумма (USD)',
        placeholder: 'Введите сумму',
        cbuRate: 'Курс ЦБ',
        result: 'Результат',
        total: 'Итого (UZS)',
        loading: 'Загрузка курсов...',
        error: 'Ошибка загрузки курсов',
        fallbackWarning: 'Не удалось загрузить актуальные курсы, используются приблизительные',
        source: 'Источник: Центральный банк Узбекистана (ЦБУ)',
        updated: 'Обновлено',
        bankNote: 'Внимание: курсы коммерческих банков отличаются от курса ЦБ. Уточняйте актуальный курс в вашем банке.',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>

          {/* Status indicator */}
          {loading && (
            <p className="text-xs text-muted-foreground animate-pulse">
              {t.loading}
            </p>
          )}
          {error && !loading && (
            <p className="text-xs text-destructive">
              {t.error}
            </p>
          )}
          {usingFallback && !loading && (
            <p className="text-xs text-amber-600">
              {t.fallbackWarning}
            </p>
          )}
        </CardContent>
      </Card>

      {/* CBU official rate card */}
      <Card className="border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg">{t.cbuRate}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">1 USD</span>
            <span className="text-xl font-bold text-primary">{formatNumber(Math.round(cbuUsdRate), locale)} UZS</span>
          </div>
          {results && (
            <div className="border-t pt-3 flex justify-between items-center">
              <span className="text-muted-foreground">{amount} USD =</span>
              <span className="text-xl font-bold">{formatNumber(Math.round(results.uzsAmount), locale)} UZS</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bank rates note */}
      <Card className="border-amber-300/50 bg-amber-50/50 dark:bg-amber-950/20">
        <CardContent className="pt-4">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {t.bankNote}
          </p>
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
