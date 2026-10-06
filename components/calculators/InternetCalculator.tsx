'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'

const PLANS = [
  { speed: 10, price: 65_000 },
  { speed: 30, price: 90_000 },
  { speed: 50, price: 120_000 },
  { speed: 100, price: 160_000 },
  { speed: 200, price: 220_000 },
]

export default function InternetCalculator() {
  const locale = useLocale()
  const [speed, setSpeed] = useState('50')
  const [months, setMonths] = useState('12')

  const result = useMemo(() => {
    const s = parseInt(speed) || 0
    const m = parseInt(months) || 1
    const plan = PLANS.reduce((prev, curr) => Math.abs(curr.speed - s) < Math.abs(prev.speed - s) ? curr : prev, PLANS[0])
    return { monthlyCost: plan.price, speed: plan.speed, totalCost: plan.price * m, months: m }
  }, [speed, months])

  const t = locale === 'uz'
    ? { speed: 'Tezlik (Mbit/s)', months: 'Oylar soni', results: 'Natijalar', monthly: 'Oylik to\'lov', total: 'Jami to\'lov', selectedSpeed: 'Tanlangan tarif' }
    : { speed: 'Скорость (Мбит/с)', months: 'Количество месяцев', results: 'Результаты', monthly: 'Ежемесячная оплата', total: 'Итого', selectedSpeed: 'Выбранный тариф' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.speed}</Label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {PLANS.map(p => <option key={p.speed} value={p.speed}>{p.speed} Mbit/s — {formatCurrency(p.price, 'UZS', locale)}</option>)}
            </select>
          </div>
          <div>
            <Label>{t.months}</Label>
            <Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1 w-24" min={1} max={24} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.selectedSpeed}</span><span>{result.speed} Mbit/s</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.monthly}</span><span>{formatCurrency(result.monthlyCost, 'UZS', locale)}</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>{t.total}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
