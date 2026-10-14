/**
 * Salary calculator for Uzbekistan
 * NDFL: 12% (7.5% for IT Park) — исчисляется от облагаемого дохода.
 * INPS: 0,1% — НЕ отдельное удержание сверх НДФЛ, а ЧАСТЬ его: исчисленный
 *   налог уменьшается на сумму взноса, и в бюджет уходит остаток
 *   (НК ст. 385; ПП-4086 от 26.12.2018 п. 5 — «сумма НДФЛ… подлежащая уплате
 *   в Государственный бюджет… уменьшается на сумму обязательных ежемесячных
 *   взносов… в размере 0,1 процента»; Закон № 702-II ст. 10).
 * Итого с работника удерживается 12,0% (IT Park — 7,5%), на руки 88,0% (92,5%).
 *   Из 12%: 11,9% в бюджет + 0,1% на ИНПС.
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

  // ИНПС входит В НДФЛ, а не добавляется к нему: на руки = gross − НДФЛ.
  // ndflAmount — весь исчисленный налог; inpsAmount — та его часть, что уходит
  // на накопительный счёт работника, а не в бюджет.
  const ndflAmount = grossSalary * ndflRate
  const inpsAmount = grossSalary * 0.001
  const netSalary = grossSalary - ndflAmount
  const socialTaxAmount = grossSalary * socialTaxRate
  const totalEmployerCost = grossSalary + socialTaxAmount
  const effectiveRate = grossSalary > 0 ? ((grossSalary - netSalary) / grossSalary) * 100 : 0

  return {
    grossSalary,
    ndflRate: ndflRate * 100,
    ndflAmount,
    inpsAmount,
    netSalary,
    socialTaxRate: socialTaxRate * 100,
    socialTaxAmount,
    totalEmployerCost,
    effectiveRate,
  }
}

export function calculateSalaryNetToGross(netSalary: number, isITPark: boolean = false): SalaryResult {
  const ndflRate = isITPark ? 0.075 : 0.12
  // net = gross − gross * ndflRate  (ИНПС сидит внутри ndflRate)
  // net = gross * (1 − ndflRate)
  const grossSalary = netSalary / (1 - ndflRate)

  return calculateSalaryGrossToNet({ grossSalary, isITPark })
}
