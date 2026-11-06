'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateZakat, NISAB_FATWA_2026 } from '@/lib/calculators/religion'
import { formatCurrency, parseNumericInput } from '@/lib/utils'

export default function ZakatCalculator() {
  const locale = useLocale()
  const [cash, setCash] = useState('')
  const [bankDeposits, setBankDeposits] = useState('')
  const [goldGrams, setGoldGrams] = useState('0')
  const [goldPrice, setGoldPrice] = useState(String(Math.round(NISAB_FATWA_2026 / 85)))
  const [investments, setInvestments] = useState('0')
  const [businessInventory, setBusinessInventory] = useState('0')
  const [debtsOwed, setDebtsOwed] = useState('0')

  const result = useMemo(() => {
    const c = parseNumericInput(cash) || 0
    const bd = parseNumericInput(bankDeposits) || 0
    const g = parseFloat(goldGrams) || 0
    const inv = parseNumericInput(investments) || 0
    const bi = parseNumericInput(businessInventory) || 0
    const gp = parseNumericInput(goldPrice) || NISAB_FATWA_2026 / 85
    if (c <= 0 && bd <= 0 && g <= 0 && inv <= 0 && bi <= 0) return null
    return calculateZakat({
      cash: c, bankDeposits: bd, goldGrams: parseFloat(goldGrams) || 0,
      silverGrams: 0, investments: parseNumericInput(investments) || 0,
      businessInventory: parseNumericInput(businessInventory) || 0,
      receivables: 0, debtsOwed: parseNumericInput(debtsOwed) || 0,
    }, gp)
  }, [cash, bankDeposits, goldGrams, goldPrice, investments, businessInventory, debtsOwed])

  const t = locale === 'uz'
    ? { cash: 'Naqd pul (UZS)', bank: 'Bank omonatlari (UZS)', gold: 'Oltin (gram)', goldPrice: 'Oltin narxi (UZS/gram)', investments: 'Investitsiyalar (UZS)', inventory: 'Biznes inventar (UZS)', debts: 'Qarzlar (UZS)', results: 'Natijalar', totalWealth: 'Jami boylik', nisab: 'Nisob', zakatDue: 'Zakat kerak', zakatNotDue: 'Zakat shart emas', zakatAmount: 'Zakat summasi (2.5%)', placeholder: 'Summani kiriting' }
    : { cash: 'Наличные (UZS)', bank: 'Банковские вклады (UZS)', gold: 'Золото (грамм)', goldPrice: 'Цена золота (UZS/грамм)', investments: 'Инвестиции (UZS)', inventory: 'Бизнес-инвентарь (UZS)', debts: 'Долги (UZS)', results: 'Результаты', totalWealth: 'Общее имущество', nisab: 'Нисаб', zakatDue: 'Закят обязателен', zakatNotDue: 'Закят не обязателен', zakatAmount: 'Сумма закята (2.5%)', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.cash}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={cash} onChange={(e) => setCash(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.bank}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={bankDeposits} onChange={(e) => setBankDeposits(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.gold}</Label><Input type="number" value={goldGrams} onChange={(e) => setGoldGrams(e.target.value)} className="mt-1" min={0} step={0.1} /></div>
          <div><Label>{t.goldPrice}</Label><Input type="text" inputMode="decimal" value={goldPrice} onChange={(e) => setGoldPrice(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.investments}</Label><Input type="text" inputMode="decimal" value={investments} onChange={(e) => setInvestments(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.inventory}</Label><Input type="text" inputMode="decimal" value={businessInventory} onChange={(e) => setBusinessInventory(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.debts}</Label><Input type="text" inputMode="decimal" value={debtsOwed} onChange={(e) => setDebtsOwed(e.target.value)} className="mt-1" /></div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.totalWealth}</span><span>{formatCurrency(result.totalWealth, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.nisab}</span><span>{formatCurrency(result.nisab, 'UZS', locale)}</span></div>
            <div className="text-center py-2"><Badge variant={result.isZakatDue ? 'default' : 'secondary'}>{result.isZakatDue ? t.zakatDue : t.zakatNotDue}</Badge></div>
            {result.isZakatDue && (
              <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.zakatAmount}</span><span className="text-primary">{formatCurrency(result.zakatAmount, 'UZS', locale)}</span></div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
