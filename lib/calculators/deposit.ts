/**
 * Deposit calculator for Uzbekistan
 * Supports simple interest, compound interest with various capitalization periods
 */

export type CapitalizationType = 'none' | 'monthly' | 'quarterly' | 'annually'

export interface DepositInput {
  initialAmount: number
  annualRate: number
  termMonths: number
  capitalization: CapitalizationType
  monthlyTopUp?: number
  taxRate?: number
}

export interface DepositMonthlyData {
  month: number
  balance: number
  interest: number
  totalInterest: number
}

export interface DepositResult {
  initialAmount: number
  finalAmount: number
  totalInterest: number
  effectiveRate: number
  taxAmount: number
  netInterest: number
  monthlyData: DepositMonthlyData[]
}

export function calculateDeposit(input: DepositInput): DepositResult {
  const { initialAmount, annualRate, termMonths, capitalization, monthlyTopUp = 0, taxRate = 0 } = input
  const monthlyRate = annualRate / 100 / 12
  const monthlyData: DepositMonthlyData[] = []
  let balance = initialAmount
  let totalInterest = 0
  let accumulatedInterest = 0

  for (let month = 1; month <= termMonths; month++) {
    const interest = balance * monthlyRate
    accumulatedInterest += interest
    totalInterest += interest

    let shouldCapitalize = false
    if (capitalization === 'monthly') shouldCapitalize = true
    else if (capitalization === 'quarterly') shouldCapitalize = month % 3 === 0
    else if (capitalization === 'annually') shouldCapitalize = month % 12 === 0

    if (shouldCapitalize) {
      balance += accumulatedInterest
      accumulatedInterest = 0
    }

    balance += monthlyTopUp

    monthlyData.push({
      month,
      balance: capitalization === 'none' ? balance : balance,
      interest,
      totalInterest,
    })
  }

  if (capitalization === 'none') {
    balance = initialAmount + monthlyTopUp * termMonths
  }

  const finalAmount = balance + accumulatedInterest
  const taxAmount = totalInterest * taxRate
  const netInterest = totalInterest - taxAmount
  const totalInvested = initialAmount + monthlyTopUp * termMonths
  // Time-weighted average investment for effective rate calculation
  // Each top-up is invested for a decreasing number of months
  const weightedInvestment = monthlyTopUp > 0
    ? initialAmount * termMonths + monthlyTopUp * termMonths * (termMonths + 1) / 2
    : initialAmount * termMonths
  const effectiveRate = weightedInvestment > 0
    ? (totalInterest / weightedInvestment) * 12 * 100
    : 0

  return {
    initialAmount,
    finalAmount,
    totalInterest,
    effectiveRate,
    taxAmount,
    netInterest,
    monthlyData,
  }
}
