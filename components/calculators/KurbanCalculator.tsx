'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateKurban } from '@/lib/calculators/religion'
import { formatCurrency } from '@/lib/utils'

export default function KurbanCalculator() {
  const locale = useLocale()
  const [animalType, setAnimalType] = useState<'sheep' | 'goat' | 'cow' | 'camel'>('sheep')
  const [price, setPrice] = useState('3000000')
  const [shares, setShares] = useState('1')

  const result = useMemo(() => {
    const p = parseFloat(price.replace(/\s/g, '')) || 0
    const s = parseInt(shares) || 1
    if (p <= 0) return null
    return calculateKurban(animalType, p, s)
  }, [animalType, price, shares])

  const t = locale === 'uz'
    ? { type: 'Hayvon turi', price: 'Narx (UZS)', shares: 'Ulush', results: 'Natijalar', pricePerShare: 'Ulush narxi', totalCost: 'Jami xarajat', meatEstimate: 'Taxminiy go\'sht (kg)', sheep: 'Qo\'y', goat: 'Echki', cow: 'Sigir', camel: 'Tuya' }
    : { type: 'Тип животного', price: 'Цена (UZS)', shares: 'Долей', results: 'Результаты', pricePerShare: 'Цена за долю', totalCost: 'Общая стоимость', meatEstimate: 'Мясо примерно (кг)', sheep: 'Овца', goat: 'Коза', cow: 'Корова', camel: 'Верблюд' }

  const animalOptions = { sheep: t.sheep, goat: t.goat, cow: t.cow, camel: t.camel }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.type}</Label><select value={animalType} onChange={(e) => setAnimalType(e.target.value as typeof animalType)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(animalOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <div><Label>{t.price}</Label><Input type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 text-lg" /></div>
          {(animalType === 'cow' || animalType === 'camel') && (
            <div><Label>{t.shares}</Label><Input type="number" value={shares} onChange={(e) => setShares(e.target.value)} className="mt-1" min={1} max={7} /></div>
          )}
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.pricePerShare}</span><span>{formatCurrency(result.pricePerShare, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.meatEstimate}</span><span>{result.meatEstimateKg.toFixed(0)} kg</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
