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
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  /**
   * Возрастная группа по тарифу ПП-3818 — их ТРИ, а не две:
   *   'upTo1'  — новые, с выпуска прошло не более 1 года  → 15% + 0,4–1,25 $/см³
   *   'from1to3' — новые, прошло более 1 года, но менее 3 → 30% + 1,8–3,0 $/см³
   *   'used'   — бывшие в употреблении (3+ лет)           → 40% + 3,0 $/см³
   * Раньше здесь стоял булев isNew, из-за чего средняя группа считалась либо
   * как «до года» (занижение), либо как б/у (завышение).
   */
  ageBand: AgeBand
  /** @deprecated совместимость со старыми вызовами: true → 'upTo1', false → 'used' */
  isNew?: boolean
}

export type AgeBand = 'upTo1' | 'from1to3' | 'used'

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
const CUSTOMS_DUTY_PCT_1_TO_3 = 0.3
const CUSTOMS_DUTY_PCT_USED = 0.4

// Per-cc customs-duty surcharge (USD per cm³), added on top of the percentage
// duty. New cars: 0.4–1.0 $/cc by engine size. Used cars (>3 yr): flat ~3.0 $/cc.
const DUTY_PER_CC_NEW: { upTo: number; rate: number }[] = [
  { upTo: 1000, rate: 0.4 },
  { upTo: 1500, rate: 0.6 },
  { upTo: 1800, rate: 0.8 },
  { upTo: Infinity, rate: 1.0 },
]
// Средняя группа (более 1 года, но менее 3 лет) — приложение № 1 к ПП-3818
// в редакции ПП-58 от 11.02.2026: «новые, с момента выпуска которых прошло
// более 1 года, но менее 3 лет — 30 + 2 долл. США за куб. см».
const DUTY_PER_CC_1_TO_3_PETROL: { upTo: number; rate: number }[] = [
  { upTo: 1000, rate: 1.8 },
  { upTo: 1500, rate: 2.0 },
  { upTo: 3000, rate: 2.5 },
  { upTo: Infinity, rate: 3.0 },
]
const DUTY_PER_CC_1_TO_3_DIESEL: { upTo: number; rate: number }[] = [
  { upTo: 1500, rate: 2.0 },
  { upTo: 2500, rate: 2.5 },
  { upTo: Infinity, rate: 3.0 },
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
// У электромобилей (ТН ВЭД 8703 80) ставка пошлины 0% — это ПОСТОЯННАЯ ставка
// таможенного тарифа с 01.01.2019, а не срочная льгота. Срок «до 1 января 2030»
// (ПП-443 от 19.12.2022) относится к машинокомплектам и оборудованию для
// ПРОИЗВОДСТВА электромобилей, а не к их ввозу — прежняя привязка была неверной.
// От утилизационного сбора освобождения нет: с 01.05.2025 — 120 БРВ (не старше
// 3 лет) / 210 БРВ (старше).
const UTILIZATION_FEE_EV_BRV = { newCar: 120, usedCar: 210 }

// Registration: vehicle reg 6.84 + tech passport 0.7 + plates 5.5 = 13.04 БРВ.
const REGISTRATION_FEE_BRV = 6.84 + 0.7 + 5.5

// Default fallback rate. The currency-converter calculator pulls live rates
// from cbu.uz; pass `usdToUzs` explicitly for accurate cost projections.
const USD_UZS_FALLBACK = 11_938 // CBU reference rate, 1 May 2026
const VAT_RATE = 0.12 // 12%
/**
 * Экологическая сертификация ввозимых ТС категорий «M»/«N» ОТМЕНЕНА
 * с 20.09.2025: ПКМ РУз № 597 от 19.09.2025 признало утратившим силу
 * ПКМ № 50 от 30.01.2020, обязательные испытания на полигоне прекращены.
 * Здесь стояли 690 USD (≈8,2 млн сум) — они завышали итог растаможки.
 * Остаточная плата аккредитованному органу за сертификат соответствия —
 * ДОГОВОРНАЯ, гос-регулируемой ставки для неё в НПА нет, поэтому в
 * обязательный итог она не входит. Электромобили ПКМ-597 вообще исключает
 * из оценки экокласса.
 */
const CERTIFICATION_FEE_USD = 0

export function calculateCustomsClearance(
  input: CustomsInput,
  /** Live USD→UZS rate. Pass the current cbu.uz rate for accurate results. */
  usdToUzs: number = USD_UZS_FALLBACK,
): CustomsResult {
  const { carPrice, engineVolumeCc, fuelType } = input
  // Совместимость: старые вызовы передавали булев isNew.
  const ageBand: AgeBand = input.ageBand ?? (input.isNew ? 'upTo1' : 'used')
  const carPriceUzs = carPrice * usdToUzs

  // Электромобили: 0% пошлины и нет надбавки за см³ (постоянная ставка тарифа).
  const isElectric = fuelType === 'electric'

  // Customs duty = percentage component + USD-per-cc surcharge (0 for electric).
  let customsDuty = 0
  if (!isElectric) {
    const pct =
      ageBand === 'upTo1' ? CUSTOMS_DUTY_PCT_NEW
      : ageBand === 'from1to3' ? CUSTOMS_DUTY_PCT_1_TO_3
      : CUSTOMS_DUTY_PCT_USED
    let perCc: number
    if (ageBand === 'upTo1') {
      perCc = DUTY_PER_CC_NEW.find(t => engineVolumeCc <= t.upTo)?.rate ?? 1.0
    } else if (ageBand === 'from1to3') {
      const scale = fuelType === 'diesel' ? DUTY_PER_CC_1_TO_3_DIESEL : DUTY_PER_CC_1_TO_3_PETROL
      perCc = scale.find(t => engineVolumeCc <= t.upTo)?.rate ?? 3.0
    } else {
      perCc = DUTY_PER_CC_USED
    }
    customsDuty = carPriceUzs * pct + engineVolumeCc * perCc * usdToUzs
  }

  // No separate excise on cars — the per-cc charge is part of the customs duty.
  const exciseTax = 0

  // VAT: 12% of (car price + customs duty). Imported EVs still pay VAT.
  const vat = (carPriceUzs + customsDuty) * VAT_RATE

  // Utilization (recycling) fee — imported EVs also pay it (120/210 БРВ).
  // У утильсбора своя граница «новизны» — не старше 3 лет, поэтому средняя
  // возрастная группа считается по льготной ставке, в отличие от пошлины.
  const utilNew = ageBand !== 'used'
  let utilizationFee = 0
  if (isElectric) {
    utilizationFee = (utilNew ? UTILIZATION_FEE_EV_BRV.newCar : UTILIZATION_FEE_EV_BRV.usedCar) * BRV
  } else {
    const tier = UTILIZATION_FEE_BRV.find(t => engineVolumeCc <= t.upTo)
    if (tier) {
      utilizationFee = (utilNew ? tier.newCar : tier.usedCar) * BRV
    }
  }

  // Registration (vehicle reg + tech passport + plates) ≈ 13.04 БРВ.
  const registrationFee = REGISTRATION_FEE_BRV * BRV

  // Экологическая сертификация отменена (ПКМ-597) — строка остаётся в выдаче
  // нулём, чтобы не ломать типы и вёрстку у потребителей результата.
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
