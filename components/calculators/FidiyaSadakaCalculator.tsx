'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateFidiyaSadaqa } from '@/lib/calculators/religion'
import { formatCurrency } from '@/lib/utils'

export default function FidiyaSadakaCalculator() {
  const locale = useLocale()
  const [missedDays, setMissedDays] = useState('')
  const [costPerMeal, setCostPerMeal] = useState('30000')

  const result = useMemo(() => {
    const d = parseInt(missedDays) || 0
    const c = parseFloat(costPerMeal) || 30000
    if (d <= 0) return null
    return calculateFidiyaSadaqa(d, c)
  }, [missedDays, costPerMeal])

  const t = locale === 'uz'
    ? { missedDays: 'O\'tkazib yuborilgan kunlar', costPerMeal: 'Bir ovqat narxi (UZS)', results: 'Natijalar', costPerDay: 'Kunlik fidiya', totalAmount: 'Jami summa', placeholder: 'Kunlar sonini kiriting' }
    : { missedDays: 'Пропущенных дней', costPerMeal: 'Стоимость одного приёма пищи (UZS)', results: 'Результаты', costPerDay: 'Фидия за день', totalAmount: 'Общая сумма', placeholder: 'Введите количество дней' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.missedDays}</Label><Input type="number" placeholder={t.placeholder} value={missedDays} onChange={(e) => setMissedDays(e.target.value)} className="mt-1 text-lg" min={1} max={30} /></div>
          <div><Label>{t.costPerMeal}</Label><Input type="number" value={costPerMeal} onChange={(e) => setCostPerMeal(e.target.value)} className="mt-1" min={1000} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.costPerDay}</span><span>{formatCurrency(result.costPerDay, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalAmount}</span><span className="text-primary">{formatCurrency(result.totalAmount, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
