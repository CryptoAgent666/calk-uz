'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateSickLeave } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function SickLeaveCalculator() {
  const locale = useLocale()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [sickDays, setSickDays] = useState('')
  const [experience, setExperience] = useState('5')

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    const days = parseInt(sickDays) || 0
    const exp = parseInt(experience) || 0
    if (earnings <= 0 || days <= 0) return null
    return calculateSickLeave(earnings, days, exp)
  }, [totalEarnings, sickDays, experience])

  const t = locale === 'uz'
    ? {
        totalEarnings: '12 oylik jami daromad (UZS)',
        sickDays: 'Kasallik kunlari',
        experience: 'Ish staji (yil)',
        results: 'Natijalar',
        avgDaily: 'O\'rtacha kunlik daromad',
        expPercent: 'Staj foizi',
        gross: 'Kasallik varag\'i (brutto)',
        ndfl: 'JSHSHS (12%)',
        net: 'Qo\'lga olinadigan summa',
        placeholder: 'Summani kiriting',
      }
    : {
        totalEarnings: 'Общий заработок за 12 мес. (UZS)',
        sickDays: 'Дней болезни',
        experience: 'Стаж (лет)',
        results: 'Результаты',
        avgDaily: 'Среднедневной заработок',
        expPercent: 'Процент от стажа',
        gross: 'Больничный (брутто)',
        ndfl: 'НДФЛ (12%)',
        net: 'К выплате (нетто)',
        placeholder: 'Введите сумму',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.totalEarnings}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={totalEarnings} onChange={(e) => setTotalEarnings(e.target.value)} className="mt-1 text-lg" />
          </div>
          <div>
            <Label>{t.sickDays}</Label>
            <Input type="number" value={sickDays} onChange={(e) => setSickDays(e.target.value)} className="mt-1" min={1} />
          </div>
          <div>
            <Label>{t.experience}</Label>
            <Input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} className="mt-1" min={0} max={50} />
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.avgDaily}</span>
              <span>{formatCurrency(result.averageDailyEarnings, 'UZS', locale)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.expPercent}</span>
              <span>{result.experiencePercent}%</span>
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
          </CardContent>
        </Card>
      )}
    </div>
  )
}
