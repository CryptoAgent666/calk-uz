'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { calculateDiscount } from '@/lib/calculators/tools'
import { formatCurrency } from '@/lib/utils'

export default function DiscountCalculator() {
  const locale = useLocale()
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('20')

  const result = useMemo(() => {
    const p = parseFloat(price.replace(/\s/g, '')) || 0
    const d = parseFloat(discount) || 0
    if (p <= 0) return null
    return calculateDiscount(p, d)
  }, [price, discount])

  const t = locale === 'uz'
    ? { price: 'Asl narx (UZS)', discount: 'Chegirma (%)', finalPrice: 'Yangi narx', saved: 'Tejab qolindi', placeholder: 'Summani kiriting' }
    : { price: 'Исходная цена (UZS)', discount: 'Скидка (%)', finalPrice: 'Цена со скидкой', saved: 'Экономия', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div><Label>{t.price}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 text-lg" /></div>
          <div>
            <div className="flex justify-between mb-2"><Label>{t.discount}</Label><span className="text-sm font-medium text-primary">{discount}%</span></div>
            <Slider value={[parseFloat(discount) || 0]} onValueChange={(v) => setDiscount(String(Array.isArray(v) ? v[0] : v))} min={1} max={90} step={1} />
          </div>
        </CardContent>
      </Card>
      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-primary/30"><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.finalPrice}</p><p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.finalPrice, 'UZS', locale)}</p></CardContent></Card>
          <Card><CardContent className="pt-4 text-center"><p className="text-sm text-muted-foreground">{t.saved}</p><p className="text-xl font-bold text-green-600 mt-1">{formatCurrency(result.savedAmount, 'UZS', locale)}</p></CardContent></Card>
        </div>
      )}
    </div>
  )
}
