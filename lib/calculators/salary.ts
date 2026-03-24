/**
 * Salary calculator for Uzbekistan
 * NDFL: 12% (7.5% for IT Park)
 * INPS: 0.1% (deducted from NDFL, not additional)
 * Social tax: 12% employer (25% for budget orgs)
 */

export interface SalaryInput {
  grossSalary: number
  isITPark?: boolean
  isBudgetOrg?: boolean
  isUnder30Service?: boolean
}

export interface SalaryResult {
  grossSalary: number
  ndflRate: number
  ndflAmount: number
  inpsAmount: number
  ndflToBudget: number
  netSalary: number
  socialTaxRate: number
  socialTaxAmount: number
  totalEmployerCost: number
  effectiveRate: number
}

export function calculateSalaryGrossToNet(input: SalaryInput): SalaryResult {
  const { grossSalary, isITPark = false, isBudgetOrg = false } = input

  const ndflRate = isITPark ? 0.075 : 0.12
  const socialTaxRate = isBudgetOrg ? 0.25 : 0.12

  const ndflAmount = grossSalary * ndflRate
  const inpsAmount = grossSalary * 0.001
  const ndflToBudget = ndflAmount - inpsAmount
  const netSalary = grossSalary - ndflToBudget - inpsAmount
  const socialTaxAmount = grossSalary * socialTaxRate
  const totalEmployerCost = grossSalary + socialTaxAmount
  const effectiveRate = grossSalary > 0 ? ((grossSalary - netSalary) / grossSalary) * 100 : 0

  return {
    grossSalary,
    ndflRate: ndflRate * 100,
    ndflAmount,
    inpsAmount,
    ndflToBudget,
    netSalary,
    socialTaxRate: socialTaxRate * 100,
    socialTaxAmount,
    totalEmployerCost,
    effectiveRate,
  }
}

export function calculateSalaryNetToGross(netSalary: number, isITPark: boolean = false): SalaryResult {
  const ndflRate = isITPark ? 0.075 : 0.12
  // net = gross - (gross * ndflRate - gross * 0.001) - gross * 0.001
  // net = gross * (1 - ndflRate)
  const grossSalary = netSalary / (1 - ndflRate)

  return calculateSalaryGrossToNet({ grossSalary, isITPark })
}
