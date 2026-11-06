'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

function localTodayIso(): string {
  const d = new Date()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

/**
 * Сегодняшняя дата «YYYY-MM-DD» по часам пользователя.
 *
 * На сервере (и при гидрации) — пустая строка: страница собирается статически,
 * и «сегодня» сборки не совпало бы с «сегодня» посетителя. React берёт
 * серверный снимок при гидрации и сразу перерисовывает с клиентским — без
 * hydration mismatch и без setState в эффекте.
 */
export function useTodayIso(): string {
  return useSyncExternalStore(subscribe, localTodayIso, () => '')
}
