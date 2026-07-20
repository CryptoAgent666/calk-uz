'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculatePropertyTax } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

export default function PropertyTaxCalculator() {
  const locale = useLocale()
  const [cadastralValue, setCadastralValue] = useState('')
  const [area, setArea] = useState('')
  const [isLegalEntity, setIsLegalEntity] = useState(false)

  const result = useMemo(() => {
    const val = parseFloat(cadastralValue.replace(/\s/g, '')) || 0
    const a = parseFloat(area) || 0
    if (val <= 0 || a <= 0) return null
    return calculatePropertyTax(val, a, isLegalEntity)
  }, [cadastralValue, area, isLegalEntity])

  const t = locale === 'uz'
    ? {
        cadastralValue: 'Kadastr qiymati (UZS)',
        area: 'Maydon (m\u00B2)',
        legalEntity: 'Yuridik shaxs',
        results: 'Natijalar',
        taxRate: 'Soliq stavkasi',
        annualTax: 'Yillik soliq',
        quarterlyTax: 'Choraklik soliq',
        monthlyTax: 'Oylik soliq',
        placeholder: 'Summani kiriting',
      }
    : {
        cadastralValue: 'Кадастровая стоимость (UZS)',
        area: 'Площадь (м\u00B2)',
        legalEntity: 'Юридическое лицо',
        results: 'Результаты',
        taxRate: 'Ставка налога',
        annualTax: 'Годовой налог',
        quarterlyTax: 'Квартальный налог',
        monthlyTax: 'Ежемесячный налог',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.cadastralValue}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={cadastralValue} onChange={(e) => setCadastralValue(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.area}</Label>
            <Input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="mt-1" min={1} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="legal" className="cursor-pointer">{t.legalEntity}</Label>
            <Switch id="legal" checked={isLegalEntity} onCheckedChange={setIsLegalEntity} />
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
              <span>{formatCurrency(result.quarterlyTax, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.monthlyTax}</span>
              <span>{formatCurrency(result.monthlyTax, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
