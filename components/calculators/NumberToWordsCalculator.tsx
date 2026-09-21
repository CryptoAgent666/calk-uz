'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { numberToWordsUz, numberToWordsRu } from '@/lib/utils'

export default function NumberToWordsCalculator() {
  const locale = useLocale()
  const [number, setNumber] = useState('')

  const result = useMemo(() => {
    const n = parseFloat(number.replace(/\s/g, '')) || 0
    if (n === 0 && number.trim() !== '0') return null
    return { uz: numberToWordsUz(n), ru: numberToWordsRu(n) }
  }, [number])

  const t = locale === 'uz'
    ? { number: 'Raqam', result: 'Natija', uzLabel: 'O\'zbekcha', ruLabel: 'Ruscha', placeholder: 'Raqamni kiriting' }
    : { number: 'Число', result: 'Результат', uzLabel: 'На узбекском', ruLabel: 'На русском', placeholder: 'Введите число' }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Label>{t.number}</Label>
          <Input type="text" inputMode="numeric" placeholder={t.placeholder} value={number} onChange={(e) => setNumber(e.target.value)} className="mt-1 text-lg" />
        </CardContent>
      </Card>
      {result && (
        <Card className="border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t.uzLabel}</p>
              <p className="text-lg font-medium">{result.uz}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t.ruLabel}</p>
              <p className="text-lg font-medium">{result.ru}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
