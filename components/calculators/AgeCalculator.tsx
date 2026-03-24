'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateAge } from '@/lib/calculators/tools'

export default function AgeCalculator() {
  const locale = useLocale()
  const [birthDate, setBirthDate] = useState('')

  const result = useMemo(() => {
    if (!birthDate) return null
    const date = new Date(birthDate)
    if (isNaN(date.getTime())) return null
    return calculateAge(date)
  }, [birthDate])

  const t = locale === 'uz'
    ? { birthDate: 'Tug\'ilgan sana', results: 'Natijalar', age: 'Yosh', totalDays: 'Jami kunlar', totalMonths: 'Jami oylar', nextBirthday: 'Keyingi tug\'ilgan kun', daysUntil: 'Qolgan kunlar', years: 'yil', months: 'oy', days: 'kun' }
    : { birthDate: 'Дата рождения', results: 'Результаты', age: 'Возраст', totalDays: 'Всего дней', totalMonths: 'Всего месяцев', nextBirthday: 'Следующий день рождения', daysUntil: 'Осталось дней', years: 'лет', months: 'мес.', days: 'дн.' }

  const formatDate = (d: Date) => d.toLocaleDateString(locale === 'uz' ? 'uz-Latn' : 'ru-RU')

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Label>{t.birthDate}</Label>
          <Input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="mt-1 text-lg" />
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center pb-3 border-b">
              <p className="text-3xl font-bold text-primary">{result.years} {t.years} {result.months} {t.months} {result.days} {t.days}</p>
            </div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalDays}</span><span>{result.totalDays.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalMonths}</span><span>{result.totalMonths}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.nextBirthday}</span><span>{formatDate(result.nextBirthday)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.daysUntil}</span><span>{result.daysUntilBirthday}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
