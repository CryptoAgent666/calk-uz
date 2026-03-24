'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateBmi } from '@/lib/calculators/health'

export default function BmiCalculator() {
  const locale = useLocale()
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const result = useMemo(() => {
    const w = parseFloat(weight) || 0
    const h = parseFloat(height) || 0
    if (w <= 0 || h <= 0) return null
    return calculateBmi(w, h)
  }, [weight, height])

  const categories: Record<string, Record<string, string>> = {
    uz: { severe_underweight: 'Juda kam vazn', underweight: 'Kam vazn', normal: 'Normal vazn', overweight: 'Ortiqcha vazn', obese_1: 'Semizlik I', obese_2: 'Semizlik II', obese_3: 'Semizlik III' },
    ru: { severe_underweight: 'Выраженный дефицит', underweight: 'Недостаточный вес', normal: 'Нормальный вес', overweight: 'Избыточный вес', obese_1: 'Ожирение I', obese_2: 'Ожирение II', obese_3: 'Ожирение III' }
  }

  const t = locale === 'uz'
    ? { weight: 'Vazn (kg)', height: 'Bo\'y (sm)', results: 'Natijalar', bmi: 'BMI', category: 'Kategoriya', healthyRange: 'Sog\'lom vazn oralig\'i' }
    : { weight: 'Вес (кг)', height: 'Рост (см)', results: 'Результаты', bmi: 'ИМТ', category: 'Категория', healthyRange: 'Здоровый диапазон веса' }

  const getBmiColor = (key: string) => {
    if (key === 'normal') return 'text-green-600'
    if (key === 'underweight' || key === 'overweight') return 'text-yellow-600'
    return 'text-destructive'
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.weight}</Label><Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 text-lg" min={1} max={500} step={0.1} /></div>
          <div><Label>{t.height}</Label><Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 text-lg" min={50} max={250} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-center">
            <p className={`text-4xl font-bold ${getBmiColor(result.categoryKey)}`}>{result.bmi.toFixed(1)}</p>
            <Badge variant={result.categoryKey === 'normal' ? 'default' : 'destructive'}>
              {(categories[locale] || categories.ru)[result.categoryKey] || result.category}
            </Badge>
            <p className="text-sm text-muted-foreground mt-2">{t.healthyRange}: {result.healthyWeightMin.toFixed(1)} – {result.healthyWeightMax.toFixed(1)} kg</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
