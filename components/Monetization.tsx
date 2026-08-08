"use client"

import { useEffect } from "react"
import { isNativeApp } from "@/lib/platform"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ""

/**
 * Loads Google Analytics 4 and Google AdSense — but ONLY in a real web browser.
 * Inside the native apps (Android Capacitor / iOS native webview) these are
 * suppressed; the apps monetize with AdMob instead. Scripts are injected
 * client-side after the native check, so nothing leaks into the app webviews.
 */
export function Monetization() {
  useEffect(() => {
    if (isNativeApp()) return

    if (GA_ID && !document.getElementById("ga-lib")) {
      const lib = document.createElement("script")
      lib.id = "ga-lib"
      lib.async = true
      lib.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(lib)

      const init = document.createElement("script")
      init.id = "ga-init"
      init.text =
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
        `gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`
      document.head.appendChild(init)
    }

    if (ADSENSE_ID && !document.getElementById("adsense-lib")) {
      const ads = document.createElement("script")
      ads.id = "adsense-lib"
      ads.async = true
      ads.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`
      ads.crossOrigin = "anonymous"
      document.head.appendChild(ads)
    }
  }, [])

  return null
}
