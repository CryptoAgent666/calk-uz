/**
 * Нерабочие праздничные дни Республики Узбекистан — ст. 208 Трудового кодекса
 * (ЗРУ-798, lex.uz/docs/6257288). Девять дней в году:
 *   1 января, 8 марта, 21 марта, 9 мая, 1 сентября, 1 октября, 8 декабря
 *   + первый день Рамазан хайита (Ийд ал-Фитр)
 *   + первый день Курбан хайита (Ийд ал-Адха).
 *
 * Хайиты плавают по лунному календарю: дату каждый год объявляет постановление
 * Президента по данным Управления мусульман. Пока постановления нет, дата
 * неизвестна — год отсутствует в FLOATING_HOLIDAYS, и расчёт помечается флагом.
 *
 * НЕ праздники и сюда не входят: перенесённые выходные и «дополнительные
 * нерабочие дни» из указов о переносе (например, 28–29 мая 2026 после Курбан
 * хайита). По ст. 208 праздничным днём остаётся только первый день хайита.
 *
 * Обновлять: добавить год в FLOATING_HOLIDAYS, как только выйдет постановление
 * о праздновании соответствующего хайита.
 */

/** Фиксированные даты ст. 208 ТК: [месяц 1–12, день]. */
export const FIXED_HOLIDAYS: ReadonlyArray<readonly [number, number]> = [
  [1, 1],   // Янги йил
  [3, 8],   // Хотин-қизлар куни
  [3, 21],  // Наврўз
  [5, 9],   // Хотира ва қадрлаш куни
  [9, 1],   // Мустақиллик куни
  [10, 1],  // Ўқитувчи ва мураббийлар куни
  [12, 8],  // Конституция куни
]

/**
 * Первый день Рамазан и Курбан хайита по годам, ISO-даты.
 * 2026: ПП-106 от 17.03.2026 (lex.uz/docs/8090632) — Рамазан хайит 20 марта;
 *       ПП-194 от 20.05.2026 (lex.uz/docs/8212932) — Курбан хайит 27 мая.
 * 2027: постановлений на 13.09.2026 нет.
 */
export const FLOATING_HOLIDAYS: Readonly<Record<number, { ramazan: string; kurban: string }>> = {
  2026: { ramazan: '2026-03-20', kurban: '2026-05-27' },
}

/**
 * Где МОЖЕТ оказаться ещё не объявленный хайит — только чтобы предупредить
 * пользователя, что оплачиваемых дней может стать на один меньше. Дни по этим
 * окнам НЕ исключаются. Окна с запасом вокруг ожидаемых по астрономическому
 * календарю дат (Ийд ал-Фитр ≈ 9–10 марта, Ийд ал-Адха ≈ 16–17 мая 2027).
 * Для года без окна предупреждение ставится на весь год.
 */
const UNANNOUNCED_FLOATING_WINDOWS: Readonly<Record<number, ReadonlyArray<readonly [string, string]>>> = {
  2027: [['2027-03-05', '2027-03-14'], ['2027-05-12', '2027-05-21']],
}

/** День может оказаться необъявленным пока хайитом (год без постановлений). */
export function mayBeUnannouncedHoliday(isoDate: string): boolean {
  const year = Number(isoDate.slice(0, 4))
  if (floatingHolidaysKnown(year)) return false
  const windows = UNANNOUNCED_FLOATING_WINDOWS[year]
  if (!windows) return true
  return windows.some(([from, to]) => isoDate >= from && isoDate <= to)
}

function iso(y: number, m: number, d: number): string {
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

/** Даты хайитов этого года известны (есть постановления). */
export function floatingHolidaysKnown(year: number): boolean {
  return year in FLOATING_HOLIDAYS
}

/**
 * Нерабочие праздничные дни года как множество ISO-дат «YYYY-MM-DD».
 * Для года без постановлений о хайитах — только семь фиксированных дат.
 */
export function holidaysOfYear(year: number): Set<string> {
  const set = new Set(FIXED_HOLIDAYS.map(([m, d]) => iso(year, m, d)))
  const floating = FLOATING_HOLIDAYS[year]
  if (floating) {
    set.add(floating.ramazan)
    set.add(floating.kurban)
  }
  return set
}
