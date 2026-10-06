/**
 * Credit/Loan calculator for Uzbekistan
 * Supports annuity and differentiated payment schedules
 */

export interface CreditInput {
  amount: number
  annualRate: number
  termMonths: number
  type: 'annuity' | 'differentiated'
}

export interface PaymentScheduleItem {
  month: number
  payment: number
  principal: number
  interest: number
  remainingBalance: number
}

export interface CreditResult {
  monthlyPayment: number
  firstPayment: number
  lastPayment: number
  totalPayment: number
  totalInterest: number
  overpaymentPercent: number
  schedule: PaymentScheduleItem[]
}

export function calculateCredit(input: CreditInput): CreditResult {
  const { amount, annualRate, termMonths, type } = input
  const monthlyRate = annualRate / 100 / 12

  if (type === 'annuity') {
    return calculateAnnuity(amount, monthlyRate, termMonths)
  }
  return calculateDifferentiated(amount, monthlyRate, termMonths)
}

function calculateAnnuity(amount: number, monthlyRate: number, termMonths: number): CreditResult {
  let monthlyPayment: number
  if (monthlyRate === 0) {
    monthlyPayment = amount / termMonths
  } else {
    monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1)
  }

  const schedule: PaymentScheduleItem[] = []
  let remainingBalance = amount
  let totalPayment = 0

  for (let month = 1; month <= termMonths; month++) {
    const interest = remainingBalance * monthlyRate
    const principal = monthlyPayment - interest
    remainingBalance = Math.max(0, remainingBalance - principal)

    schedule.push({
      month,
      payment: monthlyPayment,
      principal,
      interest,
      remainingBalance,
    })
    totalPayment += monthlyPayment
  }

  const totalInterest = totalPayment - amount

  return {
    monthlyPayment,
    firstPayment: monthlyPayment,
    lastPayment: monthlyPayment,
    totalPayment,
    totalInterest,
    overpaymentPercent: amount > 0 ? (totalInterest / amount) * 100 : 0,
    schedule,
  }
}

function calculateDifferentiated(amount: number, monthlyRate: number, termMonths: number): CreditResult {
  const principalPayment = amount / termMonths
  const schedule: PaymentScheduleItem[] = []
  let remainingBalance = amount
  let totalPayment = 0

  for (let month = 1; month <= termMonths; month++) {
    const interest = remainingBalance * monthlyRate
    const payment = principalPayment + interest
    remainingBalance = Math.max(0, remainingBalance - principalPayment)

    schedule.push({
      month,
      payment,
      principal: principalPayment,
      interest,
      remainingBalance,
    })
    totalPayment += payment
  }

  const totalInterest = totalPayment - amount

  return {
    monthlyPayment: schedule[0]?.payment ?? 0,
    firstPayment: schedule[0]?.payment ?? 0,
    lastPayment: schedule[schedule.length - 1]?.payment ?? 0,
    totalPayment,
    totalInterest,
    overpaymentPercent: amount > 0 ? (totalInterest / amount) * 100 : 0,
    schedule,
  }
}

export function calculateEarlyRepayment(
  originalAmount: number,
  annualRate: number,
  termMonths: number,
  earlyPaymentMonth: number,
  earlyPaymentAmount: number,
  reduceType: 'term' | 'payment'
): { savedInterest: number; newTermMonths: number; newMonthlyPayment: number } {
  const monthlyRate = annualRate / 100 / 12
  const originalResult = calculateAnnuity(originalAmount, monthlyRate, termMonths)

  let remainingBalance = originalAmount
  for (let m = 1; m < earlyPaymentMonth; m++) {
    const interest = remainingBalance * monthlyRate
    const principal = originalResult.monthlyPayment - interest
    remainingBalance -= principal
  }

  remainingBalance -= earlyPaymentAmount
  if (remainingBalance <= 0) {
    return { savedInterest: originalResult.totalInterest, newTermMonths: earlyPaymentMonth, newMonthlyPayment: 0 }
  }

  if (reduceType === 'term') {
    const newResult = calculateAnnuity(remainingBalance, monthlyRate, termMonths - earlyPaymentMonth)
    let actualTerm = 0
    let bal = remainingBalance
    while (bal > 0 && actualTerm < termMonths) {
      const interest = bal * monthlyRate
      const principal = originalResult.monthlyPayment - interest
      if (principal <= 0) break
      bal -= principal
      actualTerm++
    }
    const newTotalPayment = (earlyPaymentMonth - 1) * originalResult.monthlyPayment + earlyPaymentAmount + actualTerm * originalResult.monthlyPayment
    const savedInterest = originalResult.totalPayment - newTotalPayment
    return { savedInterest: Math.max(0, savedInterest), newTermMonths: earlyPaymentMonth + actualTerm, newMonthlyPayment: originalResult.monthlyPayment }
  } else {
    const remainingMonths = termMonths - earlyPaymentMonth
    const newResult = calculateAnnuity(remainingBalance, monthlyRate, remainingMonths)
    const savedInterest = originalResult.totalInterest - (
      (earlyPaymentMonth - 1) * originalResult.monthlyPayment - (originalAmount - remainingBalance - earlyPaymentAmount) +
      newResult.totalInterest
    )
    return { savedInterest: Math.max(0, savedInterest), newTermMonths: termMonths, newMonthlyPayment: newResult.monthlyPayment }
  }
}
