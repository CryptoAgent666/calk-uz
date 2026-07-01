'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { calculateSickLeave } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function SickLeaveCalculator() {
  const locale = useLocale()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [sickDays, setSickDays] = useState('')
  // 2026: insurance experience in months, not years of general service
  const [insuranceMonths, setInsuranceMonths] = useState('60')

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    const days = parseInt(sickDays) || 0
    const months = parseInt(insuranceMonths) || 0
    if (earnings <= 0 || days <= 0) return null
    return calculateSickLeave(earnings, days, months)
  }, [totalEarnings, sickDays, insuranceMonths])

  const t = locale === 'uz'
    ? {
        totalEarnings: '12 oylik jami daromad (UZS)',
        sickDays: 'Kasallik kunlari (taqvim)',
        insurance: "Sug'urta staji (oy)",
        results: 'Natijalar',
        avgDaily: "O'rtacha kunlik daromad",
        expPercent: 'Stavka foizi',
        gross: 'Nafaqa (brutto)',
        ndfl: 'JSHSHS (12%)',
        net: "Qo'lga olinadigan summa",
        placeholder: 'Summani kiriting',
        info2026: "2026-yildan kasallik nafaqasini Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Kamida 6 oy sug'urta staji talab qilinadi.",
        notEligible: "Sug'urta staji yetarli emas (minimum 6 oy)",
      }
    : {
        totalEarnings: 'Общий заработок за 12 мес. (UZS)',
        sickDays: 'Дней болезни (календарных)',
        insurance: 'Страховой стаж (мес)',
        results: 'Результаты',
        avgDaily: 'Среднедневной заработок',
        expPercent: 'Процент ставки',
        gross: 'Больничный (брутто)',
        ndfl: 'НДФЛ (12%)',
        net: 'К выплате (нетто)',
        placeholder: 'Введите сумму',
        info2026: 'С 2026 года больничные платит Фонд государственного социального страхования. Нужно минимум 6 месяцев страхового стажа.',
        notEligible: 'Недостаточно страхового стажа (минимум 6 месяцев)',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xs text-muted-foreground bg-muted/40 rounded-md px-3 py-2">{t.info2026}</p>
          <div>
            <Label>{t.totalEarnings}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={totalEarnings} onChange={(e) => setTotalEarnings(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.sickDays}</Label>
            <Input type="number" value={sickDays} onChange={(e) => setSickDays(e.target.value)} className="mt-1" min={1} max={182} />
          </div>
          <div>
            <Label>{t.insurance}</Label>
            <Input type="number" value={insuranceMonths} onChange={(e) => setInsuranceMonths(e.target.value)} className="mt-1" min={0} max={600} />
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
                  <span className="text-muted-foreground">{t.avgDaily}</span>
                  <span>{formatCurrency(result.averageDailyEarnings, 'UZS', locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.expPercent}</span>
                  <Badge variant="secondary">{result.experiencePercent}%</Badge>
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
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
