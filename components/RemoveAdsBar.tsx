"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { useLocale } from "next-intl"
import { isAdFree, onAdFreeChange, purchasesAvailable } from "@/lib/purchases"
import { useRemoveAdsPrice } from "@/lib/use-remove-ads-price"
import { emitIap } from "@/lib/telemetry"
import { Capacitor } from "@capacitor/core"
import { openRemoveAdsOffer } from "@/lib/remove-ads-offer"

const DISMISS_KEY = "calk_removeads_bar_dismissed"
const VARIANT_KEY = "calk_removeads_bar_variant"
const SESSIONS_KEY = "calk_removeads_bar_sessions"

/** Текст плашки чередуется по сессиям: цена ↔ кофейный тейк. */
function pickBarVariant(): "price" | "coffee" {
  try {
    const cached = sessionStorage.getItem(VARIANT_KEY)
    if (cached === "price" || cached === "coffee") return cached
    const n = Number(localStorage.getItem(SESSIONS_KEY) || "0") + 1
    localStorage.setItem(SESSIONS_KEY, String(n))
    const variant = n % 2 === 0 ? "coffee" : "price"
    sessionStorage.setItem(VARIANT_KEY, variant)
    return variant
  } catch {
    return "price"
  }
}

/**
 * Тонкая плашка «Убрать рекламу» НАД нативным AdMob-баннером (место 2 из 3).
 * Баннер — нативный оверлей внизу экрана, поэтому плашка позиционируется с
 * отступом от низа (фактическая высота баннера в --admob-banner-height +
 * safe-area). Ненавязчивая, с крестиком: скрывается на текущую сессию.
 *
 * Тап открывает экран предложения (RemoveAdsOffer), а не сразу окно оплаты:
 * «кофейный» вариант не показывает цену, и до 27.11.2026 по нему жали, чтобы её
 * узнать, — 40 из 45 нажатий закончились отменой в окне Google Play.
 *
 * Рендерится ТОЛЬКО в приложении (Android) и пока реклама не отключена.
 */
export function RemoveAdsBar() {
  const locale = useLocale()
  // Стартовые значения обязаны совпадать с SSR (там плашки нет никогда): решение
  // «показывать ли» принимается только после монтирования. Иначе в приложении
  // первый клиентский рендер рисовал плашку поверх серверного null → #418 на
  // каждой странице.
  const [applies, setApplies] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [variant, setVariant] = useState<"price" | "coffee">("price")
  const price = useRemoveAdsPrice()

  const t =
    locale === "uz"
      ? {
          remove: "Reklamani olib tashlash",
          barCoffee: "☕ Abadiy reklamasiz — bir-ikki piyola kofe narxida",
          hide: "Yashirish",
        }
      : {
          remove: "Убрать рекламу",
          barCoffee: "☕ Без рекламы навсегда — цена пары кофе",
          hide: "Скрыть",
        }

  useEffect(() => {
    const compute = () => setApplies(purchasesAvailable() && !isAdFree())
    compute()
    if (!purchasesAvailable()) return
    let wasDismissed = false
    try {
      wasDismissed = sessionStorage.getItem(DISMISS_KEY) === "1"
    } catch {
      /* ignore */
    }
    const picked = pickBarVariant()
    // Хранилища читаются только после монтирования намеренно: стартовое состояние
    // обязано совпасть с SSR (см. комментарий у useState). Правило молчало, пока в
    // компоненте был обработчик с try/finally — анализатор такой компонент пропускал.
    /* eslint-disable react-hooks/set-state-in-effect */
    setDismissed(wasDismissed)
    setVariant(picked)
    /* eslint-enable react-hooks/set-state-in-effect */
    // Плашка — показ оффера, если она реально видима (есть покупки, не куплено,
    // не скрыта в этой сессии).
    if (!isAdFree() && !wasDismissed) {
      emitIap("paywall_shown", { platform: Capacitor.getPlatform(), placement: "bar", variant: picked })
    }
    return onAdFreeChange(compute)
  }, [])

  // Стор не отдал продукт → оффера нет вовсе (мёртвая кнопка хуже отсутствия).
  if (!applies || dismissed || price.state === "unavailable") return null

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1")
    } catch {
      /* ignore */
    }
    setDismissed(true)
  }
  const label = variant === "coffee" ? t.barCoffee : `${t.remove} — ${price.label}`

  return (
    <div
      className="fixed left-0 right-0 z-40 flex items-center justify-between gap-2 bg-emerald-600 px-3 py-2 text-white shadow-lg"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--admob-banner-height, 72px) + 10px)" }}
      role="region"
      aria-label={t.remove}
    >
      <button
        onClick={() => openRemoveAdsOffer("bar", variant)}
        className="flex flex-1 items-center gap-2 text-left text-sm font-medium"
      >
        {variant === "price" && <Sparkles className="h-4 w-4 flex-shrink-0" />}
        <span>{label}</span>
      </button>
      <button onClick={dismiss} aria-label={t.hide} className="p-1 opacity-80 hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
