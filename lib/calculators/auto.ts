/**
 * Auto calculators: OSAGO, fuel consumption, trip cost, car leasing
 * (Customs is in customs.ts)
 */

// OSAGO Calculator
export interface OsagoResult {
  baseTariff: number
  regionCoeff: number
  ageExpCoeff: number
  historyCoeff: number
  annualPremium: number
}

export function calculateOsago(
  engineVolumeCc: number,
  region: 'tashkent' | 'other_city' | 'rural' = 'tashkent',
  driverAge: number = 30,
  driverExperienceYears: number = 5,
  accidentHistory: number = 0
): OsagoResult {
  // Base tariff depends on engine volume (in UZS)
  let baseTariff: number
  if (engineVolumeCc <= 1500) baseTariff = 180_000
  else if (engineVolumeCc <= 2000) baseTariff = 250_000
  else if (engineVolumeCc <= 2500) baseTariff = 350_000
  else if (engineVolumeCc <= 3000) baseTariff = 480_000
  else baseTariff = 650_000

  // Region coefficient
  const regionCoeffs: Record<string, number> = { tashkent: 1.7, other_city: 1.3, rural: 1.0 }
  const regionCoeff = regionCoeffs[region] ?? 1.0

  // Age and experience coefficient
  let ageExpCoeff = 1.0
  if (driverAge < 22 && driverExperienceYears < 3) ageExpCoeff = 1.8
  else if (driverAge < 22) ageExpCoeff = 1.6
  else if (driverExperienceYears < 3) ageExpCoeff = 1.7

  // Accident history coefficient (bonus-malus)
  let historyCoeff = 1.0
  if (accidentHistory === 0) historyCoeff = 0.9 // discount for no accidents
  else if (accidentHistory === 1) historyCoeff = 1.0
  else if (accidentHistory === 2) historyCoeff = 1.4
  else historyCoeff = 1.7

  const annualPremium = baseTariff * regionCoeff * ageExpCoeff * historyCoeff

  return { baseTariff, regionCoeff, ageExpCoeff, historyCoeff, annualPremium }
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

// Current fuel prices in UZS (approximate, 2025-2026)
export const FUEL_PRICES: Record<string, number> = {
  'ai-80': 8_500,
  'ai-91': 11_500,
  'ai-92': 12_000,
  'ai-95': 14_000,
  'ai-98': 16_000,
  'diesel': 12_500,
  'gas_lpg': 5_200, // Propane
  'gas_cng': 3_200, // Methane
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
