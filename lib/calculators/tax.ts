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
  quarterlyTax: number
  monthlyTax: number
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
    quarterlyTax: annualTax / 4,
    monthlyTax: annualTax / 12,
  }
}

// Vehicle Tax
export interface VehicleTaxResult {
  engineVolume: number
  vehicleAge: number
  baseTax: number
  ageFactor: number
  annualTax: number
}

export function calculateVehicleTax(engineVolumeCc: number, yearOfManufacture: number): VehicleTaxResult {
  const currentYear = new Date().getFullYear()
  const vehicleAge = currentYear - yearOfManufacture

  // Passenger car rates per НК ст. 446 (2026), expressed in BRV per year:
  //   ≤1500 cc → 1.5 BRV
  //   1500–2000 cc → 3 BRV
  //   2000–3000 cc → 5 BRV
  //   >3000 cc → 7.5 BRV
  let brvMultiplier: number
  if (engineVolumeCc <= 1500) brvMultiplier = 1.5
  else if (engineVolumeCc <= 2000) brvMultiplier = 3
  else if (engineVolumeCc <= 3000) brvMultiplier = 5
  else brvMultiplier = 7.5

  const baseTax = brvMultiplier * BRV

  // Note: НК Узбекистана does not prescribe a vehicle-age multiplier for the
  // base annual transport tax (the rate depends only on engine volume).
  // ageFactor is kept at 1.0 and exposed in the result for UI compatibility.
  const ageFactor = 1.0
  const annualTax = baseTax * ageFactor

  return {
    engineVolume: engineVolumeCc,
    vehicleAge,
    baseTax,
    ageFactor,
    annualTax,
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
