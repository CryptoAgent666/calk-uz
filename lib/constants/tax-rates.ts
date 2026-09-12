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

  /**
   * ИНПС — обязательный накопительный пенсионный взнос, 0,1%.
   * ВНИМАНИЕ: это НЕ удержание сверх НДФЛ. Исчисленный налог уменьшается на
   * сумму взноса (НК ст. 385; ПП-4086 от 26.12.2018 п. 5), поэтому с работника
   * удерживается 12% всего, а не 12,1%: 11,9% в бюджет + 0,1% на его счёт.
   */
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

  /**
   * Земельный налог за земли СЕЛЬСКОХОЗЯЙСТВЕННОГО назначения — 0,95% нормативной
   * стоимости угодий. НК ст. 429 (юрлица, ред. ЗРУ-659, с 01.01.2021) и ст. 437
   * (физлица и дехканские хозяйства, ред. ЗРУ-1128, с 14.07.2026). Надбавки
   * «+7% индексации» к ставке в НК нет — до 13.09.2026 калькулятор ошибочно
   * умножал её на 1,07. Кенгаши вправе применить коэффициент 0,5–1,2.
   */
  LAND_TAX_AGRICULTURAL: 0.0095,
} as const

export type TaxRateKey = keyof typeof TAX_RATES

/**
 * Земельный налог за земли НЕсельскохозяйственного назначения — базовые ставки 2026 года.
 *
 * Процентной ставки у этих земель НЕТ (до 13.09.2026 калькулятор считал 1,2% × 1,07
 * от «нормативной стоимости» — такой нормы не существует). База — площадь участка
 * (ст. 427, 435 НК), ставка — абсолютная сумма по региону, в Ташкенте — по зоне:
 *   юрлица  — сум за 1 гектар, НК ст. 429 ч.1;
 *   физлица — сум за 1 кв. м,  НК ст. 437 ч.1.
 * Обе таблицы — в ред. ЗРУ-1108 от 25.12.2025, в силе с 01.01.2026; сверено по
 * lex.uz/ru/docs/4674893 13.09.2026. Таблицы меняются законом о бюджете —
 * на 2027 год сверять заново.
 *
 * Базовая ставка не окончательная (ст. 429, 437):
 *   области и Каракалпакстан — кенгаш области устанавливает ставки районов и
 *     городов с коэффициентом 0,5–2,0, затем кенгаш района (города) вводит
 *     коэффициент 0,7–3,0 по кварталам, массивам, махаллям;
 *   г. Ташкент — кенгаш района применяет 0,7–3,0 прямо к базовой ставке зоны.
 * Физлицо платит по ставкам юрлиц (и без льгот) за участок под предпринимательство,
 * под строение, сданное в аренду юрлицу или ИП, и под своей нежилой недвижимостью
 * (ст. 437). Кратные ставки — ×2 незавершённое строительство (юрлица), ×3/×4
 * участок без документов (физлица/юрлица), ×3 приусадебная часть ИЖС без посевов
 * и благоустройства — калькулятор не применяет.
 */
export interface LandTaxZone {
  id: string
  nameRu: string
  nameUz: string
  /** Юрлица: сум за 1 гектар (НК ст. 429 ч.1). */
  legalPerHa: number
  /** Физлица: сум за 1 кв. м (НК ст. 437 ч.1). */
  individualPerM2: number
  /** Зона г. Ташкента: коэффициент только районного кенгаша, 0,7–3,0. */
  isTashkentCity: boolean
}

export const LAND_TAX_ZONES_2026: readonly LandTaxZone[] = [
  { id: 'tashkent-city-1', nameRu: 'г. Ташкент, 1 зона', nameUz: 'Toshkent shahri, 1-zona', legalPerHa: 319_000_000, individualPerM2: 1856, isTashkentCity: true },
  { id: 'tashkent-city-2', nameRu: 'г. Ташкент, 2 зона', nameUz: 'Toshkent shahri, 2-zona', legalPerHa: 254_200_000, individualPerM2: 1574, isTashkentCity: true },
  { id: 'tashkent-city-3', nameRu: 'г. Ташкент, 3 зона', nameUz: 'Toshkent shahri, 3-zona', legalPerHa: 196_600_000, individualPerM2: 1290, isTashkentCity: true },
  { id: 'tashkent-city-4', nameRu: 'г. Ташкент, 4 зона', nameUz: 'Toshkent shahri, 4-zona', legalPerHa: 130_600_000, individualPerM2: 1014, isTashkentCity: true },
  { id: 'tashkent-city-5', nameRu: 'г. Ташкент, 5 зона', nameUz: 'Toshkent shahri, 5-zona', legalPerHa: 65_900_000, individualPerM2: 725, isTashkentCity: true },
  { id: 'karakalpakstan', nameRu: 'Республика Каракалпакстан', nameUz: "Qoraqalpog'iston Respublikasi", legalPerHa: 41_200_000, individualPerM2: 377, isTashkentCity: false },
  { id: 'andijan', nameRu: 'Андижанская область', nameUz: 'Andijon viloyati', legalPerHa: 51_800_000, individualPerM2: 463, isTashkentCity: false },
  { id: 'bukhara', nameRu: 'Бухарская область', nameUz: 'Buxoro viloyati', legalPerHa: 42_400_000, individualPerM2: 377, isTashkentCity: false },
  { id: 'jizzakh', nameRu: 'Джизакская область', nameUz: 'Jizzax viloyati', legalPerHa: 42_400_000, individualPerM2: 377, isTashkentCity: false },
  { id: 'kashkadarya', nameRu: 'Кашкадарьинская область', nameUz: 'Qashqadaryo viloyati', legalPerHa: 42_400_000, individualPerM2: 377, isTashkentCity: false },
  { id: 'navoi', nameRu: 'Навоийская область', nameUz: 'Navoiy viloyati', legalPerHa: 42_400_000, individualPerM2: 377, isTashkentCity: false },
  { id: 'namangan', nameRu: 'Наманганская область', nameUz: 'Namangan viloyati', legalPerHa: 51_800_000, individualPerM2: 463, isTashkentCity: false },
  { id: 'samarkand', nameRu: 'Самаркандская область', nameUz: 'Samarqand viloyati', legalPerHa: 51_800_000, individualPerM2: 463, isTashkentCity: false },
  { id: 'surkhandarya', nameRu: 'Сурхандарьинская область', nameUz: 'Surxondaryo viloyati', legalPerHa: 37_700_000, individualPerM2: 353, isTashkentCity: false },
  { id: 'syrdarya', nameRu: 'Сырдарьинская область', nameUz: 'Sirdaryo viloyati', legalPerHa: 31_800_000, individualPerM2: 297, isTashkentCity: false },
  { id: 'tashkent-region', nameRu: 'Ташкентская область', nameUz: 'Toshkent viloyati', legalPerHa: 43_500_000, individualPerM2: 392, isTashkentCity: false },
  { id: 'fergana', nameRu: 'Ферганская область', nameUz: "Farg'ona viloyati", legalPerHa: 43_500_000, individualPerM2: 392, isTashkentCity: false },
  { id: 'khorezm', nameRu: 'Хорезмская область', nameUz: 'Xorazm viloyati', legalPerHa: 42_400_000, individualPerM2: 377, isTashkentCity: false },
]

/** Допустимые НК коэффициенты кенгашей к ставке земельного налога (ст. 429, 437). */
export const LAND_TAX_COEFFICIENT_RANGE = {
  /** Сельхозземли: кенгаши областей, Каракалпакстана и г. Ташкента — 0,5–1,2. */
  agricultural: [0.5, 1.2],
  /** Несельхозземли г. Ташкента: районный кенгаш — 0,7–3,0 к базовой ставке зоны. */
  tashkentCity: [0.7, 3.0],
  /** Несельхозземли в областях: 0,5–2,0 (область) × 0,7–3,0 (район/город) = 0,35–6,0. */
  regions: [0.35, 6.0],
} as const
