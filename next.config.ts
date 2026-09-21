import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**
 * Content-Security-Policy.
 *
 * The ad/analytics hosts below are what Google AdSense **Auto Ads** and GA4
 * actually touch at runtime — verified empirically against the live site by
 * triggering each endpoint and collecting `securitypolicyviolation` events.
 * Auto Ads are not a single script: they fetch config, run ad-traffic-quality
 * (sodar) checks, and frame both creatives and the Privacy & messaging consent
 * UI, so they need script-src + connect-src + frame-src, not just script-src.
 * Dropping a host here silently kills fill rate rather than throwing an error.
 */
const GOOGLE_ADS_SCRIPT = [
  "https://pagead2.googlesyndication.com",
  "https://tpc.googlesyndication.com",
  "https://googleads.g.doubleclick.net",
  "https://adservice.google.com",
  "https://www.googletagservices.com",
  "https://securepubads.g.doubleclick.net",
  "https://fundingchoicesmessages.google.com",
  "https://ep1.adtrafficquality.google",
  "https://ep2.adtrafficquality.google",
];

const GOOGLE_ADS_CONNECT = [
  "https://pagead2.googlesyndication.com",
  "https://googleads.g.doubleclick.net",
  "https://securepubads.g.doubleclick.net",
  "https://adservice.google.com",
  "https://csi.gstatic.com",
  "https://www.google.com",
  "https://fundingchoicesmessages.google.com",
  "https://ep1.adtrafficquality.google",
  "https://ep2.adtrafficquality.google",
];

const GOOGLE_ADS_FRAME = [
  "https://googleads.g.doubleclick.net",
  "https://tpc.googlesyndication.com",
  "https://www.google.com",
  "https://fundingchoicesmessages.google.com",
  "https://ep1.adtrafficquality.google",
  "https://ep2.adtrafficquality.google",
];

// GA4 posts to a regional collector, not only www.google-analytics.com.
const GOOGLE_ANALYTICS_CONNECT = [
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://analytics.google.com",
  "https://stats.g.doubleclick.net",
];

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com ${GOOGLE_ADS_SCRIPT.join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  `connect-src 'self' https://cbu.uz ${GOOGLE_ANALYTICS_CONNECT.join(" ")} ${GOOGLE_ADS_CONNECT.join(" ")}`,
  "font-src 'self' data:",
  `frame-src ${GOOGLE_ADS_FRAME.join(" ")}`,
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: CSP,
          },
        ],
      },
    ]
  },
};

export default withNextIntl(nextConfig);
