"use client"

import { useEffect } from "react"

/**
 * Shows a Google AdMob banner — ONLY inside the Android Capacitor app.
 * On the web (and in the iOS native app's webview) it does nothing: AdMob is a
 * native plugin, so the dynamic import only resolves inside the app, and we
 * additionally gate on Capacitor + platform === 'android'.
 *
 * The plugin's native side ships in the .aab; the web deploy just carries this
 * trigger. In older app builds without the plugin the import throws and we no-op.
 *
 * NOTE: currently the Google TEST banner unit — replace ADMOB_BANNER_ID with the
 * real ca-app-pub-…/… banner unit before/after the app is verified in AdMob.
 */
const ADMOB_BANNER_ID = "ca-app-pub-3940256099942544/6300978111" // Google test banner

export function NativeAds() {
  useEffect(() => {
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string } }).Capacitor
    if (!cap?.isNativePlatform?.() || cap.getPlatform?.() !== "android") return

    let active = true
    ;(async () => {
      try {
        const { AdMob, BannerAdSize, BannerAdPosition } = await import("@capacitor-community/admob")
        await AdMob.initialize({})
        if (!active) return
        await AdMob.showBanner({
          adId: ADMOB_BANNER_ID,
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
        })
      } catch {
        // Not running in an app build that has the plugin — ignore.
      }
    })()

    return () => {
      active = false
      import("@capacitor-community/admob")
        .then(({ AdMob }) => AdMob.hideBanner().catch(() => {}))
        .catch(() => {})
    }
  }, [])

  return null
}
