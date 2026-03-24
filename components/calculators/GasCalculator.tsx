'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateGas } from '@/lib/calculators/utilities'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function GasCalculator() {
  const locale = useLocale()
  const [consumption, setConsumption] = useState('')
  const [isSummer, setIsSummer] = useState(true)

  const result = useMemo(() => {
    const c = parseFloat(consumption) || 0
    if (c <= 0) return null
    return calculateGas(c, isSummer)
  }, [consumption, isSummer])

  const t = locale === 'uz'
    ? { consumption: 'Iste\'mol (m\u00B3)', isSummer: 'Yoz davri', results: 'Natijalar', total: 'Jami to\'lov', placeholder: 'm\u00B3 kiriting' }
    : { consumption: 'Потребление (м\u00B3)', isSummer: 'Летний период', results: 'Результаты', total: 'Итого к оплате', placeholder: 'Введите м\u00B3' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.consumption}</Label>
            <Input type="number" placeholder={t.placeholder} value={consumption} onChange={(e) => setConsumption(e.target.value)} className="mt-1 text-lg" min={0} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="summer" className="cursor-pointer">{t.isSummer}</Label>
            <Switch id="summer" checked={isSummer} onCheckedChange={setIsSummer} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {result.breakdown.map((tier, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{formatNumber(tier.from, locale)}–{formatNumber(tier.to, locale)} m\u00B3 ({formatNumber(tier.rate, locale)} UZS)</span>
                <span>{formatCurrency(tier.cost, 'UZS', locale)}</span>
              </div>
            ))}
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.total}</span>
              <span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
