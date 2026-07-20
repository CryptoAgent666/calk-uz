'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'

export default function TuitionCalculator() {
  const locale = useLocale()
  const [annualTuition, setAnnualTuition] = useState('')
  const [years, setYears] = useState('4')
  const [annualIncrease, setAnnualIncrease] = useState('10')

  const result = useMemo(() => {
    const tuition = parseFloat(annualTuition.replace(/\s/g, '')) || 0
    const y = parseInt(years) || 0
    const inc = parseFloat(annualIncrease) || 0
    if (tuition <= 0 || y <= 0) return null
    let total = 0
    const breakdown: { year: number; amount: number }[] = []
    for (let i = 0; i < y; i++) {
      const amount = tuition * Math.pow(1 + inc / 100, i)
      breakdown.push({ year: i + 1, amount })
      total += amount
    }
    return { total, breakdown, avgPerYear: total / y }
  }, [annualTuition, years, annualIncrease])

  const t = locale === 'uz'
    ? { tuition: 'Yillik to\'lov (UZS)', years: 'O\'qish davri (yil)', increase: 'Yillik oshish (%)', results: 'Natijalar', total: 'Jami xarajat', year: 'yil', placeholder: 'Summani kiriting' }
    : { tuition: 'Годовая стоимость (UZS)', years: 'Срок обучения (лет)', increase: 'Ежегодное повышение (%)', results: 'Результаты', total: 'Итого за обучение', year: 'год', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.tuition}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={annualTuition} onChange={(e) => setAnnualTuition(e.target.value)} className="mt-1 text-lg" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.years}</Label><Input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="mt-1" min={1} max={8} /></div>
            <div><Label>{t.increase}</Label><Input type="number" value={annualIncrease} onChange={(e) => setAnnualIncrease(e.target.value)} className="mt-1" min={0} max={50} step={1} /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {result.breakdown.map(row => (
              <div key={row.year} className="flex justify-between"><span className="text-muted-foreground">{row.year} {t.year}</span><span>{formatCurrency(row.amount, 'UZS', locale)}</span></div>
            ))}
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.total}</span><span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
