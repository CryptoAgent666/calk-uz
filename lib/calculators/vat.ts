/**
 * VAT (QQS/НДС) calculator for Uzbekistan
 * Standard rate: 12%
 */

const VAT_RATE = 0.12

export interface VatResult {
  amountWithoutVat: number
  vatAmount: number
  amountWithVat: number
  vatRate: number
}

export function addVat(amountWithoutVat: number, rate: number = VAT_RATE): VatResult {
  const vatAmount = amountWithoutVat * rate
  return {
    amountWithoutVat,
    vatAmount,
    amountWithVat: amountWithoutVat + vatAmount,
    vatRate: rate * 100,
  }
}

export function extractVat(amountWithVat: number, rate: number = VAT_RATE): VatResult {
  const amountWithoutVat = amountWithVat / (1 + rate)
  const vatAmount = amountWithVat - amountWithoutVat
  return {
    amountWithoutVat,
    vatAmount,
    amountWithVat,
    vatRate: rate * 100,
  }
}

export interface VatThresholdResult {
  currentTurnover: number
  threshold: number
  remainingToThreshold: number
  percentUsed: number
  mustRegister: boolean
  monthlyAverage: number
  estimatedMonthsToThreshold: number
}

export function calculateVatThreshold(
  monthlyTurnovers: number[],
  threshold: number = 1_000_000_000
): VatThresholdResult {
  const currentTurnover = monthlyTurnovers.reduce((sum, t) => sum + t, 0)
  const remainingToThreshold = Math.max(0, threshold - currentTurnover)
  const percentUsed = (currentTurnover / threshold) * 100
  const monthlyAverage = monthlyTurnovers.length > 0
    ? currentTurnover / monthlyTurnovers.length
    : 0
  const estimatedMonthsToThreshold = monthlyAverage > 0
    ? Math.ceil(remainingToThreshold / monthlyAverage)
    : Infinity

  return {
    currentTurnover,
    threshold,
    remainingToThreshold,
    percentUsed: Math.min(100, percentUsed),
    mustRegister: currentTurnover >= threshold,
    monthlyAverage,
    estimatedMonthsToThreshold: estimatedMonthsToThreshold === Infinity ? 0 : estimatedMonthsToThreshold,
  }
}
