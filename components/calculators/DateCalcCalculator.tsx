'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateDateDiff } from '@/lib/calculators/tools'

export default function DateCalcCalculator() {
  const locale = useLocale()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const result = useMemo(() => {
    if (!startDate || !endDate) return null
    const s = new Date(startDate)
    const e = new Date(endDate)
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null
    return calculateDateDiff(s, e)
  }, [startDate, endDate])

  const t = locale === 'uz'
    ? { startDate: 'Boshlanish sanasi', endDate: 'Tugash sanasi', results: 'Natijalar', totalDays: 'Jami kunlar', years: 'Yillar', months: 'Oylar', days: 'Kunlar', weeks: 'Haftalar', workingDays: 'Ish kunlari' }
    : { startDate: 'Начальная дата', endDate: 'Конечная дата', results: 'Результаты', totalDays: 'Всего дней', years: 'Лет', months: 'Месяцев', days: 'Дней', weeks: 'Недель', workingDays: 'Рабочих дней' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.startDate}</Label><Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.endDate}</Label><Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mt-1 text-lg" /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="border-b pb-3 flex justify-between font-bold text-lg"><span>{t.totalDays}</span><span className="text-primary">{result.totalDays}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.years}</span><span>{result.years}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.months}</span><span>{result.months}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.days}</span><span>{result.days}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.weeks}</span><span>{result.weeks}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.workingDays}</span><span>{result.workingDays}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
