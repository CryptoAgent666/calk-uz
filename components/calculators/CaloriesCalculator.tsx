'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateCalories, type ActivityLevel, type Goal } from '@/lib/calculators/health'
import { formatNumber } from '@/lib/utils'

export default function CaloriesCalculator() {
  const locale = useLocale()
  const [weight, setWeight] = useState('70')
  const [height, setHeight] = useState('175')
  const [age, setAge] = useState('30')
  const [isMale, setIsMale] = useState(true)
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [goal, setGoal] = useState<Goal>('maintain')

  const result = useMemo(() => {
    const w = parseFloat(weight) || 0
    const h = parseFloat(height) || 0
    const a = parseInt(age) || 0
    if (w <= 0 || h <= 0 || a <= 0) return null
    return calculateCalories(w, h, a, isMale, activity, goal)
  }, [weight, height, age, isMale, activity, goal])

  const t = locale === 'uz'
    ? {
        weight: 'Vazn (kg)', height: 'Bo\'y (sm)', age: 'Yosh', isMale: 'Erkak',
        activity: 'Faollik darajasi', goal: 'Maqsad', results: 'Natijalar',
        bmr: 'Bazal metabolizm', tdee: 'Kunlik kaloriya', target: 'Maqsadli kaloriya',
        protein: 'Oqsil (g)', fat: 'Yog\' (g)', carbs: 'Uglevodlar (g)',
        sedentary: 'Past', light: 'Engil', moderate: 'O\'rtacha', active: 'Yuqori', very_active: 'Juda yuqori',
        lose: 'Vazn yo\'qotish', maintain: 'Saqlash', gain: 'Vazn olish',
      }
    : {
        weight: 'Вес (кг)', height: 'Рост (см)', age: 'Возраст', isMale: 'Мужской пол',
        activity: 'Уровень активности', goal: 'Цель', results: 'Результаты',
        bmr: 'Базальный метаболизм', tdee: 'Суточный расход', target: 'Целевые калории',
        protein: 'Белки (г)', fat: 'Жиры (г)', carbs: 'Углеводы (г)',
        sedentary: 'Сидячий', light: 'Лёгкий', moderate: 'Умеренный', active: 'Активный', very_active: 'Очень активный',
        lose: 'Похудение', maintain: 'Поддержание', gain: 'Набор массы',
      }

  const activityOptions: Record<ActivityLevel, string> = { sedentary: t.sedentary, light: t.light, moderate: t.moderate, active: t.active, very_active: t.very_active }
  const goalOptions: Record<Goal, string> = { lose: t.lose, maintain: t.maintain, gain: t.gain }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div><Label>{t.weight}</Label><Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1" min={20} max={300} /></div>
            <div><Label>{t.height}</Label><Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1" min={100} max={250} /></div>
            <div><Label>{t.age}</Label><Input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1" min={10} max={100} /></div>
          </div>
          <div className="flex items-center justify-between"><Label htmlFor="gender" className="cursor-pointer">{t.isMale}</Label><Switch id="gender" checked={isMale} onCheckedChange={setIsMale} /></div>
          <div>
            <Label>{t.activity}</Label>
            <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityLevel)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(activityOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <Label>{t.goal}</Label>
            <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(goalOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-primary/30 col-span-2"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.target}</p><p className="text-3xl font-bold text-primary mt-1">{Math.round(result.targetCalories)} kcal</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.protein}</p><p className="text-xl font-bold mt-1">{Math.round(result.protein)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.fat}</p><p className="text-xl font-bold mt-1">{Math.round(result.fat)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.carbs}</p><p className="text-xl font-bold mt-1">{Math.round(result.carbs)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.bmr}</p><p className="text-xl font-bold mt-1">{Math.round(result.bmr)}</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
