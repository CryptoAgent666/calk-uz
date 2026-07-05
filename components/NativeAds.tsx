"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/**
 * Google AdMob for the Android Capacitor app ONLY. On the web and inside the iOS
 * native app's webview this does nothing (AdMob is a native plugin; we also gate
 * on Capacitor + platform === 'android'). The plugin ships in the .aab; these ad
 * unit IDs live here and load live, so they can be changed without a new .aab.
 *
 * - Banner: persistent, bottom.
 * - Interstitial: shown on calculator navigations, frequency-capped (every 4th
 *   open, min 120s apart) per AdMob policy — never on first load / unexpectedly.
 */
const BANNER_ID = "ca-app-pub-4859241862365215/5901135885"
const INTERSTITIAL_ID = "ca-app-pub-4859241862365215/1401442070"

function isAndroidApp(): boolean {
  const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string } }).Capacitor
  return !!cap?.isNativePlatform?.() && cap.getPlatform?.() === "android"
}

export function NativeAds() {
  const pathname = usePathname()
  const navCount = useRef(0)
  const lastInterstitial = useRef(0)
  const interstitialReady = useRef(false)

  // Initialize once: show banner + preload the first interstitial.
  useEffect(() => {
    if (typeof window === "undefined" || !isAndroidApp()) return
    let active = true
    ;(async () => {
      try {
        const { AdMob, BannerAdSize, BannerAdPosition } = await import("@capacitor-community/admob")
        await AdMob.initialize({})
        if (!active) return
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
    return () => {
      active = false
      import("@capacitor-community/admob").then(({ AdMob }) => AdMob.hideBanner().catch(() => {})).catch(() => {})
    }
  }, [])

  // Interstitial on calculator navigations, frequency-capped.
  useEffect(() => {
    if (typeof window === "undefined" || !isAndroidApp()) return
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
