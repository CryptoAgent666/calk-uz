"use client"

import { useTranslations } from "next-intl"

/**
 * Route-level loading UI (Suspense fallback).
 *
 * Client Component on purpose: it renders inside NextIntlClientProvider from
 * the locale layout, so it can localise the label. It used to hard-code
 * «Загрузка...», which showed Russian text to Uzbek visitors on every
 * calculator page while the component streamed in.
 */
export default function Loading() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        <p className="text-muted-foreground text-sm">{t("common_loading")}</p>
      </div>
    </div>
  )
}
