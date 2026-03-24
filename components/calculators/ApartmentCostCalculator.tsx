'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'

export default function ApartmentCostCalculator() {
  const locale = useLocale()
  const [area, setArea] = useState('')
  const [pricePerM2, setPricePerM2] = useState('')
  const [rooms, setRooms] = useState('2')

  const result = useMemo(() => {
    const a = parseFloat(area) || 0
    const p = parseFloat(pricePerM2.replace(/\s/g, '')) || 0
    if (a <= 0 || p <= 0) return null
    const totalPrice = a * p
    const registrationFee = 412_000 * 3
    const notaryFee = totalPrice * 0.005
    return { totalPrice, registrationFee, notaryFee, totalCost: totalPrice + registrationFee + notaryFee }
  }, [area, pricePerM2])

  const t = locale === 'uz'
    ? {
        area: 'Maydon (m\u00B2)', pricePerM2: 'Narx (UZS/m\u00B2)', rooms: 'Xonalar soni',
        results: 'Natijalar', totalPrice: 'Kvartira narxi', registrationFee: 'Ro\'yxatga olish',
        notaryFee: 'Notarius xarajatlari', totalCost: 'Jami xarajat',
        placeholder: 'Summani kiriting', areaPlaceholder: 'Maydonni kiriting',
      }
    : {
        area: 'Площадь (м\u00B2)', pricePerM2: 'Цена (UZS/м\u00B2)', rooms: 'Количество комнат',
        results: 'Результаты', totalPrice: 'Стоимость квартиры', registrationFee: 'Регистрация',
        notaryFee: 'Нотариальные расходы', totalCost: 'Общая стоимость',
        placeholder: 'Введите сумму', areaPlaceholder: 'Введите площадь',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.area}</Label><Input type="number" placeholder={t.areaPlaceholder} value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 text-lg" min={1} /></div>
          <div><Label>{t.pricePerM2}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={pricePerM2} onChange={(e) => setPricePerM2(e.target.value)} className="mt-1 text-lg" /></div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalPrice}</span><span>{formatCurrency(result.totalPrice, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.registrationFee}</span><span>{formatCurrency(result.registrationFee, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.notaryFee}</span><span>{formatCurrency(result.notaryFee, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
