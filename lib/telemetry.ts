/**
 * IAP funnel telemetry — fire-and-forget, anonymous.
 *
 * Posts one of four funnel events to our OWN backend (same-origin
 * `/api/iap-telemetry`), which forwards it to DATA_HUB server-side. The ingest
 * token lives ONLY on the server (env var) — it is never shipped to the client.
 *
 * Why same-origin instead of a direct browser→webhook call:
 *   • the DATA_HUB bearer token would otherwise ship in the public OTA bundle
 *     (anyone could read and forge it);
 *   • calk.uz's CSP is `connect-src 'self' …` — a direct fetch to the duckdns
 *     host would be blocked by the browser anyway;
 *   • ad-blockers drop third-party telemetry hosts, so the funnel would undercount.
 *
 * The event carries NO personal data and sets NO cookies — just an event type,
 * a random id, the app name, and a timestamp (added server-side).
 *
 * Purchase SUCCESS is intentionally NOT emitted here — it arrives via the
 * RevenueCat webhook, so the rollup counts it once, server-side.
 */
export type IapFunnelEvent =
  | "paywall_shown"
  | "purchase_tapped"
  | "purchase_cancelled"
  | "purchase_failed"
  | "purchase_unavailable"

/**
 * Доп. поля события. DATA_HUB принимает только allowlist (platform, store,
 * product_id, code) и режет каждое до 64 символов — длинное сообщение стора
 * ужимаем сами.
 *
 * Зачем: за 28 дней до 12.09.2026 на calk.uz было 15 тапов и 14 отмен, и 13 из
 * них пришли через 1–7 с после тапа — человек за это время не успевает даже
 * прочитать окно Google Play. Play возвращает USER_CANCELED и когда окно закрыл
 * пользователь, и когда оно схлопнулось само (аккаунт без способа оплаты, регион,
 * ограничение профиля); различить можно только по underlyingErrorMessage, а по
 * голому типу события 15 тапов не рассказали ничего.
 */
export interface IapEventDetail {
  platform?: string
  code?: string
}

export function emitIap(type: IapFunnelEvent, detail?: IapEventDetail): void {
  if (typeof window === "undefined") return
  try {
    void fetch("/api/iap-telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        ...(detail?.platform ? { platform: String(detail.platform).slice(0, 16) } : {}),
        ...(detail?.code ? { code: String(detail.code).slice(0, 64) } : {}),
      }),
      keepalive: true, // still delivered if the view is navigating away
    }).catch(() => {})
  } catch {
    /* telemetry must never break the purchase UI */
  }
}
