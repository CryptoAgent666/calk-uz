"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { useLocale } from "next-intl"
import {
  isAdFree,
  onAdFreeChange,
  buyRemoveAds,
  purchasesAvailable,
} from "@/lib/purchases"
import { useRemoveAdsPrice } from "@/lib/use-remove-ads-price"
import { emitIap } from "@/lib/telemetry"

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
 * Рендерится ТОЛЬКО в приложении (Android) и пока реклама не отключена.
 */
export function RemoveAdsBar() {
  const locale = useLocale()
  const [adFree, setAdFree] = useState(isAdFree())
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === "1"
    } catch {
      return false
    }
  })
  const price = useRemoveAdsPrice()
  const [busy, setBusy] = useState(false)
  const [variant] = useState(pickBarVariant)

  const t =
    locale === "uz"
      ? {
          remove: "Reklamani olib tashlash",
          barCoffee: "☕ Abadiy reklamasiz — bir-ikki piyola kofe narxida",
          processing: "Bajarilmoqda…",
          hide: "Yashirish",
          unavailable: "Xarid hozircha mavjud emas — mahsulot Google Play'da faollashmoqda. Bir necha soatdan keyin qayta urinib ko'ring.",
        }
      : {
          remove: "Убрать рекламу",
          barCoffee: "☕ Без рекламы навсегда — цена пары кофе",
          processing: "Обработка…",
          hide: "Скрыть",
          unavailable: "Покупка пока недоступна — продукт ещё активируется в Google Play. Попробуйте через несколько часов.",
        }

  useEffect(() => onAdFreeChange(setAdFree), [])
  // Плашка — показ оффера, если она реально видима (есть покупки, не куплено,
  // не скрыта в этой сессии).
  useEffect(() => {
    if (purchasesAvailable() && !isAdFree() && !dismissed) emitIap("paywall_shown")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Стор не отдал продукт → оффера нет вовсе (мёртвая кнопка хуже отсутствия).
  if (!purchasesAvailable() || adFree || dismissed || price.state === "unavailable") return null

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1")
    } catch {
      /* ignore */
    }
    setDismissed(true)
  }
  const buy = async () => {
    setBusy(true)
    try {
      if ((await buyRemoveAds()) === "unavailable") window.alert(t.unavailable)
    } finally {
      setBusy(false)
    }
  }

  const label = variant === "coffee" ? t.barCoffee : `${t.remove} — ${price.label}`

  return (
    <div
      className="fixed left-0 right-0 z-40 flex items-center justify-between gap-2 bg-emerald-600 px-3 py-2 text-white shadow-lg"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--admob-banner-height, 72px) + 10px)" }}
      role="region"
      aria-label={t.remove}
    >
      <button onClick={buy} disabled={busy} className="flex flex-1 items-center gap-2 text-sm font-medium disabled:opacity-70">
        {variant === "price" && <Sparkles className="h-4 w-4 flex-shrink-0" />}
        <span>{busy ? t.processing : label}</span>
      </button>
      <button onClick={dismiss} aria-label={t.hide} className="p-1 opacity-80 hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
