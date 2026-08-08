'use client'

import { useState, useCallback } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { generateRandomNumber } from '@/lib/calculators/tools'

export default function RandomCalculator() {
  const locale = useLocale()
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [allowDuplicates, setAllowDuplicates] = useState(true)
  const [results, setResults] = useState<number[]>([])

  const generate = useCallback(() => {
    try {
      const nums = generateRandomNumber(parseInt(min) || 0, parseInt(max) || 100, parseInt(count) || 1, allowDuplicates)
      setResults(nums)
    } catch { setResults([]) }
  }, [min, max, count, allowDuplicates])

  const t = locale === 'uz'
    ? { min: 'Minimal', max: 'Maksimal', count: 'Soni', allowDuplicates: 'Takrorlashga ruxsat', generate: 'Yaratish', results: 'Natijalar' }
    : { min: 'Минимум', max: 'Максимум', count: 'Количество', allowDuplicates: 'Разрешить повторы', generate: 'Сгенерировать', results: 'Результаты' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div><Label>{t.min}</Label><Input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="mt-1" /></div>
            <div><Label>{t.max}</Label><Input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="mt-1" /></div>
            <div><Label>{t.count}</Label><Input type="number" value={count} onChange={(e) => setCount(e.target.value)} className="mt-1" min={1} max={100} /></div>
          </div>
          <div className="flex items-center justify-between"><Label htmlFor="dup" className="cursor-pointer">{t.allowDuplicates}</Label><Switch id="dup" checked={allowDuplicates} onCheckedChange={setAllowDuplicates} /></div>
          <button onClick={generate} className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">{t.generate}</button>
        </CardContent>
      </Card>
      {results.length > 0 && (
        <Card className="border-primary/30">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {results.map((n, i) => (
                <span key={i} className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-md text-lg">{n}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
