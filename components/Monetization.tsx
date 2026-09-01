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
 *
 * Consent — Google's CMP (AdSense → Privacy & messaging), НЕ свой баннер.
 * CMP едет ВНУТРИ adsbygoogle.js: сам геодетектит посетителя, показывает
 * GDPR-сообщение в EEA/UK/CH и ничего — остальным. Свой cookie-баннер удалён
 * (коммит этого файла): он писал только localStorage и не отключал ничего,
 * а на calk-usa такой же самописный гейт вообще давил показы в ноль.
 * Ссылка «Настройки конфиденциальности» (повторное открытие CMP-диалога) —
 * components/PrivacySettings.tsx в футере.
 *
 * Дефолты Consent Mode v2 регионально-скоупнуты НАМЕРЕННО: CMP шлёт
 * consent-update только тем, кому показал сообщение, поэтому глобальный
 * 'denied' оставил бы всю не-европейскую аудиторию (т.е. основную, UZ)
 * запрещённой навсегда, а GA4 — вечно cookieless. Требует включённых
 * consent-mode флагов в AdSense → Privacy & messaging → Settings.
 */
const EEA_UK_CH = [
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS",
  "IE","IT","LV","LI","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI",
  "ES","SE","GB","CH",
]

export function Monetization() {
  useEffect(() => {
    if (isNativeApp()) return

    // Consent Mode v2 defaults — строго ДО загрузки gtag.js / adsbygoogle.js.
    if (!document.getElementById("consent-defaults")) {
      const consent = document.createElement("script")
      consent.id = "consent-defaults"
      consent.text =
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
        `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',` +
        `ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,` +
        `region:${JSON.stringify(EEA_UK_CH)}});` +
        `gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',` +
        `ad_personalization:'granted',analytics_storage:'granted'});`
      document.head.appendChild(consent)
    }

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
