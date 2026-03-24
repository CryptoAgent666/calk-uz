/**
 * Business calculators: IP/LLC tax, margin, break-even, ROI, employer cost
 */

// IP (Individual Entrepreneur) Calculator
export interface IPTaxResult {
  revenue: number
  regime: 'turnover' | 'self_employed' | 'general'
  taxRate: number
  taxAmount: number
  socialTax: number
  inps: number
  totalTaxBurden: number
  netIncome: number
  effectiveTaxRate: number
}

export function calculateIPTax(
  annualRevenue: number,
  regime: 'turnover' | 'self_employed' | 'general' = 'turnover'
): IPTaxResult {
  let taxRate: number
  let taxAmount: number

  if (regime === 'self_employed') {
    taxRate = 0.01 // 1% from 2026
    taxAmount = annualRevenue * taxRate
  } else if (regime === 'turnover') {
    taxRate = 0.04 // 4%
    taxAmount = annualRevenue * taxRate
  } else {
    taxRate = 0.12 // General regime - NDFL
    taxAmount = annualRevenue * taxRate
  }

  // Social contributions for IP (fixed amount based on BRV)
  const BRV = 412_000
  const socialTax = BRV * 12 // Monthly BRV × 12 months (simplified)
  const inps = annualRevenue * 0.001

  const totalTaxBurden = taxAmount + socialTax + inps
  const netIncome = annualRevenue - totalTaxBurden
  const effectiveTaxRate = annualRevenue > 0 ? (totalTaxBurden / annualRevenue) * 100 : 0

  return {
    revenue: annualRevenue,
    regime,
    taxRate: taxRate * 100,
    taxAmount,
    socialTax,
    inps,
    totalTaxBurden,
    netIncome,
    effectiveTaxRate,
  }
}

// LLC (OOO/MChJ) Tax Calculator
export interface LLCTaxResult {
  revenue: number
  expenses: number
  profit: number
  corporateTax: number
  vatAmount: number
  socialTaxOnPayroll: number
  totalTaxBurden: number
  netProfit: number
}

export function calculateLLCTax(
  revenue: number,
  expenses: number,
  payroll: number,
  isVatPayer: boolean = true
): LLCTaxResult {
  const profit = Math.max(0, revenue - expenses)

  const corporateTax = profit * 0.15
  const vatAmount = isVatPayer ? revenue * 0.12 : 0
  const socialTaxOnPayroll = payroll * 0.12

  const totalTaxBurden = corporateTax + socialTaxOnPayroll
  const netProfit = profit - corporateTax

  return {
    revenue,
    expenses,
    profit,
    corporateTax,
    vatAmount,
    socialTaxOnPayroll,
    totalTaxBurden,
    netProfit,
  }
}

// Margin Calculator
export interface MarginResult {
  costPrice: number
  sellingPrice: number
  markup: number
  markupPercent: number
  margin: number
  marginPercent: number
  profit: number
}

export function calculateMargin(costPrice: number, sellingPrice: number): MarginResult {
  const profit = sellingPrice - costPrice
  const markup = profit
  const markupPercent = costPrice > 0 ? (profit / costPrice) * 100 : 0
  const margin = profit
  const marginPercent = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0

  return { costPrice, sellingPrice, markup, markupPercent, margin, marginPercent, profit }
}

export function calculateFromMarkup(costPrice: number, markupPercent: number): MarginResult {
  const sellingPrice = costPrice * (1 + markupPercent / 100)
  return calculateMargin(costPrice, sellingPrice)
}

export function calculateFromMargin(costPrice: number, marginPercent: number): MarginResult {
  const sellingPrice = costPrice / (1 - marginPercent / 100)
  return calculateMargin(costPrice, sellingPrice)
}

// Break-even Calculator
export interface BreakEvenResult {
  fixedCosts: number
  variableCostPerUnit: number
  pricePerUnit: number
  breakEvenUnits: number
  breakEvenRevenue: number
  contributionMargin: number
  contributionMarginRatio: number
}

export function calculateBreakEven(
  fixedCosts: number,
  variableCostPerUnit: number,
  pricePerUnit: number
): BreakEvenResult {
  const contributionMargin = pricePerUnit - variableCostPerUnit
  const contributionMarginRatio = pricePerUnit > 0 ? contributionMargin / pricePerUnit : 0
  const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : Infinity
  const breakEvenRevenue = breakEvenUnits * pricePerUnit

  return {
    fixedCosts,
    variableCostPerUnit,
    pricePerUnit,
    breakEvenUnits: breakEvenUnits === Infinity ? 0 : breakEvenUnits,
    breakEvenRevenue: breakEvenUnits === Infinity ? 0 : breakEvenRevenue,
    contributionMargin,
    contributionMarginRatio,
  }
}

// ROI Calculator
export interface ROIResult {
  investment: number
  returns: number
  netProfit: number
  roi: number
  paybackMonths: number
}

export function calculateROI(
  investment: number,
  monthlyReturns: number,
  periodMonths: number
): ROIResult {
  const totalReturns = monthlyReturns * periodMonths
  const netProfit = totalReturns - investment
  const roi = investment > 0 ? (netProfit / investment) * 100 : 0
  const paybackMonths = monthlyReturns > 0 ? Math.ceil(investment / monthlyReturns) : 0

  return { investment, returns: totalReturns, netProfit, roi, paybackMonths }
}

// Employer Cost Calculator
export interface EmployerCostResult {
  grossSalary: number
  socialTax: number
  inps: number
  totalCost: number
  netSalary: number
  employerOverhead: number
  overheadPercent: number
}

export function calculateEmployerCost(grossSalary: number, isBudgetOrg: boolean = false): EmployerCostResult {
  const socialTaxRate = isBudgetOrg ? 0.25 : 0.12
  const socialTax = grossSalary * socialTaxRate
  const inps = grossSalary * 0.001

  const ndfl = grossSalary * 0.12
  const ndflToBudget = ndfl - inps
  const netSalary = grossSalary - ndflToBudget - inps

  const totalCost = grossSalary + socialTax
  const employerOverhead = totalCost - netSalary
  const overheadPercent = netSalary > 0 ? (employerOverhead / netSalary) * 100 : 0

  return {
    grossSalary,
    socialTax,
    inps,
    totalCost,
    netSalary,
    employerOverhead,
    overheadPercent,
  }
}
