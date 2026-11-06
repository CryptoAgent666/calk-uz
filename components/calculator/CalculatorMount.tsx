'use client'

import { useState, useSyncExternalStore } from 'react'
import { Calculator } from 'lucide-react'
import { CALCULATOR_COMPONENTS } from '@/lib/data/calculator-components'
import { Switch } from '@/components/ui/switch'
import { setTiyinFormatting } from '@/lib/utils'

const TIYIN_STORAGE_KEY = 'calk-show-tiyin'

/** Калькуляторы без денежных сумм: переключатель тийинов им не нужен. */
const NO_MONEY = new Set([
  'age', 'area', 'bmi', 'calories', 'date-calc', 'gpa', 'ideal-weight', 'macros',
  'number-to-words', 'percentage', 'pregnancy', 'random', 'unit-converter',
])

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', listener)
  }
}

function readStoredTiyin(): boolean {
  try {
    return window.localStorage.getItem(TIYIN_STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function storeTiyin(on: boolean) {
  try {
    window.localStorage.setItem(TIYIN_STORAGE_KEY, on ? '1' : '0')
  } catch {
    // приватный режим: выбор просто не запомнится
  }
  listeners.forEach((listener) => listener())
}

// Выбор, сохранённый к открытию страницы. Читается один раз и потом не меняется.
let storedAtLoad: boolean | undefined
function readStoredAtLoad(): boolean {
  if (storedAtLoad === undefined) storedAtLoad = readStoredTiyin()
  return storedAtLoad
}

const subscribeNever = () => () => {}
const serverSnapshot = () => false

/**
 * Рендерит калькулятор страницы и переключатель «Показывать тийины».
 *
 * Зачем клиентский компонент. Пока `next/dynamic` вызывался из серверной страницы, Next не
 * делил калькуляторы на чанки, и каждая страница тянула код всех 78 (на странице аренды
 * чанк в 332 КБ). Здесь грузится только свой калькулятор.
 *
 * Как применяются тийины. `formatCurrency` — обычная функция, поэтому режим передаётся через
 * `setTiyinFormatting` перед рендером калькулятора. При гидрации React берёт серверный снимок
 * (без тийинов, как в HTML), иначе страница упадёт с #418, и сразу перерисовывает с клиентским.
 * Если тийины были включены до открытия страницы, калькулятор при этом монтируется заново через
 * `key`: его серверная разметка могла ещё не гидрироваться. Переключение руками `key` не меняет,
 * поэтому введённые значения остаются.
 *
 * Если в поле суммы ввели тийины («125544,33»), они показываются и в результате, без
 * переключателя: так ожидают бухгалтеры. Это действует до ухода со страницы и не сохраняется,
 * а если тийины выключить руками, автоматически они больше не включатся.
 */
export function CalculatorMount({ slug, locale }: { slug: string; locale: string }) {
  const storedTiyin = useSyncExternalStore(subscribe, readStoredTiyin, serverSnapshot)
  const remount = useSyncExternalStore(subscribeNever, readStoredAtLoad, serverSnapshot)
  const [typedTiyin, setTypedTiyin] = useState<'none' | 'on' | 'dismissed'>('none')
  const showTiyin = storedTiyin || typedTiyin === 'on'

  const Component = CALCULATOR_COMPONENTS[slug]
  if (!Component) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Calculator component not found for: {slug}</p>
      </div>
    )
  }

  setTiyinFormatting(showTiyin)

  return (
    <>
      {!NO_MONEY.has(slug) && (
        <label className="mb-4 flex items-center justify-end gap-2 text-sm text-muted-foreground cursor-pointer select-none">
          {locale === 'uz' ? "Tiyinlarni ko'rsatish" : 'Показывать тийины'}
          <Switch
            checked={showTiyin}
            onCheckedChange={(checked) => {
              storeTiyin(checked)
              if (!checked) setTypedTiyin('dismissed')
            }}
          />
        </label>
      )}
      <div
        onInputCapture={(event) => {
          const target = event.target
          if (
            typedTiyin === 'none' && !showTiyin &&
            target instanceof HTMLInputElement && target.inputMode === 'decimal' &&
            /[.,]\d/.test(target.value)
          ) {
            // Не в том же событии: иначе контролируемое поле откатывает символ,
            // на котором тийины включились («125544,3» → «125544,»)
            window.setTimeout(() => setTypedTiyin((state) => (state === 'none' ? 'on' : state)), 0)
          }
        }}
      >
        <Component key={remount ? 'tiyin' : 'plain'} />
      </div>
    </>
  )
}
