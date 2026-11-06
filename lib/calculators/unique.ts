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

// Ставки: приложение к Закону «О государственной пошлине» (ЗРУ-600), lex.uz/ru/docs/4680955.
export const STATE_DUTIES: { type: string; brvMultiplier: number; descriptionRu: string; descriptionUz: string }[] = [
  { type: 'marriage', brvMultiplier: 0.2, descriptionRu: 'Регистрация брака', descriptionUz: 'Nikohni ro\'yxatga olish' },
  { type: 'divorce', brvMultiplier: 1.5, descriptionRu: 'Расторжение брака в ЗАГСе по взаимному согласию (нет несовершеннолетних детей)', descriptionUz: 'FHDYoda o\'zaro rozilik bilan ajrashish (voyaga yetmagan farzand yo\'q)' },
  { type: 'repeat_cert', brvMultiplier: 0.15, descriptionRu: 'Повторное свидетельство ЗАГС', descriptionUz: 'FHDYo takroriy guvohnomasi' },
  { type: 'court_civil', brvMultiplier: 1, descriptionRu: 'Имущественный иск в гражданский суд: 4% цены, показан минимум 1 БРВ', descriptionUz: 'Fuqarolik sudiga mulkiy da\'vo: bahoning 4%, minimum 1 BHK ko\'rsatilgan' },
  { type: 'court_divorce', brvMultiplier: 2, descriptionRu: 'Иск о расторжении брака', descriptionUz: 'Nikohni bekor qilish haqida da\'vo' },
  { type: 'court_divorce_repeat', brvMultiplier: 4, descriptionRu: 'Иск о расторжении повторного брака', descriptionUz: 'Takroriy nikohni bekor qilish haqida da\'vo' },
  { type: 'notary_power', brvMultiplier: 0.1, descriptionRu: 'Нотариальная доверенность, кроме авто и недвижимости', descriptionUz: 'Notarial ishonchnoma (avtomobil va ko\'chmas mulkdan tashqari)' },
  { type: 'notary_will', brvMultiplier: 0.05, descriptionRu: 'Удостоверение завещания', descriptionUz: 'Vasiyatnomani tasdiqlash' },
  { type: 'notary_deal', brvMultiplier: 1, descriptionRu: 'Договор о продаже недвижимости (Ташкент, Нукус, облцентры)', descriptionUz: 'Ko\'chmas mulkni sotish shartnomasi (Toshkent, Nukus, viloyat markazlari)' },
  { type: 'notary_car', brvMultiplier: 3, descriptionRu: 'Договор о продаже автомобиля', descriptionUz: 'Avtomobilni sotish shartnomasi' },
  { type: 'name_change', brvMultiplier: 1, descriptionRu: 'Смена имени или фамилии (старше 18 лет)', descriptionUz: 'Ism yoki familiyani o\'zgartirish (18 yoshdan katta)' },
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
  /** Сбор, который может добавиться (Visa Integrity Fee в США), в сумах. В итог не входит. */
  possibleFee: number
  possibleFeeNoteRu?: string
  possibleFeeNoteUz?: string
  insuranceCost: number
  photoCost: number
  totalCost: number
}

export type VisaFeeCurrency = 'USD' | 'EUR' | 'GBP'

/**
 * Суммы указаны в валюте сбора: сбор за Шенген установлен в евро, за Великобританию в фунтах.
 * До 03.11.2026 все считались по курсу доллара, и Шенген выходил дешевле на ~12%.
 * Китай (с 01.06.2025, 30 дней) и ОАЭ (30 дней): виза для туристической поездки не нужна.
 * Япония: консульского сбора для граждан Узбекистана нет, сервисный сбор — услуги агентства.
 */
export const VISA_COSTS: Record<
  string,
  { currency: VisaFeeCurrency; consulateFee: number; serviceFee: number; possibleFee?: number; possibleFeeNoteRu?: string; possibleFeeNoteUz?: string }
> = {
  schengen: { currency: 'EUR', consulateFee: 90, serviceFee: 30 },
  usa: {
    currency: 'USD',
    consulateFee: 185,
    serviceFee: 0,
    possibleFee: 250,
    possibleFeeNoteRu: 'Visa Integrity Fee: введён законом США в июле 2025 года, начало сбора уточняйте на сайте посольства',
    possibleFeeNoteUz: 'Visa Integrity Fee: AQSh qonuni bilan 2025-yil iyulida joriy etilgan, undirish boshlanishini elchixona saytidan aniqlang',
  },
  uk: { currency: 'GBP', consulateFee: 135, serviceFee: 40 },
  south_korea: { currency: 'USD', consulateFee: 40, serviceFee: 20 },
  japan: { currency: 'USD', consulateFee: 0, serviceFee: 25 },
  china: { currency: 'USD', consulateFee: 0, serviceFee: 0 },
  turkey: { currency: 'USD', consulateFee: 0, serviceFee: 0 },
  uae: { currency: 'USD', consulateFee: 0, serviceFee: 0 },
}

export function visaFeeCurrency(country: string): VisaFeeCurrency {
  return VISA_COSTS[country]?.currency ?? 'USD'
}

/** exchangeRate — сум за 1 единицу валюты сбора, см. visaFeeCurrency. */
export function calculateVisaCost(
  country: string,
  exchangeRate: number = USD_UZS_FALLBACK,
  insuranceDays: number = 30,
  insuranceRatePerDay: number = 15_000
): VisaCostResult {
  const visa = VISA_COSTS[country] ?? { currency: 'USD' as const, consulateFee: 50, serviceFee: 25 }
  const consulateFee = visa.consulateFee * exchangeRate
  const serviceFee = visa.serviceFee * exchangeRate
  const possibleFee = (visa.possibleFee ?? 0) * exchangeRate
  const insuranceCost = insuranceDays * insuranceRatePerDay
  const photoCost = 50_000

  return {
    country,
    visaType: 'tourist',
    consulateFee,
    serviceFee,
    possibleFee,
    possibleFeeNoteRu: visa.possibleFeeNoteRu,
    possibleFeeNoteUz: visa.possibleFeeNoteUz,
    insuranceCost,
    photoCost,
    totalCost: consulateFee + serviceFee + insuranceCost + photoCost,
  }
}

// Аренда или покупка
export interface RentVsBuyInput {
  monthlyRent: number
  price: number
  /** Все доли и ставки — годовые, в долях единицы: 0.2 = 20% */
  downPaymentShare: number
  mortgageRate: number
  termYears: number
  horizonYears: number
  rentGrowth: number
  priceGrowth: number
  depositRate: number
  /** Налог, страховка и ремонт за год, доля от цены квартиры */
  ownershipCostShare: number
  /** Оформление покупки: нотариус, регистрация, оценка, риелтор */
  closingCostShare?: number
}

export interface RentVsBuyResult {
  loanAmount: number
  upfrontCost: number
  monthlyPayment: number
  firstMonthOwnerCost: number
  firstMonthRent: number
  rentPaidTotal: number
  ownerPaidTotal: number
  propertyValue: number
  remainingBalance: number
  buyerWealth: number
  renterWealth: number
  /** Больше нуля — выгоднее покупка, меньше нуля — аренда */
  buyAdvantage: number
  /** Рост цен в год, при котором варианты сравняются; null, если покупка выгоднее при любом росте */
  breakEvenPriceGrowth: number | null
}

/**
 * Сравнивает капитал к концу срока при одинаковом бюджете: кто в этом месяце платит
 * меньше, кладёт разницу на вклад. Арендатор кладёт на вклад и то, что покупатель
 * отдал в начале: взнос и оформление. Коммунальные одинаковы и в расчёт не входят.
 * Аренда и расходы владельца индексируются раз в год, расходы на продажу не учтены.
 */
export function calculateRentVsBuy(input: RentVsBuyInput): RentVsBuyResult {
  const { monthlyRent, price, downPaymentShare, mortgageRate, termYears, horizonYears, rentGrowth, priceGrowth, depositRate, ownershipCostShare, closingCostShare = 0.02 } = input
  const downPayment = price * downPaymentShare
  const loanAmount = Math.max(price - downPayment, 0)
  const upfrontCost = downPayment + price * closingCostShare
  const termMonths = Math.round(termYears * 12)
  const horizonMonths = Math.round(horizonYears * 12)
  const loanRate = mortgageRate / 12
  const savingsRate = depositRate / 12

  let monthlyPayment = 0
  if (loanAmount > 0 && termMonths > 0) {
    monthlyPayment = loanRate > 0
      ? (loanAmount * loanRate * Math.pow(1 + loanRate, termMonths)) / (Math.pow(1 + loanRate, termMonths) - 1)
      : loanAmount / termMonths
  }

  let balance = loanAmount
  let renterSavings = upfrontCost
  let buyerSavings = 0
  let rentPaidTotal = 0
  let ownerPaidTotal = upfrontCost

  for (let month = 0; month < horizonMonths; month++) {
    const indexation = Math.pow(1 + rentGrowth, Math.floor(month / 12))
    const rent = monthlyRent * indexation
    const ownership = (price * ownershipCostShare * indexation) / 12
    const payment = balance > 0 ? monthlyPayment : 0
    const ownerCost = payment + ownership

    balance = balance > 0 ? Math.max(balance * (1 + loanRate) - payment, 0) : 0
    renterSavings *= 1 + savingsRate
    buyerSavings *= 1 + savingsRate
    if (ownerCost > rent) renterSavings += ownerCost - rent
    else buyerSavings += rent - ownerCost

    rentPaidTotal += rent
    ownerPaidTotal += ownerCost
  }

  const propertyValue = price * Math.pow(1 + priceGrowth, horizonYears)
  const buyerWealth = propertyValue - balance + buyerSavings
  const neededValue = renterSavings + balance - buyerSavings

  return {
    loanAmount,
    upfrontCost,
    monthlyPayment,
    firstMonthOwnerCost: monthlyPayment + (price * ownershipCostShare) / 12,
    firstMonthRent: monthlyRent,
    rentPaidTotal,
    ownerPaidTotal,
    propertyValue,
    remainingBalance: balance,
    buyerWealth,
    renterWealth: renterSavings,
    buyAdvantage: buyerWealth - renterSavings,
    breakEvenPriceGrowth: neededValue > 0 && price > 0 ? Math.pow(neededValue / price, 1 / horizonYears) - 1 : null,
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
