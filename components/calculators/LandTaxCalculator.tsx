'use client'

import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { calculateLandTax, getLandTaxZone, type LandPayer } from '@/lib/calculators/tax'
import { LAND_TAX_COEFFICIENT_RANGE, LAND_TAX_ZONES_2026 } from '@/lib/constants/tax-rates'
import { formatCurrency } from '@/lib/utils'

type AreaUnit = 'm2' | 'sotka' | 'ha'
const M2_IN: Record<AreaUnit, number> = { m2: 1, sotka: 100, ha: 10_000 }

const parse = (value: string) => parseFloat(value.replace(/\s/g, '').replace(',', '.'))
const fmt = (value: number) => value.toLocaleString('ru-RU', { maximumFractionDigits: 2 })

function OptionSelect<T extends string>({
  id,
  value,
  onChange,
  items,
}: {
  id: string
  value: T
  onChange: (next: T) => void
  items: { value: T; label: string }[]
}) {
  return (
    <Select
      items={items}
      value={value}
      onValueChange={(next) => {
        if (typeof next === 'string') onChange(next as T)
      }}
    >
      <SelectTrigger id={id} className="mt-1 w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default function LandTaxCalculator() {
  const locale = useLocale()
  const isUz = locale === 'uz'
  const [isAgricultural, setIsAgricultural] = useState(false)
  const [payer, setPayer] = useState<LandPayer>('individual')
  const [zoneId, setZoneId] = useState(LAND_TAX_ZONES_2026[0].id)
  const [area, setArea] = useState('')
  const [unit, setUnit] = useState<AreaUnit>('sotka')
  const [normativeValue, setNormativeValue] = useState('')
  const [coefficient, setCoefficient] = useState('1')

  const zone = getLandTaxZone(zoneId)

  const result = useMemo(() => {
    const k = parse(coefficient)
    const coef = Number.isFinite(k) && k > 0 ? k : 1
    if (isAgricultural) {
      const value = parse(normativeValue)
      if (!(value > 0)) return null
      return calculateLandTax({ category: 'agricultural', payer, normativeValue: value, coefficient: coef })
    }
    const size = parse(area)
    if (!(size > 0)) return null
    return calculateLandTax({ category: 'non-agricultural', payer, areaM2: size * M2_IN[unit], zoneId, coefficient: coef })
  }, [isAgricultural, payer, normativeValue, area, unit, zoneId, coefficient])

  const range = isAgricultural
    ? LAND_TAX_COEFFICIENT_RANGE.agricultural
    : zone.isTashkentCity
      ? LAND_TAX_COEFFICIENT_RANGE.tashkentCity
      : LAND_TAX_COEFFICIENT_RANGE.regions

  const t = isUz
    ? {
        agricultural: "Qishloq xo'jaligi yeri",
        payer: "To'lovchi",
        individual: 'Jismoniy shaxs',
        legal: 'Yuridik shaxs',
        payerNote: "Tadbirkorlik uchun foydalaniladigan, yuridik shaxs yoki YaTTga ijaraga berilgan imorat ostidagi yoxud noturar ko'chmas mulk ostidagi uchastka uchun jismoniy shaxs yuridik shaxslar stavkalari bo'yicha to'laydi (SK 437-moddasi).",
        zone: 'Hudud (Toshkentda — zona)',
        area: 'Uchastka maydoni',
        unit: "O'lchov birligi",
        units: { m2: 'kv. m', sotka: 'sotix', ha: 'gektar' },
        normativeValue: "Yerning normativ qiymati (so'm)",
        coefficient: 'Mahalliy kengash koeffitsiyenti',
        coefHint: isAgricultural
          ? "Viloyat kengashi (Toshkentda — shahar kengashi) 0,5 dan 1,2 gacha koeffitsiyent qo'llashi mumkin. 1 — Soliq kodeksidagi stavka."
          : zone.isTashkentCity
            ? "Tuman kengashi zonaning bazaviy stavkasiga mavze yoki mahalla bo'yicha 0,7 dan 3,0 gacha koeffitsiyent qo'llaydi. 1 — Soliq kodeksidagi bazaviy stavka."
            : "Viloyat kengashi tuman yoki shahar stavkasini 0,5–2,0 koeffitsiyent bilan belgilaydi, tuman kengashi mavze yoki mahalla bo'yicha yana 0,7–3,0 qo'llaydi. Yakuniy koeffitsiyentni (0,35–6,0) kiriting yoki 1 — bazaviy stavkani qoldiring.",
        outOfRange: `Koeffitsiyent Soliq kodeksi ruxsat bergan oraliqdan tashqarida (${fmt(range[0])}–${fmt(range[1])}).`,
        placeholder: 'Qiymatni kiriting',
        results: 'Natijalar',
        baseRate: 'Bazaviy stavka',
        ofNormative: 'normativ qiymatdan',
        perM2: "so'm/m²",
        perHa: "mln so'm/ga",
        coefLabel: 'Koeffitsiyent',
        annualTax: "Yillik soliq",
        schedule: "To'lov muddatlari",
        april15: '15-aprelgacha',
        october15: '15-oktabrgacha',
        september1: '1-sentabrgacha (30%)',
        december1: '1-dekabrgacha (qolgan qismi)',
        quarterly: "Aylanma solig'i to'lovchilari — har chorakda, chorak uchinchi oyining 20-sanasigacha",
        monthly: "Qolgan to'lovchilar — har oyda, 10-sanagacha (yanvar uchun — 20-yanvargacha)",
        noteIndividual: "Jismoniy shaxslar uchun soliqni soliq organi hisoblaydi va 1-martgacha xabarnomani my.soliq.uz, SMS yoki ilova orqali yuboradi (SK 439-moddasi).",
        noteLegalNonAgri: "Yuridik shaxslar soliqni 1-yanvar holatiga o'zlari hisoblaydi va hisobotni 20-yanvargacha topshiradi (SK 431-moddasi).",
        noteLegalAgri: "Yuridik shaxslar soliqni 1-yanvar holatiga o'zlari hisoblaydi va hisobotni 1-maygacha topshiradi (SK 431-moddasi).",
        noteRate: "Mavze yoki mahallangiz uchun aniq stavkani tuman (shahar) kengashi har yili 10-yanvargacha tasdiqlaydi — uni soliq organidan aniqlang.",
      }
    : {
        agricultural: 'Сельскохозяйственная земля',
        payer: 'Плательщик',
        individual: 'Физическое лицо',
        legal: 'Юридическое лицо',
        payerNote: 'За участок под предпринимательскую деятельность, под строением, сданным в аренду юрлицу или ИП, или под нежилой недвижимостью физлицо платит по ставкам юрлиц (ст. 437 НК).',
        zone: 'Регион (в Ташкенте — зона)',
        area: 'Площадь участка',
        unit: 'Единица',
        units: { m2: 'кв. м', sotka: 'сотки', ha: 'гектары' },
        normativeValue: 'Нормативная стоимость угодий (сум)',
        coefficient: 'Коэффициент местного кенгаша',
        coefHint: isAgricultural
          ? 'Кенгаш области (в Ташкенте — города) вправе применить коэффициент от 0,5 до 1,2. 1 — ставка Налогового кодекса.'
          : zone.isTashkentCity
            ? 'Кенгаш района применяет к базовой ставке зоны коэффициент от 0,7 до 3,0 по кварталу или махалле. 1 — базовая ставка Налогового кодекса.'
            : 'Кенгаш области задаёт ставку района или города с коэффициентом 0,5–2,0, кенгаш района — ещё 0,7–3,0 по кварталу или махалле. Введите итоговый коэффициент (0,35–6,0) или оставьте 1 — базовую ставку.',
        outOfRange: `Коэффициент вне диапазона, который допускает Налоговый кодекс (${fmt(range[0])}–${fmt(range[1])}).`,
        placeholder: 'Введите значение',
        results: 'Результаты',
        baseRate: 'Базовая ставка',
        ofNormative: 'нормативной стоимости',
        perM2: 'сум/м²',
        perHa: 'млн сум/га',
        coefLabel: 'Коэффициент',
        annualTax: 'Годовой налог',
        schedule: 'Сроки уплаты',
        april15: 'До 15 апреля',
        october15: 'До 15 октября',
        september1: 'До 1 сентября (30%)',
        december1: 'До 1 декабря (остаток)',
        quarterly: 'Плательщикам налога с оборота — ежеквартально, до 20-го числа третьего месяца квартала',
        monthly: 'Остальным — ежемесячно, до 10-го числа (за январь — до 20 января)',
        noteIndividual: 'Физлицам налог считает налоговая и до 1 марта присылает извещение в my.soliq.uz, по СМС или в приложение (ст. 439 НК).',
        noteLegalNonAgri: 'Юрлица считают налог сами по состоянию на 1 января и сдают отчётность до 20 января (ст. 431 НК).',
        noteLegalAgri: 'Юрлица считают налог сами по состоянию на 1 января и сдают отчётность до 1 мая (ст. 431 НК).',
        noteRate: 'Точную ставку для вашего квартала или махалли ежегодно до 10 января утверждает кенгаш района (города) — уточните её в налоговой.',
      }

  const zoneItems = LAND_TAX_ZONES_2026.map((z) => ({ value: z.id, label: isUz ? z.nameUz : z.nameRu }))
  const payerItems: { value: LandPayer; label: string }[] = [
    { value: 'individual', label: t.individual },
    { value: 'legal', label: t.legal },
  ]
  const unitItems: { value: AreaUnit; label: string }[] = (['m2', 'sotka', 'ha'] as const).map((u) => ({ value: u, label: t.units[u] }))

  const row = (label: string, value: string, className = '') => (
    <div className={`flex justify-between gap-4 ${className}`}>
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  )
  const money = (amount: number) => formatCurrency(amount, 'UZS', locale)

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="land-agri" className="cursor-pointer">{t.agricultural}</Label>
            <Switch id="land-agri" checked={isAgricultural} onCheckedChange={setIsAgricultural} />
          </div>
          <div>
            <Label htmlFor="land-payer">{t.payer}</Label>
            <OptionSelect id="land-payer" value={payer} onChange={setPayer} items={payerItems} />
            {!isAgricultural && <p className="mt-1 text-xs text-muted-foreground">{t.payerNote}</p>}
          </div>
          {isAgricultural ? (
            <div>
              <Label htmlFor="land-normative">{t.normativeValue}</Label>
              <Input id="land-normative" type="text" inputMode="numeric" placeholder={t.placeholder} value={normativeValue} onChange={(e) => setNormativeValue(e.target.value)} className="mt-1 text-lg" />
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="land-zone">{t.zone}</Label>
                <OptionSelect id="land-zone" value={zoneId} onChange={setZoneId} items={zoneItems} />
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <div>
                  <Label htmlFor="land-area">{t.area}</Label>
                  <Input id="land-area" type="text" inputMode="decimal" placeholder={t.placeholder} value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 text-lg" />
                </div>
                <div className="w-32">
                  <Label htmlFor="land-unit">{t.unit}</Label>
                  <OptionSelect id="land-unit" value={unit} onChange={setUnit} items={unitItems} />
                </div>
              </div>
            </>
          )}
          <div>
            <Label htmlFor="land-coef">{t.coefficient}</Label>
            <Input id="land-coef" type="text" inputMode="decimal" value={coefficient} onChange={(e) => setCoefficient(e.target.value)} className="mt-1 w-32" />
            <p className="mt-1 text-xs text-muted-foreground">{t.coefHint}</p>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {result.ratePercent !== undefined && row(t.baseRate, `${fmt(result.ratePercent)}% ${t.ofNormative}`)}
            {result.baseRatePerM2 !== undefined && row(
              t.baseRate,
              result.payer === 'legal'
                ? `${fmt(result.baseRatePerM2 * 10_000 / 1_000_000)} ${t.perHa} (${fmt(result.baseRatePerM2)} ${t.perM2})`
                : `${fmt(result.baseRatePerM2)} ${t.perM2}`,
            )}
            {row(t.coefLabel, `× ${fmt(result.coefficient)}`)}
            {!result.coefficientInRange && <p className="text-xs text-destructive">{t.outOfRange}</p>}
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>{t.annualTax}</span>
              <span className="text-primary">{money(result.annualTax)}</span>
            </div>
            <div className="border-t pt-3 space-y-2">
              <p className="text-sm font-medium">{t.schedule}</p>
              {result.schedule.kind === 'individual' && (
                <>
                  {row(t.april15, money(result.schedule.april15))}
                  {row(t.october15, money(result.schedule.october15))}
                </>
              )}
              {result.schedule.kind === 'legal-agricultural' && (
                <>
                  {row(t.september1, money(result.schedule.september1))}
                  {row(t.december1, money(result.schedule.december1))}
                </>
              )}
              {result.schedule.kind === 'legal-non-agricultural' && (
                <>
                  {row(t.quarterly, money(result.schedule.quarterly))}
                  {row(t.monthly, money(result.schedule.monthly))}
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {result.payer === 'individual' ? t.noteIndividual : isAgricultural ? t.noteLegalAgri : t.noteLegalNonAgri}
              {!isAgricultural && ` ${t.noteRate}`}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
