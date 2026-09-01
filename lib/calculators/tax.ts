/**
 * Tax calculators for Uzbekistan
 * Income tax, property tax, land tax, vehicle tax, corporate tax, penalty
 */

import { BRV, CB_RATE } from '@/lib/constants/brv'
import { TAX_RATES } from '@/lib/constants/tax-rates'

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

export function calculatePropertyTax(cadastralValue: number, areaM2: number, isLegalEntity: boolean = false): PropertyTaxResult {
  // 2026 residential rates (already indexed). Bands: <=200 / 200-500 / >500 m2.
  // Legal-entity rate is flat 1.5% (NOT indexed).
  let taxRate: number
  if (isLegalEntity) {
    taxRate = TAX_RATES.PROPERTY_TAX_LEGAL
  } else if (areaM2 <= 200) {
    taxRate = TAX_RATES.PROPERTY_TAX_RESIDENTIAL_SMALL
  } else if (areaM2 <= 500) {
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

// Land tax
export function calculateLandTax(normativeValue: number, isAgricultural: boolean = true): { value: number; taxRate: number; annualTax: number } {
  const taxRate = isAgricultural ? 0.0095 : 0.012
  const indexed = taxRate * 1.07 // +7% indexation from 2026
  return { value: normativeValue, taxRate: indexed * 100, annualTax: normativeValue * indexed }
}
