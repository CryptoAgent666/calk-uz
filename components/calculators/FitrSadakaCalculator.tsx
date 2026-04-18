'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateFitrSadaqa, FITR_OFFICIAL_2026, type FitrProductType } from '@/lib/calculators/religion'
import { formatCurrency } from '@/lib/utils'

export default function FitrSadakaCalculator() {
  const locale = useLocale()
  const [familyMembers, setFamilyMembers] = useState('4')
  const [productType, setProductType] = useState<FitrProductType>('wheat')
  const defaultWheatPerKg = Math.round(FITR_OFFICIAL_2026.wheat.sum / FITR_OFFICIAL_2026.wheat.kg)
  const [pricePerKg, setPricePerKg] = useState(String(defaultWheatPerKg))

  function handleProductChange(newType: FitrProductType) {
    setProductType(newType)
    const official = FITR_OFFICIAL_2026[newType]
    setPricePerKg(String(Math.round(official.sum / official.kg)))
  }

  const result = useMemo(() => {
    const fm = parseInt(familyMembers) || 0
    const ppk = parseFloat(pricePerKg) || 0
    if (fm <= 0) return null
    return calculateFitrSadaqa(fm, productType, ppk)
  }, [familyMembers, productType, pricePerKg])

  const t = locale === 'uz'
    ? {
        family: 'Oila aʼzolari', product: 'Mahsulot turi', pricePerKg: 'Narx (UZS/kg)',
        results: 'Natijalar', perPerson: 'Har bir kishi uchun', totalKg: 'Jami (kg)',
        totalAmount: 'Jami summa',
        wheat: 'Bugʼdoy (2 kg)', flour: 'Un (2 kg)', barley: 'Arpa (4 kg)',
        rice: 'Guruch (2 kg)', raisins: 'Mayiz (2 kg)', dates: 'Xurmo (4 kg)',
        official: 'Oʼzbekiston musulmonlari idorasi, Ramazon 2026',
      }
    : {
        family: 'Членов семьи', product: 'Тип продукта', pricePerKg: 'Цена (UZS/кг)',
        results: 'Результаты', perPerson: 'На каждого', totalKg: 'Всего (кг)',
        totalAmount: 'Общая сумма',
        wheat: 'Пшеница (2 кг)', flour: 'Мука (2 кг)', barley: 'Ячмень (4 кг)',
        rice: 'Рис (2 кг)', raisins: 'Изюм (2 кг)', dates: 'Финики (4 кг)',
        official: 'Управление мусульман Узбекистана, Рамазан 2026',
      }

  const productOptions: Record<FitrProductType, string> = {
    wheat: t.wheat, flour: t.flour, barley: t.barley,
    rice: t.rice, raisins: t.raisins, dates: t.dates,
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.family}</Label>
            <Input type="number" value={familyMembers} onChange={(e) => setFamilyMembers(e.target.value)} className="mt-1 text-lg" min={1} max={30} />
          </div>
          <div>
            <Label>{t.product}</Label>
            <select
              value={productType}
              onChange={(e) => handleProductChange(e.target.value as FitrProductType)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {(Object.entries(productOptions) as [FitrProductType, string][]).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>{t.pricePerKg}</Label>
            <Input type="number" value={pricePerKg} onChange={(e) => setPricePerKg(e.target.value)} className="mt-1" min={1000} />
            <p className="mt-1 text-xs text-muted-foreground">{t.official}</p>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.perPerson}</span><span>{formatCurrency(result.amountPerPerson, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalKg}</span><span>{result.inKg} kg</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.totalAmount}</span><span className="text-primary">{formatCurrency(result.totalAmount, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
