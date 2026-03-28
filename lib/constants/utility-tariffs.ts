/**
 * Utility tariffs for Uzbekistan (2025)
 * Source: Government-regulated tariffs
 */

export interface TariffTier {
  /** Upper limit in units (kWh, m3, etc.). null = unlimited */
  upTo: number | null
  /** Price per unit in UZS */
  pricePerUnit: number
}

// =============================================
// ELECTRICITY (Электроэнергия / Elektr energiya)
// =============================================

/** Electricity tiers per month per household (UZS/kWh) */
export const ELECTRICITY_TIERS: TariffTier[] = [
  { upTo: 200, pricePerUnit: 600 },
  { upTo: 500, pricePerUnit: 800 },
  { upTo: 1000, pricePerUnit: 1000 },
  { upTo: 5000, pricePerUnit: 1500 },
  { upTo: 10000, pricePerUnit: 1750 },
  { upTo: null, pricePerUnit: 2000 },
]

// =============================================
// GAS (Газ / Gaz)
// =============================================

/** Gas tiers — summer rates per month (UZS/m3) */
export const GAS_TIERS_SUMMER: TariffTier[] = [
  { upTo: 100, pricePerUnit: 1000 },
  { upTo: 2500, pricePerUnit: 1800 },
  { upTo: 5000, pricePerUnit: 2100 },
  { upTo: 10000, pricePerUnit: 2500 },
  { upTo: null, pricePerUnit: 3000 },
]

/** Gas tiers — winter rates per month (UZS/m3) — typically same structure, higher consumption */
export const GAS_TIERS_WINTER: TariffTier[] = [
  { upTo: 500, pricePerUnit: 1000 },
  { upTo: 2500, pricePerUnit: 1800 },
  { upTo: 5000, pricePerUnit: 2100 },
  { upTo: 10000, pricePerUnit: 2500 },
  { upTo: null, pricePerUnit: 3000 },
]

// =============================================
// WATER (Вода / Suv)
// =============================================

/** Cold water tariff (UZS per m3) */
export const WATER_COLD_RATE = 3808

/** Hot water tariff (UZS per m3) */
export const WATER_HOT_RATE = 8928.67

/** Sewage/drainage rate (UZS per m3, typically included) */
export const WATER_SEWAGE_RATE = 2182

// =============================================
// HEATING (Отопление / Isitish)
// =============================================

/** Central heating tariff (UZS per m2 per day) */
export const HEATING_RATE_PER_M2_DAY = 241.44

/** Heating season months (October through March) */
export const HEATING_SEASON_MONTHS = [10, 11, 12, 1, 2, 3]

/** Average heating season duration in days */
export const HEATING_SEASON_DAYS = 180

// =============================================
// WASTE DISPOSAL (Мусор / Chiqindi)
// =============================================

/** Waste disposal fee per person per month (UZS) */
export const WASTE_FEE_PER_PERSON = 8400

// =============================================
// UTILITY CALCULATION HELPERS
// =============================================

/**
 * Calculate cost for tiered tariffs (electricity, gas)
 * @param consumption - Total consumption in units
 * @param tiers - Tariff tier definitions
 * @returns Total cost in UZS
 */
export function calculateTieredCost(consumption: number, tiers: TariffTier[]): number {
  let remaining = consumption
  let totalCost = 0
  let previousLimit = 0

  for (const tier of tiers) {
    if (remaining <= 0) break

    const tierLimit = tier.upTo !== null ? tier.upTo - previousLimit : remaining
    const usedInTier = Math.min(remaining, tierLimit)

    totalCost += usedInTier * tier.pricePerUnit
    remaining -= usedInTier
    previousLimit = tier.upTo ?? previousLimit + remaining
  }

  return Math.round(totalCost)
}

/**
 * Calculate monthly heating cost
 * @param areaM2 - Apartment area in square meters
 * @param daysInMonth - Number of days in the billing month
 * @returns Cost in UZS
 */
export function calculateHeatingCost(areaM2: number, daysInMonth: number = 30): number {
  return Math.round(areaM2 * HEATING_RATE_PER_M2_DAY * daysInMonth)
}

/**
 * Calculate monthly water cost
 * @param coldM3 - Cold water consumption in m3
 * @param hotM3 - Hot water consumption in m3
 * @param includeSewage - Whether to include sewage fee
 * @returns Cost in UZS
 */
export function calculateWaterCost(
  coldM3: number,
  hotM3: number,
  includeSewage: boolean = true
): number {
  let cost = coldM3 * WATER_COLD_RATE + hotM3 * WATER_HOT_RATE
  if (includeSewage) {
    cost += (coldM3 + hotM3) * WATER_SEWAGE_RATE
  }
  return Math.round(cost)
}
