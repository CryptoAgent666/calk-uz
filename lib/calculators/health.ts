/**
 * Health calculators: BMI, calories, ideal weight, macros, pregnancy
 */

// BMI Calculator
export interface BmiResult {
  weight: number
  height: number
  bmi: number
  category: string
  categoryKey: string
  healthyWeightMin: number
  healthyWeightMax: number
}

export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM * heightM)

  let category: string
  let categoryKey: string
  if (bmi < 16) { category = 'Выраженный дефицит'; categoryKey = 'severe_underweight' }
  else if (bmi < 18.5) { category = 'Недостаточный вес'; categoryKey = 'underweight' }
  else if (bmi < 25) { category = 'Нормальный вес'; categoryKey = 'normal' }
  else if (bmi < 30) { category = 'Избыточный вес'; categoryKey = 'overweight' }
  else if (bmi < 35) { category = 'Ожирение I степени'; categoryKey = 'obese_1' }
  else if (bmi < 40) { category = 'Ожирение II степени'; categoryKey = 'obese_2' }
  else { category = 'Ожирение III степени'; categoryKey = 'obese_3' }

  const healthyWeightMin = 18.5 * heightM * heightM
  const healthyWeightMax = 24.9 * heightM * heightM

  return { weight: weightKg, height: heightCm, bmi, category, categoryKey, healthyWeightMin, healthyWeightMax }
}

// Calorie Calculator (Mifflin-St Jeor)
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
export type Goal = 'lose' | 'maintain' | 'gain'

export interface CalorieResult {
  bmr: number
  tdee: number
  targetCalories: number
  protein: number
  fat: number
  carbs: number
  activityMultiplier: number
  goal: Goal
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
}

export function calculateCalories(
  weightKg: number,
  heightCm: number,
  age: number,
  isMale: boolean,
  activity: ActivityLevel,
  goal: Goal
): CalorieResult {
  // Mifflin-St Jeor equation
  const bmr = isMale
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161

  const multiplier = ACTIVITY_MULTIPLIERS[activity]
  const tdee = bmr * multiplier

  let targetCalories: number
  if (goal === 'lose') targetCalories = tdee - 500
  else if (goal === 'gain') targetCalories = tdee + 300
  else targetCalories = tdee

  // Macronutrient split
  let proteinPct: number, fatPct: number, carbsPct: number
  if (goal === 'lose') { proteinPct = 0.30; fatPct = 0.30; carbsPct = 0.40 }
  else if (goal === 'gain') { proteinPct = 0.25; fatPct = 0.25; carbsPct = 0.50 }
  else { proteinPct = 0.25; fatPct = 0.30; carbsPct = 0.45 }

  const protein = (targetCalories * proteinPct) / 4
  const fat = (targetCalories * fatPct) / 9
  const carbs = (targetCalories * carbsPct) / 4

  return { bmr, tdee, targetCalories, protein, fat, carbs, activityMultiplier: multiplier, goal }
}

// Ideal Weight
export interface IdealWeightResult {
  height: number
  devine: number
  robinson: number
  miller: number
  hamwi: number
  average: number
}

export function calculateIdealWeight(heightCm: number, isMale: boolean): IdealWeightResult {
  const inchesOver60 = (heightCm - 152.4) / 2.54

  const devine = isMale
    ? 50 + 2.3 * inchesOver60
    : 45.5 + 2.3 * inchesOver60

  const robinson = isMale
    ? 52 + 1.9 * inchesOver60
    : 49 + 1.7 * inchesOver60

  const miller = isMale
    ? 56.2 + 1.41 * inchesOver60
    : 53.1 + 1.36 * inchesOver60

  const hamwi = isMale
    ? 48 + 2.7 * inchesOver60
    : 45.5 + 2.2 * inchesOver60

  const average = (devine + robinson + miller + hamwi) / 4

  return { height: heightCm, devine, robinson, miller, hamwi, average }
}

// Pregnancy Calculator
export interface PregnancyResult {
  lastPeriodDate: Date
  conceptionDate: Date
  dueDate: Date
  currentWeek: number
  currentDay: number
  trimester: number
  daysRemaining: number
  progress: number
}

export function calculatePregnancy(lastPeriodDate: Date): PregnancyResult {
  const conceptionDate = new Date(lastPeriodDate)
  conceptionDate.setDate(conceptionDate.getDate() + 14)

  const dueDate = new Date(lastPeriodDate)
  dueDate.setDate(dueDate.getDate() + 280) // 40 weeks

  const now = new Date()
  const daysSinceLastPeriod = Math.floor((now.getTime() - lastPeriodDate.getTime()) / (1000 * 60 * 60 * 24))
  const currentWeek = Math.floor(daysSinceLastPeriod / 7)
  const currentDay = daysSinceLastPeriod % 7

  let trimester: number
  if (currentWeek <= 12) trimester = 1
  else if (currentWeek <= 27) trimester = 2
  else trimester = 3

  const daysRemaining = Math.max(0, Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
  const progress = Math.min(100, (daysSinceLastPeriod / 280) * 100)

  return {
    lastPeriodDate,
    conceptionDate,
    dueDate,
    currentWeek: Math.max(0, currentWeek),
    currentDay: Math.max(0, currentDay),
    trimester,
    daysRemaining,
    progress,
  }
}
