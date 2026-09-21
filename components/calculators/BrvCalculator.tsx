'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { calculateBRV } from '@/lib/calculators/unique'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function BrvCalculator() {
  const locale = useLocale()
  const [multiplier, setMultiplier] = useState('1')

  const result = useMemo(() => {
    const m = parseFloat(multiplier) || 0
    if (m <= 0) return null
    return calculateBRV(m)
  }, [multiplier])

  const t = locale === 'uz'
    ? { multiplier: 'BHM koeffitsiyenti', brvValue: 'Joriy BHM qiymati', totalAmount: 'Jami summa' }
    : { multiplier: 'Коэффициент БРВ', brvValue: 'Текущее значение БРВ', totalAmount: 'Итого' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.multiplier}</Label>
              <span className="text-sm font-medium text-primary">{multiplier}x</span>
            </div>
            <Slider value={[parseFloat(multiplier) || 0]} onValueChange={(v) => setMultiplier(String(Array.isArray(v) ? v[0] : v))} min={0.1} max={100} step={0.1} />
          </div>
          <div>
            <Input type="number" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} className="text-lg" min={0.1} step={0.1} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.brvValue}</p>
              <p className="text-xl font-bold mt-1">{formatCurrency(result.brvValue, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalAmount} ({formatNumber(result.multiplier, locale)}x)</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.totalAmount, 'UZS', locale)}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
