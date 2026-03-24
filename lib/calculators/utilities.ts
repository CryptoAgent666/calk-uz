/**
 * Utility bills calculator for Uzbekistan
 * Tiered tariff system (effective May 1, 2025)
 */

interface TariffTier {
  upTo: number
  rate: number
}

const ELECTRICITY_TIERS: TariffTier[] = [
  { upTo: 200, rate: 600 },
  { upTo: 500, rate: 800 },
  { upTo: 1000, rate: 1000 },
  { upTo: 5000, rate: 1500 },
  { upTo: 10000, rate: 1750 },
  { upTo: Infinity, rate: 2000 },
]

const GAS_SUMMER_TIERS: TariffTier[] = [
  { upTo: 100, rate: 1000 },
  { upTo: 2500, rate: 1800 },
  { upTo: 5000, rate: 2100 },
  { upTo: 10000, rate: 2500 },
  { upTo: Infinity, rate: 3000 },
]

const WATER_RATES = {
  cold: 3808,
  hot: 8928.67,
}

const HEATING_RATE_PER_M2_PER_DAY = 241.44
const WASTE_PER_PERSON_PER_MONTH = 8400

function calculateTiered(consumption: number, tiers: TariffTier[]): { total: number; breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[] } {
  let remaining = consumption
  let prevLimit = 0
  const breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[] = []
  let total = 0

  for (const tier of tiers) {
    if (remaining <= 0) break
    const tierCapacity = tier.upTo - prevLimit
    const amount = Math.min(remaining, tierCapacity)
    const cost = amount * tier.rate
    breakdown.push({ from: prevLimit, to: prevLimit + amount, amount, rate: tier.rate, cost })
    total += cost
    remaining -= amount
    prevLimit = tier.upTo
  }

  return { total, breakdown }
}

export interface ElectricityResult {
  consumption: number
  total: number
  hasElectricStove: boolean
  discount: number
  finalTotal: number
  breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[]
}

export function calculateElectricity(consumptionKwh: number, hasElectricStove: boolean = false): ElectricityResult {
  const result = calculateTiered(consumptionKwh, ELECTRICITY_TIERS)
  const discount = hasElectricStove ? result.total * 0.5 : 0
  return {
    consumption: consumptionKwh,
    total: result.total,
    hasElectricStove,
    discount,
    finalTotal: result.total - discount,
    breakdown: result.breakdown,
  }
}

export interface GasResult {
  consumption: number
  total: number
  isSummer: boolean
  breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[]
}

export function calculateGas(consumptionM3: number, isSummer: boolean = true): GasResult {
  const tiers = isSummer ? GAS_SUMMER_TIERS : GAS_SUMMER_TIERS // Winter tiers TBD — using summer for now
  const result = calculateTiered(consumptionM3, tiers)
  return {
    consumption: consumptionM3,
    total: result.total,
    isSummer,
    breakdown: result.breakdown,
  }
}

export interface WaterResult {
  coldConsumption: number
  hotConsumption: number
  coldCost: number
  hotCost: number
  total: number
}

export function calculateWater(coldM3: number, hotM3: number): WaterResult {
  const coldCost = coldM3 * WATER_RATES.cold
  const hotCost = hotM3 * WATER_RATES.hot
  return { coldConsumption: coldM3, hotConsumption: hotM3, coldCost, hotCost, total: coldCost + hotCost }
}

export interface HeatingResult {
  areaM2: number
  daysInMonth: number
  dailyRate: number
  total: number
}

export function calculateHeating(areaM2: number, daysInMonth: number = 30): HeatingResult {
  const total = areaM2 * HEATING_RATE_PER_M2_PER_DAY * daysInMonth
  return { areaM2, daysInMonth, dailyRate: HEATING_RATE_PER_M2_PER_DAY, total }
}

export interface UtilitiesTotalResult {
  electricity: ElectricityResult
  gas: GasResult
  water: WaterResult
  heating: HeatingResult
  waste: number
  grandTotal: number
}

export function calculateUtilitiesTotal(params: {
  electricityKwh: number
  hasElectricStove?: boolean
  gasM3: number
  isSummer?: boolean
  coldWaterM3: number
  hotWaterM3: number
  heatingAreaM2: number
  heatingDays?: number
  persons: number
}): UtilitiesTotalResult {
  const electricity = calculateElectricity(params.electricityKwh, params.hasElectricStove)
  const gas = calculateGas(params.gasM3, params.isSummer)
  const water = calculateWater(params.coldWaterM3, params.hotWaterM3)
  const heating = calculateHeating(params.heatingAreaM2, params.heatingDays)
  const waste = params.persons * WASTE_PER_PERSON_PER_MONTH

  return {
    electricity,
    gas,
    water,
    heating,
    waste,
    grandTotal: electricity.finalTotal + gas.total + water.total + heating.total + waste,
  }
}
