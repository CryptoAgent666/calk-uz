import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { ToastProvider } from "@/components/ui/toast-simple"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { getAuthorBySlug, PRIMARY_AUTHOR_SLUG } from "@/lib/data/authors"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ""

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#059669' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1C' },
  ],
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL("https://calk.uz"),
  title: { template: "%s | Calk.UZ", default: "Calk.UZ — Онлайн калькуляторы для Узбекистана" },
  description:
    "78 бесплатных онлайн калькуляторов для Узбекистана: налоги, кредиты, зарплата, ипотека, коммунальные услуги, валюта и многое другое.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
}

function OrganizationJsonLd({ locale }: { locale: string }) {
  const author = getAuthorBySlug(PRIMARY_AUTHOR_SLUG)
  const isUz = locale === "uz"
  const founderUrl = `https://calk.uz/${locale}/author/${PRIMARY_AUTHOR_SLUG}`
  const founderSameAs = author
    ? author.social.filter((s) => s.url.startsWith("http")).map((s) => s.url)
    : []

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://calk.uz/#organization",
      name: "Calk.UZ",
      url: "https://calk.uz",
      logo: {
        "@type": "ImageObject",
        url: "https://calk.uz/favicon.svg",
        width: 512,
        height: 512,
      },
      description:
        "Бесплатные онлайн-калькуляторы для жителей Узбекистана. Налоги, зарплата, кредиты, вклады и другие финансовые расчёты.",
      sameAs: [
        "https://t.me/calkuz_bot",
        "https://play.google.com/store/apps/details?id=uz.calk.calculator",
      ],
      founder: { "@id": "https://calk.uz/#founder" },
      foundingDate: "2025-01-01",
      areaServed: {
        "@type": "Country",
        name: "Uzbekistan",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@calk.uz",
        contactType: "customer service",
        availableLanguage: ["Russian", "Uzbek"],
      },
    },
    author && {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://calk.uz/#founder",
      name: author.name,
      alternateName: author.alternateName,
      jobTitle: isUz ? author.jobTitleUz : author.jobTitleRu,
      description: isUz ? author.shortBioUz : author.shortBioRu,
      url: founderUrl,
      image: `https://calk.uz${author.imagePath}`,
      email: author.email,
      knowsLanguage: ["ru", "uz", "en"],
      knowsAbout: isUz ? author.expertiseUz : author.expertiseRu,
      sameAs: founderSameAs,
      worksFor: { "@id": "https://calk.uz/#organization" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tashkent",
        addressCountry: "UZ",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Calk.UZ",
      url: "https://calk.uz",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `https://calk.uz/${locale}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ].filter(Boolean)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <OrganizationJsonLd locale={locale} />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Google AdSense */}
        {/* Service Worker for offline support */}
        <Script id="sw-register" strategy="afterInteractive">
          {`if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js')}`}
        </Script>

        {ADSENSE_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <ToastProvider>
              <main className="flex-1">{children}</main>
            </ToastProvider>
            <Footer />
            <CookieConsent />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
