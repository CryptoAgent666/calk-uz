"use client"

import { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import { Calculator, X } from "lucide-react"
import { isNativeApp } from "@/lib/platform"

/**
 * Non-intrusive "get the app" bar for MOBILE WEB visitors only.
 *
 * - Shows a slim, dismissible bottom bar — never a full-screen interstitial
 *   (Google penalises those on mobile, and they annoy users).
 * - iOS → App Store, Android → Google Play (detected by UA).
 * - Hidden inside our own native apps (isNativeApp) and on desktop.
 * - Appears only after the cookie choice is made (so it never stacks on the
 *   cookie bar) and is remembered as dismissed for 30 days.
 */
const DISMISS_KEY = "calk_app_banner_dismissed"
const DISMISS_MS = 30 * 24 * 60 * 60 * 1000
const IOS_URL = "https://apps.apple.com/app/id6782391910"
const ANDROID_URL = "https://play.google.com/store/apps/details?id=uz.calk.calculator"

function detectPlatform(): "ios" | "android" | null {
  if (typeof navigator === "undefined") return null
  const ua = navigator.userAgent || ""
  if (/iPhone|iPod/i.test(ua)) return "ios"
  // iPadOS Safari reports a desktop ("Macintosh") UA — detect it via touch.
  if (/iPad/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return "ios"
  if (/Android/i.test(ua)) return "android"
  return null
}

export function AppInstallBanner() {
  const locale = useLocale()
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null)
  const [visible, setVisible] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (isNativeApp()) return
    const p = detectPlatform()
    if (!p) return
    try {
      const raw = localStorage.getItem(DISMISS_KEY)
      if (raw && Date.now() - Number(raw) < DISMISS_MS) return
    } catch {
      /* ignore */
    }
    setPlatform(p)

    let timer: ReturnType<typeof setTimeout>
    const tryShow = () => {
      let cookieDecided = true
      try {
        cookieDecided = !!localStorage.getItem("cookie-consent")
      } catch {
        /* ignore */
      }
      if (cookieDecided) setVisible(true)
      else timer = setTimeout(tryShow, 1500)
    }
    timer = setTimeout(tryShow, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (visible) requestAnimationFrame(() => setShown(true))
  }, [visible])

  if (!platform || !visible) return null

  const uz = locale === "uz"
  const url = platform === "ios" ? IOS_URL : ANDROID_URL

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3">
      <div
        className={`mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-border bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur transition-transform duration-300 ${
          shown ? "translate-y-0" : "translate-y-[130%]"
        }`}
        role="region"
        aria-label={uz ? "Ilovani o'rnatish" : "Установить приложение"}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700">
          <Calculator className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-tight text-foreground">
            {uz ? "Calk.UZ ilovasi" : "Приложение Calk.UZ"}
          </p>
          <p className="truncate text-xs leading-tight text-muted-foreground">
            {uz ? "Reklamasiz va oflayn kalkulyatorlar" : "Без рекламы и офлайн-калькуляторы"}
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="shrink-0 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          {uz ? "O'rnatish" : "Установить"}
        </a>
        <button
          onClick={dismiss}
          aria-label={uz ? "Yopish" : "Закрыть"}
          className="shrink-0 p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
