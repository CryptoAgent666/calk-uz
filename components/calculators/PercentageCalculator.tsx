'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { calculatePercentage, calculateWhatPercent, calculatePercentChange } from '@/lib/calculators/tools'
import { formatNumber } from '@/lib/utils'

export default function PercentageCalculator() {
  const locale = useLocale()
  const [mode, setMode] = useState<'percent_of' | 'what_percent' | 'percent_change'>('percent_of')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const result = useMemo(() => {
    const v1 = parseFloat(value1) || 0
    const v2 = parseFloat(value2) || 0
    if (v1 === 0 && v2 === 0) return null
    if (mode === 'percent_of') return calculatePercentage(v1, v2)
    if (mode === 'what_percent') return calculateWhatPercent(v1, v2)
    return calculatePercentChange(v1, v2)
  }, [mode, value1, value2])

  const t = locale === 'uz'
    ? {
        percentOf: 'Foizni hisoblash', whatPercent: 'Necha foiz?', percentChange: 'Foiz o\'zgarish',
        label1: mode === 'percent_of' ? 'Son' : mode === 'what_percent' ? 'Qism' : 'Eski qiymat',
        label2: mode === 'percent_of' ? 'Foiz (%)' : mode === 'what_percent' ? 'Butun' : 'Yangi qiymat',
        result: 'Natija',
      }
    : {
        percentOf: 'Процент от числа', whatPercent: 'Сколько %?', percentChange: 'Изменение %',
        label1: mode === 'percent_of' ? 'Число' : mode === 'what_percent' ? 'Часть' : 'Старое значение',
        label2: mode === 'percent_of' ? 'Процент (%)' : mode === 'what_percent' ? 'Целое' : 'Новое значение',
        result: 'Результат',
      }

  const formatResult = (r: number) => {
    if (mode === 'what_percent' || mode === 'percent_change') return `${r.toFixed(2)}%`
    return formatNumber(r, locale)
  }

  return (
    <div className="space-y-6">
      <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="percent_of">{t.percentOf}</TabsTrigger>
          <TabsTrigger value="what_percent">{t.whatPercent}</TabsTrigger>
          <TabsTrigger value="percent_change">{t.percentChange}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.label1}</Label><Input type="number" value={value1} onChange={(e) => setValue1(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.label2}</Label><Input type="number" value={value2} onChange={(e) => setValue2(e.target.value)} className="mt-1 text-lg" /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/30">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">{t.result}</p>
            <p className="text-3xl font-bold text-primary mt-2">{formatResult(result.result)}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
