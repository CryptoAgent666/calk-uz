'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateZakat } from '@/lib/calculators/religion'
import { formatCurrency } from '@/lib/utils'

export default function ZakatCalculator() {
  const locale = useLocale()
  const [cash, setCash] = useState('')
  const [bankDeposits, setBankDeposits] = useState('')
  const [goldGrams, setGoldGrams] = useState('0')
  const [investments, setInvestments] = useState('0')
  const [businessInventory, setBusinessInventory] = useState('0')
  const [debtsOwed, setDebtsOwed] = useState('0')

  const result = useMemo(() => {
    const c = parseFloat(cash.replace(/\s/g, '')) || 0
    const bd = parseFloat(bankDeposits.replace(/\s/g, '')) || 0
    if (c <= 0 && bd <= 0) return null
    return calculateZakat({
      cash: c, bankDeposits: bd, goldGrams: parseFloat(goldGrams) || 0,
      silverGrams: 0, investments: parseFloat(investments.replace(/\s/g, '')) || 0,
      businessInventory: parseFloat(businessInventory.replace(/\s/g, '')) || 0,
      receivables: 0, debtsOwed: parseFloat(debtsOwed.replace(/\s/g, '')) || 0,
    })
  }, [cash, bankDeposits, goldGrams, investments, businessInventory, debtsOwed])

  const t = locale === 'uz'
    ? { cash: 'Naqd pul (UZS)', bank: 'Bank omonatlari (UZS)', gold: 'Oltin (gram)', investments: 'Investitsiyalar (UZS)', inventory: 'Biznes inventar (UZS)', debts: 'Qarzlar (UZS)', results: 'Natijalar', totalWealth: 'Jami boylik', nisab: 'Nisob', zakatDue: 'Zakat kerak', zakatNotDue: 'Zakat shart emas', zakatAmount: 'Zakat summasi (2.5%)', placeholder: 'Summani kiriting' }
    : { cash: 'Наличные (UZS)', bank: 'Банковские вклады (UZS)', gold: 'Золото (грамм)', investments: 'Инвестиции (UZS)', inventory: 'Бизнес-инвентарь (UZS)', debts: 'Долги (UZS)', results: 'Результаты', totalWealth: 'Общее имущество', nisab: 'Нисаб', zakatDue: 'Закят обязателен', zakatNotDue: 'Закят не обязателен', zakatAmount: 'Сумма закята (2.5%)', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.cash}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={cash} onChange={(e) => setCash(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.bank}</Label><Input type="text" inputMode="numeric" placeholder={t.placeholder} value={bankDeposits} onChange={(e) => setBankDeposits(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.gold}</Label><Input type="number" value={goldGrams} onChange={(e) => setGoldGrams(e.target.value)} className="mt-1" min={0} step={0.1} /></div>
          <div><Label>{t.investments}</Label><Input type="text" inputMode="numeric" value={investments} onChange={(e) => setInvestments(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.inventory}</Label><Input type="text" inputMode="numeric" value={businessInventory} onChange={(e) => setBusinessInventory(e.target.value)} className="mt-1" /></div>
          <div><Label>{t.debts}</Label><Input type="text" inputMode="numeric" value={debtsOwed} onChange={(e) => setDebtsOwed(e.target.value)} className="mt-1" /></div>
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
