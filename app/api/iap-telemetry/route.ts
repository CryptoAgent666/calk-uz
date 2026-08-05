import { NextResponse } from "next/server"

/**
 * IAP funnel telemetry proxy.
 *
 * The client posts an anonymous funnel event (one of four allowed types)
 * same-origin. We enrich it (id, app, ts) and forward it to DATA_HUB
 * server-side, keeping the ingest token OUT of the client bundle.
 *
 * Fire-and-forget contract: this route ALWAYS answers 204 and never surfaces
 * an error to the purchase UI.
 *
 * Auth: the DATA_HUB receiver is deliberately public — it authenticates nothing
 * and guards itself with a four-type allowlist instead (verified 2026-08-05: a
 * POST with no header, and one with a wrong token, both returned 200 stored;
 * an unknown event.type returned 400). That is the right call for a client-fed
 * endpoint, since a secret shipped to clients is not a secret. So we forward
 * unconditionally. `DATAHUB_TELEMETRY_TOKEN` is still sent when the env var
 * happens to be set, which costs nothing and keeps us compatible if the
 * receiver ever starts checking again.
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
  try {
    await fetch(DATAHUB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
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

  return noContent()
}

function noContent(): NextResponse {
  return new NextResponse(null, { status: 204 })
}
