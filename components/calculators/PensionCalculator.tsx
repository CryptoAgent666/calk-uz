'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { calculatePension } from '@/lib/calculators/social'
import { formatCurrency } from '@/lib/utils'

export default function PensionCalculator() {
  const locale = useLocale()
  const [age, setAge] = useState('40')
  const [isMale, setIsMale] = useState(true)
  const [salary, setSalary] = useState('')
  const [experience, setExperience] = useState('20')

  const result = useMemo(() => {
    const a = parseInt(age) || 0
    const sal = parseFloat(salary.replace(/\s/g, '')) || 0
    const exp = parseInt(experience) || 0
    if (a <= 0 || sal <= 0) return null
    return calculatePension(a, isMale, sal, exp)
  }, [age, isMale, salary, experience])

  const t = locale === 'uz'
    ? {
        age: 'Joriy yosh',
        isMale: 'Erkak',
        salary: 'O\'rtacha oylik maosh (UZS)',
        experience: 'Ish staji (yil)',
        results: 'Natijalar',
        retirementAge: 'Pensiya yoshi',
        yearsToRetirement: 'Pensiyagacha yillar',
        pensionPercent: 'Pensiya foizi',
        monthlyPension: 'Taxminiy oylik pensiya',
        placeholder: 'Summani kiriting',
        years: 'yil',
      }
    : {
        age: 'Текущий возраст',
        isMale: 'Мужской пол',
        salary: 'Средняя зарплата (UZS)',
        experience: 'Стаж (лет)',
        results: 'Результаты',
        retirementAge: 'Пенсионный возраст',
        yearsToRetirement: 'Лет до пенсии',
        pensionPercent: 'Процент пенсии',
        monthlyPension: 'Ориентировочная пенсия',
        placeholder: 'Введите сумму',
        years: 'лет',
      }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.age}</Label>
            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1" min={16} max={80} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="gender" className="cursor-pointer">{t.isMale}</Label>
            <Switch id="gender" checked={isMale} onCheckedChange={setIsMale} />
          </div>
          <div>
            <Label>{t.salary}</Label>
            <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 text-lg" />
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
              <span className="text-muted-foreground">{t.retirementAge}</span>
              <span>{result.retirementAge} {t.years}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.yearsToRetirement}</span>
              <span>{result.yearsToRetirement} {t.years}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.pensionPercent}</span>
              <Badge variant="secondary">{result.pensionAsPercentOfSalary}%</Badge>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.monthlyPension}</span>
              <span className="text-primary">{formatCurrency(result.estimatedMonthlyPension, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
