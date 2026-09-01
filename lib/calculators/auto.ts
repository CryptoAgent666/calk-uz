/**
 * Auto calculators: OSAGO, fuel consumption, trip cost, car leasing
 * (Customs is in customs.ts)
 */

// OSAGO Calculator
export interface OsagoResult {
  baseTariff: number
  /** Region-specific premium (already baked into baseTariff). 1.2 = Tashkent, 1.0 = other regions. */
  historyCoeff: number
  annualPremium: number
}

export function calculateOsago(
  region: 'tashkent' | 'other_region' = 'tashkent',
  isUnlimitedDrivers: boolean = false,
  accidentHistory: number = 0
): OsagoResult {
  // 2026 flat rates by region (ПКМ №458 от 23.07.2025, in force 1 Jan 2026)
  const baseTariffs: Record<string, { limited: number; unlimited: number }> = {
    tashkent: { limited: 192_000, unlimited: 384_000 },
    other_region: { limited: 160_000, unlimited: 320_000 },
  }

  const tariff = baseTariffs[region] ?? baseTariffs.tashkent
  const baseTariff = isUnlimitedDrivers ? tariff.unlimited : tariff.limited

  // Bonus-malus (КБМ) by prior at-fault claims — ПКМ №458 (2026): a clean record
  // is the base 1.0 (no discount), then 1.3 / 2.0 / 3.0. The 2026 tariff has NO
  // driver age/experience coefficient (removed — it did not exist in the reform).
  let historyCoeff = 1.0
  if (accidentHistory === 1) historyCoeff = 1.3
  else if (accidentHistory === 2) historyCoeff = 2.0
  else if (accidentHistory >= 3) historyCoeff = 3.0

  // Отдельного коэффициента региона в тарифе 2026 нет: регион уже заложен в
  // сам базовый тариф (192 000 Ташкент против 160 000 по областям). Прежний
  // множитель 1,2 остался от старой модели, к премии не применялся и попал
  // в пример на странице как «коэффициент региона».
  const annualPremium = Math.round(baseTariff * historyCoeff)

  return { baseTariff, historyCoeff, annualPremium }
}

// Fuel Consumption Calculator
export interface FuelResult {
  distance: number
  fuelConsumption: number // liters per 100 km
  fuelType: string
  fuelPricePerLiter: number
  totalFuelLiters: number
  totalCost: number
  costPerKm: number
}

/**
 * Средние розничные цены топлива по Ташкенту, сум за литр (метан — за м³).
 * Обновлено 31.08.2026 по ценам на 28.08.2026 (avtoelon.uz, сводка по сетям).
 *
 * Топливо в РУз НЕ регулируется государством: цена отличается по сетям и
 * регионам, поэтому здесь средняя, а не «официальная». Прежние значения были
 * сняты в апреле 2026 и за четыре месяца отстали на 10-33% (АИ-95 13 500 при
 * фактических 16 200, АИ-100 16 000 при 24 000) — калькулятор занижал
 * стоимость поездки. У пользователя своей цены задать нельзя, поэтому
 * константа и есть ответ: держать её свежей обязательно.
 *
 * АИ-80 запрещён с 1 декабря 2025, АИ-91 не продаётся.
 */
export const FUEL_PRICES: Record<string, number> = {
  'ai-92': 12_500,    // отечественный; импортный дороже (~13 700)
  'ai-95': 16_200,
  'ai-100': 24_000,
  'diesel': 14_200,
  'gas_lpg': 5_500,   // пропан за литр — НЕ ПОДТВЕРЖДЁН, сводки по нему не дают
  'gas_cng': 5_750,   // метан за м³ (autostrada.uz, 08.2026)
}

/** Дата, на которую сняты цены топлива. Обновляете цены — обновите и её. */
export const FUEL_PRICES_DATE = '2026-08-28'

export function calculateFuelConsumption(
  distance: number,
  consumptionPer100Km: number,
  fuelType: string,
  fuelPrice?: number
): FuelResult {
  const fuelPricePerLiter = fuelPrice ?? FUEL_PRICES[fuelType] ?? 12_000
  const totalFuelLiters = (distance / 100) * consumptionPer100Km
  const totalCost = totalFuelLiters * fuelPricePerLiter
  const costPerKm = distance > 0 ? totalCost / distance : 0

  return {
    distance,
    fuelConsumption: consumptionPer100Km,
    fuelType,
    fuelPricePerLiter,
    totalFuelLiters,
    totalCost,
    costPerKm,
  }
}

// Trip Cost Calculator
export interface TripCostResult {
  distance: number
  fuelCost: number
  tollRoads: number
  parkingCost: number
  totalCost: number
  costPerPassenger: number
}

export function calculateTripCost(
  distance: number,
  consumptionPer100Km: number,
  fuelPricePerLiter: number,
  tollRoads: number = 0,
  parkingCost: number = 0,
  passengers: number = 1
): TripCostResult {
  const fuelLiters = (distance / 100) * consumptionPer100Km
  const fuelCost = fuelLiters * fuelPricePerLiter
  const totalCost = fuelCost + tollRoads + parkingCost
  const costPerPassenger = passengers > 0 ? totalCost / passengers : totalCost

  return { distance, fuelCost, tollRoads, parkingCost, totalCost, costPerPassenger }
}

// Car Leasing Calculator
export interface LeasingResult {
  carPrice: number
  downPayment: number
  financedAmount: number
  termMonths: number
  annualRate: number
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
  residualValue: number
  totalCost: number
}

export function calculateLeasing(
  carPrice: number,
  downPaymentPercent: number,
  termMonths: number,
  annualRate: number,
  residualValuePercent: number = 0
): LeasingResult {
  const downPayment = carPrice * downPaymentPercent / 100
  const residualValue = carPrice * residualValuePercent / 100
  const financedAmount = carPrice - downPayment - residualValue

  const monthlyRate = annualRate / 100 / 12
  let monthlyPayment: number
  if (monthlyRate === 0) {
    monthlyPayment = financedAmount / termMonths
  } else {
    monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1)
  }

  const totalPayments = monthlyPayment * termMonths
  const totalInterest = totalPayments - financedAmount
  const totalCost = downPayment + totalPayments + residualValue

  return {
    carPrice,
    downPayment,
    financedAmount,
    termMonths,
    annualRate,
    monthlyPayment,
    totalPayments,
    totalInterest,
    residualValue,
    totalCost,
  }
}
