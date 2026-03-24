/**
 * Unique Uzbekistan calculators: passport fees, state duties, wedding, cotton, remittances, visa, BRV
 */

const BRV = 412_000

// Passport Fees
export interface PassportFeesResult {
  type: string
  baseFee: number
  urgentFee: number
  totalFee: number
  isUrgent: boolean
  processingDays: number
}

export function calculatePassportFees(
  type: 'new' | 'replacement' | 'lost' | 'child' | 'biometric',
  isUrgent: boolean = false
): PassportFeesResult {
  const fees: Record<string, { base: number; urgent: number; days: number; urgentDays: number }> = {
    new: { base: BRV * 1, urgent: BRV * 2, days: 15, urgentDays: 3 },
    replacement: { base: BRV * 1, urgent: BRV * 2, days: 15, urgentDays: 3 },
    lost: { base: BRV * 2, urgent: BRV * 3, days: 15, urgentDays: 3 },
    child: { base: BRV * 0.5, urgent: BRV * 1, days: 10, urgentDays: 3 },
    biometric: { base: BRV * 2.5, urgent: BRV * 4, days: 15, urgentDays: 5 },
  }

  const fee = fees[type] ?? fees.new
  const totalFee = isUrgent ? fee.urgent : fee.base

  return {
    type,
    baseFee: fee.base,
    urgentFee: fee.urgent,
    totalFee,
    isUrgent,
    processingDays: isUrgent ? fee.urgentDays : fee.days,
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
  { type: 'marriage', brvMultiplier: 0.5, descriptionRu: 'Регистрация брака', descriptionUz: 'Nikohni ro\'yxatga olish' },
  { type: 'divorce', brvMultiplier: 1.5, descriptionRu: 'Расторжение брака', descriptionUz: 'Nikohni bekor qilish' },
  { type: 'birth_cert', brvMultiplier: 0.1, descriptionRu: 'Свидетельство о рождении', descriptionUz: 'Tug\'ilganlik haqida guvohnoma' },
  { type: 'court_civil', brvMultiplier: 3, descriptionRu: 'Подача иска в суд (имущество)', descriptionUz: 'Sudga da\'vo ariza (mulk)' },
  { type: 'court_divorce', brvMultiplier: 2, descriptionRu: 'Подача иска в суд (развод)', descriptionUz: 'Sudga da\'vo ariza (ajralish)' },
  { type: 'notary_power', brvMultiplier: 0.5, descriptionRu: 'Нотариальная доверенность', descriptionUz: 'Notarial ishonchnoma' },
  { type: 'notary_deal', brvMultiplier: 1, descriptionRu: 'Нотариальная сделка', descriptionUz: 'Notarial bitim' },
  { type: 'name_change', brvMultiplier: 1, descriptionRu: 'Смена имени/фамилии', descriptionUz: 'Ism/familiya o\'zgartirish' },
  { type: 'ip_registration', brvMultiplier: 1, descriptionRu: 'Регистрация ИП', descriptionUz: 'YaTT ro\'yxatga olish' },
  { type: 'llc_registration', brvMultiplier: 5, descriptionRu: 'Регистрация ООО', descriptionUz: 'MChJ ro\'yxatga olish' },
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
  costPerPlate: number = 150_000,
  musicBudget: number = 5_000_000,
  photographyBudget: number = 3_000_000,
  decorationBudget: number = 2_000_000,
  dressBudget: number = 10_000_000,
  transportBudget: number = 2_000_000
): WeddingResult {
  const venueRates: Record<string, number> = {
    restaurant: 100_000, banquet_hall: 80_000, home: 0, outdoor: 50_000,
  }

  const venueCost = guestCount * (venueRates[venueType] ?? 80_000)
  const foodCost = guestCount * costPerPlate
  const invitationsCost = guestCount * 10_000
  const otherCost = guestCount * 20_000

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
  yieldPerHectare: number = 2800, // kg per hectare average
  pricePerKg: number = 6_000, // UZS
  costsPerHectare: number = 8_000_000 // UZS
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
  exchangeRate: number = 12_192,
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
  insuranceCost: number
  photoCost: number
  totalCost: number
}

export const VISA_COSTS: Record<string, { consulateFee: number; serviceFee: number }> = {
  schengen: { consulateFee: 80 * 12_192, serviceFee: 30 * 12_192 },
  usa: { consulateFee: 185 * 12_192, serviceFee: 0 },
  uk: { consulateFee: 115 * 12_192, serviceFee: 50 * 12_192 },
  south_korea: { consulateFee: 40 * 12_192, serviceFee: 20 * 12_192 },
  japan: { consulateFee: 30 * 12_192, serviceFee: 25 * 12_192 },
  china: { consulateFee: 45 * 12_192, serviceFee: 35 * 12_192 },
  turkey: { consulateFee: 0, serviceFee: 0 }, // visa-free
  uae: { consulateFee: 0, serviceFee: 0 }, // visa-free
}

export function calculateVisaCost(
  country: string,
  insuranceDays: number = 30,
  insuranceRatePerDay: number = 15_000
): VisaCostResult {
  const visa = VISA_COSTS[country] ?? { consulateFee: 50 * 12_192, serviceFee: 25 * 12_192 }
  const insuranceCost = insuranceDays * insuranceRatePerDay
  const photoCost = 50_000 // approximate photo cost

  return {
    country,
    visaType: 'tourist',
    consulateFee: visa.consulateFee,
    serviceFee: visa.serviceFee,
    insuranceCost,
    photoCost,
    totalCost: visa.consulateFee + visa.serviceFee + insuranceCost + photoCost,
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
