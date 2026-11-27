"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Check, PlayCircle, Sparkles, X } from "lucide-react"
import { useLocale } from "next-intl"
import { Capacitor } from "@capacitor/core"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import {
  buyRemoveAds,
  isAdFree,
  onAdFreeChange,
  purchasesAvailable,
  restorePurchases,
} from "@/lib/purchases"
import { useRemoveAdsPrice } from "@/lib/use-remove-ads-price"
import { emitIap } from "@/lib/telemetry"
import {
  REWARD_HOURS,
  onTempAdFreeChange,
  rewardHoursLeft,
  rewardedAvailable,
  showRewardedAd,
} from "@/lib/rewarded"
import { OPEN_REMOVE_ADS_OFFER_EVENT, type OpenRemoveAdsOfferDetail } from "@/lib/remove-ads-offer"

type Notice = "success" | "unavailable" | "failed" | "restoreNone" | "watchFailed" | null

/**
 * Экран предложения между плашкой/тостом и окном оплаты Google Play.
 *
 * До 27.11.2026 тап по плашке и по тосту сразу открывал окно Play: за октябрь–ноябрь
 * 45 нажатий → 40 отмен (медиана 3 с после тапа) и одна покупка. Человек не видел, что
 * именно получает, а «кофейный» вариант плашки не показывал даже цену — жали, чтобы её
 * узнать. На calk.kz тот же экран (с 24.09.2026) превратил 22 нажатия без покупок в
 * 11 нажатий и 5 покупок за октябрь.
 *
 * Здесь — что убирается, «один раз и навсегда», цена до окна оплаты, бесплатная
 * альтернатива (ролик) и восстановление покупки. Блок в мобильном меню
 * (RemoveAdsButton) уже устроен так же, поэтому покупает напрямую.
 *
 * Рендерится один раз в layout. Закрытый диалог не даёт разметки ни на сервере, ни в
 * первом клиентском рендере — расхождения гидратации нет.
 */
export function RemoveAdsOffer() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState<string | undefined>()
  const [busy, setBusy] = useState<"buy" | "watch" | "restore" | null>(null)
  const [notice, setNotice] = useState<Notice>(null)
  const [hoursLeft, setHoursLeft] = useState(0)
  const price = useRemoveAdsPrice()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const t =
    locale === "uz"
      ? {
          title: "Calk.uz reklamasiz",
          subtitle: "Bir marta to'laysiz — abadiy",
          points: [
            "Ekran pastidagi banner ham, kalkulyatorlar orasidagi to'liq ekranli reklama ham bo'lmaydi",
            "Bir martalik xarid, obuna emas: takroriy to'lov yo'q",
            "Barcha qurilmalaringizda ishlaydi — xaridni tiklash mumkin",
            "Loyihani qo'llab-quvvatlaysiz: qonunchilik o'zgarganda stavka va tariflarni yangilab boramiz",
          ],
          buy: (p: string) => `Reklamani olib tashlash — ${p}`,
          payment: (store: string) => `To'lov ${store} orqali`,
          processing: "Bajarilmoqda…",
          thanks: "✓ Reklama o'chirildi. Calk.uz'ni qo'llab-quvvatlaganingiz uchun rahmat!",
          unavailable: "Hozircha xarid qilib bo'lmaydi. Keyinroq urinib ko'ring.",
          failed: "Xaridni yakunlab bo'lmadi. Qayta urinib ko'ring yoki xaridni tiklang.",
          restoreNone: "Bu Google hisobida xarid topilmadi.",
          watchFailed: "Rolik hozircha mavjud emas, keyinroq urinib ko'ring",
          orFree: "yoki bepul:",
          watch: `Rolik ko'rish — ${REWARD_HOURS} soat reklamasiz`,
          watching: "Rolik yuklanmoqda…",
          active: (h: number) => `✓ Reklamasiz: yana ${h} soat`,
          restore: "Xaridni tiklash",
          restoring: "Tiklanmoqda…",
          notNow: "Hozir emas",
          close: "Yopish",
        }
      : {
          title: "Calk.uz без рекламы",
          subtitle: "Один раз — и навсегда",
          points: [
            "Ни баннера внизу экрана, ни полноэкранной рекламы между калькуляторами",
            "Разовая покупка, не подписка: платите один раз",
            "На всех ваших устройствах — покупку можно восстановить",
            "Поддержка проекта: мы обновляем ставки и тарифы при каждом изменении закона",
          ],
          buy: (p: string) => `Убрать рекламу за ${p}`,
          payment: (store: string) => `Оплата через ${store}`,
          processing: "Обработка…",
          thanks: "✓ Реклама отключена. Спасибо, что поддерживаете Calk.uz!",
          unavailable: "Покупка сейчас недоступна. Попробуйте позже.",
          failed: "Не получилось завершить покупку. Попробуйте ещё раз или восстановите покупку.",
          restoreNone: "Покупка не найдена на этом аккаунте.",
          watchFailed: "Ролик сейчас недоступен, попробуйте позже",
          orFree: "или бесплатно:",
          watch: `Смотреть ролик — ${REWARD_HOURS} ч без рекламы`,
          watching: "Загружаем ролик…",
          active: (h: number) => `✓ Без рекламы: ещё ${h} ч`,
          restore: "Восстановить покупку",
          restoring: "Восстановление…",
          notNow: "Не сейчас",
          close: "Закрыть",
        }

  const close = useCallback(() => {
    clearTimeout(closeTimer.current)
    setOpen(false)
    setNotice(null)
  }, [])

  const closeSoon = useCallback(() => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(close, 1500)
  }, [close])

  useEffect(() => {
    if (!purchasesAvailable()) return
    const onOpen = (e: Event) => {
      if (isAdFree()) return
      const detail = (e as CustomEvent<OpenRemoveAdsOfferDetail>).detail
      setVariant(detail?.variant)
      setNotice(null)
      setHoursLeft(rewardHoursLeft())
      setOpen(true)
      emitIap("offer_shown", {
        platform: Capacitor.getPlatform(),
        placement: detail?.source,
        variant: detail?.variant,
      })
    }
    window.addEventListener(OPEN_REMOVE_ADS_OFFER_EVENT, onOpen)
    return () => {
      window.removeEventListener(OPEN_REMOVE_ADS_OFFER_EVENT, onOpen)
      clearTimeout(closeTimer.current)
    }
  }, [])

  // Покупка или восстановление могли пройти и мимо этого окна (синк с другого устройства).
  useEffect(
    () =>
      onAdFreeChange((adFree) => {
        if (adFree) {
          setNotice("success")
          closeSoon()
        }
      }),
    [closeSoon],
  )
  useEffect(() => onTempAdFreeChange(() => setHoursLeft(rewardHoursLeft())), [])

  const storeName = Capacitor.getPlatform() === "ios" ? "App Store" : "Google Play"

  const buy = async () => {
    setBusy("buy")
    setNotice(null)
    try {
      const result = await buyRemoveAds("offer", variant)
      if (result === "ok") {
        setNotice("success")
        closeSoon()
      } else if (result === "unavailable") setNotice("unavailable")
      else if (result === "failed") setNotice("failed")
      // cancelled: окно оставляем — человек мог передумать в окне оплаты
    } finally {
      setBusy(null)
    }
  }

  const watch = async () => {
    setBusy("watch")
    setNotice(null)
    try {
      if (await showRewardedAd()) close()
      else setNotice("watchFailed")
    } finally {
      setBusy(null)
      setHoursLeft(rewardHoursLeft())
    }
  }

  const restore = async () => {
    setBusy("restore")
    setNotice(null)
    try {
      if (await restorePurchases()) {
        setNotice("success")
        closeSoon()
      } else setNotice("restoreNone")
    } finally {
      setBusy(null)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close()
      }}
    >
      <DialogContent
        showCloseButton={false}
        // Нативный баннер AdMob лежит поверх низа экрана: окно центрируем в части
        // экрана над ним и не даём вырасти под баннер.
        className="top-[calc(50%-var(--admob-banner-height,72px)/2)] max-h-[calc(100dvh-var(--admob-banner-height,72px)-2rem)] gap-0 overflow-y-auto p-0"
      >
        <div className="relative rounded-t-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 pb-5 pt-6 text-white">
          <button
            onClick={close}
            aria-label={t.close}
            className="absolute right-3 top-3 rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <Sparkles className="mb-2 h-7 w-7 text-amber-300" />
          <DialogTitle className="text-xl font-bold leading-tight text-white">{t.title}</DialogTitle>
          <DialogDescription className="mt-1 text-sm text-emerald-50">{t.subtitle}</DialogDescription>
        </div>

        <div className="px-5 pb-5 pt-4">
          <ul className="space-y-2.5">
            {t.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {notice === "success" ? (
            <p
              role="status"
              className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-400"
            >
              {t.thanks}
            </p>
          ) : (
            <>
              {/* Стор не отдал продукт → платной кнопки нет (мёртвая кнопка хуже отсутствия);
                  ролик и восстановление от этого не зависят. */}
              {price.state !== "unavailable" && (
                <>
                  <button
                    onClick={buy}
                    disabled={busy !== null}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
                  >
                    {busy === "buy" ? t.processing : t.buy(price.label)}
                  </button>
                  <p className="mt-2 text-center text-xs text-muted-foreground">{t.payment(storeName)}</p>
                </>
              )}

              {notice && (
                <p role="status" className="mt-3 text-center text-sm text-muted-foreground">
                  {notice === "unavailable" && t.unavailable}
                  {notice === "failed" && t.failed}
                  {notice === "restoreNone" && t.restoreNone}
                  {notice === "watchFailed" && t.watchFailed}
                </p>
              )}

              {rewardedAvailable() && (
                <div className="mt-4 border-t pt-4">
                  {hoursLeft > 0 ? (
                    <p className="text-center text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {t.active(hoursLeft)}
                    </p>
                  ) : (
                    <>
                      <p className="text-center text-xs text-muted-foreground">{t.orFree}</p>
                      <button
                        onClick={watch}
                        disabled={busy !== null}
                        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 px-4 py-2.5 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-50 disabled:opacity-60 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
                      >
                        <PlayCircle className="h-4 w-4" />
                        {busy === "watch" ? t.watching : t.watch}
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between text-xs">
                <button
                  onClick={restore}
                  disabled={busy !== null}
                  className="text-emerald-700 underline disabled:opacity-60 dark:text-emerald-400"
                >
                  {busy === "restore" ? t.restoring : t.restore}
                </button>
                <button onClick={close} className="text-muted-foreground hover:text-foreground">
                  {t.notNow}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
