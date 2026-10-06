'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { calculateSickLeave, parseIsoDateUtc } from '@/lib/calculators/social'
import { useTodayIso } from '@/lib/hooks/useTodayIso'
import { formatCurrency } from '@/lib/utils'

const isoToDisplay = (iso: string) => `${iso.slice(8, 10)}.${iso.slice(5, 7)}.${iso.slice(0, 4)}`

export default function SickLeaveCalculator() {
  const locale = useLocale()
  const today = useTodayIso()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [sickDays, setSickDays] = useState('')
  // 2026: insurance experience in months, not years of general service
  const [insuranceMonths, setInsuranceMonths] = useState('60')
  // Пустая строка — «сегодня»: дата подставляется только на клиенте.
  const [startDate, setStartDate] = useState('')
  const [hasPrivilege, setHasPrivilege] = useState(false)
  const effectiveStart = startDate || today

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    const days = parseInt(sickDays) || 0
    const months = parseInt(insuranceMonths) || 0
    if (earnings <= 0 || days <= 0 || parseIsoDateUtc(effectiveStart) === null) return null
    return calculateSickLeave(earnings, days, months, effectiveStart, hasPrivilege)
  }, [totalEarnings, sickDays, insuranceMonths, effectiveStart, hasPrivilege])

  const t = locale === 'uz'
    ? {
        totalEarnings: 'Oxirgi 12 oydagi jami daromad (UZS)',
        earningsHint: "Sug'urta staji 12 oydan kam bo'lsa — shu oylardagi daromad: u staj oylari soniga bo'linadi.",
        startDate: "Kasallik varaqasi boshlangan sana",
        sickDays: 'Kasallik kunlari (taqvim)',
        insurance: "Sug'urta staji (oy)",
        privilege: "I yoki II guruh nogironligi, 18 yoshgacha 4 va undan ortiq farzand yoki 18 yoshgacha nogironligi bo'lgan farzand (+20 foiz band)",
        results: 'Natijalar',
        avgMonthly: "O'rtacha oylik ish haqi",
        capApplied: "O'rtacha oylik ish haqining 10 MROT dan oshgan qismi hisobga olinmaydi — hisob {cap} bo'yicha.",
        avgDaily: "O'rtacha kunlik ish haqi (÷ 25,3)",
        expPercent: 'Staj koeffitsiyenti',
        period: 'Davr',
        calendarDays: 'Taqvim kunlari',
        sundays: "Yakshanbalar (to'lanmaydi)",
        holidays: "Bayram kunlari (to'lanmaydi)",
        paidDays: "To'lanadigan kunlar",
        employer: 'Ish beruvchi (yildagi dastlabki 5 kun)',
        fund: "Jamg'arma (6-kundan)",
        gross: 'Nafaqa (brutto)',
        ndfl: 'JSHSHS (12%)',
        net: "Qo'lga olinadigan summa",
        placeholder: 'Summani kiriting',
        info2026: "2026-yil 1-iyuldan kasallik nafaqasining yildagi dastlabki 5 kunini ish beruvchi, 6-kundan Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Kamida 6 oy sug'urta staji talab qilinadi. Nafaqa = o'rtacha oylik ish haqi ÷ 25,3 × staj koeffitsiyenti × to'lanadigan kunlar; yakshanba va bayram kunlari to'lanmaydi (VMQ-796, 4-ilova, 16–17-bandlar).",
        notEligible: "Sug'urta staji yetarli emas (minimum 6 oy)",
        capped: "Bir kalendar yilda 182 kalendar kundan ortiq to'lanmaydi — limitdan ortiq {n} kun hisobga olinmadi.",
        reduced: "Yil davomida 77 kalendar kundan ortiq davr uchun koeffitsiyent 10 foiz bandga kamaytiriladi: {n} kun {p}% bo'yicha.",
        holidaysUnknown: "Davr hayit sanalari hali e'lon qilinmagan kunlarga tushishi mumkin: hayit shu davrga to'g'ri kelsa, to'lanadigan kunlar bittaga kam bo'ladi.",
        firstInYear: "Hisob yildagi birinchi kasallik varaqasi uchun: 5 kunlik ish beruvchi ulushi, 77 va 182 kunlik chegaralar yil boshidan hisoblanadi.",
      }
    : {
        totalEarnings: 'Заработок за последние 12 месяцев (UZS)',
        earningsHint: 'Страховой стаж меньше 12 месяцев — заработок за эти месяцы: он делится на число месяцев стажа.',
        startDate: 'Дата начала больничного',
        sickDays: 'Дней болезни (календарных)',
        insurance: 'Страховой стаж (мес)',
        privilege: 'Инвалидность I или II группы, четверо и больше детей до 18 лет или ребёнок с инвалидностью до 18 лет (+20 п.п.)',
        results: 'Результаты',
        avgMonthly: 'Среднемесячный заработок',
        capApplied: 'Среднемесячный заработок учитывается не выше 10 МРОТ — расчёт сделан от {cap}.',
        avgDaily: 'Среднедневной заработок (÷ 25,3)',
        expPercent: 'Стажевый коэффициент',
        period: 'Период',
        calendarDays: 'Календарных дней',
        sundays: 'Воскресенья (не оплачиваются)',
        holidays: 'Праздничные дни (не оплачиваются)',
        paidDays: 'Оплачиваемых дней',
        employer: 'Работодатель (первые 5 дней в году)',
        fund: 'Фонд (с 6-го дня)',
        gross: 'Больничный (брутто)',
        ndfl: 'НДФЛ (12%)',
        net: 'К выплате (нетто)',
        placeholder: 'Введите сумму',
        info2026: 'С 1 июля 2026 года первые 5 дней больничного в году оплачивает работодатель, с 6-го дня — Фонд государственного социального страхования. Нужно минимум 6 месяцев страхового стажа. Пособие = среднемесячный заработок ÷ 25,3 × стажевый коэффициент × оплачиваемые дни; воскресенья и праздничные дни не оплачиваются (ПКМ-796, прил. 4, п. 16–17).',
        notEligible: 'Недостаточно страхового стажа (минимум 6 месяцев)',
        capped: 'За календарный год оплачивается не больше 182 календарных дней — {n} дн. сверх лимита не оплачены.',
        reduced: 'За период сверх 77 календарных дней в году коэффициент ниже на 10 п.п.: {n} дн. оплачены по {p}%.',
        holidaysUnknown: 'Период может задеть хайит, дата которого ещё не объявлена: если он попадёт в период, оплачиваемых дней будет на один меньше.',
        firstInYear: 'Расчёт для первого больничного в году: 5 дней работодателя, пороги 77 и 182 дня считаются с начала года.',
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
            <Label>{t.sickDays}</Label>
            <Input type="number" value={sickDays} onChange={(e) => setSickDays(e.target.value)} className="mt-1" min={1} max={365} />
          </div>
          <div>
            <Label>{t.insurance}</Label>
            <Input type="number" value={insuranceMonths} onChange={(e) => setInsuranceMonths(e.target.value)} className="mt-1" min={0} max={600} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="sick-privilege" className="cursor-pointer leading-snug">{t.privilege}</Label>
            <Switch id="sick-privilege" checked={hasPrivilege} onCheckedChange={setHasPrivilege} />
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
                {result.daysCapped && (
                  <p className="text-sm text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.capped.replace('{n}', String(result.unpaidOverLimitDays))}</p>
                )}
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
                  <span className="text-muted-foreground">{t.expPercent}</span>
                  <Badge variant="secondary">{result.appliedPercent}%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.period}</span>
                  <span>{isoToDisplay(result.startDate)} — {isoToDisplay(result.endDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.calendarDays}</span>
                  <span>{result.limitDays}</span>
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
                {result.reducedDays > 0 && (
                  <p className="text-sm text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.reduced.replace('{n}', String(result.reducedDays)).replace('{p}', String(result.reducedPercent))}</p>
                )}
                {!result.holidayDatesComplete && (
                  <p className="text-sm text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.holidaysUnknown}</p>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.employer}</span>
                  <span>{formatCurrency(result.employerAmount, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.fund}</span>
                  <span>{formatCurrency(result.fundAmount, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.gross}</span>
                  <span>{formatCurrency(result.grossAmount, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.ndfl}</span>
                  <span className="text-destructive">-{formatCurrency(result.ndflAmount, 'UZS', locale)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>{t.net}</span>
                  <span className="text-primary">{formatCurrency(result.netAmount, 'UZS', locale)}</span>
                </div>
                <p className="text-xs text-muted-foreground">{t.firstInYear}</p>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
