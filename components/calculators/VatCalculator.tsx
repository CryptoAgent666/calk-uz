'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { addVat, extractVat, type VatResult } from '@/lib/calculators/vat'
import { formatCurrency } from '@/lib/utils'

export default function VatCalculator() {
  const locale = useLocale()
  const [mode, setMode] = useState<'add' | 'extract'>('add')
  const [amount, setAmount] = useState('')
  const [customRate, setCustomRate] = useState('12')

  const result = useMemo<VatResult | null>(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    const r = parseFloat(customRate) || 12
    if (a <= 0) return null
    return mode === 'add' ? addVat(a, r / 100) : extractVat(a, r / 100)
  }, [amount, mode, customRate])

  const t = locale === 'uz'
    ? { add: "QQS qo'shish", extract: 'QQS ajratish', amount: 'Summa (UZS)', rate: 'QQS stavkasi (%)', withoutVat: 'QQSsiz summa', vatAmount: 'QQS summasi', withVat: 'QQS bilan summa', placeholder: "Summani kiriting" }
    : { add: 'Начислить НДС', extract: 'Выделить НДС', amount: 'Сумма (UZS)', rate: 'Ставка НДС (%)', withoutVat: 'Сумма без НДС', vatAmount: 'Сумма НДС', withVat: 'Сумма с НДС', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Tabs value={mode} onValueChange={(v) => setMode(v as 'add' | 'extract')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add">{t.add}</TabsTrigger>
          <TabsTrigger value="extract">{t.extract}</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.amount}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.rate}</Label>
            <Input type="number" value={customRate} onChange={(e) => setCustomRate(e.target.value)} className="mt-1 w-24" min={0} max={100} step={0.5} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.withoutVat}</p>
              <p className="text-xl font-bold mt-1">{formatCurrency(result.amountWithoutVat, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.vatAmount} ({result.vatRate}%)</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.vatAmount, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.withVat}</p>
              <p className="text-xl font-bold mt-1">{formatCurrency(result.amountWithVat, 'UZS', locale)}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
