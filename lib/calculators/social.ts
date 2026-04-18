/**
 * Social calculators: alimony, vacation pay, sick leave, maternity, severance, overtime, pension
 */

// Alimony
export interface AlimonyResult {
  income: number
  childrenCount: number
  alimonyRate: number
  alimonyAmount: number
  remainingIncome: number
}

export function calculateAlimony(monthlyIncome: number, childrenCount: number): AlimonyResult {
  let alimonyRate: number
  if (childrenCount === 1) alimonyRate = 0.25
  else if (childrenCount === 2) alimonyRate = 0.33
  else alimonyRate = 0.50

  const alimonyAmount = monthlyIncome * alimonyRate
  return {
    income: monthlyIncome,
    childrenCount,
    alimonyRate: alimonyRate * 100,
    alimonyAmount,
    remainingIncome: monthlyIncome - alimonyAmount,
  }
}

// Vacation pay
export interface VacationPayResult {
  averageDailyEarnings: number
  vacationDays: number
  vacationPay: number
  ndflAmount: number
  netVacationPay: number
}

export function calculateVacationPay(
  totalEarnings12Months: number,
  vacationDays: number,
  workingDaysIn12Months: number = 247
): VacationPayResult {
  const averageDailyEarnings = totalEarnings12Months / workingDaysIn12Months
  const vacationPay = averageDailyEarnings * vacationDays
  const ndflAmount = vacationPay * 0.12
  return {
    averageDailyEarnings,
    vacationDays,
    vacationPay,
    ndflAmount,
    netVacationPay: vacationPay - ndflAmount,
  }
}

// Sick leave
// 2026 RULES (PKM #796 from 17.12.2025):
// Benefits are paid by the State Social Insurance Fund (ФГСС).
// Minimum 6 months of insurance experience required.
// Percentage of average earnings depends on insurance experience (months).
export interface SickLeaveResult {
  averageDailyEarnings: number
  sickDays: number
  insuranceMonths: number
  experiencePercent: number
  isEligible: boolean
  grossAmount: number
  ndflAmount: number
  netAmount: number
}

export function getSickLeavePercent(insuranceMonths: number): number {
  if (insuranceMonths < 6) return 0        // not eligible
  if (insuranceMonths < 24) return 60      // 6-23 months
  if (insuranceMonths < 60) return 70      // 2-5 years
  if (insuranceMonths < 96) return 80      // 5-8 years
  return 100                               // 8+ years
}

export function calculateSickLeave(
  totalEarnings12Months: number,
  sickDays: number,
  insuranceMonths: number,
  calendarDaysIn12Months: number = 365
): SickLeaveResult {
  const experiencePercent = getSickLeavePercent(insuranceMonths)
  const isEligible = experiencePercent > 0
  // 2026: payments are calendar-day based, funded by ФГСС
  const averageDailyEarnings = totalEarnings12Months / calendarDaysIn12Months
  const grossAmount = isEligible
    ? averageDailyEarnings * sickDays * (experiencePercent / 100)
    : 0
  const ndflAmount = grossAmount * 0.12

  return {
    averageDailyEarnings,
    sickDays,
    insuranceMonths,
    experiencePercent,
    isEligible,
    grossAmount,
    ndflAmount,
    netAmount: grossAmount - ndflAmount,
  }
}

// Maternity benefits
// 2026 RULES (PKM #796 from 17.12.2025):
// Benefits are paid by ФГСС. Minimum 10 months of insurance experience required.
// Benefit percentage depends on insurance experience.
export interface MaternityResult {
  averageDailyEarnings: number
  insuranceMonths: number
  benefitPercent: number
  isEligible: boolean
  totalDays: number
  grossBenefit: number
  ndflAmount: number
  netBenefit: number
  prebirthDays: number
  postbirthDays: number
}

export function getMaternityPercent(insuranceMonths: number): number {
  if (insuranceMonths < 10) return 0       // not eligible
  if (insuranceMonths < 24) return 75      // 10-23 months
  if (insuranceMonths < 60) return 85      // 2-5 years
  return 100                               // 5+ years
}

export function calculateMaternity(
  totalEarnings12Months: number,
  insuranceMonths: number = 24,
  isComplicatedBirth: boolean = false,
  isMultipleBirth: boolean = false,
  calendarDaysIn12Months: number = 365
): MaternityResult {
  const benefitPercent = getMaternityPercent(insuranceMonths)
  const isEligible = benefitPercent > 0
  const averageDailyEarnings = totalEarnings12Months / calendarDaysIn12Months
  const prebirthDays = 70
  let postbirthDays = 56
  if (isComplicatedBirth) postbirthDays = 70
  if (isMultipleBirth) postbirthDays = 70

  const totalDays = prebirthDays + postbirthDays
  const grossBenefit = isEligible
    ? averageDailyEarnings * totalDays * (benefitPercent / 100)
    : 0
  const ndflAmount = 0 // Maternity benefits are tax-exempt

  return {
    averageDailyEarnings,
    insuranceMonths,
    benefitPercent,
    isEligible,
    totalDays,
    grossBenefit,
    ndflAmount,
    netBenefit: grossBenefit,
    prebirthDays,
    postbirthDays,
  }
}

// Severance pay
export interface SeveranceResult {
  averageMonthlyEarnings: number
  severanceMonths: number
  severancePay: number
  unusedVacationDays: number
  vacationCompensation: number
  totalPayout: number
}

export function calculateSeverance(
  averageMonthlyEarnings: number,
  severanceMonths: number,
  unusedVacationDays: number
): SeveranceResult {
  const severancePay = averageMonthlyEarnings * severanceMonths
  const dailyRate = averageMonthlyEarnings / 21 // average working days per month
  const vacationCompensation = dailyRate * unusedVacationDays

  return {
    averageMonthlyEarnings,
    severanceMonths,
    severancePay,
    unusedVacationDays,
    vacationCompensation,
    totalPayout: severancePay + vacationCompensation,
  }
}

// Overtime
export interface OvertimeResult {
  hourlyRate: number
  overtimeHours: number
  overtimeMultiplier: number
  overtimePay: number
}

export function calculateOvertime(
  monthlyeSalary: number,
  overtimeHours: number,
  isHoliday: boolean = false,
  workingHoursPerMonth: number = 168
): OvertimeResult {
  const hourlyRate = monthlyeSalary / workingHoursPerMonth
  let overtimePay: number
  let overtimeMultiplier: number
  if (isHoliday) {
    overtimeMultiplier = 2.0
    overtimePay = hourlyRate * 2.0 * overtimeHours
  } else {
    overtimeMultiplier = 1.5 // average shown in UI
    const first2h = Math.min(overtimeHours, 2)
    const rest = Math.max(0, overtimeHours - 2)
    overtimePay = hourlyRate * (first2h * 1.5 + rest * 2.0)
  }

  return { hourlyRate, overtimeHours, overtimeMultiplier, overtimePay }
}

// Pension estimate
export interface PensionResult {
  currentAge: number
  retirementAge: number
  yearsToRetirement: number
  estimatedMonthlyPension: number
  pensionAsPercentOfSalary: number
}

export function calculatePension(
  currentAge: number,
  isMale: boolean,
  averageMonthlySalary: number,
  yearsOfService: number
): PensionResult {
  // Statutory retirement age in Uzbekistan:
  // Men — 60 (25 years of service required)
  // Women — 55 (20 years of service required); 54 with full 20-year record
  const retirementAge = isMale ? 60 : 55
  const yearsToRetirement = Math.max(0, retirementAge - currentAge)

  // Simplified pension calculation for UZ
  // Base: 55% of average salary for 25 years (men) / 20 years (women) of service
  // +1% for each additional year
  const requiredYears = isMale ? 25 : 20
  const basePercent = 55
  const additionalYears = Math.max(0, yearsOfService - requiredYears)
  const pensionPercent = Math.min(75, basePercent + additionalYears)

  const estimatedMonthlyPension = averageMonthlySalary * (pensionPercent / 100)

  return {
    currentAge,
    retirementAge,
    yearsToRetirement,
    estimatedMonthlyPension,
    pensionAsPercentOfSalary: pensionPercent,
  }
}
