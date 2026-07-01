export default function CalculatorLoading() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb skeleton */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-16 rounded bg-muted animate-pulse" />
            <div className="h-3.5 w-3.5 rounded bg-muted animate-pulse" />
            <div className="h-4 w-24 rounded bg-muted animate-pulse" />
            <div className="h-3.5 w-3.5 rounded bg-muted animate-pulse" />
            <div className="h-4 w-32 rounded bg-muted animate-pulse" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Calculator Header skeleton */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-5 w-20 rounded bg-muted animate-pulse" />
                  <div className="h-8 w-64 rounded bg-muted animate-pulse" />
                </div>
              </div>
              <div className="h-4 w-full max-w-2xl rounded bg-muted animate-pulse mt-2" />
              <div className="h-4 w-3/4 max-w-2xl rounded bg-muted animate-pulse mt-2" />
            </div>

            {/* Calculator area skeleton */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-6">
                {/* Input fields skeleton */}
                <div className="space-y-4">
                  <div className="h-5 w-32 rounded bg-muted animate-pulse" />
                  <div className="h-12 w-full rounded-lg bg-muted animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-40 rounded bg-muted animate-pulse" />
                  <div className="h-12 w-full rounded-lg bg-muted animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-28 rounded bg-muted animate-pulse" />
                  <div className="h-12 w-full rounded-lg bg-muted animate-pulse" />
                </div>
                {/* Button skeleton */}
                <div className="h-12 w-full rounded-lg bg-primary/20 animate-pulse" />
                {/* Results skeleton */}
                <div className="rounded-xl border border-border p-4 space-y-3">
                  <div className="h-5 w-24 rounded bg-muted animate-pulse" />
                  <div className="h-8 w-48 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-full rounded bg-muted animate-pulse" />
                  <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="h-5 w-40 rounded bg-muted animate-pulse mb-4" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3">
                    <div className="h-9 w-9 rounded-lg bg-muted animate-pulse shrink-0" />
                    <div className="h-4 w-full rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
