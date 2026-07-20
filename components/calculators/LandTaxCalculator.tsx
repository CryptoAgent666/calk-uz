'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateLandTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function LandTaxCalculator() {
  const locale = useLocale()
  const [normativeValue, setNormativeValue] = useState('')
  const [isAgricultural, setIsAgricultural] = useState(true)

  const result = useMemo(() => {
    const val = parseFloat(normativeValue.replace(/\s/g, '')) || 0
    if (val <= 0) return null
    return calculateLandTax(val, isAgricultural)
  }, [normativeValue, isAgricultural])

  const t = locale === 'uz'
    ? {
        normativeValue: 'Normativ qiymat (UZS)',
        agricultural: 'Qishloq xo\'jaligi yeri',
        results: 'Natijalar',
        taxRate: 'Soliq stavkasi',
        annualTax: 'Yillik soliq',
        quarterlyTax: 'Choraklik soliq',
        placeholder: 'Summani kiriting',
      }
    : {
        normativeValue: 'Нормативная стоимость (UZS)',
        agricultural: 'Сельскохозяйственная земля',
        results: 'Результаты',
        taxRate: 'Ставка налога',
        annualTax: 'Годовой налог',
        quarterlyTax: 'Квартальный налог',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.normativeValue}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={normativeValue} onChange={(e) => setNormativeValue(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="agri" className="cursor-pointer">{t.agricultural}</Label>
            <Switch id="agri" checked={isAgricultural} onCheckedChange={setIsAgricultural} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.taxRate}</span>
              <span>{result.taxRate.toFixed(3)}%</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.annualTax}</span>
              <span className="text-primary">{formatCurrency(result.annualTax, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.quarterlyTax}</span>
              <span>{formatCurrency(result.annualTax / 4, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
