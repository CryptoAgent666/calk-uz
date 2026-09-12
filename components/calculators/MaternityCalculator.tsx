'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { calculateMaternity, parseIsoDateUtc } from '@/lib/calculators/social'
import { useTodayIso } from '@/lib/hooks/useTodayIso'
import { formatCurrency } from '@/lib/utils'

const isoToDisplay = (iso: string) => `${iso.slice(8, 10)}.${iso.slice(5, 7)}.${iso.slice(0, 4)}`

export default function MaternityCalculator() {
  const locale = useLocale()
  const today = useTodayIso()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [insuranceMonths, setInsuranceMonths] = useState('24')
  // Пустая строка — «сегодня»: дата подставляется только на клиенте.
  const [startDate, setStartDate] = useState('')
  const [isComplicated, setIsComplicated] = useState(false)
  const [isMultiple, setIsMultiple] = useState(false)
  const effectiveStart = startDate || today

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    const months = parseInt(insuranceMonths) || 0
    if (earnings <= 0 || parseIsoDateUtc(effectiveStart) === null) return null
    return calculateMaternity(earnings, months, isComplicated, isMultiple, effectiveStart)
  }, [totalEarnings, insuranceMonths, isComplicated, isMultiple, effectiveStart])

  const t = locale === 'uz'
    ? {
        totalEarnings: 'Oxirgi 12 oydagi jami daromad (UZS)',
        earningsHint: "Sug'urta staji 12 oydan kam bo'lsa — shu oylardagi daromad: u staj oylari soniga bo'linadi.",
        startDate: "Ta'til boshlanish sanasi",
        insurance: "Sug'urta staji (oy)",
        complicated: "Murakkab tug'ruq",
        multiple: "Ko'p bolali tug'ruq",
        results: 'Natijalar',
        avgMonthly: "O'rtacha oylik ish haqi",
        capApplied: "O'rtacha oylik ish haqining 10 MROT dan oshgan qismi hisobga olinmaydi — hisob {cap} bo'yicha.",
        avgDaily: "O'rtacha kunlik ish haqi (÷ 25,3)",
        prebirthDays: "Tug'ruqgacha kunlar",
        postbirthDays: "Tug'ruqdan keyin kunlar",
        period: 'Davr',
        totalDays: 'Jami taqvim kunlari',
        sundays: "Yakshanbalar (to'lanmaydi)",
        holidays: "Bayram kunlari (to'lanmaydi)",
        paidDays: "To'lanadigan kunlar",
        benefitPercent: 'Staj koeffitsiyenti',
        benefit: 'Nafaqa summasi',
        placeholder: 'Summani kiriting',
        info2026: "2026-yildan dekret nafaqasini Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Kamida 10 oy sug'urta staji talab qilinadi. Nafaqa = o'rtacha oylik ish haqi ÷ 25,3 × staj koeffitsiyenti × to'lanadigan kunlar; ta'tildagi yakshanba va bayram kunlari to'lanmaydi (VMQ-796, 4-ilova, 16, 17, 25-bandlar). JShShS ushlanmaydi.",
        notEligible: "Sug'urta staji yetarli emas (minimum 10 oy)",
        holidaysUnknown: "Davr hayit sanalari hali e'lon qilinmagan kunlarga tushishi mumkin: hayit shu davrga to'g'ri kelsa, to'lanadigan kunlar bittaga kam bo'ladi.",
      }
    : {
        totalEarnings: 'Заработок за последние 12 месяцев (UZS)',
        earningsHint: 'Страховой стаж меньше 12 месяцев — заработок за эти месяцы: он делится на число месяцев стажа.',
        startDate: 'Дата начала отпуска',
        insurance: 'Страховой стаж (мес)',
        complicated: 'Осложнённые роды',
        multiple: 'Многоплодная беременность',
        results: 'Результаты',
        avgMonthly: 'Среднемесячный заработок',
        capApplied: 'Среднемесячный заработок учитывается не выше 10 МРОТ — расчёт сделан от {cap}.',
        avgDaily: 'Среднедневной заработок (÷ 25,3)',
        prebirthDays: 'Дней до родов',
        postbirthDays: 'Дней после родов',
        period: 'Период',
        totalDays: 'Всего календарных дней',
        sundays: 'Воскресенья (не оплачиваются)',
        holidays: 'Праздничные дни (не оплачиваются)',
        paidDays: 'Оплачиваемых дней',
        benefitPercent: 'Стажевый коэффициент',
        benefit: 'Сумма пособия',
        placeholder: 'Введите сумму',
        info2026: 'С 2026 года декретные платит Фонд государственного соцстрахования. Требуется минимум 10 месяцев страхового стажа. Пособие = среднемесячный заработок ÷ 25,3 × стажевый коэффициент × оплачиваемые дни; воскресенья и праздничные дни внутри отпуска не оплачиваются (ПКМ-796, прил. 4, п. 16, 17, 25). НДФЛ не удерживается.',
        notEligible: 'Недостаточно страхового стажа (минимум 10 месяцев)',
        holidaysUnknown: 'Период может задеть хайит, дата которого ещё не объявлена: если он попадёт в период, оплачиваемых дней будет на один меньше.',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xs text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.info2026}</p>
          <div>
            <Label>{t.totalEarnings}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={totalEarnings} onChange={(e) => setTotalEarnings(e.target.value)} className="mt-1 text-lg" />
            <p className="mt-1 text-xs text-muted-foreground">{t.earningsHint}</p>
          </div>
          <div>
            <Label>{t.startDate}</Label>
            <Input type="date" value={effectiveStart} onChange={(e) => setStartDate(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label>{t.insurance}</Label>
            <Input type="number" value={insuranceMonths} onChange={(e) => setInsuranceMonths(e.target.value)} className="mt-1" min={0} max={600} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="complicated" className="cursor-pointer">{t.complicated}</Label>
            <Switch id="complicated" checked={isComplicated} onCheckedChange={setIsComplicated} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="multiple" className="cursor-pointer">{t.multiple}</Label>
            <Switch id="multiple" checked={isMultiple} onCheckedChange={setIsMultiple} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {!result.isEligible ? (
              <Badge variant="destructive">{t.notEligible}</Badge>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.avgMonthly}</span>
                  <span>{formatCurrency(result.averageMonthlyEarnings, 'UZS', locale)}</span>
                </div>
                {result.earningsCapApplied && (
                  <p className="text-sm text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.capApplied.replace('{cap}', formatCurrency(result.earningsCap, 'UZS', locale))}</p>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.avgDaily}</span>
                  <span>{formatCurrency(result.averageDailyEarnings, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.benefitPercent}</span>
                  <Badge variant="secondary">{result.benefitPercent}%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.period}</span>
                  <span>{isoToDisplay(result.startDate)} — {isoToDisplay(result.endDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.prebirthDays}</span>
                  <span>{result.prebirthDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.postbirthDays}</span>
                  <span>{result.postbirthDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.totalDays}</span>
                  <span>{result.totalDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.sundays}</span>
                  <span>−{result.sundays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.holidays}</span>
                  <span>−{result.holidays}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>{t.paidDays}</span>
                  <span>{result.paidDays}</span>
                </div>
                {!result.holidayDatesComplete && (
                  <p className="text-sm text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.holidaysUnknown}</p>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>{t.benefit}</span>
                  <span className="text-primary">{formatCurrency(result.netBenefit, 'UZS', locale)}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
