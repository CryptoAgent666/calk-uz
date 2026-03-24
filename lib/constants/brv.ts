/**
 * Base Calculation Value (БРВ / BHM) and related constants for Uzbekistan
 * Updated: August 2025
 */

/** Base Calculation Value in UZS (Базовая расчётная величина / Bazaviy hisoblash miqdori) */
export const BRV = 412_000

/** Minimum wage in UZS (Минимальная зарплата / Minimal ish haqi) */
export const MIN_WAGE = 1_271_000

/** Central Bank key rate (Ставка рефинансирования / Qayta moliyalashtirish stavkasi) */
export const CB_RATE = 0.14

/** Daily penalty rate for overdue taxes (1/300 of CB rate) */
export const PENALTY_RATE = CB_RATE / 300

/** Convert BRV multiples to UZS */
export function brvToUzs(multiplier: number): number {
  return Math.round(BRV * multiplier)
}

/** Convert UZS to BRV multiples */
export function uzsToBrv(uzs: number): number {
  return uzs / BRV
}
