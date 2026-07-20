'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { formatCurrency } from '@/lib/utils'

export default function CompoundInterestCalculator() {
  const locale = useLocale()
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('20')
  const [years, setYears] = useState('5')
  const [compoundsPerYear, setCompoundsPerYear] = useState('12')

  const result = useMemo(() => {
    const p = parseFloat(principal.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 0
    const y = parseInt(years) || 0
    const n = parseInt(compoundsPerYear) || 12
    if (p <= 0 || r <= 0 || y <= 0) return null
    const futureValue = p * Math.pow(1 + r / 100 / n, n * y)
    const simpleInterest = p * (1 + r / 100 * y)
    return { futureValue, totalInterest: futureValue - p, simpleInterest, compoundBenefit: futureValue - simpleInterest }
  }, [principal, rate, years, compoundsPerYear])

  const t = locale === 'uz'
    ? {
        principal: 'Boshlang\'ich summa (UZS)',
        rate: 'Yillik foiz (%)',
        years: 'Muddat (yil)',
        compounds: 'Kapitalizatsiya soni (yilda)',
        futureValue: 'Yakuniy summa',
        totalInterest: 'Jami foiz',
        compoundBenefit: 'Murakkab foiz ustunligi',
        placeholder: 'Summani kiriting',
      }
    : {
        principal: 'Начальная сумма (UZS)',
        rate: 'Годовая ставка (%)',
        years: 'Срок (лет)',
        compounds: 'Капитализаций в год',
        futureValue: 'Итоговая сумма',
        totalInterest: 'Общий процент',
        compoundBenefit: 'Выгода сложного процента',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <Label>{t.principal}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={principal} onChange={(e) => setPrincipal(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.rate}</Label>
              <span className="text-sm font-medium text-primary">{rate}%</span>
            </div>
            <Slider value={[parseFloat(rate) || 0]} onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))} min={1} max={50} step={0.5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.years}</Label>
              <span className="text-sm font-medium text-primary">{years}</span>
            </div>
            <Slider value={[parseInt(years) || 0]} onValueChange={(v) => setYears(String(Array.isArray(v) ? v[0] : v))} min={1} max={30} step={1} />
          </div>
          <div>
            <Label>{t.compounds}</Label>
            <Input type="number" value={compoundsPerYear} onChange={(e) => setCompoundsPerYear(e.target.value)} className="mt-1 w-24" min={1} max={365} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-primary/30">
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.futureValue}</p>
              <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.futureValue, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.totalInterest}</p>
              <p className="text-xl font-bold text-green-600 mt-1">{formatCurrency(result.totalInterest, 'UZS', locale)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">{t.compoundBenefit}</p>
              <p className="text-xl font-bold mt-1">{formatCurrency(result.compoundBenefit, 'UZS', locale)}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
