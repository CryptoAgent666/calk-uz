"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { initPurchases, isAdFree, onAdFreeChange } from "@/lib/purchases"
import { SUGGEST_REMOVE_ADS_EVENT } from "@/components/RemoveAdsToast"

/**
 * Google AdMob for the Android Capacitor app ONLY. On the web and inside the iOS
 * native app's webview this does nothing (AdMob is a native plugin; we also gate
 * on Capacitor + platform === 'android'). The plugin ships in the .aab; these ad
 * unit IDs live here and load live, so they can be changed without a new .aab.
 *
 * - Banner: persistent, bottom. Its measured height is published to the CSS var
 *   `--admob-banner-height` so the "remove ads" bar can sit exactly above it.
 * - Interstitial: shown on calculator navigations, frequency-capped (every 4th
 *   open, min 120s apart) per AdMob policy — never on first load / unexpectedly.
 * - All ads are gated on isAdFree(): a one-time "remove ads" purchase (RevenueCat)
 *   disables banner + interstitials instantly (see lib/purchases.ts).
 */
const BANNER_ID = "ca-app-pub-4859241862365215/5901135885"
const INTERSTITIAL_ID = "ca-app-pub-4859241862365215/1401442070"

function isAndroidApp(): boolean {
  const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string } }).Capacitor
  return !!cap?.isNativePlatform?.() && cap.getPlatform?.() === "android"
}

async function hideAllAds() {
  try {
    const { AdMob } = await import("@capacitor-community/admob")
    await AdMob.hideBanner().catch(() => {})
    await AdMob.removeBanner().catch(() => {})
  } catch {
    /* ignore */
  }
  document.documentElement.style.setProperty("--admob-banner-height", "0px")
}

export function NativeAds() {
  const pathname = usePathname()
  const navCount = useRef(0)
  const lastInterstitial = useRef(0)
  const interstitialReady = useRef(false)
  const interstitialCount = useRef(0)

  // Initialize once: start purchases, then show banner + preload interstitial
  // (unless the user already bought "remove ads").
  useEffect(() => {
    if (typeof window === "undefined" || !isAndroidApp()) return
    let active = true

    // RevenueCat first — so isAdFree() reflects a prior purchase before we gate ads.
    void initPurchases()

    ;(async () => {
      try {
        const { AdMob, BannerAdSize, BannerAdPosition, BannerAdPluginEvents } = await import("@capacitor-community/admob")
        await AdMob.initialize({})
        if (!active) return

        // Publish the real banner height so the upsell bar lands right above it.
        AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info: { height: number }) => {
          const px = Math.max(0, Math.round(info?.height ?? 0))
          document.documentElement.style.setProperty("--admob-banner-height", `${px}px`)
        })

        if (isAdFree()) return // purchased — no banner, no interstitial

        await AdMob.showBanner({
          adId: BANNER_ID,
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
        })
        await AdMob.prepareInterstitial({ adId: INTERSTITIAL_ID })
        interstitialReady.current = true
      } catch {
        // Older app build without the plugin, or not native — ignore.
      }
    })()

    // If the purchase completes while the app is open, tear ads down immediately.
    const unsub = onAdFreeChange((adFree) => {
      if (adFree) void hideAllAds()
    })

    return () => {
      active = false
      unsub()
      void import("@capacitor-community/admob").then(({ AdMob }) => AdMob.hideBanner().catch(() => {})).catch(() => {})
    }
  }, [])

  // Interstitial on calculator navigations, frequency-capped. Skipped when ad-free.
  useEffect(() => {
    if (typeof window === "undefined" || !isAndroidApp()) return
    if (isAdFree()) return
    if (!pathname || !pathname.includes("/calculator/")) return
    navCount.current += 1
    const now = Date.now()
    if (interstitialReady.current && navCount.current >= 4 && now - lastInterstitial.current > 120000) {
      navCount.current = 0
      lastInterstitial.current = now
      interstitialReady.current = false
      ;(async () => {
        try {
          const { AdMob } = await import("@capacitor-community/admob")
          await AdMob.showInterstitial()
          // After every 2nd interstitial, nudge the "remove ads" toast — right when
          // a full-screen ad just interrupted the user (best conversion moment).
          interstitialCount.current += 1
          if (interstitialCount.current % 2 === 0 && !isAdFree()) {
            window.dispatchEvent(new CustomEvent(SUGGEST_REMOVE_ADS_EVENT))
          }
          await AdMob.prepareInterstitial({ adId: INTERSTITIAL_ID }) // preload the next one
          interstitialReady.current = true
        } catch {
          interstitialReady.current = true
        }
      })()
    }
  }, [pathname])

  return null
}
