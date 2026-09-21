/**
 * Base Calculation Value (БРВ / BHM) and related constants for Uzbekistan
 * Updated: 1 September 2026 — Указ Президента УП-115 от 23.06.2026
 * (БРВ 412 000 → 440 000, МРОТ 1 271 000 → 1 360 000, обе базы +7%).
 * https://www.lex.uz/ru/docs/8283680
 */

/** Base Calculation Value in UZS (Базовая расчётная величина / Bazaviy hisoblash miqdori) */
export const BRV = 440_000 // с 01.09.2026; было 412_000 с августа 2025

/** Minimum wage in UZS (Минимальная зарплата / Minimal ish haqi) */
export const MIN_WAGE = 1_360_000 // с 01.09.2026; было 1_271_000 с августа 2025

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
