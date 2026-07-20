import { NextResponse } from "next/server"

/**
 * IAP funnel telemetry proxy.
 *
 * The client posts an anonymous funnel event (one of four allowed types)
 * same-origin. We enrich it (id, app, ts) and forward it to DATA_HUB
 * server-side, keeping the ingest token OUT of the client bundle.
 *
 * Fire-and-forget contract: this route ALWAYS answers 204 and never surfaces
 * an error to the purchase UI. If `DATAHUB_TELEMETRY_TOKEN` is unset it is a
 * silent no-op, so a missing/rotated secret can never break the funnel or the
 * checkout flow.
 *
 * Set the token in the server environment (Plesk env / `.env.local`) — never
 * commit the value.
 */
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const DATAHUB_URL = "https://mydatahub.duckdns.org/webhooks/app-telemetry"

const ALLOWED = new Set<string>([
  "paywall_shown",
  "purchase_tapped",
  "purchase_cancelled",
  "purchase_failed",
])

export async function POST(req: Request): Promise<NextResponse> {
  let type: unknown
  try {
    ;({ type } = await req.json())
  } catch {
    return noContent()
  }
  if (typeof type !== "string" || !ALLOWED.has(type)) {
    return noContent()
  }

  const token = process.env.DATAHUB_TELEMETRY_TOKEN
  if (token) {
    try {
      await fetch(DATAHUB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          event: { id: crypto.randomUUID(), type, app: "calk.uz", ts: Date.now() },
        }),
        // Bounded so a slow/down DATA_HUB never holds the request open.
        signal: AbortSignal.timeout(2500),
      })
    } catch {
      /* swallow — telemetry is best-effort */
    }
  }

  return noContent()
}

function noContent(): NextResponse {
  return new NextResponse(null, { status: 204 })
}
