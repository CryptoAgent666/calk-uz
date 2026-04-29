import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import {
  ChevronRight,
  Home,
  Mail,
  Send,
  Briefcase,
  BarChart3,
  Calculator,
  ExternalLink,
  Globe,
  GraduationCap,
  ShieldCheck,
  Award,
  MapPin,
  Languages,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/calculator/DynamicIcon"
import { AUTHORS, getAuthorBySlug } from "@/lib/data/authors"

const BASE_URL = "https://calk.uz"

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Send,
  Briefcase,
  BarChart3,
  Calculator,
  Globe,
  ExternalLink,
}

export function generateStaticParams() {
  return AUTHORS.flatMap((a) => [
    { locale: "ru", slug: a.slug },
    { locale: "uz", slug: a.slug },
  ])
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return { title: "404" }

  const isUz = locale === "uz"
  const title = isUz
    ? `${author.alternateName} — ${author.jobTitleUz}`
    : `${author.alternateName} — ${author.jobTitleRu}`
  const description = isUz ? author.shortBioUz : author.shortBioRu
  const canonicalUrl = `${BASE_URL}/${locale}/author/${author.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ru: `${BASE_URL}/ru/author/${author.slug}`,
        uz: `${BASE_URL}/uz/author/${author.slug}`,
        "x-default": `${BASE_URL}/ru/author/${author.slug}`,
      },
    },
    openGraph: {
      title: `${author.alternateName} | Calk.UZ`,
      description,
      type: "profile",
      locale: isUz ? "uz_UZ" : "ru_RU",
      url: canonicalUrl,
      siteName: "Calk.UZ",
      images: [{ url: `${BASE_URL}${author.imagePath}`, width: 400, height: 400 }],
    },
    twitter: {
      card: "summary",
      title: `${author.alternateName} | Calk.UZ`,
      description,
    },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const isUz = locale === "uz"
  const canonicalUrl = `${BASE_URL}/${locale}/author/${author.slug}`

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    name: author.name,
    alternateName: author.alternateName,
    jobTitle: isUz ? author.jobTitleUz : author.jobTitleRu,
    description: isUz ? author.shortBioUz : author.shortBioRu,
    url: canonicalUrl,
    image: `${BASE_URL}${author.imagePath}`,
    email: author.email,
    knowsLanguage: ["ru", "uz", "en"],
    knowsAbout: isUz ? author.expertiseUz : author.expertiseRu,
    sameAs: author.social
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "Calk.UZ",
      url: BASE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("breadcrumb_home"),
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isUz ? "Mualliflar" : "Авторы",
        item: `${BASE_URL}/${locale}/author/${author.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: author.alternateName,
        item: canonicalUrl,
      },
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: isUz ? `${author.alternateName} haqida` : `Об авторе — ${author.alternateName}`,
    url: canonicalUrl,
    inLanguage: isUz ? "uz" : "ru",
    mainEntity: { "@id": `${BASE_URL}/#founder` },
    isPartOf: { "@type": "WebSite", name: "Calk.UZ", url: BASE_URL },
  }

  const longBio = isUz ? author.longBioUz : author.longBioRu
  const expertise = isUz ? author.expertiseUz : author.expertiseRu

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, breadcrumbSchema, aboutPageSchema]),
        }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              {t("breadcrumb_home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t("about_title")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[260px]">
              {author.alternateName}
            </span>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Hero */}
        <header className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-2xl overflow-hidden ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
            <Image
              src={author.imagePath}
              alt={author.alternateName}
              width={400}
              height={400}
              priority
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              <ShieldCheck className="h-3 w-3 mr-1.5 text-emerald-600" />
              {isUz ? "Calk.UZ tahririyati" : "Редакция Calk.UZ"}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
              {author.alternateName}
            </h1>
            <p className="text-base text-emerald-700 dark:text-emerald-400 font-medium mb-3">
              {isUz ? author.jobTitleUz : author.jobTitleRu}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isUz ? author.shortBioUz : author.shortBioRu}
            </p>

            {/* Quick facts */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-emerald-600" />
                {isUz
                  ? `${author.experienceYearsTotal}+ yil tajriba`
                  : `${author.experienceYearsTotal}+ лет опыта`}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="h-4 w-4 text-emerald-600" />
                {isUz
                  ? `${author.experienceYearsFinance}+ yil moliyaviy tahlilda`
                  : `${author.experienceYearsFinance}+ лет в финансовой аналитике`}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-600" />
                {author.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Languages className="h-4 w-4 text-emerald-600" />
                {author.languages.join(" · ")}
              </span>
            </div>
          </div>
        </header>

        {/* Long bio */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {isUz ? "Men haqimda" : "Обо мне"}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {longBio.map((p, i) => (
              <p key={i} className="text-[15px]">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Expertise areas */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {isUz ? "Mutaxassislik sohalari" : "Области экспертизы"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {author.expertiseAreas.map((area) => (
              <div
                key={area.iconKey}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                    <DynamicIcon
                      name={area.iconKey}
                      className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {isUz ? area.titleUz : area.titleRu}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isUz ? area.descriptionUz : area.descriptionRu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {expertise.map((item) => (
              <Badge key={item} variant="secondary" className="text-xs font-normal">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {isUz ? "Professional yo'l" : "Профессиональный путь"}
          </h2>
          <ol className="relative border-l border-border ml-3 space-y-6">
            {author.timeline.map((item, idx) => (
              <li key={idx} className="ml-6">
                <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-background" />
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                      {isUz ? item.yearUz : item.yearRu}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {isUz ? item.titleUz : item.titleRu}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isUz ? item.descriptionUz : item.descriptionRu}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Other projects */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {isUz ? "Mening boshqa loyihalarim" : "Другие мои проекты"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {author.projects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isUz ? project.descriptionUz : project.descriptionRu}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact + social */}
        <section className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                {isUz ? "Men bilan bog'lanish" : "Связаться со мной"}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isUz
                  ? "Hisob-kitobda xatolik topdingizmi yoki yangi kalkulyator taklif qilmoqchimisiz? Menga to'g'ridan-to'g'ri yozing — har bir xabarni shaxsan ko'rib chiqaman."
                  : "Заметили ошибку в расчётах или хотите предложить новый калькулятор? Напишите мне напрямую — я лично разбираю каждое сообщение."}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {author.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.iconKey] || ExternalLink
              return (
                <a
                  key={s.url}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all text-sm font-medium text-foreground"
                >
                  <Icon className="h-4 w-4 text-emerald-600" />
                  {s.label}
                </a>
              )
            })}
          </div>
        </section>
      </article>
    </div>
  )
}
