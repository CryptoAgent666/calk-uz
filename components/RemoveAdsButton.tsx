"use client"

import { useEffect, useState } from "react"
import { Sparkles, PlayCircle } from "lucide-react"
import { useLocale } from "next-intl"
import {
  isAdFree,
  onAdFreeChange,
  buyRemoveAds,
  restorePurchases,
  purchasesAvailable,
} from "@/lib/purchases"
import { useRemoveAdsPrice } from "@/lib/use-remove-ads-price"
import { emitIap } from "@/lib/telemetry"
import {
  rewardedAvailable,
  showRewardedAd,
  rewardHoursLeft,
  onTempAdFreeChange,
  REWARD_HOURS,
} from "@/lib/rewarded"

/**
 * Кнопка «Убрать рекламу навсегда» + «Восстановить покупку» (место 1 из 3).
 * Подключена в мобильное меню (Header). Рендерится ТОЛЬКО в нативном приложении
 * с модулем покупок (на сайте и в старых бинарях — null). Скрывается, когда
 * реклама уже отключена. Восстановление обязательно для Apple (Guideline 3.1.1).
 */
export function RemoveAdsButton() {
  const locale = useLocale()
  const [adFree, setAdFree] = useState(isAdFree())
  const price = useRemoveAdsPrice()
  const [busy, setBusy] = useState<"buy" | "restore" | "reward" | null>(null)
  const [hoursLeft, setHoursLeft] = useState(0)

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
          watch: `Rolik ko'rish — ${REWARD_HOURS} soat reklamasiz`,
          watching: "Rolik yuklanmoqda…",
          active: (h: number) => `✓ Reklamasiz: yana ${h} soat`,
          orFree: "yoki bepul:",
          unavailable: "Xarid hozircha mavjud emas — mahsulot Google Play'da faollashmoqda. Bir necha soatdan keyin qayta urinib ko'ring.",
        }
      : {
          pitch: "120+ калькуляторов навсегда без рекламы — по цене пары чашек кофе ☕",
          removeForever: "Убрать рекламу навсегда",
          oneTime: "Разовая покупка — навсегда, на всех ваших устройствах",
          processing: "Обработка…",
          restore: "Восстановить покупку",
          restoring: "Восстановление…",
          disabled: "✓ Реклама отключена",
          watch: `Смотреть ролик — ${REWARD_HOURS} ч без рекламы`,
          watching: "Загружаем ролик…",
          active: (h: number) => `✓ Без рекламы: ещё ${h} ч`,
          orFree: "или бесплатно:",
          unavailable: "Покупка пока недоступна — продукт ещё активируется в Google Play. Попробуйте через несколько часов.",
        }

  useEffect(() => onAdFreeChange(setAdFree), [])
  useEffect(() => {
    setHoursLeft(rewardHoursLeft())
    return onTempAdFreeChange(() => setHoursLeft(rewardHoursLeft()))
  }, [])
  // Оффер реально показан только когда есть покупки и реклама ещё не отключена
  // (компонент монтируется при открытии мобильного меню).
  useEffect(() => {
    if (purchasesAvailable() && !isAdFree()) emitIap("paywall_shown")
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
      if ((await buyRemoveAds()) === "unavailable") window.alert(t.unavailable)
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
  const watch = async () => {
    setBusy("reward")
    try {
      await showRewardedAd()
    } finally {
      setBusy(null)
      setHoursLeft(rewardHoursLeft())
    }
  }

  return (
    <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 dark:border-emerald-900 dark:from-emerald-950 dark:to-teal-950">
      {/* Платная ступень скрывается, если стор не отдал продукт: кнопка с ценой,
          которая по тапу отвечает «покупка недоступна», хуже её отсутствия.
          Бесплатная ступень (ролик) от биллинга не зависит и остаётся. */}
      {price.state !== "unavailable" && (
        <>
          <p className="mb-3 text-center text-sm font-semibold leading-snug text-emerald-900 dark:text-emerald-200">{t.pitch}</p>
          <button
            onClick={buy}
            disabled={busy !== null}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4" />
            {busy === "buy" ? t.processing : `${t.removeForever} — ${price.label}`}
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">{t.oneTime}</p>
        </>
      )}

      {/* Free rung: a rewarded video buys 24 h of quiet. Hidden once a window is
          already running — nothing to gain from stacking, and it would read as
          a broken button. */}
      {rewardedAvailable() &&
        (hoursLeft > 0 ? (
          <p className="mt-3 rounded-lg bg-emerald-100 px-3 py-2 text-center text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
            {t.active(hoursLeft)}
          </p>
        ) : (
          <>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t.orFree}</p>
            <button
              onClick={watch}
              disabled={busy !== null}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-300 px-4 py-2.5 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-100 disabled:opacity-60 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
            >
              <PlayCircle className="h-4 w-4" />
              {busy === "reward" ? t.watching : t.watch}
            </button>
          </>
        ))}

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
