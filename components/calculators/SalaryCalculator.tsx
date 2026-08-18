'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { calculateSalaryGrossToNet, calculateSalaryNetToGross, type SalaryResult } from '@/lib/calculators/salary'
import { formatCurrency } from '@/lib/utils'

export default function SalaryCalculator() {
  const locale = useLocale()
  const [mode, setMode] = useState<'gross-to-net' | 'net-to-gross'>('gross-to-net')
  const [amount, setAmount] = useState('')
  const [isITPark, setIsITPark] = useState(false)
  const [isBudgetOrg, setIsBudgetOrg] = useState(false)
  const [result, setResult] = useState<SalaryResult | null>(null)

  useEffect(() => {
    const value = parseFloat(amount.replace(/\s/g, '')) || 0
    if (value <= 0) { setResult(null); return }

    if (mode === 'gross-to-net') {
      setResult(calculateSalaryGrossToNet({ grossSalary: value, isITPark, isBudgetOrg }))
    } else {
      setResult(calculateSalaryNetToGross(value, isITPark))
    }
  }, [amount, mode, isITPark, isBudgetOrg])

  const t = locale === 'uz'
    ? {
        title: 'Ish haqi kalkulyatori',
        grossToNet: 'Brutto → Netto',
        netToGross: 'Netto → Brutto',
        enterAmount: mode === 'gross-to-net' ? 'Brutto ish haqi (UZS)' : 'Netto ish haqi (UZS)',
        itPark: 'IT Park rezidenti (7.5%)',
        budgetOrg: 'Byudjet tashkiloti (25% ijtimoiy soliq)',
        results: 'Natijalar',
        gross: 'Brutto ish haqi',
        ndfl: 'JSHSHS',
        inps: 'MHTJ',
        ndflBudget: "JSHSHS byudjetga",
        net: 'Netto ish haqi (qo\'lga)',
        socialTax: 'Ijtimoiy soliq (ish beruvchi)',
        totalCost: 'Ish beruvchi uchun jami xarajat',
        effectiveRate: 'Samarali soliq stavkasi',
        placeholder: "Miqdorni kiriting",
      }
    : {
        title: 'Зарплатный калькулятор',
        grossToNet: 'Гросс → Нетто',
        netToGross: 'Нетто → Гросс',
        enterAmount: mode === 'gross-to-net' ? 'Зарплата брутто (UZS)' : 'Зарплата нетто (UZS)',
        itPark: 'Резидент IT Park (7.5%)',
        budgetOrg: 'Бюджетная организация (25% соц. налог)',
        results: 'Результаты',
        gross: 'Зарплата брутто',
        ndfl: 'НДФЛ',
        inps: 'ИНПС',
        ndflBudget: 'НДФЛ в бюджет',
        net: 'Зарплата нетто (на руки)',
        socialTax: 'Социальный налог (работодатель)',
        totalCost: 'Общие затраты работодателя',
        effectiveRate: 'Эффективная ставка налога',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gross-to-net">{t.grossToNet}</TabsTrigger>
          <TabsTrigger value="net-to-gross">{t.netToGross}</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label htmlFor="amount">{t.enterAmount}</Label>
            <Input
              id="amount"
              type="text"
              inputMode="numeric"
              placeholder={t.placeholder}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 text-lg"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="itpark" className="cursor-pointer">{t.itPark}</Label>
            <Switch id="itpark" checked={isITPark} onCheckedChange={setIsITPark} />
          </div>

          {mode === 'gross-to-net' && (
            <div className="flex items-center justify-between">
              <Label htmlFor="budget" className="cursor-pointer">{t.budgetOrg}</Label>
              <Switch id="budget" checked={isBudgetOrg} onCheckedChange={setIsBudgetOrg} />
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ResultRow label={t.gross} value={result.grossSalary} locale={locale} />
            <ResultRow label={`${t.ndfl} (${result.ndflRate}%)`} value={-result.ndflAmount} locale={locale} negative />
            <ResultRow label={`${t.inps} (0.1%)`} value={-result.inpsAmount} locale={locale} negative />
            <ResultRow label={t.ndflBudget} value={-result.ndflToBudget} locale={locale} negative />
            <div className="border-t pt-3">
              <ResultRow label={t.net} value={result.netSalary} locale={locale} highlight />
            </div>
            <div className="border-t pt-3 opacity-70">
              <ResultRow label={`${t.socialTax} (${result.socialTaxRate}%)`} value={result.socialTaxAmount} locale={locale} />
              <ResultRow label={t.totalCost} value={result.totalEmployerCost} locale={locale} />
            </div>
            <div className="text-center pt-2">
              <Badge variant="secondary">{t.effectiveRate}: {result.effectiveRate.toFixed(1)}%</Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function ResultRow({ label, value, locale, negative, highlight }: {
  label: string; value: number; locale: string; negative?: boolean; highlight?: boolean
}) {
  return (
    <div className={`flex justify-between items-center ${highlight ? 'font-bold text-lg text-primary' : ''}`}>
      <span className="text-muted-foreground">{label}</span>
      <span className={negative ? 'text-destructive' : highlight ? 'text-primary' : ''}>
        {negative && value < 0 ? '−' : ''}{formatCurrency(Math.abs(value), 'UZS', locale)}
      </span>
    </div>
  )
}
