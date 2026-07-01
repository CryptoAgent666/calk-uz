'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { convertUnit, type UnitCategory } from '@/lib/calculators/tools'
import { formatNumber } from '@/lib/utils'

const UNITS: Record<UnitCategory, string[]> = {
  length: ['mm', 'cm', 'm', 'km', 'inch', 'ft', 'yard', 'mile'],
  weight: ['mg', 'g', 'kg', 'ton', 'lb', 'oz'],
  volume: ['ml', 'l', 'm3', 'gal', 'qt'],
  temperature: ['C', 'F', 'K'],
}

export default function UnitConverterCalculator() {
  const locale = useLocale()
  const [category, setCategory] = useState<UnitCategory>('length')
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('m')
  const [to, setTo] = useState('cm')

  const result = useMemo(() => {
    const v = parseFloat(value) || 0
    return convertUnit(v, from, to, category)
  }, [value, from, to, category])

  const t = locale === 'uz'
    ? { category: 'Kategoriya', value: 'Qiymat', from: 'Dan', to: 'Ga', result: 'Natija', length: 'Uzunlik', weight: 'Og\'irlik', volume: 'Hajm', temperature: 'Harorat' }
    : { category: 'Категория', value: 'Значение', from: 'Из', to: 'В', result: 'Результат', length: 'Длина', weight: 'Масса', volume: 'Объём', temperature: 'Температура' }

  const categoryLabels: Record<UnitCategory, string> = { length: t.length, weight: t.weight, volume: t.volume, temperature: t.temperature }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.category}</Label><select value={category} onChange={(e) => { const c = e.target.value as UnitCategory; setCategory(c); setFrom(UNITS[c][0]); setTo(UNITS[c][1]) }} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <div><Label>{t.value}</Label><Input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="mt-1 text-lg" step="any" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.from}</Label><select value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{UNITS[category].map(u => <option key={u} value={u}>{u}</option>)}</select></div>
            <div><Label>{t.to}</Label><select value={to} onChange={(e) => setTo(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{UNITS[category].map(u => <option key={u} value={u}>{u}</option>)}</select></div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-primary/30">
        <CardContent className="pt-6 text-center">
          <p className="text-sm text-muted-foreground">{value} {from} =</p>
          <p className="text-3xl font-bold text-primary mt-2">{formatNumber(result, locale)} {to}</p>
        </CardContent>
      </Card>
    </div>
  )
}
