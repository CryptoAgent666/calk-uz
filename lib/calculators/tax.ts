/**
 * Tax calculators for Uzbekistan
 * Income tax, property tax, land tax, vehicle tax, corporate tax, penalty
 */

import { BRV, CB_RATE } from '@/lib/constants/brv'

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
  let taxRate: number
  if (isLegalEntity) {
    taxRate = 0.015
  } else if (areaM2 <= 100) {
    taxRate = 0.0034
  } else if (areaM2 <= 200) {
    taxRate = 0.0045
  } else {
    taxRate = 0.006
  }

  // Indexed +7% from 2026
  const indexedRate = taxRate * 1.07
  const annualTax = cadastralValue * indexedRate

  return {
    cadastralValue,
    area: areaM2,
    taxRate: indexedRate * 100,
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

  // Tax in BRV based on engine volume
  let brvMultiplier: number
  if (engineVolumeCc <= 1500) brvMultiplier = 1
  else if (engineVolumeCc <= 2000) brvMultiplier = 2
  else if (engineVolumeCc <= 2500) brvMultiplier = 3
  else if (engineVolumeCc <= 3000) brvMultiplier = 5
  else if (engineVolumeCc <= 4000) brvMultiplier = 7
  else brvMultiplier = 10

  const baseTax = brvMultiplier * BRV

  // Age factor (decreasing with age)
  let ageFactor = 1.0
  if (vehicleAge > 10) ageFactor = 0.5
  else if (vehicleAge > 7) ageFactor = 0.6
  else if (vehicleAge > 5) ageFactor = 0.7
  else if (vehicleAge > 3) ageFactor = 0.8

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
