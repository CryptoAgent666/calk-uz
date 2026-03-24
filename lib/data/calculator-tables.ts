import type { CategoryId } from "@/lib/types/calculator"
import { TAX_RATES } from "@/lib/constants/tax-rates"
import { ELECTRICITY_TIERS, GAS_TIERS_SUMMER, WATER_COLD_RATE, WATER_HOT_RATE, WATER_SEWAGE_RATE } from "@/lib/constants/utility-tariffs"
import { BANKS } from "@/lib/constants/banks"

export interface CalculatorTable {
  titleRu: string
  titleUz: string
  headers: { ru: string; uz: string }[]
  rows: { ru: string[]; uz: string[] }[]
}

const TAX_TABLES: CalculatorTable[] = [
  {
    titleRu: "Ставки НДФЛ в Узбекистане (2025)",
    titleUz: "O'zbekistonda JShShS stavkalari (2025)",
    headers: [
      { ru: "Вид дохода", uz: "Daromad turi" },
      { ru: "Ставка", uz: "Stavka" },
    ],
    rows: [
      { ru: ["Стандартная ставка НДФЛ", `${TAX_RATES.NDFL * 100}%`], uz: ["Standart JShShS stavkasi", `${TAX_RATES.NDFL * 100}%`] },
      { ru: ["НДФЛ для резидентов IT Park", `${TAX_RATES.NDFL_IT_PARK * 100}%`], uz: ["IT Park rezidentlari uchun JShShS", `${TAX_RATES.NDFL_IT_PARK * 100}%`] },
      { ru: ["НДС", `${TAX_RATES.VAT * 100}%`], uz: ["QQS", `${TAX_RATES.VAT * 100}%`] },
      { ru: ["Налог на прибыль", `${TAX_RATES.CORPORATE_TAX * 100}%`], uz: ["Foyda solig'i", `${TAX_RATES.CORPORATE_TAX * 100}%`] },
    ],
  },
  {
    titleRu: "Налог на имущество физических лиц",
    titleUz: "Jismoniy shaxslar mulk solig'i",
    headers: [
      { ru: "Площадь жилья", uz: "Uy-joy maydoni" },
      { ru: "Ставка (% от кадастровой стоимости)", uz: "Stavka (kadastr qiymatidan %)" },
    ],
    rows: [
      { ru: ["До 100 м\u00B2", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_SMALL * 100}%`], uz: ["100 m\u00B2 gacha", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_SMALL * 100}%`] },
      { ru: ["100\u2013200 м\u00B2", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_MEDIUM * 100}%`], uz: ["100\u2013200 m\u00B2", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_MEDIUM * 100}%`] },
      { ru: ["Свыше 200 м\u00B2", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_LARGE * 100}%`], uz: ["200 m\u00B2 dan ortiq", `${TAX_RATES.PROPERTY_TAX_RESIDENTIAL_LARGE * 100}%`] },
      { ru: ["Юридические лица", `${TAX_RATES.PROPERTY_TAX_LEGAL * 100}%`], uz: ["Yuridik shaxslar", `${TAX_RATES.PROPERTY_TAX_LEGAL * 100}%`] },
    ],
  },
]

const SALARY_TABLES: CalculatorTable[] = [
  {
    titleRu: "Обязательные отчисления с зарплаты (2025)",
    titleUz: "Ish haqidan majburiy ajratmalar (2025)",
    headers: [
      { ru: "Отчисление", uz: "Ajratma" },
      { ru: "Ставка", uz: "Stavka" },
      { ru: "Кто платит", uz: "Kim to'laydi" },
    ],
    rows: [
      { ru: ["НДФЛ", `${TAX_RATES.NDFL * 100}%`, "Удерживается из зарплаты"], uz: ["JShShS", `${TAX_RATES.NDFL * 100}%`, "Ish haqidan ushlab qolinadi"] },
      { ru: ["ИНПС", `${TAX_RATES.INPS * 100}%`, "Удерживается из зарплаты"], uz: ["MHTJ", `${TAX_RATES.INPS * 100}%`, "Ish haqidan ushlab qolinadi"] },
      { ru: ["Социальный налог (коммерч.)", `${TAX_RATES.SOCIAL_TAX * 100}%`, "За счёт работодателя"], uz: ["Ijtimoiy soliq (tijoriy)", `${TAX_RATES.SOCIAL_TAX * 100}%`, "Ish beruvchi hisobidan"] },
      { ru: ["Социальный налог (бюджет.)", `${TAX_RATES.SOCIAL_TAX_BUDGET * 100}%`, "За счёт работодателя"], uz: ["Ijtimoiy soliq (byudjet)", `${TAX_RATES.SOCIAL_TAX_BUDGET * 100}%`, "Ish beruvchi hisobidan"] },
    ],
  },
]

const topBanksByLoan = [...BANKS].sort((a, b) => a.loanRateUzs - b.loanRateUzs).slice(0, 8)
const topBanksByDeposit = [...BANKS].sort((a, b) => b.depositRateUzs - a.depositRateUzs).slice(0, 8)

const CREDIT_TABLES: CalculatorTable[] = [
  {
    titleRu: "Ставки потребительских кредитов в банках Узбекистана",
    titleUz: "O'zbekiston banklarida iste'mol kredit stavkalari",
    headers: [
      { ru: "Банк", uz: "Bank" },
      { ru: "Потреб. кредит (UZS)", uz: "Iste'mol kredit (UZS)" },
      { ru: "Ипотека (UZS)", uz: "Ipoteka (UZS)" },
      { ru: "Тип", uz: "Turi" },
    ],
    rows: topBanksByLoan.map((b) => ({
      ru: [b.name, `${(b.loanRateUzs * 100).toFixed(0)}%`, `${(b.mortgageRate * 100).toFixed(0)}%`, b.stateOwned ? "Гос." : "Частный"],
      uz: [b.nameUz, `${(b.loanRateUzs * 100).toFixed(0)}%`, `${(b.mortgageRate * 100).toFixed(0)}%`, b.stateOwned ? "Davlat" : "Xususiy"],
    })),
  },
]

const DEPOSIT_TABLES: CalculatorTable[] = [
  {
    titleRu: "Ставки по вкладам в банках Узбекистана (12 мес.)",
    titleUz: "O'zbekiston banklarida omonat stavkalari (12 oy)",
    headers: [
      { ru: "Банк", uz: "Bank" },
      { ru: "Вклад UZS", uz: "Omonat UZS" },
      { ru: "Вклад USD", uz: "Omonat USD" },
      { ru: "Тип", uz: "Turi" },
    ],
    rows: topBanksByDeposit.map((b) => ({
      ru: [b.name, `${(b.depositRateUzs * 100).toFixed(0)}%`, `${(b.depositRateUsd * 100).toFixed(1)}%`, b.stateOwned ? "Гос." : "Частный"],
      uz: [b.nameUz, `${(b.depositRateUzs * 100).toFixed(0)}%`, `${(b.depositRateUsd * 100).toFixed(1)}%`, b.stateOwned ? "Davlat" : "Xususiy"],
    })),
  },
]

const UTILITIES_TABLES: CalculatorTable[] = [
  {
    titleRu: "Тарифы на электроэнергию (сум/кВт\u00B7ч)",
    titleUz: "Elektr energiya tariflari (so'm/kVt\u00B7s)",
    headers: [
      { ru: "Объём потребления", uz: "Iste'mol hajmi" },
      { ru: "Цена за 1 кВт\u00B7ч", uz: "1 kVt\u00B7s narxi" },
    ],
    rows: ELECTRICITY_TIERS.map((tier) => ({
      ru: [
        tier.upTo !== null ? `До ${tier.upTo} кВт\u00B7ч` : `Свыше ${ELECTRICITY_TIERS[ELECTRICITY_TIERS.length - 2].upTo} кВт\u00B7ч`,
        `${tier.pricePerUnit.toLocaleString("ru-RU")} сум`,
      ],
      uz: [
        tier.upTo !== null ? `${tier.upTo} kVt\u00B7s gacha` : `${ELECTRICITY_TIERS[ELECTRICITY_TIERS.length - 2].upTo} kVt\u00B7s dan ortiq`,
        `${tier.pricePerUnit.toLocaleString("ru-RU")} so'm`,
      ],
    })),
  },
  {
    titleRu: "Тарифы на газ (сум/м\u00B3)",
    titleUz: "Gaz tariflari (so'm/m\u00B3)",
    headers: [
      { ru: "Объём потребления", uz: "Iste'mol hajmi" },
      { ru: "Цена за 1 м\u00B3", uz: "1 m\u00B3 narxi" },
    ],
    rows: GAS_TIERS_SUMMER.map((tier) => ({
      ru: [
        tier.upTo !== null ? `До ${tier.upTo} м\u00B3` : `Свыше ${GAS_TIERS_SUMMER[GAS_TIERS_SUMMER.length - 2].upTo} м\u00B3`,
        `${tier.pricePerUnit.toLocaleString("ru-RU")} сум`,
      ],
      uz: [
        tier.upTo !== null ? `${tier.upTo} m\u00B3 gacha` : `${GAS_TIERS_SUMMER[GAS_TIERS_SUMMER.length - 2].upTo} m\u00B3 dan ortiq`,
        `${tier.pricePerUnit.toLocaleString("ru-RU")} so'm`,
      ],
    })),
  },
  {
    titleRu: "Тарифы на воду",
    titleUz: "Suv tariflari",
    headers: [
      { ru: "Услуга", uz: "Xizmat" },
      { ru: "Тариф (сум/м\u00B3)", uz: "Tarif (so'm/m\u00B3)" },
    ],
    rows: [
      { ru: ["Холодная вода", `${WATER_COLD_RATE.toLocaleString("ru-RU")} сум`], uz: ["Sovuq suv", `${WATER_COLD_RATE.toLocaleString("ru-RU")} so'm`] },
      { ru: ["Горячая вода", `${WATER_HOT_RATE.toLocaleString("ru-RU")} сум`], uz: ["Issiq suv", `${WATER_HOT_RATE.toLocaleString("ru-RU")} so'm`] },
      { ru: ["Канализация", `${WATER_SEWAGE_RATE.toLocaleString("ru-RU")} сум`], uz: ["Kanalizatsiya", `${WATER_SEWAGE_RATE.toLocaleString("ru-RU")} so'm`] },
    ],
  },
]

const AUTO_TABLES: CalculatorTable[] = [
  {
    titleRu: "Ставки акцизного налога по объёму двигателя",
    titleUz: "Dvigatel hajmi bo'yicha aksiz solig'i stavkalari",
    headers: [
      { ru: "Объём двигателя", uz: "Dvigatel hajmi" },
      { ru: "Ставка акциза", uz: "Aksiz stavkasi" },
    ],
    rows: [
      { ru: ["До 1 500 см\u00B3", "0.5 БРВ за каждый см\u00B3 свыше 1500"], uz: ["1 500 sm\u00B3 gacha", "1500 dan ortiq har bir sm\u00B3 uchun 0.5 BHM"] },
      { ru: ["1 500 \u2013 2 000 см\u00B3", "1.0 БРВ за каждый см\u00B3 свыше 1500"], uz: ["1 500 \u2013 2 000 sm\u00B3", "1500 dan ortiq har bir sm\u00B3 uchun 1.0 BHM"] },
      { ru: ["2 000 \u2013 3 000 см\u00B3", "1.5 БРВ за каждый см\u00B3 свыше 2000"], uz: ["2 000 \u2013 3 000 sm\u00B3", "2000 dan ortiq har bir sm\u00B3 uchun 1.5 BHM"] },
      { ru: ["Свыше 3 000 см\u00B3", "2.0 БРВ за каждый см\u00B3 свыше 3000"], uz: ["3 000 sm\u00B3 dan ortiq", "3000 dan ortiq har bir sm\u00B3 uchun 2.0 BHM"] },
    ],
  },
]

const BUSINESS_TABLES: CalculatorTable[] = [
  {
    titleRu: "Сравнение налоговых режимов для бизнеса",
    titleUz: "Biznes uchun soliq rejimlarini taqqoslash",
    headers: [
      { ru: "Режим", uz: "Rejim" },
      { ru: "Ставка", uz: "Stavka" },
      { ru: "Применение", uz: "Qo'llanilishi" },
    ],
    rows: [
      { ru: ["Общий режим (налог на прибыль)", `${TAX_RATES.CORPORATE_TAX * 100}%`, "Крупный бизнес, оборот свыше порога"], uz: ["Umumiy rejim (foyda solig'i)", `${TAX_RATES.CORPORATE_TAX * 100}%`, "Yirik biznes, aylanma chegaradan yuqori"] },
      { ru: ["Налог с оборота", `${TAX_RATES.TURNOVER_TAX * 100}%`, "Малый бизнес, упрощённая система"], uz: ["Aylanma soliq", `${TAX_RATES.TURNOVER_TAX * 100}%`, "Kichik biznes, soddalashtirilgan tizim"] },
      { ru: ["Самозанятость", `${TAX_RATES.SELF_EMPLOYED_TAX * 100}%`, "Физлица без наёмных работников"], uz: ["O'z-o'zini band qilish", `${TAX_RATES.SELF_EMPLOYED_TAX * 100}%`, "Yollanma ishchilarsiz jismoniy shaxslar"] },
    ],
  },
]

/** Map of category IDs to their relevant data tables */
export const CATEGORY_TABLES: Partial<Record<CategoryId, CalculatorTable[]>> = {
  tax: TAX_TABLES,
  salary: SALARY_TABLES,
  credit: CREDIT_TABLES,
  deposit: DEPOSIT_TABLES,
  utilities: UTILITIES_TABLES,
  auto: AUTO_TABLES,
  business: BUSINESS_TABLES,
}

/** Get tables for a given category */
export function getTablesForCategory(category: CategoryId): CalculatorTable[] {
  return CATEGORY_TABLES[category] ?? []
}
