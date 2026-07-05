/**
 * Detects whether the site is running inside one of our native app shells
 * rather than a normal web browser.
 *
 * - Android: Capacitor injects `window.Capacitor` (bridge is present even for
 *   remote server.url apps).
 * - iOS native app: its WKWebView sets a custom UA containing "CalkUZ"
 *   (see ios-app/CalkUZ/WebViewController.swift) and the Capacitor Android
 *   build appends "CalkUZ" to its UA too.
 *
 * Inside the apps we must NOT load web AdSense/GA/cookie-banner — Google policy
 * forbids AdSense in app webviews (apps use AdMob), and Apple expects no
 * untracked web analytics. This mirrors the fleet convention.
 */
export function isNativeApp(): boolean {
  if (typeof navigator === "undefined") return false
  const ua = navigator.userAgent || ""
  if (/CalkUZ/i.test(ua)) return true
  const cap = typeof window !== "undefined" ? (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean; isNative?: boolean } }).Capacitor : undefined
  if (cap) return typeof cap.isNativePlatform === "function" ? cap.isNativePlatform() : !!cap.isNative
  return false
}
