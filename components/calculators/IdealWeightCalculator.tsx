'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateIdealWeight } from '@/lib/calculators/health'

export default function IdealWeightCalculator() {
  const locale = useLocale()
  const [height, setHeight] = useState('175')
  const [isMale, setIsMale] = useState(true)

  const result = useMemo(() => {
    const h = parseFloat(height) || 0
    if (h <= 0) return null
    return calculateIdealWeight(h, isMale)
  }, [height, isMale])

  const t = locale === 'uz'
    ? { height: 'Bo\'y (sm)', isMale: 'Erkak', results: 'Ideal vazn (kg)', average: 'O\'rtacha', devine: 'Devin', robinson: 'Robinson', miller: 'Miller', hamwi: 'Hamwi' }
    : { height: 'Рост (см)', isMale: 'Мужской пол', results: 'Идеальный вес (кг)', average: 'Среднее', devine: 'Девайн', robinson: 'Робинсон', miller: 'Миллер', hamwi: 'Хамви' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.height}</Label><Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 text-lg" min={100} max={250} /></div>
          <div className="flex items-center justify-between"><Label htmlFor="gender" className="cursor-pointer">{t.isMale}</Label><Switch id="gender" checked={isMale} onCheckedChange={setIsMale} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="border-b pb-3 flex justify-between font-bold text-lg"><span>{t.average}</span><span className="text-primary">{result.average.toFixed(1)} kg</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.devine}</span><span>{result.devine.toFixed(1)} kg</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.robinson}</span><span>{result.robinson.toFixed(1)} kg</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.miller}</span><span>{result.miller.toFixed(1)} kg</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.hamwi}</span><span>{result.hamwi.toFixed(1)} kg</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
