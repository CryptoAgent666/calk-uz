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
  const [engineVolume, setEngineVolume] = useState('1600')
  const [region, setRegion] = useState<'tashkent' | 'other_city' | 'rural'>('tashkent')
  const [driverAge, setDriverAge] = useState('30')
  const [experience, setExperience] = useState('5')
  const [accidents, setAccidents] = useState('0')

  const result = useMemo(() => {
    const ev = parseInt(engineVolume) || 0
    const age = parseInt(driverAge) || 0
    const exp = parseInt(experience) || 0
    const acc = parseInt(accidents) || 0
    if (ev <= 0) return null
    return calculateOsago(ev, region, age, exp, acc)
  }, [engineVolume, region, driverAge, experience, accidents])

  const t = locale === 'uz'
    ? {
        engineVolume: 'Dvigatel hajmi (sm\u00B3)', region: 'Hudud', driverAge: 'Haydovchi yoshi',
        experience: 'Tajriba (yil)', accidents: 'Avariyalar soni',
        results: 'Natijalar', baseTariff: 'Bazaviy tarif', regionCoeff: 'Hudud koeffitsiyenti',
        ageExpCoeff: 'Yosh/tajriba koeff.', historyCoeff: 'Tarix koeff.',
        annualPremium: 'Yillik sug\'urta badali',
        tashkent: 'Toshkent', other_city: 'Boshqa shahar', rural: 'Qishloq',
      }
    : {
        engineVolume: 'Объём двигателя (см\u00B3)', region: 'Регион', driverAge: 'Возраст водителя',
        experience: 'Стаж (лет)', accidents: 'Количество ДТП',
        results: 'Результаты', baseTariff: 'Базовый тариф', regionCoeff: 'Коэфф. региона',
        ageExpCoeff: 'Коэфф. возраст/стаж', historyCoeff: 'Коэфф. истории',
        annualPremium: 'Годовая страховая премия',
        tashkent: 'Ташкент', other_city: 'Другой город', rural: 'Село',
      }

  const regionOptions = { tashkent: t.tashkent, other_city: t.other_city, rural: t.rural }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.engineVolume}</Label>
            <Input type="number" value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} className="mt-1 text-lg" min={100} max={10000} />
          </div>
          <div>
            <Label>{t.region}</Label>
            <select value={region} onChange={(e) => setRegion(e.target.value as typeof region)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {Object.entries(regionOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
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
            <div className="flex justify-between"><span className="text-muted-foreground">{t.regionCoeff}</span><span>{result.regionCoeff}</span></div>
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
