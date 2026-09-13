/**
 * Tax calculators for Uzbekistan
 * Income tax, property tax, land tax, vehicle tax, corporate tax, penalty
 */

import { BRV, CB_RATE } from '@/lib/constants/brv'
import { LAND_TAX_COEFFICIENT_RANGE, LAND_TAX_ZONES_2026, TAX_RATES, type LandTaxZone } from '@/lib/constants/tax-rates'

// Income Tax (NDFL/JSHSHS) - covered in salary.ts, this is standalone
export interface IncomeTaxResult {
  income: number
  taxRate: number
  taxAmount: number
  netIncome: number
}

export function calculateIncomeTax(income: number, isITPark: boolean = false): IncomeTaxResult {
  const taxRate = isITPark ? 0.075 : 0.12
  const taxAmount = income * taxRate
  return { income, taxRate: taxRate * 100, taxAmount, netIncome: income - taxAmount }
}

// Property Tax
export interface PropertyTaxResult {
  cadastralValue: number
  area: number
  taxRate: number
  annualTax: number
  /** Половина годового налога — к 15 апреля. */
  firstInstallment: number
  /** Вторая половина — к 15 октября. */
  secondInstallment: number
}

export function calculatePropertyTax(
  cadastralValue: number,
  areaM2: number,
  isLegalEntity: boolean = false,
  isCity: boolean = true
): PropertyTaxResult {
  // Ставки ст. 422 НК в ред. ЗРУ-1108 (с 01.01.2026). Шкала 0,36 / 0,48 / 0,64% действует
  // для домов и квартир В ГОРОДАХ; в прочих населённых пунктах всё свыше 200 м² — 0,48%
  // (п. 3 ч. 1 ст. 422), ступени 0,64% там нет. Кенгаши вправе применять коэффициент
  // 0,7–1,3 — в расчёте не учитывается. Юрлица и объекты для бизнеса — 1,5% (ст. 415).
  let taxRate: number
  if (isLegalEntity) {
    taxRate = TAX_RATES.PROPERTY_TAX_LEGAL
  } else if (areaM2 <= 200) {
    taxRate = TAX_RATES.PROPERTY_TAX_RESIDENTIAL_SMALL
  } else if (!isCity || areaM2 <= 500) {
    taxRate = TAX_RATES.PROPERTY_TAX_RESIDENTIAL_MEDIUM
  } else {
    taxRate = TAX_RATES.PROPERTY_TAX_RESIDENTIAL_LARGE
  }

  const annualTax = cadastralValue * taxRate

  return {
    cadastralValue,
    area: areaM2,
    taxRate: taxRate * 100,
    annualTax,
    firstInstallment: annualTax / 2,
    secondInstallment: annualTax / 2,
  }
}

/**
 * Сбор при постановке автомобиля на учёт.
 *
 * ⚠️ Здесь раньше считался ЕЖЕГОДНЫЙ ТРАНСПОРТНЫЙ НАЛОГ по шкале БРВ-множителей
 * от объёма двигателя. Такого налога в Узбекистане НЕТ: перечень налогов в
 * ст. 17 НК РУз закрытый (НДС, акцизный, на прибыль, НДФЛ, за недра,
 * экологический, за водные ресурсы, на имущество, земельный, социальный) —
 * транспортного среди них нет. Прежняя шкала и «срок уплаты до 1 декабря»
 * были занесены из законодательства Беларуси (источник записи в реестре
 * указывал на auto.onliner.by). Проверено по первоисточникам 2026-08-09.
 *
 * Владелец авто в РУз реально платит РАЗОВЫЕ госпошлины при регистрации,
 * а не ежегодный налог. Ставки — приказ МВД (рег. № 2303, ред. 2303-7
 * от 23.12.2024), в БРВ.
 */
export interface VehicleRegistrationResult {
  /** Госпошлина за регистрацию транспортного средства, сум */
  registration: number
  /** Свидетельство о регистрации (техпаспорт), сум */
  techPassport: number
  /** Выдача государственных номерных знаков, сум */
  plates: number
  /** Итого разовый платёж при постановке на учёт, сум */
  total: number
  /** Тот же итог в БРВ — устойчив к индексации БРВ */
  totalBrv: number
}

/** Ставки в БРВ. Мото/прицепы и электромобили тарифицируются отдельно. */
const REG_FEE_BRV = {
  car: { registration: 6.84, techPassport: 0.7, plates: 5.5 },
  motorcycle: { registration: 3.42, techPassport: 0.7, plates: 2.75 },
  trailer: { registration: 3.42, techPassport: 0.7, plates: 2.75 },
} as const

export type VehicleKind = keyof typeof REG_FEE_BRV

export function calculateVehicleRegistration(
  kind: VehicleKind = 'car',
  /** Нужны ли новые номера. При перерегистрации со «своими» номерами — false. */
  withNewPlates: boolean = true,
): VehicleRegistrationResult {
  const r = REG_FEE_BRV[kind]
  const plates = withNewPlates ? r.plates * BRV : 0
  const registration = r.registration * BRV
  const techPassport = r.techPassport * BRV
  const total = registration + techPassport + plates
  return {
    registration,
    techPassport,
    plates,
    total,
    totalBrv: total / BRV,
  }
}


// Corporate Tax
export interface CorporateTaxResult {
  revenue: number
  expenses: number
  profit: number
  taxRate: number
  taxAmount: number
  netProfit: number
}

export function calculateCorporateTax(revenue: number, expenses: number, taxRate: number = 0.15): CorporateTaxResult {
  const profit = Math.max(0, revenue - expenses)
  const taxAmount = profit * taxRate
  return { revenue, expenses, profit, taxRate: taxRate * 100, taxAmount, netProfit: profit - taxAmount }
}

// Tax Penalty
export interface TaxPenaltyResult {
  debtAmount: number
  daysOverdue: number
  dailyRate: number
  totalPenalty: number
  totalWithDebt: number
}

export function calculateTaxPenalty(debtAmount: number, daysOverdue: number): TaxPenaltyResult {
  const dailyRate = CB_RATE / 300
  const totalPenalty = debtAmount * dailyRate * daysOverdue
  return {
    debtAmount,
    daysOverdue,
    dailyRate: dailyRate * 100,
    totalPenalty,
    totalWithDebt: debtAmount + totalPenalty,
  }
}

// Self-employed tax
export interface SelfEmployedTaxResult {
  revenue: number
  taxRate: number
  taxAmount: number
  netIncome: number
}

export function calculateSelfEmployedTax(revenue: number): SelfEmployedTaxResult {
  const taxRate = 0.01 // 1% from 2026
  const taxAmount = revenue * taxRate
  return { revenue, taxRate: taxRate * 100, taxAmount, netIncome: revenue - taxAmount }
}

// Turnover tax
export function calculateTurnoverTax(revenue: number, rate: number = 0.04): { revenue: number; taxRate: number; taxAmount: number; netRevenue: number } {
  const taxAmount = revenue * rate
  return { revenue, taxRate: rate * 100, taxAmount, netRevenue: revenue - taxAmount }
}

// Land tax — НК гл. 61 (юрлица, ст. 424–432) и гл. 62 (физлица, ст. 433–440).
// Ставки и коэффициенты — lib/constants/tax-rates.ts.
export type LandCategory = 'agricultural' | 'non-agricultural'
export type LandPayer = 'individual' | 'legal'

export interface LandTaxInput {
  category: LandCategory
  payer: LandPayer
  /** Сельхозземли: нормативная стоимость угодий, сум (база — ст. 427, 435). */
  normativeValue?: number
  /** Несельхозземли: площадь участка, кв. м (база — ст. 427, 435). */
  areaM2?: number
  /** Несельхозземли: id из LAND_TAX_ZONES_2026. */
  zoneId?: string
  /** Коэффициент кенгаша; по умолчанию 1 — базовая ставка НК. */
  coefficient?: number
}

/** Сроки уплаты: физлица — ст. 440, юрлица — ст. 432 НК. */
export type LandTaxSchedule =
  /** Физлица и дехканские хозяйства: равными долями до 15 апреля и 15 октября. */
  | { kind: 'individual'; april15: number; october15: number }
  /** Юрлица, сельхозземли: 30% до 1 сентября, остаток до 1 декабря. */
  | { kind: 'legal-agricultural'; september1: number; december1: number }
  /**
   * Юрлица, несельхозземли: плательщики налога с оборота — 1/4 до 20-го числа
   * третьего месяца квартала; остальные — 1/12 до 10-го числа (за январь — до 20 января).
   */
  | { kind: 'legal-non-agricultural'; quarterly: number; monthly: number }

export interface LandTaxResult {
  category: LandCategory
  payer: LandPayer
  /** Сельхозземли: ставка в процентах от нормативной стоимости (0,95). */
  ratePercent?: number
  /** Несельхозземли: выбранная зона и её базовая ставка в пересчёте на 1 кв. м. */
  zone?: LandTaxZone
  baseRatePerM2?: number
  coefficient: number
  coefficientRange: readonly [number, number]
  coefficientInRange: boolean
  annualTax: number
  schedule: LandTaxSchedule
}

export function getLandTaxZone(id: string): LandTaxZone {
  return LAND_TAX_ZONES_2026.find((zone) => zone.id === id) ?? LAND_TAX_ZONES_2026[0]
}

export function calculateLandTax(input: LandTaxInput): LandTaxResult {
  const k = input.coefficient
  const coefficient = k !== undefined && Number.isFinite(k) && k > 0 ? k : 1

  let annualTax: number
  let coefficientRange: readonly [number, number]
  let details: Pick<LandTaxResult, 'ratePercent' | 'zone' | 'baseRatePerM2'>

  if (input.category === 'agricultural') {
    const rate = TAX_RATES.LAND_TAX_AGRICULTURAL
    annualTax = Math.max(0, input.normativeValue ?? 0) * rate * coefficient
    coefficientRange = LAND_TAX_COEFFICIENT_RANGE.agricultural
    details = { ratePercent: rate * 100 }
  } else {
    const zone = getLandTaxZone(input.zoneId ?? '')
    const baseRatePerM2 = input.payer === 'legal' ? zone.legalPerHa / 10_000 : zone.individualPerM2
    annualTax = Math.max(0, input.areaM2 ?? 0) * baseRatePerM2 * coefficient
    coefficientRange = zone.isTashkentCity ? LAND_TAX_COEFFICIENT_RANGE.tashkentCity : LAND_TAX_COEFFICIENT_RANGE.regions
    details = { zone, baseRatePerM2 }
  }

  let schedule: LandTaxSchedule
  if (input.payer === 'individual') {
    schedule = { kind: 'individual', april15: annualTax / 2, october15: annualTax / 2 }
  } else if (input.category === 'agricultural') {
    const september1 = annualTax * 0.3
    schedule = { kind: 'legal-agricultural', september1, december1: annualTax - september1 }
  } else {
    schedule = { kind: 'legal-non-agricultural', quarterly: annualTax / 4, monthly: annualTax / 12 }
  }

  const eps = 1e-9
  return {
    category: input.category,
    payer: input.payer,
    ...details,
    coefficient,
    coefficientRange,
    coefficientInRange: coefficient >= coefficientRange[0] - eps && coefficient <= coefficientRange[1] + eps,
    annualTax,
    schedule,
  }
}
