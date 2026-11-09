/**
 * Rewarded ads: watch a video → REWARD_HOURS (6 ч) without ads.
 *
 * A middle rung between "free with ads" and the one-time "remove ads" purchase:
 * users who won't pay can still buy quiet time with attention, and the rewarded
 * impression pays more than the banner it silences.
 *
 * Model: a single expiry timestamp in localStorage. Ads are hidden while
 * `now < calk_ad_free_until`. Purchase (lib/purchases.ts) stays separate and
 * permanent — `adsHidden()` is the OR of the two, and the ad code gates on that.
 *
 * Deliberately client-side: the grant is worth a few hours of banner
 * suppression, so the downside of someone editing localStorage is that they see
 * fewer ads — not that they get paid content. No server round-trip needed.
 */
import { isAdFree, onAdFreeChange } from "@/lib/purchases"

/**
 * Rewarded unit of the Android app (AdMob app ca-app-pub-4859241862365215~5490072349).
 * Overridable by env so a unit swap needs no code change — it rides OTA either way.
 * The iOS app has its own unit, set natively in AdMobManager.swift.
 */
const REWARDED_ID =
  process.env.NEXT_PUBLIC_ADMOB_REWARDED_ID || "ca-app-pub-4859241862365215/3175037212"

const UNTIL_KEY = "calk_ad_free_until"

/**
 * Сколько даёт один просмотренный ролик.
 *
 * 6, а не 24. Калькуляторами пользуются эпизодически — посчитал растаможку и
 * ушёл, — поэтому сутки без рекламы одним роликом закрывают весь визит и
 * следующий тоже: rewarded-показы не копятся, а покупка «навсегда» теряет
 * смысл. 6 часов честно оплачивают 30-секундный ролик (полдня задач), но к
 * следующему дню реклама возвращается. Значение calk.kg, выбранное там по
 * той же логике; держим фленчно одинаковым.
 */
export const REWARD_HOURS = 6

function isAndroidApp(): boolean {
  if (typeof window === "undefined") return false
  const cap = (window as unknown as {
    Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string }
  }).Capacitor
  return !!cap?.isNativePlatform?.() && cap.getPlatform?.() === "android"
}

/** Rewarded ads only exist inside the native Android app. */
export function rewardedAvailable(): boolean {
  return isAndroidApp()
}

/** Expiry of the current reward window, or 0 when there is none. */
export function tempAdFreeUntil(): number {
  if (typeof window === "undefined") return 0
  try {
    const v = Number(localStorage.getItem(UNTIL_KEY) || "0")
    return Number.isFinite(v) && v > Date.now() ? v : 0
  } catch {
    return 0
  }
}

export function isTempAdFree(): boolean {
  return tempAdFreeUntil() > 0
}

/** True when ads must not be shown: bought forever OR inside a reward window. */
export function adsHidden(): boolean {
  return isAdFree() || isTempAdFree()
}

/** Hours left in the reward window, rounded up (0 when inactive). */
export function rewardHoursLeft(): number {
  const until = tempAdFreeUntil()
  return until ? Math.ceil((until - Date.now()) / 3_600_000) : 0
}

const listeners = new Set<(until: number) => void>()

export function onTempAdFreeChange(cb: (until: number) => void): () => void {
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}

/** Subscribe to "ads should be hidden now" from either source. */
export function onAdsHiddenChange(cb: (hidden: boolean) => void): () => void {
  const a = onAdFreeChange(() => cb(adsHidden()))
  const b = onTempAdFreeChange(() => cb(adsHidden()))
  return () => {
    a()
    b()
  }
}

function grantTempAdFree(hours = REWARD_HOURS): void {
  const until = Date.now() + hours * 3_600_000
  try {
    localStorage.setItem(UNTIL_KEY, String(until))
  } catch {
    /* private mode — the window just won't persist */
  }
  listeners.forEach((cb) => {
    try {
      cb(until)
    } catch {
      /* one bad listener must not break the rest */
    }
  })
}

let preparing: Promise<boolean> | null = null

/** Preload a rewarded video so the button responds instantly. Safe to call often. */
export async function prepareRewardedAd(): Promise<boolean> {
  if (!rewardedAvailable()) return false
  if (preparing) return preparing
  preparing = (async () => {
    try {
      const { AdMob } = await import("@capacitor-community/admob")
      await AdMob.prepareRewardVideoAd({ adId: REWARDED_ID })
      return true
    } catch {
      return false
    } finally {
      preparing = null
    }
  })()
  return preparing
}

/**
 * Show the rewarded video. Resolves true only when the user actually earned the
 * reward (watched far enough) — dismissing early grants nothing, per AdMob rules.
 */
export async function showRewardedAd(): Promise<boolean> {
  if (!rewardedAvailable()) return false
  try {
    const { AdMob } = await import("@capacitor-community/admob")
    // Prepare on demand too: the preload may have failed or been consumed.
    await AdMob.prepareRewardVideoAd({ adId: REWARDED_ID }).catch(() => {})
    const reward = await AdMob.showRewardVideoAd()
    const earned = !!reward && typeof reward === "object"
    if (earned) grantTempAdFree()
    // Warm the next one up for the following grant.
    void AdMob.prepareRewardVideoAd({ adId: REWARDED_ID }).catch(() => {})
    return earned
  } catch {
    return false
  }
}
