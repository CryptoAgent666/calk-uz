/**
 * Региональные тарифы на воду и вывоз мусора для населения (сентябрь 2026).
 *
 * ВОДА. Тарифы на питьевую воду и водоотведение утверждают областные кенгаши
 * (с 01.01.2027 это переходит к Межведомственной тарифной комиссии при КМ),
 * поэтому по регионам они различаются в разы. Цены без НДС — из единого реестра
 * «Узсувтаъминот», поле `population`:
 *   https://api.uzsuv.uz/api/v1/r/service/tariff/
 * Реестр стоит на мониторинге в DATA_HUB. Тарифные листы операторов местами
 * отстают от реестра (Джизак, Навои, Хорезм — ещё от 01.04.2024), поэтому цены
 * берутся из реестра, а не из листов.
 *
 * Цена 1 м³ холодной воды по счётчику зависит от категории жилья
 * (ПКМ-194 от 15.07.2014, тарифные листы операторов):
 *   без канализации ................................. вода
 *   с канализацией .................................. вода + стоки
 *   с канализацией и центральным ГВС («4-код») ...... вода + стоки × k
 * k = норматив стоков / норматив воды в категории «4-код»: стоки горячей воды
 * оператор начисляет на счётчик холодной. В реестре k нет — он снят с листов
 * вручную и меняется редко.
 * Сверка с листами: г. Ташкент (1400 + 1000 × 2) × 1,12 = 3808,
 * Самарканд (2800 + 1900 × 1,3) × 1,12 = 5902 — до сума.
 *
 * МУСОР. Тариф с человека в месяц утверждает областной кенгаш. `center` — для
 * областного центра, `districts` — для районов, если ставка там своя. С НДС 12%.
 */

export const VAT_RATE = 0.12

export interface UtilityRegion {
  id: string
  nameRu: string
  nameUz: string
  water: {
    operator: string
    /** Питьевая вода, сум/м³ без НДС. */
    waterNet: number
    /** Водоотведение, сум/м³ без НДС. */
    sewerageNet: number
    /** Коэффициент стоков при центральном горячем водоснабжении (k). */
    hotWaterSewerageFactor: number
    /** Центральное ГВС типично для региона — положение переключателя по умолчанию. */
    centralHotWaterDefault: boolean
    /** Дата вступления тарифа в силу по реестру. */
    effectiveDate: string
  }
  waste: {
    /** Сум с человека в месяц с НДС — областной центр. */
    center: number
    /** То же для районов, если ставка отличается. */
    districts?: number
    act: string
  }
}

export const DEFAULT_REGION: UtilityRegion = {
  id: 'tashkent-city',
  nameRu: 'г. Ташкент',
  nameUz: 'Toshkent shahri',
  water: { operator: '«Toshkent shahar suv taʼminoti» AJ', waterNet: 1400, sewerageNet: 1000, hotWaterSewerageFactor: 2, centralHotWaterDefault: true, effectiveDate: '2023-12-15' },
  waste: { center: 8400, act: 'хоким г. Ташкента 3-14-0-Q/24 от 04.01.2024' },
}

export const DEFAULT_REGION_ID = DEFAULT_REGION.id

export const UTILITY_REGIONS: UtilityRegion[] = [
  DEFAULT_REGION,
  {
    id: 'tashkent-region', nameRu: 'Ташкентская область', nameUz: 'Toshkent viloyati',
    water: { operator: '«Toshkent suv taʼminoti» AJ', waterNet: 2600, sewerageNet: 1300, hotWaterSewerageFactor: 1.7, centralHotWaterDefault: false, effectiveDate: '2025-07-01' },
    waste: { center: 10864, act: 'Кенгаш Ташкентской обл. VII-30-33-10-0-K/26' },
  },
  {
    id: 'andijan', nameRu: 'Андижанская область', nameUz: 'Andijon viloyati',
    water: { operator: '«Andijon suv taʼminoti» AJ', waterNet: 1650, sewerageNet: 1650, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2025-06-01' },
    waste: { center: 6700, districts: 6200, act: 'Кенгаш Андижанской обл. VII-12-217-1-0-K/25 от 29.08.2025' },
  },
  {
    id: 'bukhara', nameRu: 'Бухарская область', nameUz: 'Buxoro viloyati',
    water: { operator: '«Buxoro suv taʼminoti» AJ', waterNet: 4000, sewerageNet: 3800, hotWaterSewerageFactor: 2, centralHotWaterDefault: false, effectiveDate: '2025-07-01' },
    waste: { center: 7800, districts: 6700, act: 'Кенгаш Бухарской обл. VII-15-72-2-0-K/25' },
  },
  {
    id: 'jizzakh', nameRu: 'Джизакская область', nameUz: 'Jizzax viloyati',
    water: { operator: '«Jizzax suv taʼminoti» AJ', waterNet: 4500, sewerageNet: 2000, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2026-05-01' },
    waste: { center: 6720, act: 'Кенгаш Джизакской обл. VI-51-37-3-0-K/24' },
  },
  {
    id: 'kashkadarya', nameRu: 'Кашкадарьинская область', nameUz: 'Qashqadaryo viloyati',
    water: { operator: '«Qashqadaryo suv taʼminoti» AJ', waterNet: 3500, sewerageNet: 3000, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2025-05-10' },
    waste: { center: 7392, districts: 6935, act: 'Кенгаш Кашкадарьинской обл. VII-13-113-4-0-K/25 (г. Карши), VII-21-13-4-0-K/26 (остальная область)' },
  },
  {
    id: 'navoi', nameRu: 'Навоийская область', nameUz: 'Navoiy viloyati',
    water: { operator: '«Navoiy suv taʼminoti» AJ', waterNet: 3500, sewerageNet: 1800, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2025-09-01' },
    waste: { center: 7900, act: 'Кенгаш Навоийской обл. VII-23-5-5-0-K/26' },
  },
  {
    id: 'namangan', nameRu: 'Наманганская область', nameUz: 'Namangan viloyati',
    water: { operator: '«Namangan suv taʼminoti» AJ', waterNet: 4900, sewerageNet: 1700, hotWaterSewerageFactor: 2, centralHotWaterDefault: false, effectiveDate: '2025-07-13' },
    waste: { center: 7280, act: 'Кенгаш Наманганской обл. VII-15-146-6-0-K/25 от 01.11.2025' },
  },
  {
    id: 'samarkand', nameRu: 'Самаркандская область', nameUz: 'Samarqand viloyati',
    water: { operator: '«Samarqand suv taʼminoti» AJ', waterNet: 2800, sewerageNet: 1900, hotWaterSewerageFactor: 1.3, centralHotWaterDefault: false, effectiveDate: '2025-04-15' },
    waste: { center: 9500, districts: 8000, act: 'Кенгаш Самаркандской обл. VII-13-75-7-0-K/25 от 03.06.2025' },
  },
  {
    id: 'surkhandarya', nameRu: 'Сурхандарьинская область', nameUz: 'Surxondaryo viloyati',
    water: { operator: '«Surxondaryo suv taʼminoti» AJ', waterNet: 6800, sewerageNet: 3250, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2026-09-05' },
    waste: { center: 8960, act: 'Кенгаш Сурхандарьинской обл. VII-17-14-8-0-K/26' },
  },
  {
    id: 'syrdarya', nameRu: 'Сырдарьинская область', nameUz: 'Sirdaryo viloyati',
    water: { operator: '«Sirdaryo suv taʼminoti» AJ', waterNet: 4500, sewerageNet: 1200, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2025-07-10' },
    waste: { center: 6218, act: 'Кенгаш Сырдарьинской обл. VII-21-174-9-0-K/25' },
  },
  {
    id: 'fergana', nameRu: 'Ферганская область', nameUz: 'Farg‘ona viloyati',
    water: { operator: '«Farg‘ona suv taʼminoti» AJ', waterNet: 3078, sewerageNet: 650, hotWaterSewerageFactor: 1.5, centralHotWaterDefault: false, effectiveDate: '2025-05-11' },
    waste: { center: 9500, act: 'Кенгаш Ферганской обл. VII-19-57-11-0-K/26 от 26.05.2026' },
  },
  {
    id: 'khorezm', nameRu: 'Хорезмская область', nameUz: 'Xorazm viloyati',
    water: { operator: '«Xorazm suv taʼminoti» AJ', waterNet: 4500, sewerageNet: 1850, hotWaterSewerageFactor: 1.3, centralHotWaterDefault: false, effectiveDate: '2025-06-05' },
    waste: { center: 7600, districts: 6700, act: 'Кенгаш Хорезмской обл. VII-15-149-12-0-K/25 (г. Ургенч), VII-14-139-12-0-K/25 (остальная область)' },
  },
  {
    id: 'karakalpakstan', nameRu: 'Республика Каракалпакстан', nameUz: 'Qoraqalpog‘iston Respublikasi',
    water: { operator: '«Qoraqalpoq suv taʼminoti» AJ', waterNet: 4200, sewerageNet: 1975, hotWaterSewerageFactor: 1, centralHotWaterDefault: false, effectiveDate: '2025-06-01' },
    waste: { center: 4032, act: 'Совмин Республики Каракалпакстан 233-13-0-Q/24' },
  },
]
