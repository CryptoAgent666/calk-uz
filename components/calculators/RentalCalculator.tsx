'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { formatCurrency, parseNumericInput } from '@/lib/utils'
import { calculateRentVsBuy } from '@/lib/calculators/unique'
import { CB_RATE } from '@/lib/constants/brv'

// Ставка государственной ипотеки у банков-партнёров: ставка ЦБ + 6%
const DEFAULT_MORTGAGE_RATE = String(Math.round((CB_RATE + 0.06) * 100))

function yearWord(years: number): string {
  const lastTwo = years % 100
  const last = years % 10
  if (lastTwo >= 11 && lastTwo <= 14) return 'лет'
  if (last === 1) return 'год'
  if (last >= 2 && last <= 4) return 'года'
  return 'лет'
}

export default function RentalCalculator() {
  const locale = useLocale()
  const [monthlyRent, setMonthlyRent] = useState('7000000')
  const [utilities, setUtilities] = useState('500000')
  const [deposit, setDeposit] = useState('1')
  const [months, setMonths] = useState('12')
  const [price, setPrice] = useState('720000000')
  const [downPayment, setDownPayment] = useState('20')
  const [mortgageRate, setMortgageRate] = useState(DEFAULT_MORTGAGE_RATE)
  const [term, setTerm] = useState('15')
  const [horizon, setHorizon] = useState('10')
  const [rentGrowth, setRentGrowth] = useState('7')
  const [priceGrowth, setPriceGrowth] = useState('7')
  const [depositRate, setDepositRate] = useState('18')
  const [ownershipCost, setOwnershipCost] = useState('1')

  const result = useMemo(() => {
    const rent = parseNumericInput(monthlyRent) || 0
    const util = parseNumericInput(utilities) || 0
    const dep = parseInt(deposit) || 0
    const m = parseInt(months) || 12
    if (rent <= 0) return null
    const depositAmount = rent * dep
    const monthlyTotal = rent + util
    const annualTotal = monthlyTotal * m + depositAmount
    return { monthlyTotal, depositAmount, annualTotal, rentOnly: rent * m, utilitiesTotal: util * m }
  }, [monthlyRent, utilities, deposit, months])

  const comparison = useMemo(() => {
    const rent = parseNumericInput(monthlyRent) || 0
    const cost = parseNumericInput(price) || 0
    const percent = (value: string) => (parseFloat(value.replace(',', '.')) || 0) / 100
    const years = Math.max(parseInt(horizon) || 0, 0)
    if (rent <= 0 || cost <= 0 || years <= 0) return null
    return calculateRentVsBuy({
      monthlyRent: rent,
      price: cost,
      downPaymentShare: Math.min(percent(downPayment), 1),
      mortgageRate: percent(mortgageRate),
      termYears: Math.max(parseInt(term) || 1, 1),
      horizonYears: years,
      rentGrowth: percent(rentGrowth),
      priceGrowth: percent(priceGrowth),
      depositRate: percent(depositRate),
      ownershipCostShare: percent(ownershipCost),
    })
  }, [monthlyRent, price, downPayment, mortgageRate, term, horizon, rentGrowth, priceGrowth, depositRate, ownershipCost])

  const c = locale === 'uz'
    ? {
        title: 'Sotib olish bilan solishtirish',
        price: 'Kvartira narxi (UZS)', downPayment: "Boshlang'ich to'lov (%)", mortgageRate: 'Ipoteka stavkasi (% yillik)', term: 'Ipoteka muddati (yil)',
        horizon: 'Solishtirish muddati (yil)', rentGrowth: "Ijara o'sishi (% yillik)", priceGrowth: "Narx o'sishi (% yillik)", depositRate: 'Omonat stavkasi (% yillik)', ownershipCost: "Soliq, sug'urta, ta'mir (narxning % yillik)",
        buyWins: (amount: string, years: number) => `Sotib olish foydaliroq: ${years} yildan keyin ${amount} ko'proq`,
        rentWins: (amount: string, years: number) => `Ijara foydaliroq: ${years} yildan keyin ${amount} ko'proq`,
        firstRent: 'Birinchi oyda ijara', firstOwner: "Birinchi oyda ipoteka va egasining xarajatlari", upfront: "Boshida: to'lov va rasmiylashtirish", renterWealth: 'Ijarachi kapitali (omonat)', buyerWealth: 'Sotib oluvchi kapitali',
        buyerWealthNote: (value: string, balance: string) => `kvartira ${value}, kredit qoldig'i ${balance}`,
        breakEven: "Tenglashish uchun narx o'sishi", breakEvenAny: "Sotib olish narx o'sishidan qat'i nazar foydaliroq", perYear: 'yiliga',
        note: "Taxminlarga bog'liq bo'lgan baho: kommunal to'lovlar ikkala variantda bir xil, sotish xarajatlari hisobga olinmagan.",
      }
    : {
        title: 'Сравнение с покупкой',
        price: 'Цена квартиры (UZS)', downPayment: 'Первый взнос (%)', mortgageRate: 'Ставка ипотеки (% годовых)', term: 'Срок ипотеки (лет)',
        horizon: 'Срок сравнения (лет)', rentGrowth: 'Рост аренды (% в год)', priceGrowth: 'Рост цены квартиры (% в год)', depositRate: 'Ставка вклада (% годовых)', ownershipCost: 'Налог, страховка, ремонт (% цены в год)',
        buyWins: (amount: string, years: number) => `Выгоднее покупка: через ${years} ${yearWord(years)} на ${amount} больше`,
        rentWins: (amount: string, years: number) => `Выгоднее аренда: через ${years} ${yearWord(years)} на ${amount} больше`,
        firstRent: 'Аренда в первый месяц', firstOwner: 'Ипотека и расходы владельца в первый месяц', upfront: 'В начале: взнос и оформление', renterWealth: 'Капитал арендатора (вклад)', buyerWealth: 'Капитал покупателя',
        buyerWealthNote: (value: string, balance: string) => `квартира ${value}, остаток кредита ${balance}`,
        breakEven: 'Рост цены, при котором варианты сравняются', breakEvenAny: 'Покупка выгоднее при любом росте цены', perYear: 'в год',
        note: 'Оценка зависит от допущений: коммунальные в обоих вариантах одинаковы, расходы на продажу квартиры не учтены.',
      }

  const money = (value: number) => formatCurrency(value, 'UZS', locale)
  const field = (label: string, value: string, set: (next: string) => void) => (
    <div><Label>{label}</Label><Input type="text" inputMode="decimal" value={value} onChange={(e) => set(e.target.value)} className="mt-1" /></div>
  )

  const t = locale === 'uz'
    ? { rent: 'Oylik ijara (UZS)', utilities: 'Kommunal (UZS/oy)', deposit: 'Depozit (oylar)', months: 'Oylar soni', results: 'Natijalar', monthlyTotal: 'Oylik jami', depositAmount: 'Depozit', annualTotal: 'Jami xarajat', placeholder: 'Summani kiriting' }
    : { rent: 'Ежемесячная аренда (UZS)', utilities: 'Коммунальные (UZS/мес.)', deposit: 'Депозит (месяцев)', months: 'Кол-во месяцев', results: 'Результаты', monthlyTotal: 'Ежемесячно всего', depositAmount: 'Депозит', annualTotal: 'Итого за период', placeholder: 'Введите сумму' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div><Label>{t.rent}</Label><Input type="text" inputMode="decimal" placeholder={t.placeholder} value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} className="mt-1 text-lg" /></div>
          <div><Label>{t.utilities}</Label><Input type="text" inputMode="decimal" value={utilities} onChange={(e) => setUtilities(e.target.value)} className="mt-1" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t.deposit}</Label><Input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} className="mt-1" min={0} max={6} /></div>
            <div><Label>{t.months}</Label><Input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1" min={1} max={60} /></div>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.monthlyTotal}</span><span>{formatCurrency(result.monthlyTotal, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.depositAmount}</span><span>{formatCurrency(result.depositAmount, 'UZS', locale)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>{t.annualTotal}</span><span className="text-primary">{formatCurrency(result.annualTotal, 'UZS', locale)}</span></div>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader><CardTitle className="text-lg">{c.title}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {field(c.price, price, setPrice)}
          <div className="grid grid-cols-2 gap-4">
            {field(c.downPayment, downPayment, setDownPayment)}
            {field(c.mortgageRate, mortgageRate, setMortgageRate)}
            {field(c.term, term, setTerm)}
            {field(c.horizon, horizon, setHorizon)}
            {field(c.rentGrowth, rentGrowth, setRentGrowth)}
            {field(c.priceGrowth, priceGrowth, setPriceGrowth)}
            {field(c.depositRate, depositRate, setDepositRate)}
            {field(c.ownershipCost, ownershipCost, setOwnershipCost)}
          </div>
        </CardContent>
      </Card>
      {comparison && (
        <Card className="border-primary/20">
          <CardContent className="pt-6 space-y-3">
            <p className="font-bold text-lg text-primary">
              {comparison.buyAdvantage >= 0
                ? c.buyWins(money(comparison.buyAdvantage), parseInt(horizon))
                : c.rentWins(money(-comparison.buyAdvantage), parseInt(horizon))}
            </p>
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{c.firstRent}</span><span className="text-right">{money(comparison.firstMonthRent)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{c.firstOwner}</span><span className="text-right">{money(comparison.firstMonthOwnerCost)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{c.upfront}</span><span className="text-right">{money(comparison.upfrontCost)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-muted-foreground">{c.renterWealth}</span><span className="text-right">{money(comparison.renterWealth)}</span></div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">
                {c.buyerWealth}
                <span className="block text-xs">{c.buyerWealthNote(money(comparison.propertyValue), money(comparison.remainingBalance))}</span>
              </span>
              <span className="text-right">{money(comparison.buyerWealth)}</span>
            </div>
            <div className="flex justify-between gap-4 border-t pt-3">
              {comparison.breakEvenPriceGrowth === null
                ? <span className="text-muted-foreground">{c.breakEvenAny}</span>
                : <><span className="text-muted-foreground">{c.breakEven}</span><span className="text-right">{(comparison.breakEvenPriceGrowth * 100).toFixed(1).replace('.', ',')}% {c.perYear}</span></>}
            </div>
            <p className="text-xs text-muted-foreground">{c.note}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
