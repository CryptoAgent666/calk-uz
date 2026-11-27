"use client"

import { useEffect, useState } from "react"
import { getRemoveAdsPrice, REMOVE_ADS_FALLBACK_PRICE } from "@/lib/purchases"

/**
 * Цена «убрать рекламу» вместе с ЧЕСТНЫМ состоянием.
 *
 * Три поверхности оффера (кнопка в меню, плашка над баннером, тост после
 * интерстишела) держали `price: string | null` и при null подставляли
 * REMOVE_ADS_FALLBACK_PRICE. Получалось враньё: цена на кнопке есть, а по тапу —
 * «покупка недоступна». Так и выглядел баг на Android 2026-08-06.
 *
 * Теперь состояния разделены:
 * - `loading` — стор ещё отвечает; показываем запасную цену, тап разрешён
 *   (buyRemoveAds сам дотянет продукт);
 * - `ready` — пришла настоящая локализованная цена;
 * - `unavailable` — стор продукт не отдал; оффер не показываем вообще, мёртвой
 *   кнопки быть не должно.
 */
export type RemoveAdsPrice =
  | { state: "loading"; label: string }
  | { state: "ready"; label: string }
  | { state: "unavailable"; label: null }

export function useRemoveAdsPrice(): RemoveAdsPrice {
  const [price, setPrice] = useState<RemoveAdsPrice>({
    state: "loading",
    label: REMOVE_ADS_FALLBACK_PRICE,
  })

  useEffect(() => {
    let alive = true
    void getRemoveAdsPrice().then((p) => {
      if (!alive) return
      setPrice(p ? { state: "ready", label: p } : { state: "unavailable", label: null })
    })
    return () => {
      alive = false
    }
  }, [])

  return price
}
