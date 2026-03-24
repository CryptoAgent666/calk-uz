import { Link } from "@/i18n/navigation"
import { Calculator, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Decorative */}
        <div className="relative mx-auto mb-8 w-fit">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
            <Calculator className="h-12 w-12 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
            <span className="text-lg font-bold text-destructive">?</span>
          </div>
        </div>

        {/* 404 */}
        <div className="mb-4">
          <span className="text-7xl font-black text-gradient-uzbek">404</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3">
          Страница не найдена
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Запрашиваемая страница не существует или была перемещена. Попробуйте
          вернуться на главную страницу.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <Home className="h-4 w-4" />
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}
