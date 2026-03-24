'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateMargin } from '@/lib/calculators/business'
import { formatCurrency } from '@/lib/utils'

export default function MarginCalculator() {
  const locale = useLocale()
  const [costPrice, setCostPrice] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')

  const result = useMemo(() => {
    const cost = parseFloat(costPrice.replace(/\s/g, '')) || 0
    const sell = parseFloat(sellingPrice.replace(/\s/g, '')) || 0
    if (cost <= 0 || sell <= 0) return null
    return calculateMargin(cost, sell)
  }, [costPrice, sellingPrice])

  const t = locale === 'uz'
    ? { costPrice: 'Tannarx (UZS)', sellingPrice: 'Sotish narxi (UZS)', profit: 'Foyda', markup: 'Ustama', margin: 'Marja', placeholder: 'Summani kiriting' }
    : { costPrice: 'Себестоимость (UZS)', sellingPrice: 'Цена продажи (UZS)', profit: 'Прибыль', markup: 'Наценка', margin: 'Маржа', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.costPrice}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={costPrice} onChange={(e) => setCostPrice(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.sellingPrice}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} className="mt-1 text-lg" /></div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-primary/30"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.profit}</p><p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.profit, 'UZS', locale)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.markup}</p><p className="text-xl font-bold mt-1">{result.markupPercent.toFixed(1)}%</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.margin}</p><p className="text-xl font-bold mt-1">{result.marginPercent.toFixed(1)}%</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
