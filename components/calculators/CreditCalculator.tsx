'use client'

import { useState, useEffect, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { calculateCredit, type CreditResult } from '@/lib/calculators/credit'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function CreditCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('10000000')
  const [rate, setRate] = useState('24')
  const [term, setTerm] = useState('12')
  const [type, setType] = useState<'annuity' | 'differentiated'>('annuity')
  const [showSchedule, setShowSchedule] = useState(false)

  const result = useMemo<CreditResult | null>(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    const r = parseFloat(rate) || 0
    const t = parseInt(term) || 0
    if (a <= 0 || r <= 0 || t <= 0) return null
    return calculateCredit({ amount: a, annualRate: r, termMonths: t, type })
  }, [amount, rate, term, type])

  const t = locale === 'uz'
    ? {
        title: 'Kredit kalkulyatori',
        amount: 'Kredit summasi (UZS)',
        rate: "Yillik foiz stavkasi (%)",
        term: 'Muddat (oy)',
        annuity: 'Annuitet',
        differentiated: 'Differensial',
        results: 'Natijalar',
        monthlyPayment: "Oylik to'lov",
        totalPayment: "Jami to'lov",
        totalInterest: 'Jami foiz',
        overpayment: "Ortiqcha to'lov",
        schedule: "To'lov jadvali",
        month: 'Oy',
        payment: "To'lov",
        principal: 'Asosiy qarz',
        interest: 'Foiz',
        balance: 'Qoldiq',
        showSchedule: "Jadvalni ko'rsatish",
        hideSchedule: 'Jadvalini yashirish',
      }
    : {
        title: 'Кредитный калькулятор',
        amount: 'Сумма кредита (UZS)',
        rate: 'Годовая ставка (%)',
        term: 'Срок (месяцев)',
        annuity: 'Аннуитетный',
        differentiated: 'Дифференцированный',
        results: 'Результаты',
        monthlyPayment: 'Ежемесячный платёж',
        totalPayment: 'Общая сумма выплат',
        totalInterest: 'Общая сумма процентов',
        overpayment: 'Переплата',
        schedule: 'График платежей',
        month: 'Мес.',
        payment: 'Платёж',
        principal: 'Основной долг',
        interest: 'Проценты',
        balance: 'Остаток',
        showSchedule: 'Показать график',
        hideSchedule: 'Скрыть график',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div>
            <Label>{t.amount}</Label>
            <Input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 text-lg"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.rate}</Label>
              <span className="text-sm font-medium text-primary">{rate}%</span>
            </div>
            <Slider
              value={[parseFloat(rate) || 0]}
              onValueChange={(v) => setRate(String(Array.isArray(v) ? v[0] : v))}
              min={1}
              max={50}
              step={0.5}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>{t.term}</Label>
              <span className="text-sm font-medium text-primary">{term} {locale === 'uz' ? 'oy' : 'мес.'}</span>
            </div>
            <Slider
              value={[parseInt(term) || 0]}
              onValueChange={(v) => setTerm(String(Array.isArray(v) ? v[0] : v))}
              min={1}
              max={360}
              step={1}
            />
          </div>

          <Tabs value={type} onValueChange={(v) => setType(v as typeof type)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="annuity">{t.annuity}</TabsTrigger>
              <TabsTrigger value="differentiated">{t.differentiated}</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {result && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-primary/30">
              <CardContent className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">{t.monthlyPayment}</p>
                <p className="text-xl font-bold text-primary mt-1">{formatCurrency(result.monthlyPayment, 'UZS', locale)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">{t.totalPayment}</p>
                <p className="text-xl font-bold mt-1">{formatCurrency(result.totalPayment, 'UZS', locale)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">{t.totalInterest}</p>
                <p className="text-xl font-bold text-destructive mt-1">{formatCurrency(result.totalInterest, 'UZS', locale)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">{t.overpayment}</p>
                <p className="text-xl font-bold mt-1">{result.overpaymentPercent.toFixed(1)}%</p>
              </CardContent>
            </Card>
          </div>

          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full py-2 text-sm text-primary hover:underline"
          >
            {showSchedule ? t.hideSchedule : t.showSchedule}
          </button>

          {showSchedule && (
            <Card>
              <CardContent className="pt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left">{t.month}</th>
                      <th className="py-2 text-right">{t.payment}</th>
                      <th className="py-2 text-right">{t.principal}</th>
                      <th className="py-2 text-right">{t.interest}</th>
                      <th className="py-2 text-right">{t.balance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.month} className="border-b border-muted/50">
                        <td className="py-1.5">{row.month}</td>
                        <td className="py-1.5 text-right">{formatNumber(Math.round(row.payment), locale)}</td>
                        <td className="py-1.5 text-right">{formatNumber(Math.round(row.principal), locale)}</td>
                        <td className="py-1.5 text-right text-destructive">{formatNumber(Math.round(row.interest), locale)}</td>
                        <td className="py-1.5 text-right">{formatNumber(Math.round(row.remainingBalance), locale)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
