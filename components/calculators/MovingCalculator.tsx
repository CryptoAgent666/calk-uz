'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { formatCurrency } from '@/lib/utils'

export default function MovingCalculator() {
  const locale = useLocale()
  const [rooms, setRooms] = useState('2')
  const [floor, setFloor] = useState('5')
  const [hasElevator, setHasElevator] = useState(true)
  const [distance, setDistance] = useState('10')

  const result = useMemo(() => {
    const r = parseInt(rooms) || 1
    const f = parseInt(floor) || 1
    const d = parseFloat(distance) || 0
    const baseCost = r * 500_000
    const floorSurcharge = hasElevator ? 0 : Math.max(0, f - 1) * 50_000
    const distanceCost = d * 5_000
    const loaders = r <= 1 ? 2 : r <= 3 ? 3 : 4
    const loadersCost = loaders * 200_000
    const totalCost = baseCost + floorSurcharge + distanceCost + loadersCost
    return { baseCost, floorSurcharge, distanceCost, loadersCost, loaders, totalCost }
  }, [rooms, floor, hasElevator, distance])

  const t = locale === 'uz'
    ? { rooms: 'Xonalar soni', floor: 'Qavat', elevator: 'Lift mavjud', distance: 'Masofa (km)', results: 'Natijalar', base: 'Bazaviy xarajat', floorExtra: 'Qavat uchun qo\'shimcha', distCost: 'Masofa xarajati', loaders: 'Yukchilar', total: 'Jami xarajat' }
    : { rooms: 'Количество комнат', floor: 'Этаж', elevator: 'Есть лифт', distance: 'Расстояние (км)', results: 'Результаты', base: 'Базовая стоимость', floorExtra: 'Надбавка за этаж', distCost: 'Стоимость проезда', loaders: 'Грузчики', total: 'Итого' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.rooms}</Label><Input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} className="mt-1" min={1} max={10} /></div>
            <div><Label>{t.floor}</Label><Input type="number" value={floor} onChange={(e) => setFloor(e.target.value)} className="mt-1" min={1} max={25} /></div>
          </div>
          <div className="flex items-center justify-between"><Label htmlFor="elev" className="cursor-pointer">{t.elevator}</Label><Switch id="elev" checked={hasElevator} onCheckedChange={setHasElevator} /></div>
          <div><Label>{t.distance}</Label><Input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="mt-1" min={1} /></div>
        </CardContent>
      </Card>
      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.base}</span><span>{formatCurrency(result.baseCost, 'UZS', locale)}</span></div>
          {result.floorSurcharge > 0 && <div className="flex justify-between"><span className="text-muted-foreground">{t.floorExtra}</span><span>{formatCurrency(result.floorSurcharge, 'UZS', locale)}</span></div>}
          <div className="flex justify-between"><span className="text-muted-foreground">{t.distCost}</span><span>{formatCurrency(result.distanceCost, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.loaders} ({result.loaders})</span><span>{formatCurrency(result.loadersCost, 'UZS', locale)}</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.total}</span><span className="text-primary">{formatCurrency(result.totalCost, 'UZS', locale)}</span></div>
        </CardContent>
      </Card>
    </div>
  )
}
