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
export interface SickLeaveResult {
  averageDailyEarnings: number
  sickDays: number
  experiencePercent: number
  grossAmount: number
  ndflAmount: number
  netAmount: number
}

export function calculateSickLeave(
  totalEarnings12Months: number,
  sickDays: number,
  yearsOfExperience: number,
  workingDaysIn12Months: number = 247
): SickLeaveResult {
  let experiencePercent: number
  if (yearsOfExperience >= 8) experiencePercent = 100
  else if (yearsOfExperience >= 5) experiencePercent = 80
  else experiencePercent = 60

  const averageDailyEarnings = totalEarnings12Months / workingDaysIn12Months
  const grossAmount = averageDailyEarnings * sickDays * (experiencePercent / 100)
  const ndflAmount = grossAmount * 0.12

  return {
    averageDailyEarnings,
    sickDays,
    experiencePercent,
    grossAmount,
    ndflAmount,
    netAmount: grossAmount - ndflAmount,
  }
}

// Maternity benefits
export interface MaternityResult {
  averageDailyEarnings: number
  totalDays: number
  grossBenefit: number
  ndflAmount: number
  netBenefit: number
  prebirthDays: number
  postbirthDays: number
}

export function calculateMaternity(
  totalEarnings12Months: number,
  isComplicatedBirth: boolean = false,
  isMultipleBirth: boolean = false,
  calendarDaysIn12Months: number = 365
): MaternityResult {
  const averageDailyEarnings = totalEarnings12Months / calendarDaysIn12Months
  const prebirthDays = 70
  let postbirthDays = 56
  if (isComplicatedBirth) postbirthDays = 70
  if (isMultipleBirth) postbirthDays = 70

  const totalDays = prebirthDays + postbirthDays
  const grossBenefit = averageDailyEarnings * totalDays
  const ndflAmount = 0 // Maternity benefits are tax-exempt

  return {
    averageDailyEarnings,
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
  const retirementAge = isMale ? 60 : 57
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
