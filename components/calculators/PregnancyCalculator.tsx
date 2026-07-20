'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculatePregnancy } from '@/lib/calculators/health'

export default function PregnancyCalculator() {
  const locale = useLocale()
  const [lastPeriod, setLastPeriod] = useState('')

  const result = useMemo(() => {
    if (!lastPeriod) return null
    const date = new Date(lastPeriod)
    if (isNaN(date.getTime())) return null
    return calculatePregnancy(date)
  }, [lastPeriod])

  const t = locale === 'uz'
    ? { lastPeriod: 'Oxirgi hayz sanasi', results: 'Natijalar', dueDate: 'Taxminiy tug\'ruq sanasi', currentWeek: 'Joriy hafta', trimester: 'Trimestr', daysRemaining: 'Qolgan kunlar', progress: 'Jarayon', conception: 'Taxminiy homiladorlik sanasi' }
    : { lastPeriod: 'Дата последних месячных', results: 'Результаты', dueDate: 'Предполагаемая дата родов', currentWeek: 'Текущая неделя', trimester: 'Триместр', daysRemaining: 'Осталось дней', progress: 'Прогресс', conception: 'Предполагаемая дата зачатия' }

  const formatDate = (d: Date) => d.toLocaleDateString(locale === 'uz' ? 'uz-Latn' : 'ru-RU')

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.lastPeriod}</Label><Input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="mt-1 text-lg" /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between font-bold text-lg"><span>{t.dueDate}</span><span className="text-primary">{formatDate(result.dueDate)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.conception}</span><span>{formatDate(result.conceptionDate)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.currentWeek}</span><span>{result.currentWeek} {locale === 'uz' ? 'hafta' : 'нед.'} {result.currentDay} {locale === 'uz' ? 'kun' : 'дн.'}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.trimester}</span><Badge variant="secondary">{result.trimester}</Badge></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.daysRemaining}</span><span>{result.daysRemaining}</span></div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-muted-foreground">{t.progress}</span><span>{result.progress.toFixed(0)}%</span></div>
              <div className="w-full bg-muted rounded-full h-2"><div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${Math.min(100, result.progress)}%` }} /></div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
