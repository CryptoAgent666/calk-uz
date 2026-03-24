'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateWedding } from '@/lib/calculators/unique'
import { formatCurrency } from '@/lib/utils'

export default function WeddingCalculator() {
  const locale = useLocale()
  const [guests, setGuests] = useState('200')
  const [venue, setVenue] = useState<'restaurant' | 'banquet_hall' | 'home' | 'outdoor'>('banquet_hall')
  const [costPerPlate, setCostPerPlate] = useState('150000')

  const result = useMemo(() => {
    const g = parseInt(guests) || 0
    const cpp = parseFloat(costPerPlate) || 150000
    if (g <= 0) return null
    return calculateWedding(g, venue, cpp)
  }, [guests, venue, costPerPlate])

  const t = locale === 'uz'
    ? {
        guests: 'Mehmonlar soni', venue: 'Joy turi', costPerPlate: 'Narx/kishi (UZS)',
        results: 'Natijalar', venueCost: 'Joy ijarasi', foodCost: 'Ovqat', musicCost: 'Musiqa',
        photoCost: 'Foto/Video', decorCost: 'Bezak', dressCost: 'Kiyim-kechak',
        transportCost: 'Transport', otherCost: 'Boshqa', totalCost: 'Jami xarajat',
        costPerGuest: 'Har bir mehmon uchun',
        restaurant: 'Restoran', banquet_hall: 'To\'yxona', home: 'Uyda', outdoor: 'Ochiq havoda',
      }
    : {
        guests: 'Количество гостей', venue: 'Тип места', costPerPlate: 'Стоимость/чел. (UZS)',
        results: 'Результаты', venueCost: 'Аренда зала', foodCost: 'Питание', musicCost: 'Музыка',
        photoCost: 'Фото/Видео', decorCost: 'Декор', dressCost: 'Одежда',
        transportCost: 'Транспорт', otherCost: 'Прочее', totalCost: 'Общая стоимость',
        costPerGuest: 'На каждого гостя',
        restaurant: 'Ресторан', banquet_hall: 'Банкетный зал', home: 'Дома', outdoor: 'На природе',
      }

  const venueOptions = { restaurant: t.restaurant, banquet_hall: t.banquet_hall, home: t.home, outdoor: t.outdoor }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.guests}</Label><Input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} className="mt-1 text-lg" min={10} max={1000} /></div>
          <div><Label>{t.venue}</Label><select value={venue} onChange={(e) => setVenue(e.target.value as typeof venue)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(venueOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <div><Label>{t.costPerPlate}</Label><Input type="number" value={costPerPlate} onChange={(e) => setCostPerPlate(e.target.value)} className="mt-1" min={10000} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.venueCost}</span><span>{formatCurrency(result.venueCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.foodCost}</span><span>{formatCurrency(result.foodCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.musicCost}</span><span>{formatCurrency(result.musicCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.photoCost}</span><span>{formatCurrency(result.photographyCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.decorCost}</span><span>{formatCurrency(result.decorationCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.dressCost}</span><span>{formatCurrency(result.dressCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.transportCost}</span><span>{formatCurrency(result.transportCost, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalCost}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.costPerGuest}</span><span>{formatCurrency(result.costPerGuest, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
