/**
 * Religious calculators: Zakat, Fitr Sadaqa, Fidiya Sadaqa, Kurban
 */

// Zakat Calculator (2.5% of wealth above nisab)
export interface ZakatResult {
  totalWealth: number
  nisab: number
  isZakatDue: boolean
  zakatableAmount: number
  zakatAmount: number
  breakdown: { category: string; amount: number }[]
}

export function calculateZakat(assets: {
  cash: number
  bankDeposits: number
  goldGrams: number
  silverGrams: number
  investments: number
  businessInventory: number
  receivables: number
  debtsOwed: number
}, goldPricePerGram: number = 850_000): ZakatResult {
  // Nisab = value of 85 grams of gold
  const nisab = 85 * goldPricePerGram

  const goldValue = assets.goldGrams * goldPricePerGram
  const silverValue = assets.silverGrams * (goldPricePerGram / 80) // Approximate ratio

  const totalWealth =
    assets.cash +
    assets.bankDeposits +
    goldValue +
    silverValue +
    assets.investments +
    assets.businessInventory +
    assets.receivables -
    assets.debtsOwed

  const isZakatDue = totalWealth >= nisab
  const zakatableAmount = isZakatDue ? totalWealth : 0
  const zakatAmount = zakatableAmount * 0.025

  const breakdown = [
    { category: 'cash', amount: assets.cash },
    { category: 'bank_deposits', amount: assets.bankDeposits },
    { category: 'gold', amount: goldValue },
    { category: 'silver', amount: silverValue },
    { category: 'investments', amount: assets.investments },
    { category: 'business_inventory', amount: assets.businessInventory },
    { category: 'receivables', amount: assets.receivables },
    { category: 'debts_owed', amount: -assets.debtsOwed },
  ]

  return { totalWealth, nisab, isZakatDue, zakatableAmount, zakatAmount, breakdown }
}

// Fitr Sadaqa (Sadaqatul Fitr)
export interface FitrSadaqaResult {
  familyMembers: number
  amountPerPerson: number
  totalAmount: number
  inKg: number
  productType: string
}

export function calculateFitrSadaqa(
  familyMembers: number,
  productType: 'wheat' | 'rice' | 'dates' = 'wheat',
  pricePerKg: number = 15_000 // approximate price per kg
): FitrSadaqaResult {
  // 1 sa' ≈ 2.5 kg of staple food per person
  const kgPerPerson = 2.5
  const inKg = kgPerPerson * familyMembers
  const amountPerPerson = kgPerPerson * pricePerKg
  const totalAmount = amountPerPerson * familyMembers

  return {
    familyMembers,
    amountPerPerson,
    totalAmount,
    inKg,
    productType,
  }
}

// Fidiya Sadaqa (compensation for missed fasts)
export interface FidiyaSadaqaResult {
  missedDays: number
  costPerDay: number
  totalAmount: number
}

export function calculateFidiyaSadaqa(
  missedDays: number,
  costPerMeal: number = 30_000 // cost of one meal for a poor person
): FidiyaSadaqaResult {
  // Fidiya = feeding one poor person for each missed day (2 meals)
  const costPerDay = costPerMeal * 2
  return {
    missedDays,
    costPerDay,
    totalAmount: costPerDay * missedDays,
  }
}

// Kurban (Qurbon) Calculator
export interface KurbanResult {
  animalType: string
  pricePerAnimal: number
  shareCount: number
  pricePerShare: number
  totalCost: number
  meatEstimateKg: number
}

export function calculateKurban(
  animalType: 'sheep' | 'goat' | 'cow' | 'camel',
  pricePerAnimal: number,
  shares: number = 1
): KurbanResult {
  const maxShares: Record<string, number> = { sheep: 1, goat: 1, cow: 7, camel: 7 }
  const meatEstimate: Record<string, number> = { sheep: 20, goat: 15, cow: 200, camel: 300 }

  const actualShares = Math.min(shares, maxShares[animalType] || 1)
  const pricePerShare = pricePerAnimal / (maxShares[animalType] || 1)

  return {
    animalType,
    pricePerAnimal,
    shareCount: actualShares,
    pricePerShare,
    totalCost: pricePerShare * actualShares,
    meatEstimateKg: (meatEstimate[animalType] || 0) / (maxShares[animalType] || 1) * actualShares,
  }
}
