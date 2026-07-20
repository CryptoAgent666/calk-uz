'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateElectricity } from '@/lib/calculators/utilities'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function ElectricityCalculator() {
  const locale = useLocale()
  const [consumption, setConsumption] = useState('')
  const [hasElectricStove, setHasElectricStove] = useState(false)

  const result = useMemo(() => {
    const c = parseFloat(consumption) || 0
    if (c <= 0) return null
    return calculateElectricity(c, hasElectricStove)
  }, [consumption, hasElectricStove])

  const t = locale === 'uz'
    ? {
        consumption: 'Iste\'mol (kVt*soat)', electricStove: 'Elektr plita mavjud',
        results: 'Natijalar', breakdown: 'Tarif bo\'yicha', from: 'dan', to: 'gacha',
        rate: 'Tarif', cost: 'Summa', discount: 'Chegirma (elektr plita)',
        total: 'Jami to\'lov', placeholder: 'kVt*soatni kiriting',
      }
    : {
        consumption: 'Потребление (кВт*ч)', electricStove: 'Электрическая плита',
        results: 'Результаты', breakdown: 'По тарифам', from: 'от', to: 'до',
        rate: 'Тариф', cost: 'Сумма', discount: 'Скидка (эл. плита)',
        total: 'Итого к оплате', placeholder: 'Введите кВт*ч',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.consumption}</Label>
            <Input type="number" placeholder={t.placeholder} value={consumption} onChange={(e) => setConsumption(e.target.value)} className="mt-1 text-lg" min={0} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="stove" className="cursor-pointer">{t.electricStove}</Label>
            <Switch id="stove" checked={hasElectricStove} onCheckedChange={setHasElectricStove} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {result.breakdown.map((tier, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{formatNumber(tier.from, locale)}–{formatNumber(tier.to, locale)} kWh ({formatNumber(tier.rate, locale)} UZS)</span>
                <span>{formatCurrency(tier.cost, 'UZS', locale)}</span>
              </div>
            ))}
            {result.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>{t.discount}</span>
                <span>-{formatCurrency(result.discount, 'UZS', locale)}</span>
              </div>
            )}
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.total}</span>
              <span className="text-primary">{formatCurrency(result.finalTotal, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
