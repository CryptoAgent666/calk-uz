'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatNumber } from '@/lib/utils'

const BANK_RATES = [
  { name: 'Markaziy bank', buy: 12_850, sell: 12_850 },
  { name: 'NBU', buy: 12_830, sell: 12_870 },
  { name: 'Kapitalbank', buy: 12_800, sell: 12_900 },
  { name: 'Hamkorbank', buy: 12_810, sell: 12_890 },
  { name: 'Ipoteka Bank', buy: 12_820, sell: 12_880 },
]

export default function BankRatesCalculator() {
  const locale = useLocale()
  const [amount, setAmount] = useState('1000')

  const results = useMemo(() => {
    const a = parseFloat(amount.replace(/\s/g, '')) || 0
    if (a <= 0) return null
    return BANK_RATES.map(bank => ({
      ...bank,
      buyTotal: a * bank.buy,
      sellTotal: a * bank.sell,
      spread: bank.sell - bank.buy,
    }))
  }, [amount])

  const t = locale === 'uz'
    ? { amount: 'Summa (USD)', bank: 'Bank', buy: 'Olish', sell: 'Sotish', spread: 'Farq', total: 'Jami (UZS)', placeholder: 'Summani kiriting' }
    : { amount: 'Сумма (USD)', bank: 'Банк', buy: 'Покупка', sell: 'Продажа', spread: 'Спред', total: 'Итого (UZS)', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Label>{t.amount}</Label>
          <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 text-lg" />
        </CardContent>
      </Card>

      {results && (
        <Card>
          <CardContent className="pt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">{t.bank}</th>
                  <th className="py-2 text-right">{t.buy}</th>
                  <th className="py-2 text-right">{t.sell}</th>
                  <th className="py-2 text-right">{t.total}</th>
                </tr>
              </thead>
              <tbody>
                {results.map((bank) => (
                  <tr key={bank.name} className="border-b border-muted/50">
                    <td className="py-2 font-medium">{bank.name}</td>
                    <td className="py-2 text-right text-green-600">{formatNumber(bank.buy, locale)}</td>
                    <td className="py-2 text-right text-destructive">{formatNumber(bank.sell, locale)}</td>
                    <td className="py-2 text-right font-medium">{formatNumber(Math.round(bank.buyTotal), locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
