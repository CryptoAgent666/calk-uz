'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { calculateOsago } from '@/lib/calculators/auto'
import { formatCurrency } from '@/lib/utils'

export default function OsagoCalculator() {
  const locale = useLocale()
  const [region, setRegion] = useState<'tashkent' | 'other_region'>('tashkent')
  const [unlimitedDrivers, setUnlimitedDrivers] = useState(false)
  const [driverAge, setDriverAge] = useState('30')
  const [experience, setExperience] = useState('5')
  const [accidents, setAccidents] = useState('0')

  const result = useMemo(() => {
    const age = parseInt(driverAge) || 0
    const exp = parseInt(experience) || 0
    const acc = parseInt(accidents) || 0
    return calculateOsago(region, unlimitedDrivers, age, exp, acc)
  }, [region, unlimitedDrivers, driverAge, experience, accidents])

  const t = locale === 'uz'
    ? {
        region: 'Hudud', driverAge: 'Haydovchi yoshi',
        experience: 'Tajriba (yil)', accidents: 'Avariyalar soni',
        unlimitedDrivers: 'Cheklanmagan haydovchilar',
        results: 'Natijalar', baseTariff: 'Bazaviy tarif',
        ageExpCoeff: 'Yosh/tajriba koeff.', historyCoeff: 'Tarix koeff.',
        annualPremium: 'Yillik sug\'urta badali',
        tashkent: 'Toshkent', other_region: 'Boshqa hududlar',
        yes: 'Ha', no: 'Yo\'q',
      }
    : {
        region: 'Регион', driverAge: 'Возраст водителя',
        experience: 'Стаж (лет)', accidents: 'Количество ДТП',
        unlimitedDrivers: 'Неограниченное число водителей',
        results: 'Результаты', baseTariff: 'Базовый тариф',
        ageExpCoeff: 'Коэфф. возраст/стаж', historyCoeff: 'Коэфф. истории',
        annualPremium: 'Годовая страховая премия',
        tashkent: 'Ташкент', other_region: 'Другие регионы',
        yes: 'Да', no: 'Нет',
      }

  const regionOptions = { tashkent: t.tashkent, other_region: t.other_region }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.region}</Label>
            <select value={region} onChange={(e) => setRegion(e.target.value as typeof region)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(regionOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={unlimitedDrivers} onChange={(e) => setUnlimitedDrivers(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <Label>{t.unlimitedDrivers}</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>{t.driverAge}</Label>
              <Input type="number" value={driverAge} onChange={(e) => setDriverAge(e.target.value)} className="mt-1" min={18} max={80} />
            </div>
            <div>
              <Label>{t.experience}</Label>
              <Input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} className="mt-1" min={0} max={60} />
            </div>
            <div>
              <Label>{t.accidents}</Label>
              <Input type="number" value={accidents} onChange={(e) => setAccidents(e.target.value)} className="mt-1" min={0} max={10} />
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader><CardTitle className="text-lg">{t.results}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t.baseTariff}</span><span>{formatCurrency(result.baseTariff, 'UZS', locale)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.ageExpCoeff}</span><span>{result.ageExpCoeff}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t.historyCoeff}</span><span>{result.historyCoeff}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.annualPremium}</span>
              <span className="text-primary">{formatCurrency(result.annualPremium, 'UZS', locale)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
