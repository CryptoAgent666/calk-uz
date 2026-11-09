'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateLLCTax } from '@/lib/calculators/business'
import { formatCurrency, parseNumericInput } from '@/lib/utils'

export default function LlcCalculator() {
  const locale = useLocale()
  const [revenue, setRevenue] = useState('')
  const [expenses, setExpenses] = useState('')
  const [payroll, setPayroll] = useState('')
  const [isVatPayer, setIsVatPayer] = useState(true)

  const result = useMemo(() => {
    const r = parseNumericInput(revenue) || 0
    const e = parseNumericInput(expenses) || 0
    const p = parseNumericInput(payroll) || 0
    if (r <= 0) return null
    return calculateLLCTax(r, e, p, isVatPayer)
  }, [revenue, expenses, payroll, isVatPayer])

  const t = locale === 'uz'
    ? { revenue: 'Daromad (UZS)', expenses: 'Xarajatlar (UZS)', payroll: 'Ish haqi fondi (UZS)', vatPayer: 'QQS to\'lovchisi', results: 'Natijalar', profit: 'Foyda', corporateTax: 'Foyda solig\'i (15%)', vat: 'QQS', socialTax: 'Ijtimoiy soliq', totalBurden: "Jami soliq yuki (foyda solig'i + ijtimoiy soliq)", netProfit: "Foyda solig'idan keyingi foyda", placeholder: 'Summani kiriting', simplifiedTax: "Soddalashtirilgan tizimda aylanma solig'i (4%)", betterGeneral: "Umumiy tizim arzonroq: foyda solig'i aylanma solig'idan kam", betterSimplified: "Soddalashtirilgan tizim arzonroq: aylanma solig'i foyda solig'idan kam", notAvailable: "Tushum 12 000 BHK dan yuqori: soddalashtirilgan tizim mavjud emas" }
    : { revenue: 'Выручка (UZS)', expenses: 'Расходы (UZS)', payroll: 'ФОТ (UZS)', vatPayer: 'Плательщик НДС', results: 'Результаты', profit: 'Прибыль', corporateTax: 'Налог на прибыль (15%)', vat: 'НДС', socialTax: 'Социальный налог', totalBurden: 'Налоговая нагрузка (прибыль + соцналог)', netProfit: 'Прибыль после налога на прибыль', placeholder: 'Введите сумму', simplifiedTax: 'Налог с оборота на упрощёнке (4%)', betterGeneral: 'Общая система дешевле: налог на прибыль меньше налога с оборота', betterSimplified: 'Упрощёнка дешевле: налог с оборота меньше налога на прибыль', notAvailable: 'Выручка выше 12 000 БРВ: упрощённая система недоступна' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.revenue}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={revenue} onChange={(e) => setRevenue(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.expenses}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={expenses} onChange={(e) => setExpenses(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.payroll}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={payroll} onChange={(e) => setPayroll(e.target.value)} className="mt-1" /></div>
          <div className="flex items-center justify-between"><Label htmlFor="vat" className="cursor-pointer">{t.vatPayer}</Label><Switch id="vat" checked={isVatPayer} onCheckedChange={setIsVatPayer} /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.profit}</span><span>{formatCurrency(result.profit, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.corporateTax}</span><span className="text-destructive">{formatCurrency(result.corporateTax, 'UZS', locale)}</span></div>
            {result.vatAmount > 0 && <div className="flex justify-between"><span className="text-muted-foreground">{t.vat}</span><span>{formatCurrency(result.vatAmount, 'UZS', locale)}</span></div>}
            <div className="flex justify-between"><span className="text-muted-foreground">{t.socialTax}</span><span>{formatCurrency(result.socialTaxOnPayroll, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalBurden}</span><span>{formatCurrency(result.totalTaxBurden, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.netProfit}</span><span className="text-primary">{formatCurrency(result.netProfit, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between"><span className="text-muted-foreground">{t.simplifiedTax}</span><span>{formatCurrency(result.simplifiedTax, 'UZS', locale)}</span></div>
            <p className="text-sm text-muted-foreground">{!result.simplifiedAvailable ? t.notAvailable : result.corporateTax < result.simplifiedTax ? t.betterGeneral : t.betterSimplified}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
