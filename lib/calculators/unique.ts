/**
 * Unique Uzbekistan calculators: passport fees, state duties, wedding, cotton, remittances, visa, BRV
 */

import { BRV, brvToUzs } from '@/lib/constants/brv'
import { USD_UZS_FALLBACK } from '@/lib/constants/fx'

// Passport Fees
//
// Ставки — ЗРУ-600 «О государственной пошлине», приложение, п. 6 (в ред.
// ЗРУ-759 от 14.03.2022; «а»–«г» с тех пор не менялись):
//   а) ID-карта — 89% БРВ, одинаково для новорождённого, ребёнка и взрослого;
//   б) биометрический паспорт для выезда за границу — 1 БРВ;
//   в) он же гражданам до 16 лет — 80% БРВ.
// Отдельной пошлины за замену или утерю нет: новый документ оформляется в общем
// порядке по той же ставке (п. 53 Положения, ПП-4079; п. 9 Положения, УП-6065).
// Срочного/ускоренного оформления и надбавки за него нормы не предусматривают.
// Загранпаспорт через my.gov.uz (ЕПИГУ) — 90% пошлины (п. 27 Положения, ПП-4079).
// Сроки: ID-карта — 1 рабочий день (п. 9, 12 Положения, УП-6065); загранпаспорт —
// 10 рабочих дней (п. 31), при утере или порче могут продлить ещё на 10 (п. 54).
export type PassportDocType = 'id-card' | 'passport' | 'passport-child'
export type PassportReason = 'first' | 'replacement' | 'lost'

export const PASSPORT_FEE_BRV: Record<PassportDocType, number> = {
  'id-card': 0.89,
  passport: 1,
  'passport-child': 0.8,
}

/** Доля пошлины при подаче заявления на загранпаспорт через my.gov.uz (п. 27 Положения, ПП-4079) */
export const PASSPORT_ONLINE_SHARE = 0.9

export interface PassportFeesResult {
  type: PassportDocType
  reason: PassportReason
  brvMultiplier: number
  baseFee: number
  onlineApplied: boolean
  totalFee: number
  /** рабочих дней */
  processingDays: number
  /** верхняя граница, если срок могут продлить (утеря/порча загранпаспорта) */
  processingDaysMax: number
}

export function calculatePassportFees(
  type: PassportDocType,
  reason: PassportReason = 'first',
  online: boolean = false
): PassportFeesResult {
  const brvMultiplier = PASSPORT_FEE_BRV[type] ?? PASSPORT_FEE_BRV['id-card']
  const baseFee = brvToUzs(brvMultiplier)
  const isPassport = type !== 'id-card'
  const onlineApplied = online && isPassport
  const totalFee = onlineApplied ? Math.round(baseFee * PASSPORT_ONLINE_SHARE) : baseFee
  const processingDays = isPassport ? 10 : 1
  const processingDaysMax = isPassport && reason === 'lost' ? 20 : processingDays

  return {
    type,
    reason,
    brvMultiplier,
    baseFee,
    onlineApplied,
    totalFee,
    processingDays,
    processingDaysMax,
  }
}

// State Duties
export interface StateDutyResult {
  type: string
  amount: number
  brvMultiplier: number
  description: string
}

export const STATE_DUTIES: { type: string; brvMultiplier: number; descriptionRu: string; descriptionUz: string }[] = [
  { type: 'marriage', brvMultiplier: 0.2, descriptionRu: 'Регистрация брака', descriptionUz: 'Nikohni ro\'yxatga olish' },
  { type: 'divorce', brvMultiplier: 1.5, descriptionRu: 'Расторжение брака', descriptionUz: 'Nikohni bekor qilish' },
  { type: 'birth_cert', brvMultiplier: 0.1, descriptionRu: 'Свидетельство о рождении', descriptionUz: 'Tug\'ilganlik haqida guvohnoma' },
  { type: 'court_civil', brvMultiplier: 1, descriptionRu: 'Иск в суд (4% цены иска, мин. 1 БРВ)', descriptionUz: 'Sudga da\'vo (da\'vo qiymatining 4%, min. 1 BHM)' },
  { type: 'court_divorce', brvMultiplier: 2, descriptionRu: 'Подача иска в суд (развод)', descriptionUz: 'Sudga da\'vo ariza (ajralish)' },
  { type: 'notary_power', brvMultiplier: 0.5, descriptionRu: 'Нотариальная доверенность', descriptionUz: 'Notarial ishonchnoma' },
  { type: 'notary_deal', brvMultiplier: 1, descriptionRu: 'Нотариальная сделка', descriptionUz: 'Notarial bitim' },
  { type: 'name_change', brvMultiplier: 1, descriptionRu: 'Смена имени/фамилии', descriptionUz: 'Ism/familiya o\'zgartirish' },
  { type: 'ip_registration', brvMultiplier: 1, descriptionRu: 'Регистрация ИП', descriptionUz: 'YaTT ro\'yxatga olish' },
  { type: 'llc_registration', brvMultiplier: 1, descriptionRu: 'Регистрация ООО', descriptionUz: 'MChJ ro\'yxatga olish' },
]

export function calculateStateDuty(type: string): StateDutyResult {
  const duty = STATE_DUTIES.find(d => d.type === type)
  if (!duty) return { type, amount: 0, brvMultiplier: 0, description: 'Unknown' }
  return {
    type: duty.type,
    amount: BRV * duty.brvMultiplier,
    brvMultiplier: duty.brvMultiplier,
    description: duty.descriptionRu,
  }
}

// Wedding Calculator
export interface WeddingResult {
  guestCount: number
  venueType: string
  venueCost: number
  foodCost: number
  musicCost: number
  photographyCost: number
  decorationCost: number
  dressCost: number
  invitationsCost: number
  transportCost: number
  otherCost: number
  totalCost: number
  costPerGuest: number
}

export function calculateWedding(
  guestCount: number,
  venueType: 'restaurant' | 'banquet_hall' | 'home' | 'outdoor',
  // 2026 mid-market reference prices for Tashkent, sourced from event-planning
  // agencies. Pass explicit values for higher-end / luxury planning.
  costPerPlate: number = 200_000,
  musicBudget: number = 6_500_000,
  photographyBudget: number = 4_000_000,
  decorationBudget: number = 2_800_000,
  dressBudget: number = 13_000_000,
  transportBudget: number = 2_500_000
): WeddingResult {
  const venueRates: Record<string, number> = {
    restaurant: 130_000, banquet_hall: 100_000, home: 0, outdoor: 70_000,
  }

  const venueCost = guestCount * (venueRates[venueType] ?? 100_000)
  const foodCost = guestCount * costPerPlate
  const invitationsCost = guestCount * 13_000
  const otherCost = guestCount * 25_000

  const totalCost = venueCost + foodCost + musicBudget + photographyBudget +
    decorationBudget + dressBudget + invitationsCost + transportBudget + otherCost

  return {
    guestCount,
    venueType,
    venueCost,
    foodCost,
    musicCost: musicBudget,
    photographyCost: photographyBudget,
    decorationCost: decorationBudget,
    dressCost: dressBudget,
    invitationsCost,
    transportCost: transportBudget,
    otherCost,
    totalCost,
    costPerGuest: guestCount > 0 ? totalCost / guestCount : 0,
  }
}

// Cotton Yield Calculator
export interface CottonYieldResult {
  areaHectares: number
  yieldPerHectare: number
  totalYieldKg: number
  pricePerKg: number
  grossRevenue: number
  costs: number
  netProfit: number
}

export function calculateCottonYield(
  areaHectares: number,
  yieldPerHectare: number = 3000, // 2025 nationwide average per Uzpaxtasanoat
  pricePerKg: number = 9_000, // 2026 reference procurement price for raw cotton (seed cotton)
  costsPerHectare: number = 11_000_000 // 2026 inputs incl. seeds, fertilizer, water, labor
): CottonYieldResult {
  const totalYieldKg = areaHectares * yieldPerHectare
  const grossRevenue = totalYieldKg * pricePerKg
  const costs = areaHectares * costsPerHectare
  return {
    areaHectares,
    yieldPerHectare,
    totalYieldKg,
    pricePerKg,
    grossRevenue,
    costs,
    netProfit: grossRevenue - costs,
  }
}

// Remittances Calculator
export interface RemittanceResult {
  sendAmount: number
  sendCurrency: string
  receiveAmount: number
  receiveCurrency: string
  exchangeRate: number
  fee: number
  feePercent: number
  totalCost: number
  effectiveRate: number
}

export function calculateRemittance(
  sendAmount: number,
  sendCurrency: string = 'USD',
  /** USD→UZS rate. Default is a fallback; pass the live cbu.uz rate. */
  exchangeRate: number = USD_UZS_FALLBACK,
  feePercent: number = 1.5
): RemittanceResult {
  const fee = sendAmount * feePercent / 100
  const netAmount = sendAmount - fee
  const receiveAmount = netAmount * exchangeRate
  const effectiveRate = sendAmount > 0 ? receiveAmount / sendAmount : 0

  return {
    sendAmount,
    sendCurrency,
    receiveAmount,
    receiveCurrency: 'UZS',
    exchangeRate,
    fee,
    feePercent,
    totalCost: fee,
    effectiveRate,
  }
}

// Visa Cost Calculator
export interface VisaCostResult {
  country: string
  visaType: string
  consulateFee: number
  serviceFee: number
  /** Country-specific additional fee (e.g. USA Visa Integrity Fee) in UZS */
  additionalFee: number
  additionalFeeNote?: string
  insuranceCost: number
  photoCost: number
  totalCost: number
}

export const VISA_COSTS_USD: Record<
  string,
  { consulateFeeUsd: number; serviceFeeUsd: number; additionalFeeUsd?: number; additionalFeeNoteRu?: string; additionalFeeNoteUz?: string }
> = {
  schengen: { consulateFeeUsd: 90, serviceFeeUsd: 30 }, // €80 raised to €90 from June 2024
  usa: {
    consulateFeeUsd: 185,
    serviceFeeUsd: 0,
    additionalFeeUsd: 250,
    additionalFeeNoteRu: 'Visa Integrity Fee (с октября 2024) — оплачивается при выдаче визы',
    additionalFeeNoteUz: 'Visa Integrity Fee (2024-yil oktyabrdan) — viza berilganda to\'lanadi',
  },
  uk: { consulateFeeUsd: 115, serviceFeeUsd: 50 },
  south_korea: { consulateFeeUsd: 40, serviceFeeUsd: 20 },
  japan: { consulateFeeUsd: 30, serviceFeeUsd: 25 },
  china: { consulateFeeUsd: 45, serviceFeeUsd: 35 },
  turkey: { consulateFeeUsd: 0, serviceFeeUsd: 0 },
  uae: { consulateFeeUsd: 0, serviceFeeUsd: 0 },
}

export function calculateVisaCost(
  country: string,
  exchangeRate: number = USD_UZS_FALLBACK,
  insuranceDays: number = 30,
  insuranceRatePerDay: number = 15_000
): VisaCostResult {
  const visa = VISA_COSTS_USD[country] ?? { consulateFeeUsd: 50, serviceFeeUsd: 25 }
  const consulateFee = visa.consulateFeeUsd * exchangeRate
  const serviceFee = visa.serviceFeeUsd * exchangeRate
  const additionalFee = (visa.additionalFeeUsd ?? 0) * exchangeRate
  const insuranceCost = insuranceDays * insuranceRatePerDay
  const photoCost = 50_000

  return {
    country,
    visaType: 'tourist',
    consulateFee,
    serviceFee,
    additionalFee,
    additionalFeeNote: visa.additionalFeeNoteRu,
    insuranceCost,
    photoCost,
    totalCost: consulateFee + serviceFee + additionalFee + insuranceCost + photoCost,
  }
}

// BRV Calculator
export interface BRVResult {
  brvValue: number
  multiplier: number
  totalAmount: number
}

export function calculateBRV(multiplier: number): BRVResult {
  return { brvValue: BRV, multiplier, totalAmount: BRV * multiplier }
}
