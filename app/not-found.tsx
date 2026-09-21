/**
 * Root-level 404 — for paths OUTSIDE the [locale] segment (e.g. /foo).
 * Locale-scoped 404s render app/[locale]/not-found.tsx; this one has no
 * next-intl context, so it is bilingual and static. Styling is inline-safe:
 * the root layout carries no globals.css.
 */
export default function RootNotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        background: "#f6faf8",
        color: "#0a0f1c",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div>
        <div style={{ fontSize: 72, fontWeight: 800, color: "#059669" }}>404</div>
        <h1 style={{ fontSize: 22, margin: "8px 0 4px" }}>Страница не найдена</h1>
        <p style={{ margin: "0 0 20px", color: "#4b5563" }}>Sahifa topilmadi</p>
        <p style={{ margin: "0 0 24px", color: "#4b5563" }}>
          Возможно, адрес введён с ошибкой или страница была перемещена.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/ru"
            style={{
              background: "#059669",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            На главную
          </a>
          <a
            href="/uz"
            style={{
              border: "1px solid #d1d5db",
              color: "#0a0f1c",
              padding: "10px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Bosh sahifa
          </a>
        </div>
      </div>
    </div>
  )
}
