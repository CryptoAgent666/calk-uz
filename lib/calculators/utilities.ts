/**
 * Utility bills calculator for Uzbekistan.
 *
 * Электричество и газ — единые по стране тарифы (ПКМ-243, с 1 июня 2026),
 * берутся из lib/constants/utility-tariffs.
 *
 * Вода и вывоз мусора — региональные: тарифы утверждают областные кенгаши, и
 * различаются они в разы (lib/constants/utility-regions). Город Ташкент — самый
 * дешёвый регион по воде, так что расчёт «по Ташкенту» занижал счёт жителям
 * всех остальных областей.
 *
 * Отопление и горячая вода — по умолчанию тарифы Ташкента. Региональные тарифы
 * существуют, но публикуются только решениями хокимов в PDF, в разных единицах,
 * а во многих городах центральное отопление почти не доходит до жилых домов.
 * Выбор региона создал бы видимость точности, поэтому здесь принимается свой
 * тариф из квитанции.
 */

import {
  ELECTRICITY_TIERS as ELECTRICITY_TARIFF,
  GAS_TIERS_SUMMER,
  GAS_TIERS_WINTER,
  HEATING_RATE_PER_M2_DAY,
  WATER_HOT_RATE,
  type TariffTier as TariffSpec,
} from '@/lib/constants/utility-tariffs'
import {
  DEFAULT_REGION,
  UTILITY_REGIONS,
  VAT_RATE,
  type UtilityRegion,
} from '@/lib/constants/utility-regions'

interface TariffTier {
  upTo: number
  rate: number
}

// Ступени — из констант, без второй копии тарифов в этом файле.
const toTiers = (spec: TariffSpec[]): TariffTier[] =>
  spec.map((tier) => ({ upTo: tier.upTo ?? Infinity, rate: tier.pricePerUnit }))

const ELECTRICITY_TIERS = toTiers(ELECTRICITY_TARIFF)
const GAS_SUMMER_TIERS = toTiers(GAS_TIERS_SUMMER)
const GAS_WINTER_TIERS = toTiers(GAS_TIERS_WINTER)

function calculateTiered(consumption: number, tiers: TariffTier[]): { total: number; breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[] } {
  let remaining = consumption
  let prevLimit = 0
  const breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[] = []
  let total = 0

  for (const tier of tiers) {
    if (remaining <= 0) break
    const tierCapacity = tier.upTo - prevLimit
    const amount = Math.min(remaining, tierCapacity)
    const cost = amount * tier.rate
    breakdown.push({ from: prevLimit, to: prevLimit + amount, amount, rate: tier.rate, cost })
    total += cost
    remaining -= amount
    prevLimit = tier.upTo
  }

  return { total, breakdown }
}

export interface ElectricityResult {
  consumption: number
  total: number
  hasElectricStove: boolean
  discount: number
  finalTotal: number
  breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[]
}

export function calculateElectricity(consumptionKwh: number, hasElectricStove: boolean = false): ElectricityResult {
  const result = calculateTiered(consumptionKwh, ELECTRICITY_TIERS)
  const discount = hasElectricStove ? result.total * 0.5 : 0
  return {
    consumption: consumptionKwh,
    total: result.total,
    hasElectricStove,
    discount,
    finalTotal: result.total - discount,
    breakdown: result.breakdown,
  }
}

export interface GasResult {
  consumption: number
  total: number
  isSummer: boolean
  breakdown: { from: number; to: number; amount: number; rate: number; cost: number }[]
}

export function calculateGas(consumptionM3: number, isSummer: boolean = true): GasResult {
  const tiers = isSummer ? GAS_SUMMER_TIERS : GAS_WINTER_TIERS
  const result = calculateTiered(consumptionM3, tiers)
  return {
    consumption: consumptionM3,
    total: result.total,
    isSummer,
    breakdown: result.breakdown,
  }
}

export function getUtilityRegion(regionId?: string): UtilityRegion {
  return UTILITY_REGIONS.find((region) => region.id === regionId) ?? DEFAULT_REGION
}

export interface ColdWaterOptions {
  /** Дом подключён к канализации. */
  hasSewerage: boolean
  /** В доме есть центральное горячее водоснабжение. */
  centralHotWater: boolean
}

/**
 * Цена 1 м³ холодной воды по счётчику с НДС — так, как её выводит оператор в
 * тарифном листе. Без канализации это только вода, с канализацией — вода плюс
 * стоки. При центральном горячем водоснабжении стоки горячей воды начисляются
 * на счётчик холодной с региональным коэффициентом.
 */
export function coldWaterRatePerM3(region: UtilityRegion, { hasSewerage, centralHotWater }: ColdWaterOptions): number {
  const sewerageFactor = !hasSewerage ? 0 : centralHotWater ? region.water.hotWaterSewerageFactor : 1
  return Math.round((region.water.waterNet + region.water.sewerageNet * sewerageFactor) * (1 + VAT_RATE))
}

export interface WaterOptions extends Partial<ColdWaterOptions> {
  regionId?: string
  /** Тариф горячей воды, сум/м³. По умолчанию — Ташкент. */
  hotWaterRate?: number
}

export interface WaterResult {
  regionId: string
  coldConsumption: number
  hotConsumption: number
  coldRate: number
  hotRate: number
  coldCost: number
  hotCost: number
  total: number
}

export function calculateWater(coldM3: number, hotM3: number, options: WaterOptions = {}): WaterResult {
  const region = getUtilityRegion(options.regionId)
  const coldRate = coldWaterRatePerM3(region, {
    hasSewerage: options.hasSewerage ?? true,
    centralHotWater: options.centralHotWater ?? region.water.centralHotWaterDefault,
  })
  const hotRate = options.hotWaterRate ?? WATER_HOT_RATE
  const coldCost = coldM3 * coldRate
  const hotCost = hotM3 * hotRate
  return {
    regionId: region.id,
    coldConsumption: coldM3,
    hotConsumption: hotM3,
    coldRate,
    hotRate,
    coldCost,
    hotCost,
    total: coldCost + hotCost,
  }
}

export interface HeatingResult {
  areaM2: number
  daysInMonth: number
  dailyRate: number
  total: number
}

export function calculateHeating(
  areaM2: number,
  daysInMonth: number = 30,
  ratePerM2PerDay: number = HEATING_RATE_PER_M2_DAY
): HeatingResult {
  const total = areaM2 * ratePerM2PerDay * daysInMonth
  return { areaM2, daysInMonth, dailyRate: ratePerM2PerDay, total }
}

export interface UtilitiesTotalResult {
  electricity: ElectricityResult
  gas: GasResult
  water: WaterResult
  heating: HeatingResult
  wastePerPerson: number
  waste: number
  grandTotal: number
}

export function calculateUtilitiesTotal(params: {
  electricityKwh: number
  hasElectricStove?: boolean
  gasM3: number
  isSummer?: boolean
  coldWaterM3: number
  hotWaterM3: number
  heatingAreaM2: number
  heatingDays?: number
  persons: number
  regionId?: string
  hasSewerage?: boolean
  centralHotWater?: boolean
  hotWaterRate?: number
  heatingRatePerM2PerDay?: number
}): UtilitiesTotalResult {
  const electricity = calculateElectricity(params.electricityKwh, params.hasElectricStove)
  const gas = calculateGas(params.gasM3, params.isSummer)
  const water = calculateWater(params.coldWaterM3, params.hotWaterM3, {
    regionId: params.regionId,
    hasSewerage: params.hasSewerage,
    centralHotWater: params.centralHotWater,
    hotWaterRate: params.hotWaterRate,
  })
  const heating = calculateHeating(params.heatingAreaM2, params.heatingDays, params.heatingRatePerM2PerDay)
  const wastePerPerson = getUtilityRegion(params.regionId).waste.center
  const waste = params.persons * wastePerPerson

  return {
    electricity,
    gas,
    water,
    heating,
    wastePerPerson,
    waste,
    grandTotal: electricity.finalTotal + gas.total + water.total + heating.total + waste,
  }
}
