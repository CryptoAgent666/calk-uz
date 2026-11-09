'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { calculatePassportFees, type PassportDocType, type PassportReason } from '@/lib/calculators/unique'
import { formatCurrency } from '@/lib/utils'

export default function PassportFeesCalculator() {
  const locale = useLocale()
  const [type, setType] = useState<PassportDocType>('id-card')
  const [reason, setReason] = useState<PassportReason>('first')
  const [online, setOnline] = useState(false)

  const result = useMemo(() => calculatePassportFees(type, reason, online), [type, reason, online])

  const t = locale === 'uz'
    ? {
        type: 'Hujjat turi',
        reason: 'Murojaat sababi',
        online: 'my.gov.uz orqali ariza (bojning 90%)',
        results: 'Natijalar',
        rate: 'Qonun bo\'yicha stavka',
        baseFee: 'Davlat boji',
        totalFee: 'To\'lanadi',
        processingDays: 'Tayyorlanish muddati (ish kuni)',
        brv: (m: number) => (m === 1 ? 'BHMning 1 baravari' : `BHMning ${Math.round(m * 100)} foizi`),
        types: {
          'id-card': 'ID-karta (bolaga ham)',
          passport: 'Xorijga chiqish pasporti (16 yoshdan)',
          'passport-child': 'Xorijga chiqish pasporti (16 yoshgacha)',
        },
        reasons: {
          first: 'Birinchi marta',
          replacement: 'Almashtirish (muddat tugagan, ma\'lumotlar o\'zgargan)',
          lost: 'Yo\'qolgan yoki yaroqsiz holga kelgan',
        },
        note: 'Boj birinchi marta rasmiylashtirishdagi bilan bir xil: almashtirish yoki yo\'qotish uchun alohida stavka qonunda yo\'q. Favqulodda vaziyatlar va maishiy ofatlar (yong\'in va h.k.) natijasida jabrlanganlar, yolg\'iz keksalar va o\'zgalar parvarishiga muhtoj nogironligi bo\'lgan shaxslar yo\'qolgan yoki yaroqsiz hujjat o\'rniga yangisini bepul oladi (O\'RQ-600, 13-modda).',
      }
    : {
        type: 'Документ',
        reason: 'Причина обращения',
        online: 'Подача через my.gov.uz (90% пошлины)',
        results: 'Результаты',
        rate: 'Ставка по закону',
        baseFee: 'Госпошлина',
        totalFee: 'К оплате',
        processingDays: 'Срок изготовления (рабочих дней)',
        brv: (m: number) => (m === 1 ? '1 БРВ' : `${Math.round(m * 100)}% БРВ`),
        types: {
          'id-card': 'ID-карта (в том числе ребёнку)',
          passport: 'Загранпаспорт (с 16 лет)',
          'passport-child': 'Загранпаспорт ребёнку до 16 лет',
        },
        reasons: {
          first: 'Первичное оформление',
          replacement: 'Замена (истёк срок, изменились данные)',
          lost: 'Утеря или порча',
        },
        note: 'Пошлина та же, что при первичном оформлении: отдельной ставки за замену или утерю закон не устанавливает. Пострадавшие от ЧС и бытовых бедствий (пожар и т. п.), одинокие престарелые и лица с инвалидностью, нуждающиеся в уходе, получают документ взамен утерянного или испорченного бесплатно (ст. 13 ЗРУ-600).',
      }

  const isPassport = type !== 'id-card'
  const days = result.processingDaysMax > result.processingDays
    ? `${result.processingDays}–${result.processingDaysMax}`
    : `${result.processingDays}`

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.type}</Label><select value={type} onChange={(e) => setType(e.target.value as PassportDocType)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(t.types).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <div><Label>{t.reason}</Label><select value={reason} onChange={(e) => setReason(e.target.value as PassportReason)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(t.reasons).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          {isPassport && (
            <div className="flex items-center justify-between"><Label htmlFor="online" className="cursor-pointer">{t.online}</Label><Switch id="online" checked={online} onCheckedChange={setOnline} /></div>
          )}
        </CardContent>
      </Card>
      <Card className="border-primary/20">
        <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t.rate}</span><span>{t.brv(result.brvMultiplier)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.baseFee}</span><span>{formatCurrency(result.baseFee, 'UZS', locale)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">{t.processingDays}</span><span>{days}</span></div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalFee}</span><span className="text-primary">{formatCurrency(result.totalFee, 'UZS', locale)}</span></div>
          {reason !== 'first' && <p className="text-xs text-muted-foreground">{t.note}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
