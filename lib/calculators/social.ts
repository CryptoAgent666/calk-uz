/**
 * Social calculators: alimony, vacation pay, sick leave, maternity, severance, overtime, pension
 */

import { MIN_WAGE } from '@/lib/constants/brv'
import { holidaysOfYear, mayBeUnannouncedHoliday } from '@/lib/constants/holidays'

/** Минимальный размер алиментов — 26,5% МРОТ на каждого ребёнка. */
export const ALIMONY_MIN_SHARE_OF_MIN_WAGE = 0.265

// Alimony
export interface AlimonyResult {
  income: number
  childrenCount: number
  alimonyRate: number
  alimonyAmount: number
  remainingIncome: number
  /** 26,5% МРОТ на каждого ребёнка — ниже этой суммы алименты не назначаются. */
  statutoryMinimum: number
  /** Доля от дохода оказалась ниже минимума, начислен минимум. */
  minimumApplied: boolean
}

export function calculateAlimony(monthlyIncome: number, childrenCount: number): AlimonyResult {
  // Ст. 99 СК: 1/4 на одного ребёнка, 1/3 на двух, 1/2 на трёх и более.
  // Именно 1/3, а не 0,33 — округление занижало алименты на двоих детей.
  let alimonyRate: number
  if (childrenCount === 1) alimonyRate = 0.25
  else if (childrenCount === 2) alimonyRate = 1 / 3
  else alimonyRate = 0.50

  // Доля от дохода не может быть ниже 26,5% МРОТ на каждого ребёнка:
  // при низком доходе суд назначает этот минимум, а не долю.
  const statutoryMinimum = ALIMONY_MIN_SHARE_OF_MIN_WAGE * MIN_WAGE * childrenCount
  const shareOfIncome = monthlyIncome * alimonyRate
  const minimumApplied = shareOfIncome < statutoryMinimum
  const alimonyAmount = minimumApplied ? statutoryMinimum : shareOfIncome

  return {
    income: monthlyIncome,
    childrenCount,
    alimonyRate: alimonyRate * 100,
    alimonyAmount,
    remainingIncome: monthlyIncome - alimonyAmount,
    statutoryMinimum,
    minimumApplied,
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

// ─────────────────────────────────────────────────────────────────────────────
// Пособия по временной нетрудоспособности и по беременности и родам.
//
// ПКМ № 796 от 17.12.2025, приложение № 4 (ред. 13.08.2026, lex.uz/docs/7926684):
//   п. 16: Пособие = ЎОИҲ ÷ 25,3 × СК × КС, где ЎОИҲ — среднемесячный заработок,
//          25,3 — среднемесячное число рабочих дней, СК — стажевый коэффициент,
//          КС — число оплачиваемых дней периода нетрудоспособности;
//   п. 17: воскресенья и нерабочие праздничные дни (ст. 208 ТК) в периоде при
//          расчёте не учитываются — суббота оплачивается;
//   п. 25: пособие по беременности и родам считается с учётом п. 17;
//   п. 26: среднемесячный заработок = заработок за 12 месяцев страхового стажа
//          перед месяцем назначения ÷ 12 (стаж меньше 12 мес. — ÷ число месяцев
//          стажа); у застрахованных в обязательном порядке учитывается часть не
//          выше 10 МРОТ, действующих на дату назначения.
//
// Раньше калькуляторы делили заработок за 12 месяцев на 365 и умножали на все
// календарные дни — это другой метод, не из постановления.
// ─────────────────────────────────────────────────────────────────────────────

/** Среднемесячное число рабочих дней — делитель из п. 16 прил. 4 ПКМ-796. */
export const BENEFIT_WORKING_DAYS_PER_MONTH = 25.3

/** Потолок учитываемого среднемесячного заработка — 10 МРОТ (п. 26 прил. 4 ПКМ-796). */
export const BENEFIT_EARNINGS_CAP_MIN_WAGES = 10

const DAY_MS = 86_400_000

/** «YYYY-MM-DD» → полночь UTC в мс; null, если дата некорректна. */
export function parseIsoDateUtc(iso: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return null
  const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3])
  const t = Date.UTC(y, mo - 1, d)
  const check = new Date(t)
  if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) return null
  return t
}

function toIso(t: number): string {
  return new Date(t).toISOString().slice(0, 10)
}

export interface BenefitEarnings {
  /** Среднемесячный заработок по введённым данным. */
  averageMonthlyEarnings: number
  /** Сколько месяцев в делителе: 12 или меньше, если стаж короче. */
  monthsCounted: number
  /** Потолок 10 МРОТ. */
  earningsCap: number
  /** Среднемесячный заработок выше 10 МРОТ — в расчёт взят потолок. */
  earningsCapApplied: boolean
  /** Учитываемый среднемесячный заработок (не выше потолка). */
  countedMonthlyEarnings: number
  /** Учитываемый среднемесячный ÷ 25,3. */
  averageDailyEarnings: number
}

/**
 * Среднемесячный и среднедневной заработок для пособий (п. 16, 26 прил. 4 ПКМ-796).
 * totalEarnings — заработок за последние 12 месяцев стажа, а если стаж короче —
 * за имеющиеся месяцы: делится на min(12, стаж в месяцах).
 * МРОТ берётся текущий (MIN_WAGE); норма говорит о МРОТ на дату назначения.
 */
export function calculateBenefitEarnings(totalEarnings: number, insuranceMonths: number): BenefitEarnings {
  const monthsCounted = Math.min(12, Math.max(1, Math.floor(insuranceMonths)))
  const averageMonthlyEarnings = totalEarnings / monthsCounted
  const earningsCap = BENEFIT_EARNINGS_CAP_MIN_WAGES * MIN_WAGE
  const earningsCapApplied = averageMonthlyEarnings > earningsCap
  const countedMonthlyEarnings = earningsCapApplied ? earningsCap : averageMonthlyEarnings
  return {
    averageMonthlyEarnings,
    monthsCounted,
    earningsCap,
    earningsCapApplied,
    countedMonthlyEarnings,
    averageDailyEarnings: countedMonthlyEarnings / BENEFIT_WORKING_DAYS_PER_MONTH,
  }
}

export interface BenefitDaysBreakdown {
  startDate: string
  /** Последний календарный день периода. */
  endDate: string
  /** Воскресений в оплачиваемой части периода — не оплачиваются (п. 17). */
  sundays: number
  /** Нерабочих праздников ст. 208 ТК, не совпавших с воскресеньем, — не оплачиваются. */
  holidays: number
  /** Оплачиваемых дней: календарные минус воскресенья и праздники. */
  paidDays: number
  /**
   * false — период задевает год, для которого даты Рамазан/Курбан хайита ещё
   * не объявлены, и хайит может выпасть на один из дней: тогда оплачиваемых
   * дней будет на один меньше. Исключены только известные праздники.
   */
  holidayDatesComplete: boolean
}

type DayKind = 'sunday' | 'holiday' | 'paid'

function classifyDay(t: number, holidayCache: Map<number, Set<string>>): { iso: string; year: number; kind: DayKind; uncertain: boolean } {
  const date = new Date(t)
  const year = date.getUTCFullYear()
  const iso = toIso(t)
  if (date.getUTCDay() === 0) return { iso, year, kind: 'sunday', uncertain: false }
  let set = holidayCache.get(year)
  if (!set) { set = holidaysOfYear(year); holidayCache.set(year, set) }
  if (set.has(iso)) return { iso, year, kind: 'holiday', uncertain: false }
  return { iso, year, kind: 'paid', uncertain: mayBeUnannouncedHoliday(iso) }
}

// Sick leave
/**
 * Лимит оплаты — 182 календарных дня в календарном году (п. 20 прил. 4 ПКМ-796).
 * Единственное исключение — п. 21, уход за больным ребёнком: +20 календарных
 * дней за ребёнка до 14 лет, +40 за ребёнка с инвалидностью до 16 лет
 * (в калькуляторе этого режима нет). Других удлинённых лимитов норма не знает.
 */
export const SICK_LEAVE_MAX_PAID_DAYS = 182

/** Первые 5 дней нетрудоспособности в календарном году оплачивает работодатель (п. 20 ч. 2). */
export const SICK_LEAVE_EMPLOYER_DAYS = 5

/** Сверх 77 календарных дней больничных в году коэффициент ниже на 10 п.п. (п. 19). */
export const SICK_LEAVE_REDUCED_AFTER_DAYS = 77
export const SICK_LEAVE_REDUCTION_PP = 10

/**
 * +20 п.п. к коэффициенту (п. 19 в ред. ПКМ-440): инвалидность I или II группы,
 * четверо и больше детей до 18 лет на иждивении или ребёнок с инвалидностью до
 * 18 лет. При нескольких основаниях льгота одна.
 */
export const SICK_LEAVE_PRIVILEGE_PP = 20

export interface SickLeaveResult extends BenefitEarnings, BenefitDaysBreakdown {
  /** Календарных дней по больничному (введено). */
  sickDays: number
  /** Календарных дней в пределах годового лимита 182. */
  limitDays: number
  /** Часть дней за пределами лимита 182 — не оплачивается. */
  daysCapped: boolean
  unpaidOverLimitDays: number
  insuranceMonths: number
  /** Коэффициент по стажу (п. 18): 60 или 80. */
  experiencePercent: number
  /** Применена льгота +20 п.п. */
  privilegeApplied: boolean
  /** Коэффициент с льготой — для первых 77 дней в году. */
  appliedPercent: number
  /** Оплачиваемых дней после 77-го календарного дня в году (коэффициент −10 п.п.). */
  reducedDays: number
  reducedPercent: number
  isEligible: boolean
  /** Часть за первые 5 календарных дней в году — работодатель (если больничный первый в году). */
  employerAmount: number
  /** Часть с 6-го дня — Фонд государственного социального страхования. */
  fundAmount: number
  grossAmount: number
  ndflAmount: number
  netAmount: number
}

/**
 * Процент пособия по временной нетрудоспособности от среднего заработка.
 *
 * ПКМ № 796 от 17.12.2025, приложение № 4, п. 18 — шкала ДВУХступенчатая:
 * «олти ойдан тўқсон олти ойгача (тўқсон олтинчи ой ҳам киради) — 60 фоиз;
 *  тўқсон етти ва ундан ортиқ ой — 80 фоиз».
 * То есть 6–96 месяцев включительно = 60%, 97+ = 80%. Ступени 100% НЕТ.
 * Применяется к страховым случаям с 1 июля 2026 г.
 *
 * Раньше здесь стояла четырёхступенчатая шкала 60/80/100 с границами по 60 и 96
 * месяцам — она завышала выплату всем со стажем от 5 лет.
 */
export function getSickLeavePercent(insuranceMonths: number): number {
  if (insuranceMonths < 6) return 0        // <6 месяцев — права на пособие нет
  if (insuranceMonths <= 96) return 60     // 6–96 месяцев включительно
  return 80                                // 97 месяцев и больше
}

/**
 * Пособие по временной нетрудоспособности (п. 16–20 прил. 4 ПКМ-796).
 * Считается, что это первый больничный в календарном году: от этого зависят
 * счёт 5 дней работодателя, порог 77 дней и лимит 182 дня. Если период
 * переходит на следующий год, счётчики с 1 января начинаются заново.
 */
export function calculateSickLeave(
  totalEarnings12Months: number,
  sickDays: number,
  insuranceMonths: number,
  startDate: string,
  hasPrivilege: boolean = false
): SickLeaveResult {
  const start = parseIsoDateUtc(startDate)
  if (start === null) throw new RangeError(`calculateSickLeave: invalid startDate ${startDate}`)

  const earnings = calculateBenefitEarnings(totalEarnings12Months, insuranceMonths)
  const experiencePercent = getSickLeavePercent(insuranceMonths)
  const isEligible = experiencePercent > 0
  const privilegeApplied = isEligible && hasPrivilege
  const appliedPercent = experiencePercent + (privilegeApplied ? SICK_LEAVE_PRIVILEGE_PP : 0)
  const reducedPercent = appliedPercent - SICK_LEAVE_REDUCTION_PP

  const days = Math.max(0, Math.floor(sickDays))
  const cache = new Map<number, Set<string>>()
  let yearOfCount = -1
  let dayOfYearCount = 0
  let limitDays = 0, unpaidOverLimitDays = 0
  let sundays = 0, holidays = 0, paidDays = 0, reducedDays = 0
  let employerAmount = 0, fundAmount = 0
  let holidayDatesComplete = true

  for (let i = 0; i < days; i++) {
    const day = classifyDay(start + i * DAY_MS, cache)
    if (day.year !== yearOfCount) { yearOfCount = day.year; dayOfYearCount = 0 }
    dayOfYearCount++
    if (dayOfYearCount > SICK_LEAVE_MAX_PAID_DAYS) { unpaidOverLimitDays++; continue }
    limitDays++
    if (day.kind === 'sunday') { sundays++; continue }
    if (day.kind === 'holiday') { holidays++; continue }
    if (day.uncertain) holidayDatesComplete = false
    paidDays++
    const reduced = dayOfYearCount > SICK_LEAVE_REDUCED_AFTER_DAYS
    if (reduced) reducedDays++
    const amount = isEligible
      ? earnings.averageDailyEarnings * ((reduced ? reducedPercent : appliedPercent) / 100)
      : 0
    if (dayOfYearCount <= SICK_LEAVE_EMPLOYER_DAYS) employerAmount += amount
    else fundAmount += amount
  }

  const grossAmount = employerAmount + fundAmount
  const ndflAmount = grossAmount * 0.12

  return {
    ...earnings,
    startDate,
    endDate: toIso(start + Math.max(0, days - 1) * DAY_MS),
    sundays,
    holidays,
    paidDays,
    holidayDatesComplete,
    sickDays: days,
    limitDays,
    daysCapped: unpaidOverLimitDays > 0,
    unpaidOverLimitDays,
    insuranceMonths,
    experiencePercent,
    privilegeApplied,
    appliedPercent,
    reducedDays,
    reducedPercent,
    isEligible,
    employerAmount,
    fundAmount,
    grossAmount,
    ndflAmount,
    netAmount: grossAmount - ndflAmount,
  }
}

// Maternity benefits
export interface MaternityResult extends BenefitEarnings, BenefitDaysBreakdown {
  insuranceMonths: number
  benefitPercent: number
  isEligible: boolean
  /** Календарных дней отпуска: 126 или 140 (ст. 404 ТК). */
  totalDays: number
  prebirthDays: number
  postbirthDays: number
  grossBenefit: number
  ndflAmount: number
  netBenefit: number
}

/**
 * Процент пособия по беременности и родам от среднего заработка.
 *
 * ПКМ № 796 от 17.12.2025, прил. 4, п. 24 — границы включающие: 10–24 мес. = 75%,
 * 25–60 мес. = 85%, 61 мес. и более = 100%. Применяется с 1 января 2026 г.
 * Прежние границы (10–23 / 24–59 / ≥60) промахивались на месяц на всех трёх.
 */
export function getMaternityPercent(insuranceMonths: number): number {
  if (insuranceMonths < 10) return 0       // права на пособие нет
  if (insuranceMonths <= 24) return 75     // 10–24 месяца включительно
  if (insuranceMonths <= 60) return 85     // 25–60 месяцев включительно
  return 100                               // 61 месяц и больше
}

/**
 * Пособие по беременности и родам (п. 16, 17, 24–26 прил. 4 ПКМ-796).
 * Отпуск 70 + 56 календарных дней (70 + 70 при осложнённых родах или рождении
 * двух и более детей, ст. 404 ТК), оплачиваются дни без воскресений и праздников.
 * НДФЛ не удерживается. Потолок 5 МРОТ для застрахованных добровольно
 * (самозанятые и т.п., п. 25) здесь не применяется — калькулятор для работников.
 */
export function calculateMaternity(
  totalEarnings12Months: number,
  insuranceMonths: number,
  isComplicatedBirth: boolean,
  isMultipleBirth: boolean,
  startDate: string
): MaternityResult {
  const start = parseIsoDateUtc(startDate)
  if (start === null) throw new RangeError(`calculateMaternity: invalid startDate ${startDate}`)

  const earnings = calculateBenefitEarnings(totalEarnings12Months, insuranceMonths)
  const benefitPercent = getMaternityPercent(insuranceMonths)
  const isEligible = benefitPercent > 0
  const prebirthDays = 70
  const postbirthDays = isComplicatedBirth || isMultipleBirth ? 70 : 56
  const totalDays = prebirthDays + postbirthDays

  const cache = new Map<number, Set<string>>()
  let sundays = 0, holidays = 0, paidDays = 0
  let holidayDatesComplete = true
  for (let i = 0; i < totalDays; i++) {
    const day = classifyDay(start + i * DAY_MS, cache)
    if (day.kind === 'sunday') sundays++
    else if (day.kind === 'holiday') holidays++
    else {
      paidDays++
      if (day.uncertain) holidayDatesComplete = false
    }
  }

  const grossBenefit = isEligible
    ? earnings.averageDailyEarnings * (benefitPercent / 100) * paidDays
    : 0

  return {
    ...earnings,
    startDate,
    endDate: toIso(start + (totalDays - 1) * DAY_MS),
    sundays,
    holidays,
    paidDays,
    holidayDatesComplete,
    insuranceMonths,
    benefitPercent,
    isEligible,
    totalDays,
    prebirthDays,
    postbirthDays,
    grossBenefit,
    ndflAmount: 0, // пособие по беременности и родам НДФЛ не облагается
    netBenefit: grossBenefit,
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

/**
 * Минимальная пенсия по возрасту — 983 000 сум/мес. с 1 июля 2026 (Указ ПФ-115
 * от 23.06.2026, повышение на 7%). Назначенная пенсия не может быть ниже.
 */
export const MIN_OLD_AGE_PENSION = 983_000

export interface PensionResult {
  currentAge: number
  retirementAge: number
  yearsToRetirement: number
  estimatedMonthlyPension: number
  pensionAsPercentOfSalary: number
  /** Расчёт по проценту от заработка оказался ниже минимума — начислен минимум. */
  minimumApplied: boolean
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

  // Процент от заработка — не вся история: назначенная пенсия не бывает ниже
  // минимальной, а калькулятор показывал и 660 000 при низкой зарплате.
  const byPercent = averageMonthlySalary * (pensionPercent / 100)
  const minimumApplied = byPercent > 0 && byPercent < MIN_OLD_AGE_PENSION
  const estimatedMonthlyPension = minimumApplied ? MIN_OLD_AGE_PENSION : byPercent

  return {
    currentAge,
    retirementAge,
    yearsToRetirement,
    estimatedMonthlyPension,
    pensionAsPercentOfSalary: pensionPercent,
    minimumApplied,
  }
}
