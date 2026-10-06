"use client"

import { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import {
  isAdFree,
  onAdFreeChange,
  purchasesAvailable,
  buyRemoveAds,
  restorePurchases,
} from "@/lib/purchases"
import { useRemoveAdsPrice } from "@/lib/use-remove-ads-price"

/**
 * Постоянная точка входа «Убрать рекламу» в футере — место 4 из 4, ТОЛЬКО в
 * нативном приложении (на сайте и в старых бинарях — null). Флотовый паттерн
 * (US/AU держат её в футере): плашка над баннером закрываемая, тост — эпизодный,
 * кнопка в меню требует открыть меню; футер же доступен всегда и держит Restore
 * в постоянной досягаемости (Apple Guideline 3.1.1). Исчезает после покупки.
 */
export function RemoveAdsFooterLink() {
  const locale = useLocale()
  const [applies, setApplies] = useState(false)
  const price = useRemoveAdsPrice()
  const [busy, setBusy] = useState<"buy" | "restore" | null>(null)
  const [note, setNote] = useState<string | null>(null)

  const t =
    locale === "uz"
      ? {
          remove: "Reklamani olib tashlash",
          restore: "Xaridni tiklash",
          busy: "Bajarilmoqda…",
          done: "Tayyor! Reklama o'chirildi.",
          failed: "Amalga oshmadi. Qayta urinib ko'ring.",
        }
      : {
          remove: "Убрать рекламу",
          restore: "Восстановить покупку",
          busy: "Обработка…",
          done: "Готово! Реклама отключена.",
          failed: "Не получилось. Попробуйте ещё раз.",
        }

  useEffect(() => {
    const compute = () => setApplies(purchasesAvailable() && !isAdFree())
    compute()
    return onAdFreeChange(compute)
  }, [])

  // Как и в остальных поверхностях: мёртвой кнопки с ценой быть не должно.
  if (!applies || price.state === "unavailable") return null

  const buy = async () => {
    if (busy) return
    setBusy("buy")
    setNote(null)
    const r = await buyRemoveAds()
    setBusy(null)
    if (r === "failed" || r === "unavailable") setNote(t.failed)
    // "ok" → onAdFreeChange скрывает весь блок; "cancelled" → молчим
  }

  const restore = async () => {
    if (busy) return
    setBusy("restore")
    setNote(null)
    const ok = await restorePurchases()
    setBusy(null)
    setNote(ok ? t.done : t.failed)
  }

  return (
    <li className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <button
        onClick={buy}
        disabled={busy !== null}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left disabled:opacity-60"
      >
        {busy === "buy" ? t.busy : `${t.remove} — ${price.label}`}
      </button>
      <button
        onClick={restore}
        disabled={busy !== null}
        className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors disabled:opacity-60"
      >
        {busy === "restore" ? t.busy : t.restore}
      </button>
      {note && <span className="text-xs text-muted-foreground">{note}</span>}
    </li>
  )
}
