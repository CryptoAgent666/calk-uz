/**
 * Car customs clearance calculator for Uzbekistan (2026)
 * Imported cars pay a COMBINED customs duty = percentage (15% new / 40% used)
 * + a USD-per-cc surcharge. There is no separate per-cc excise on cars.
 * Plus: utilization (recycling) fee in БРВ, 12% VAT, registration.
 * Source: customs.uz / dif.uz 2026 (DATA_HUB pilot verdicts 2026-06-25).
 */

import { BRV } from '@/lib/constants/brv'

export interface CustomsInput {
  carPrice: number       // Price in USD
  engineVolumeCc: number // Engine volume in cubic centimeters
  carYear: number        // Year of manufacture
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  isNew: boolean         // Is the car new (up to 3 years old)
}

export interface CustomsResult {
  carPriceUzs: number
  customsDuty: number
  exciseTax: number
  vat: number
  utilizationFee: number
  registrationFee: number
  certificationFee: number
  totalCustomsCost: number
  totalWithCarPrice: number
  breakdown: { name: string; amount: number }[]
}

// Customs-duty percentage component (of car price): 15% new / 40% used.
const CUSTOMS_DUTY_PCT_NEW = 0.15
const CUSTOMS_DUTY_PCT_USED = 0.4

// Per-cc customs-duty surcharge (USD per cm³), added on top of the percentage
// duty. New cars: 0.4–1.0 $/cc by engine size. Used cars (>3 yr): flat ~3.0 $/cc.
const DUTY_PER_CC_NEW: { upTo: number; rate: number }[] = [
  { upTo: 1000, rate: 0.4 },
  { upTo: 1500, rate: 0.6 },
  { upTo: 1800, rate: 0.8 },
  { upTo: Infinity, rate: 1.0 },
]
const DUTY_PER_CC_USED = 3.0

// Utilization (recycling) fee in БРВ by engine size — 2026 (M1 passenger cars).
const UTILIZATION_FEE_BRV: { upTo: number; newCar: number; usedCar: number }[] = [
  { upTo: 1000, newCar: 30, usedCar: 90 },
  { upTo: 2000, newCar: 120, usedCar: 210 },
  { upTo: 3000, newCar: 180, usedCar: 330 },
  { upTo: 3500, newCar: 180, usedCar: 390 },
  { upTo: Infinity, newCar: 300, usedCar: 480 },
]
// Imported electric cars pay a flat utilization fee: 30 (new) / 90 (used) БРВ.
const UTILIZATION_FEE_EV_BRV = { newCar: 30, usedCar: 90 }

// Registration: vehicle reg 6.84 + tech passport 0.7 + plates 5.5 = 13.04 БРВ.
const REGISTRATION_FEE_BRV = 6.84 + 0.7 + 5.5

// Default fallback rate. The currency-converter calculator pulls live rates
// from cbu.uz; pass `usdToUzs` explicitly for accurate cost projections.
const USD_UZS_FALLBACK = 11_938 // CBU reference rate, 1 May 2026
const VAT_RATE = 0.12 // 12%
const CERTIFICATION_FEE_USD = 690

export function calculateCustomsClearance(
  input: CustomsInput,
  /** Live USD→UZS rate. Pass the current cbu.uz rate for accurate results. */
  usdToUzs: number = USD_UZS_FALLBACK,
): CustomsResult {
  const { carPrice, engineVolumeCc, fuelType, isNew } = input
  const carPriceUzs = carPrice * usdToUzs

  // Electric vehicles: 0% customs duty + 0 per-cc surcharge until 1 January 2030.
  const isElectric = fuelType === 'electric'

  // Customs duty = percentage component + USD-per-cc surcharge (0 for electric).
  let customsDuty = 0
  if (!isElectric) {
    const pct = isNew ? CUSTOMS_DUTY_PCT_NEW : CUSTOMS_DUTY_PCT_USED
    const perCc = isNew
      ? (DUTY_PER_CC_NEW.find(t => engineVolumeCc <= t.upTo)?.rate ?? 1.0)
      : DUTY_PER_CC_USED
    customsDuty = carPriceUzs * pct + engineVolumeCc * perCc * usdToUzs
  }

  // No separate excise on cars — the per-cc charge is part of the customs duty.
  const exciseTax = 0

  // VAT: 12% of (car price + customs duty). Imported EVs still pay VAT.
  const vat = (carPriceUzs + customsDuty) * VAT_RATE

  // Utilization (recycling) fee — imported EVs also pay it (30/90 БРВ).
  let utilizationFee = 0
  if (isElectric) {
    utilizationFee = (isNew ? UTILIZATION_FEE_EV_BRV.newCar : UTILIZATION_FEE_EV_BRV.usedCar) * BRV
  } else {
    const tier = UTILIZATION_FEE_BRV.find(t => engineVolumeCc <= t.upTo)
    if (tier) {
      utilizationFee = (isNew ? tier.newCar : tier.usedCar) * BRV
    }
  }

  // Registration (vehicle reg + tech passport + plates) ≈ 13.04 БРВ.
  const registrationFee = REGISTRATION_FEE_BRV * BRV

  // Certification fee (uncertain — left at the prior estimate).
  const certificationFee = CERTIFICATION_FEE_USD * usdToUzs

  const totalCustomsCost = customsDuty + exciseTax + vat + utilizationFee + registrationFee + certificationFee

  const breakdown = [
    { name: 'customs_duty', amount: customsDuty },
    { name: 'excise_tax', amount: exciseTax },
    { name: 'vat', amount: vat },
    { name: 'utilization_fee', amount: utilizationFee },
    { name: 'registration_fee', amount: registrationFee },
    { name: 'certification_fee', amount: certificationFee },
  ]

  return {
    carPriceUzs,
    customsDuty,
    exciseTax,
    vat,
    utilizationFee,
    registrationFee,
    certificationFee,
    totalCustomsCost,
    totalWithCarPrice: carPriceUzs + totalCustomsCost,
    breakdown,
  }
}
