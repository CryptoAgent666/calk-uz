'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { calculateMaternity } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function MaternityCalculator() {
  const locale = useLocale()
  const [totalEarnings, setTotalEarnings] = useState('')
  const [isComplicated, setIsComplicated] = useState(false)
  const [isMultiple, setIsMultiple] = useState(false)

  const result = useMemo(() => {
    const earnings = parseFloat(totalEarnings.replace(/\s/g, '')) || 0
    if (earnings <= 0) return null
    return calculateMaternity(earnings, isComplicated, isMultiple)
  }, [totalEarnings, isComplicated, isMultiple])

  const t = locale === 'uz'
    ? {
        totalEarnings: '12 oylik jami daromad (UZS)',
        complicated: 'Murakkab tug\'ruq',
        multiple: 'Ko\'p bolali tug\'ruq',
        results: 'Natijalar',
        avgDaily: 'O\'rtacha kunlik daromad',
        prebirthDays: 'Tug\'ruqgacha kunlar',
        postbirthDays: 'Tug\'ruqdan keyin kunlar',
        totalDays: 'Jami kunlar',
        benefit: 'Nafaqa summasi',
        placeholder: 'Summani kiriting',
      }
    : {
        totalEarnings: 'Общий заработок за 12 мес. (UZS)',
        complicated: 'Осложнённые роды',
        multiple: 'Многоплодная беременность',
        results: 'Результаты',
        avgDaily: 'Среднедневной заработок',
        prebirthDays: 'Дней до родов',
        postbirthDays: 'Дней после родов',
        totalDays: 'Всего дней',
        benefit: 'Сумма пособия',
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
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.avgDaily}</span>
              <span>{formatCurrency(result.averageDailyEarnings, 'UZS', locale)}</span>
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
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.benefit}</span>
              <span className="text-primary">{formatCurrency(result.netBenefit, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
