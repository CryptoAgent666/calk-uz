'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { calculatePassportFees } from '@/lib/calculators/unique'
import { formatCurrency } from '@/lib/utils'

export default function PassportFeesCalculator() {
  const locale = useLocale()
  const [type, setType] = useState<'new' | 'replacement' | 'lost' | 'child' | 'biometric'>('new')
  const [isUrgent, setIsUrgent] = useState(false)

  const result = useMemo(() => calculatePassportFees(type, isUrgent), [type, isUrgent])

  const t = locale === 'uz'
    ? { type: 'Pasport turi', urgent: 'Shoshilinch', results: 'Natijalar', baseFee: 'Oddiy narx', urgentFee: 'Shoshilinch narx', totalFee: 'Jami to\'lov', processingDays: 'Tayyorlanish muddati (kun)', new: 'Yangi', replacement: 'Almashtirish', lost: 'Yo\'qolgan', child: 'Bola', biometric: 'Biometrik' }
    : { type: 'Тип паспорта', urgent: 'Срочный', results: 'Результаты', baseFee: 'Обычная стоимость', urgentFee: 'Срочная стоимость', totalFee: 'Итого', processingDays: 'Срок изготовления (дней)', new: 'Новый', replacement: 'Замена', lost: 'Утерянный', child: 'Детский', biometric: 'Биометрический' }

  const typeOptions = { new: t.new, replacement: t.replacement, lost: t.lost, child: t.child, biometric: t.biometric }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.type}</Label><select value={type} onChange={(e) => setType(e.target.value as typeof type)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(typeOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <div className="flex items-center justify-between"><Label htmlFor="urgent" className="cursor-pointer">{t.urgent}</Label><Switch id="urgent" checked={isUrgent} onCheckedChange={setIsUrgent} /></div>
        </CardContent>
      </Card>
      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.baseFee}</span><span>{formatCurrency(result.baseFee, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.urgentFee}</span><span>{formatCurrency(result.urgentFee, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.processingDays}</span><span>{result.processingDays}</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalFee}</span><span className="text-primary">{formatCurrency(result.totalFee, 'UZS', locale)}</span></div>
        </CardContent>
      </Card>
    </div>
  )
}
