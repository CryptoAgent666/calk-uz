/**
 * Car customs clearance calculator for Uzbekistan
 * Includes: customs duty, excise tax, VAT, utilization fee
 */

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

const EXCISE_RATES_PER_CC: { upTo: number; rate: number }[] = [
  { upTo: 1000, rate: 1.5 },   // $1.5 per cc
  { upTo: 1500, rate: 2.0 },
  { upTo: 2000, rate: 3.0 },
  { upTo: 3000, rate: 5.0 },
  { upTo: 4000, rate: 7.0 },
  { upTo: Infinity, rate: 10.0 },
]

const UTILIZATION_FEE_BRV: { upTo: number; newCar: number; usedCar: number }[] = [
  { upTo: 1000, newCar: 6, usedCar: 17 },
  { upTo: 2000, newCar: 17, usedCar: 60 },
  { upTo: 3000, newCar: 43, usedCar: 82 },
  { upTo: Infinity, newCar: 82, usedCar: 137 },
]

const BRV = 412_000  // Base calculation value in UZS
const USD_UZS = 12_192 // Approximate exchange rate
const CUSTOMS_DUTY_RATE = 0.15 // 15%
const VAT_RATE = 0.12 // 12%
const CERTIFICATION_FEE_USD = 690

export function calculateCustomsClearance(input: CustomsInput): CustomsResult {
  const { carPrice, engineVolumeCc, fuelType, isNew } = input
  const carPriceUzs = carPrice * USD_UZS

  // Electric vehicles: 0% customs duty until 2027
  const isElectric = fuelType === 'electric'

  // Customs duty: 15% of car price (0% for electric)
  const customsDuty = isElectric ? 0 : carPriceUzs * CUSTOMS_DUTY_RATE

  // Excise tax based on engine volume (0 for electric)
  let exciseTax = 0
  if (!isElectric) {
    const rate = EXCISE_RATES_PER_CC.find(t => engineVolumeCc <= t.upTo)?.rate ?? 10
    exciseTax = engineVolumeCc * rate * USD_UZS
  }

  // VAT: 12% of (car price + customs duty + excise)
  const vatBase = carPriceUzs + customsDuty + exciseTax
  const vat = vatBase * VAT_RATE

  // Utilization fee based on engine volume and age
  let utilizationFee = 0
  if (!isElectric) {
    const tier = UTILIZATION_FEE_BRV.find(t => engineVolumeCc <= t.upTo)
    if (tier) {
      const brvMultiplier = isNew ? tier.newCar : tier.usedCar
      utilizationFee = brvMultiplier * BRV
    }
  }

  // Registration fee (approximate)
  const registrationFee = 1 * BRV

  // Certification fee
  const certificationFee = CERTIFICATION_FEE_USD * USD_UZS

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
