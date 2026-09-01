/**
 * Tax rates for Uzbekistan (2025)
 * Source: Tax Code of the Republic of Uzbekistan
 */
import { BRV } from './brv'

/**
 * Mandatory VAT-registration / turnover-tax → general-regime turnover threshold.
 * 12,000 БРВ (БРВ-indexed) since 1 Jun 2026 (Указ УП-100 от 26.05.2026); was a
 * fixed 1 млрд UZS. At БРВ=412,000 → 4,944,000,000 UZS; auto-rises with БРВ
 * (→ 5.28 млрд from 1 Sep 2026). NB: the separate 1% ИП / self-employed regime
 * keeps its own 1 млрд ceiling (ПП-247) — a different figure, do not conflate.
 */
export const VAT_MANDATORY_REGISTRATION_THRESHOLD = 12_000 * BRV

export const TAX_RATES = {
  /** Personal income tax (НДФЛ / JSHSHS) — standard rate */
  NDFL: 0.12,

  /** Personal income tax for IT Park residents */
  NDFL_IT_PARK: 0.075,

  /** Value-added tax (НДС / QQS) */
  VAT: 0.12,

  /** Corporate profit tax (Налог на прибыль / Foyda solig'i) */
  CORPORATE_TAX: 0.15,

  /** Social tax paid by employer (Социальный налог) */
  SOCIAL_TAX: 0.12,

  /** Social tax for budget organizations */
  SOCIAL_TAX_BUDGET: 0.25,

  /** Individual accumulative pension contribution (ИНПС) */
  INPS: 0.001,

  /** Turnover tax for simplified taxation (Налог с оборота / Aylanma solig'i) */
  TURNOVER_TAX: 0.04,

  /** Self-employed tax rate */
  SELF_EMPLOYED_TAX: 0.01,

  /** Property tax — residential, up to 200 m2 (2026, indexed +7%) */
  PROPERTY_TAX_RESIDENTIAL_SMALL: 0.0036,

  /** Property tax — residential, 200-500 m2 (2026, indexed +7%) */
  PROPERTY_TAX_RESIDENTIAL_MEDIUM: 0.0048,

  /** Property tax — residential, over 500 m2 (2026, indexed +7%) */
  PROPERTY_TAX_RESIDENTIAL_LARGE: 0.0064,

  /** Property tax — legal entities */
  PROPERTY_TAX_LEGAL: 0.015,

  /** Land tax — agricultural land */
  LAND_TAX_AGRICULTURAL: 0.0095,
} as const

export type TaxRateKey = keyof typeof TAX_RATES
