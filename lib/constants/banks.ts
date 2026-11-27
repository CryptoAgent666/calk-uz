/**
 * Major banks of Uzbekistan with typical rates (April 2026).
 * Deposit rates for UZS are currently in the 18-22% range,
 * USD deposits around 4-7%. Loan rates are indicative averages
 * for a 12-month consumer loan / mortgage. Users should verify
 * current offers on the bank's website — actual rates change monthly.
 */

export interface BankInfo {
  /** Internal identifier */
  id: string
  /** Bank name in Russian */
  name: string
  /** Bank name in Uzbek */
  nameUz: string
  /** Typical annual deposit rate for UZS deposits (12-month) */
  depositRateUzs: number
  /** Typical annual deposit rate for USD deposits (12-month) */
  depositRateUsd: number
  /** Typical annual consumer loan rate in UZS */
  loanRateUzs: number
  /** Typical annual mortgage rate in UZS */
  mortgageRate: number
  /** Whether the bank is state-owned */
  stateOwned: boolean
  /** Bank's website URL */
  website: string
}

export const BANKS: BankInfo[] = [
  {
    id: 'kapitalbank',
    name: 'Капиталбанк',
    nameUz: 'Kapitalbank',
    depositRateUzs: 0.20,
    depositRateUsd: 0.05,
    loanRateUzs: 0.26,
    mortgageRate: 0.21,
    stateOwned: false,
    website: 'https://kapitalbank.uz',
  },
  {
    id: 'trustbank',
    name: 'Трастбанк',
    nameUz: 'Trustbank',
    depositRateUzs: 0.21,
    depositRateUsd: 0.055,
    loanRateUzs: 0.27,
    mortgageRate: 0.22,
    stateOwned: false,
    website: 'https://trustbank.uz',
  },
  {
    id: 'hamkorbank',
    name: 'Хамкорбанк',
    nameUz: 'Hamkorbank',
    depositRateUzs: 0.20,
    depositRateUsd: 0.05,
    loanRateUzs: 0.25,
    mortgageRate: 0.21,
    stateOwned: false,
    website: 'https://hamkorbank.uz',
  },
  {
    id: 'asia-alliance',
    name: 'Азия Альянс Банк',
    nameUz: 'Asia Alliance Bank',
    depositRateUzs: 0.21,
    depositRateUsd: 0.055,
    loanRateUzs: 0.26,
    mortgageRate: 0.22,
    stateOwned: false,
    website: 'https://aab.uz',
  },
  {
    id: 'anor-bank',
    name: 'Анор Банк',
    nameUz: 'Anor Bank',
    depositRateUzs: 0.22,
    depositRateUsd: 0.06,
    loanRateUzs: 0.28,
    mortgageRate: 0.23,
    stateOwned: false,
    website: 'https://anorbank.uz',
  },
  {
    id: 'nbu',
    name: 'Национальный банк ВЭД',
    nameUz: 'Tashqi iqtisodiy faoliyat Milliy banki',
    depositRateUzs: 0.18,
    depositRateUsd: 0.04,
    loanRateUzs: 0.22,
    mortgageRate: 0.19,
    stateOwned: true,
    website: 'https://nbu.uz',
  },
  {
    id: 'sqb',
    name: 'Узпромстройбанк (SQB)',
    nameUz: "O'zsanoatqurilishbank (SQB)",
    depositRateUzs: 0.18,
    depositRateUsd: 0.04,
    loanRateUzs: 0.22,
    mortgageRate: 0.19,
    stateOwned: true,
    website: 'https://sqb.uz',
  },
  {
    id: 'ipoteka-bank',
    name: 'Ипотека-банк',
    nameUz: 'Ipoteka-bank',
    depositRateUzs: 0.19,
    depositRateUsd: 0.045,
    loanRateUzs: 0.23,
    mortgageRate: 0.17,
    stateOwned: true,
    website: 'https://ipotekabank.uz',
  },
  {
    id: 'aloqa-bank',
    name: 'Алокабанк',
    nameUz: 'Aloqabank',
    depositRateUzs: 0.19,
    depositRateUsd: 0.045,
    loanRateUzs: 0.24,
    mortgageRate: 0.20,
    stateOwned: true,
    website: 'https://aloqabank.uz',
  },
  {
    id: 'asaka-bank',
    name: 'Асакабанк',
    nameUz: 'Asakabank',
    depositRateUzs: 0.18,
    depositRateUsd: 0.04,
    loanRateUzs: 0.23,
    mortgageRate: 0.19,
    stateOwned: true,
    website: 'https://asakabank.uz',
  },
  {
    id: 'xalq-banki',
    name: 'Халк банки',
    nameUz: 'Xalq banki',
    depositRateUzs: 0.18,
    depositRateUsd: 0.04,
    loanRateUzs: 0.22,
    mortgageRate: 0.18,
    stateOwned: true,
    website: 'https://xb.uz',
  },
  {
    id: 'ipak-yoli',
    name: 'Ипак Йўли банк',
    nameUz: "Ipak Yo'li bank",
    depositRateUzs: 0.20,
    depositRateUsd: 0.05,
    loanRateUzs: 0.25,
    mortgageRate: 0.21,
    stateOwned: false,
    website: 'https://ipakyulibank.uz',
  },
  {
    id: 'orient-finans',
    name: 'Ориент Финанс банк',
    nameUz: 'Orient Finans bank',
    depositRateUzs: 0.21,
    depositRateUsd: 0.055,
    loanRateUzs: 0.26,
    mortgageRate: 0.22,
    stateOwned: false,
    website: 'https://orientfinansbank.uz',
  },
  {
    id: 'tbc-bank',
    name: 'TBC Банк',
    nameUz: 'TBC Bank',
    depositRateUzs: 0.21,
    depositRateUsd: 0.055,
    loanRateUzs: 0.27,
    mortgageRate: 0.22,
    stateOwned: false,
    website: 'https://tbcbank.uz',
  },
  {
    id: 'avo-bank',
    name: 'AVO Банк',
    nameUz: 'AVO Bank',
    depositRateUzs: 0.225,
    depositRateUsd: 0.06,
    loanRateUzs: 0.28,
    mortgageRate: 0.23,
    stateOwned: false,
    website: 'https://avobank.uz',
  },
  {
    id: 'turkiston-bank',
    name: 'Туркистон банк',
    nameUz: 'Turkiston bank',
    depositRateUzs: 0.20,
    depositRateUsd: 0.05,
    loanRateUzs: 0.26,
    mortgageRate: 0.21,
    stateOwned: false,
    website: 'https://turkistonbank.uz',
  },
]

/** Get a bank by its ID */
export function getBankById(id: string): BankInfo | undefined {
  return BANKS.find((b) => b.id === id)
}

/** Get state-owned banks only */
export function getStateBanks(): BankInfo[] {
  return BANKS.filter((b) => b.stateOwned)
}

/** Get private banks only */
export function getPrivateBanks(): BankInfo[] {
  return BANKS.filter((b) => !b.stateOwned)
}

/** Get banks sorted by deposit rate (UZS), highest first */
export function getBanksByDepositRate(): BankInfo[] {
  return [...BANKS].sort((a, b) => b.depositRateUzs - a.depositRateUzs)
}

/** Get banks sorted by loan rate (UZS), lowest first */
export function getBanksByLoanRate(): BankInfo[] {
  return [...BANKS].sort((a, b) => a.loanRateUzs - b.loanRateUzs)
}
