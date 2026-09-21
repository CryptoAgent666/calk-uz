"use client"

import { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import { isNativeApp } from "@/lib/platform"

/**
 * «Настройки конфиденциальности» — повторно открывает consent-сообщение
 * Google CMP (заменил самописный cookie-баннер, см. Monetization.tsx).
 *
 * CMP сам решает по региону, нужно ли посетителю сообщение, и ссылка обязана
 * следовать тому же правилу: рендерится ТОЛЬКО когда CMP просигналил, что
 * consent-данные существуют. Посетителю из UZ сообщение не показывалось —
 * ему нечего отзывать, и мёртвая ссылка ему не нужна.
 *
 * CONSENT_DATA_READY срабатывает только при живом CMP, поэтому пред-заполнение
 * очереди безопасно и там, где CMP не грузится вовсе (колбэк просто не позовут).
 * Док: https://developers.google.com/funding-choices/fc-api-docs
 */

type GoogleFC = {
  callbackQueue?: Array<Record<string, () => void> | (() => void)>
  showRevocationMessage?: () => void
}

export function PrivacySettings() {
  const locale = useLocale()
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    // В нативных приложениях веб-рекламы/аналитики нет — соглашаться не на что.
    if (isNativeApp()) return
    const w = window as unknown as { googlefc?: GoogleFC }
    w.googlefc = w.googlefc || {}
    w.googlefc.callbackQueue = w.googlefc.callbackQueue || []
    w.googlefc.callbackQueue.push({
      CONSENT_DATA_READY: () => setAvailable(true),
    })
  }, [])

  // <li> — внутри компонента: null не должен оставлять пустой <li> в футере
  // (space-y на <ul> дал бы всем лишний отступ).
  if (!available) return null

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          const w = window as unknown as { googlefc?: GoogleFC }
          const fc = w.googlefc
          if (fc?.callbackQueue && fc.showRevocationMessage) {
            fc.callbackQueue.push(fc.showRevocationMessage)
          }
        }}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
      >
        {locale === "uz" ? "Maxfiylik sozlamalari" : "Настройки конфиденциальности"}
      </button>
    </li>
  )
}
