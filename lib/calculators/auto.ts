/**
 * Auto calculators: OSAGO, fuel consumption, trip cost, car leasing
 * (Customs is in customs.ts)
 */

// OSAGO Calculator
export interface OsagoResult {
  baseTariff: number
  /** Region-specific premium (already baked into baseTariff). 1.2 = Tashkent, 1.0 = other regions. */
  regionMultiplier: number
  ageExpCoeff: number
  historyCoeff: number
  annualPremium: number
}

export function calculateOsago(
  region: 'tashkent' | 'other_region' = 'tashkent',
  isUnlimitedDrivers: boolean = false,
  driverAge: number = 30,
  driverExperienceYears: number = 5,
  accidentHistory: number = 0
): OsagoResult {
  // 2026 flat rates by region (Cabinet of Ministers Resolution No. 458, July 2025)
  const baseTariffs: Record<string, { limited: number; unlimited: number }> = {
    tashkent: { limited: 192_000, unlimited: 384_000 },
    other_region: { limited: 160_000, unlimited: 320_000 },
  }

  const tariff = baseTariffs[region] ?? baseTariffs.tashkent
  const baseTariff = isUnlimitedDrivers ? tariff.unlimited : tariff.limited

  // Age and experience coefficient
  let ageExpCoeff = 1.0
  if (driverAge < 22 && driverExperienceYears < 3) ageExpCoeff = 1.8
  else if (driverAge < 22) ageExpCoeff = 1.6
  else if (driverExperienceYears < 3) ageExpCoeff = 1.7

  // Bonus-malus coefficient
  let historyCoeff = 1.0
  if (accidentHistory === 0) historyCoeff = 0.9
  else if (accidentHistory === 1) historyCoeff = 1.0
  else if (accidentHistory === 2) historyCoeff = 1.4
  else historyCoeff = 1.7

  const annualPremium = Math.round(baseTariff * ageExpCoeff * historyCoeff)
  const regionMultiplier = region === 'tashkent' ? 1.2 : 1.0

  return { baseTariff, regionMultiplier, ageExpCoeff, historyCoeff, annualPremium }
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

// Current fuel prices in UZS per liter/m³ (April 2026, Uzbekneftegas reference)
// AI-80 was banned from December 1, 2025; AI-91 is no longer sold.
export const FUEL_PRICES: Record<string, number> = {
  'ai-92': 11_200,
  'ai-95': 13_500,
  'ai-100': 16_000,
  'diesel': 12_500,
  'gas_lpg': 5_500,   // propane per liter
  'gas_cng': 5_350,   // methane per m³
}

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
