"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { useLocale } from "next-intl"
import {
  isAdFree,
  onAdFreeChange,
  buyRemoveAds,
  restorePurchases,
  getRemoveAdsPrice,
  purchasesAvailable,
  REMOVE_ADS_FALLBACK_PRICE,
} from "@/lib/purchases"

/**
 * Кнопка «Убрать рекламу навсегда» + «Восстановить покупку» (место 1 из 3).
 * Подключена в мобильное меню (Header). Рендерится ТОЛЬКО в нативном приложении
 * с модулем покупок (на сайте и в старых бинарях — null). Скрывается, когда
 * реклама уже отключена. Восстановление обязательно для Apple (Guideline 3.1.1).
 */
export function RemoveAdsButton() {
  const locale = useLocale()
  const [adFree, setAdFree] = useState(isAdFree())
  const [price, setPrice] = useState<string | null>(null)
  const [busy, setBusy] = useState<"buy" | "restore" | null>(null)

  const t =
    locale === "uz"
      ? {
          pitch: "120+ kalkulyator abadiy reklamasiz — bir-ikki piyola kofe narxida ☕",
          removeForever: "Reklamani abadiy olib tashlash",
          oneTime: "Bir martalik xarid — abadiy, barcha qurilmalaringizda",
          processing: "Bajarilmoqda…",
          restore: "Xaridni tiklash",
          restoring: "Tiklanmoqda…",
          disabled: "✓ Reklama o'chirilgan",
        }
      : {
          pitch: "120+ калькуляторов навсегда без рекламы — по цене пары чашек кофе ☕",
          removeForever: "Убрать рекламу навсегда",
          oneTime: "Разовая покупка — навсегда, на всех ваших устройствах",
          processing: "Обработка…",
          restore: "Восстановить покупку",
          restoring: "Восстановление…",
          disabled: "✓ Реклама отключена",
        }

  useEffect(() => onAdFreeChange(setAdFree), [])
  useEffect(() => {
    void getRemoveAdsPrice().then(setPrice)
  }, [])

  // Только в приложении С нативным модулем покупок (не в старых бинарях / не на сайте).
  if (!purchasesAvailable()) return null
  if (adFree) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400">
        {t.disabled}
      </div>
    )
  }

  const buy = async () => {
    setBusy("buy")
    try {
      await buyRemoveAds()
    } finally {
      setBusy(null)
    }
  }
  const restore = async () => {
    setBusy("restore")
    try {
      await restorePurchases()
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 dark:border-emerald-900 dark:from-emerald-950 dark:to-teal-950">
      <p className="mb-3 text-center text-sm font-semibold leading-snug text-emerald-900 dark:text-emerald-200">{t.pitch}</p>
      <button
        onClick={buy}
        disabled={busy !== null}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
      >
        <Sparkles className="h-4 w-4" />
        {busy === "buy" ? t.processing : `${t.removeForever} — ${price ?? REMOVE_ADS_FALLBACK_PRICE}`}
      </button>
      <p className="mt-2 text-center text-xs text-muted-foreground">{t.oneTime}</p>
      <button
        onClick={restore}
        disabled={busy !== null}
        className="mt-2 w-full text-center text-xs text-emerald-700 underline disabled:opacity-60 dark:text-emerald-400"
      >
        {busy === "restore" ? t.restoring : t.restore}
      </button>
    </div>
  )
}
