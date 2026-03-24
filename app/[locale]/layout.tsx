import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { ToastProvider } from "@/components/ui/toast-simple"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ""

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: { template: "%s | Calk.UZ", default: "Calk.UZ — Онлайн калькуляторы для Узбекистана" },
  description:
    "78 бесплатных онлайн калькуляторов для Узбекистана: налоги, кредиты, зарплата, ипотека, коммунальные услуги, валюта и многое другое.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
  },
  manifest: "/manifest.json",
}

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Calk.UZ",
    url: "https://calk.uz",
    logo: "https://calk.uz/favicon.svg",
    description:
      "Бесплатные онлайн-калькуляторы для жителей Узбекистана. Налоги, зарплата, кредиты, вклады и другие финансовые расчёты.",
    sameAs: ["https://t.me/calkuz"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@calk.uz",
      contactType: "customer service",
      availableLanguage: ["Russian", "Uzbek"],
    },
  }

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
        <OrganizationJsonLd />

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
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
