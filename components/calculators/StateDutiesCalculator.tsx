'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { STATE_DUTIES, calculateStateDuty } from '@/lib/calculators/unique'
import { BRV } from '@/lib/constants/brv'
import { formatCurrency } from '@/lib/utils'

export default function StateDutiesCalculator() {
  const locale = useLocale()
  const [selectedType, setSelectedType] = useState(STATE_DUTIES[0].type)

  const result = useMemo(() => calculateStateDuty(selectedType), [selectedType])
  const selectedDuty = STATE_DUTIES.find(d => d.type === selectedType)

  const t = locale === 'uz'
    ? { type: 'Xizmat turi', results: 'Natijalar', brvMultiplier: 'BHM koeffitsiyenti', amount: 'Summa' }
    : { type: 'Тип услуги', results: 'Результаты', brvMultiplier: 'Коэфф. БРВ', amount: 'Сумма' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Label>{t.type}</Label>
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            {STATE_DUTIES.map(d => <option key={d.type} value={d.type}>{locale === 'uz' ? d.descriptionUz : d.descriptionRu}</option>)}
          </select>
        </CardContent>
      </Card>
      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.brvMultiplier}</span><span>{result.brvMultiplier} BHM</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.amount}</span><span className="text-primary">{formatCurrency(result.amount, 'UZS', locale)}</span></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">{locale === 'uz' ? 'Barcha xizmatlar' : 'Все услуги'}</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {STATE_DUTIES.map(d => (
            <div key={d.type} className="flex justify-between text-sm py-1 border-b border-muted/30 last:border-0">
              <span className="text-muted-foreground">{locale === 'uz' ? d.descriptionUz : d.descriptionRu}</span>
              <span className="font-medium">{formatCurrency(BRV * d.brvMultiplier, 'UZS', locale)}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
