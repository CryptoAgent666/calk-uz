'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateWater } from '@/lib/calculators/utilities'
import { formatCurrency } from '@/lib/utils'

export default function WaterCalculator() {
  const locale = useLocale()
  const [coldWater, setColdWater] = useState('')
  const [hotWater, setHotWater] = useState('')

  const result = useMemo(() => {
    const cold = parseFloat(coldWater) || 0
    const hot = parseFloat(hotWater) || 0
    if (cold <= 0 && hot <= 0) return null
    return calculateWater(cold, hot)
  }, [coldWater, hotWater])

  const t = locale === 'uz'
    ? { coldWater: 'Sovuq suv (m\u00B3)', hotWater: 'Issiq suv (m\u00B3)', results: 'Natijalar', coldCost: 'Sovuq suv', hotCost: 'Issiq suv', total: 'Jami', placeholder: 'm\u00B3 kiriting' }
    : { coldWater: 'Холодная вода (м\u00B3)', hotWater: 'Горячая вода (м\u00B3)', results: 'Результаты', coldCost: 'Холодная вода', hotCost: 'Горячая вода', total: 'Итого', placeholder: 'Введите м\u00B3' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.coldWater}</Label>
            <Input type="number" placeholder={t.placeholder} value={coldWater} onChange={(e) => setColdWater(e.target.value)} className="mt-1 text-lg" min={0} step={0.1} />
          </div>
          <div>
            <Label>{t.hotWater}</Label>
            <Input type="number" placeholder={t.placeholder} value={hotWater} onChange={(e) => setHotWater(e.target.value)} className="mt-1 text-lg" min={0} step={0.1} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.coldCost}</span><span>{formatCurrency(result.coldCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.hotCost}</span><span>{formatCurrency(result.hotCost, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.total}</span><span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
