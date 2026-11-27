'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function MacrosCalculator() {
  const locale = useLocale()
  const [calories, setCalories] = useState('2000')
  const [proteinPct, setProteinPct] = useState('30')
  const [fatPct, setFatPct] = useState('30')

  const result = useMemo(() => {
    const cal = parseFloat(calories) || 0
    const pp = parseFloat(proteinPct) || 0
    const fp = parseFloat(fatPct) || 0
    if (cal <= 0) return null
    const cp = Math.max(0, 100 - pp - fp)
    return { protein: (cal * pp / 100) / 4, fat: (cal * fp / 100) / 9, carbs: (cal * cp / 100) / 4, carbsPct: cp }
  }, [calories, proteinPct, fatPct])

  const t = locale === 'uz'
    ? { calories: 'Kunlik kaloriya', proteinPct: 'Oqsil (%)', fatPct: 'Yog\' (%)', protein: 'Oqsil (g)', fat: 'Yog\' (g)', carbs: 'Uglevodlar (g)', carbsPct: 'Uglevodlar (%)' }
    : { calories: 'Суточные калории', proteinPct: 'Белки (%)', fatPct: 'Жиры (%)', protein: 'Белки (г)', fat: 'Жиры (г)', carbs: 'Углеводы (г)', carbsPct: 'Углеводы (%)' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.calories}</Label><Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} className="mt-1 text-lg" min={500} max={10000} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.proteinPct}</Label><Input type="number" value={proteinPct} onChange={(e) => setProteinPct(e.target.value)} className="mt-1" min={0} max={100} /></div>
            <div><Label>{t.fatPct}</Label><Input type="number" value={fatPct} onChange={(e) => setFatPct(e.target.value)} className="mt-1" min={0} max={100} /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-primary/30"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.protein}</p><p className="text-2xl font-bold text-primary mt-1">{Math.round(result.protein)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.fat}</p><p className="text-2xl font-bold mt-1">{Math.round(result.fat)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.carbs} ({result.carbsPct}%)</p><p className="text-2xl font-bold mt-1">{Math.round(result.carbs)}</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
