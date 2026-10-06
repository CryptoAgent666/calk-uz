'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { AlertCircle } from 'lucide-react'
import { calculateVehicleRegistration, type RegistrationOperation, type VehicleKind } from '@/lib/calculators/tax'
import { formatCurrency } from '@/lib/utils'

/**
 * Сбор при постановке автомобиля на учёт.
 *
 * Компонент раньше считал ежегодный транспортный налог по объёму двигателя.
 * Такого налога в Узбекистане нет (перечень налогов в ст. 17 НК РУз закрытый),
 * а прежняя шкала была занесена из законодательства Беларуси. Страница
 * сохранена под тем же адресом — по запросу «транспортный налог» люди приходят
 * именно сюда, и правильный ответ им нужнее, чем 404.
 */
export default function VehicleTaxCalculator() {
  const locale = useLocale()
  const [kind, setKind] = useState<VehicleKind>('car')
  const [operation, setOperation] = useState<RegistrationOperation>('registration')
  // Нужно только для перерегистрации: при регистрации на нового владельца номера меняют всегда.
  const [withNewPlates, setWithNewPlates] = useState(false)
  const isRegistration = operation === 'registration'

  const result = useMemo(
    () => calculateVehicleRegistration(kind, isRegistration || withNewPlates, operation),
    [kind, isRegistration, withNewPlates, operation]
  )

  const t = locale === 'uz'
    ? {
        notice: 'O‘zbekistonda yillik transport solig‘i yo‘q. Avtomobil egasi hisobga qo‘yishda bir martalik davlat bojini to‘laydi — kalkulyator shuni hisoblaydi.',
        kind: 'Transport vositasi turi',
        car: 'Yengil avtomobil',
        electric: 'Elektromobil yoki gibrid',
        motorcycle: 'Mototsikl / moped',
        trailer: 'Tirkama',
        operation: 'Nima rasmiylashtiriladi',
        opRegistration: 'Ro‘yxatga olish (yangi, olib kelingan yoki sotib olingan TV)',
        opReregistration: 'Qayta ro‘yxatga olish (GBO, manzil o‘zgarishi)',
        plates: 'Yangi davlat raqami kerak',
        platesNote: 'Yangi egasiga ro‘yxatga olishda raqamlar albatta almashtiriladi — eskisini saqlab qolib bo‘lmaydi.',
        results: 'Hisob-kitob',
        registration: 'Ro‘yxatga olish boji',
        reregistration: 'Qayta ro‘yxatga olish boji',
        techPassport: 'Ro‘yxatga olish guvohnomasi (texpasport)',
        platesRow: 'Davlat raqami belgilarini berish',
        total: 'Jami bir martalik to‘lov',
        inBrv: 'BHM da', brvUnit: 'BHM',
      }
    : {
        notice: 'В Узбекистане нет ежегодного транспортного налога. Владелец авто платит разовую госпошлину при постановке на учёт — её и считает калькулятор.',
        kind: 'Тип транспортного средства',
        car: 'Легковой автомобиль',
        electric: 'Электромобиль или гибрид',
        motorcycle: 'Мотоцикл / мопед',
        trailer: 'Прицеп',
        operation: 'Что оформляете',
        opRegistration: 'Регистрация (новое, ввезённое или купленное ТС)',
        opReregistration: 'Перерегистрация (ГБО, смена адреса)',
        plates: 'Нужны новые номера',
        platesNote: 'При регистрации на нового владельца номера меняют всегда — оставить старые нельзя.',
        results: 'Расчёт',
        registration: 'Госпошлина за регистрацию',
        reregistration: 'Госпошлина за перерегистрацию',
        techPassport: 'Свидетельство о регистрации (техпаспорт)',
        platesRow: 'Выдача госномеров',
        total: 'Итого разовый платёж',
        inBrv: 'в БРВ', brvUnit: 'БРВ',
      }

  const kinds: { value: VehicleKind; label: string }[] = [
    { value: 'car', label: t.car },
    { value: 'electric', label: t.electric },
    { value: 'motorcycle', label: t.motorcycle },
    { value: 'trailer', label: t.trailer },
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
        <AlertCircle className="h-5 w-5 flex-shrink-0" />
        <p>{t.notice}</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div>
            <Label>{t.kind}</Label>
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value as VehicleKind)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {kinds.map((k) => (
                <option key={k.value} value={k.value}>{k.label}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>{t.operation}</Label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as RegistrationOperation)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="registration">{t.opRegistration}</option>
              <option value="reregistration">{t.opReregistration}</option>
            </select>
          </div>
          {isRegistration ? (
            <p className="text-xs text-muted-foreground">{t.platesNote}</p>
          ) : (
            <div className="flex items-center justify-between">
              <Label htmlFor="plates" className="cursor-pointer">{t.plates}</Label>
              <Switch id="plates" checked={withNewPlates} onCheckedChange={setWithNewPlates} />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">{t.results}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{isRegistration ? t.registration : t.reregistration}</span>
            <span>{formatCurrency(result.registration, 'UZS', locale)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t.techPassport}</span>
            <span>{formatCurrency(result.techPassport, 'UZS', locale)}</span>
          </div>
          {result.plates > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t.platesRow}</span>
              <span>{formatCurrency(result.plates, 'UZS', locale)}</span>
            </div>
          )}
          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>{t.total}</span>
            <span className="text-primary">{formatCurrency(result.total, 'UZS', locale)}</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{t.inBrv}</span>
            <span>{result.totalBrv.toFixed(2)} {t.brvUnit}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
