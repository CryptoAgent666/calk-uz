/**
 * Pass-through root layout. <html>/<body> are rendered by app/[locale]/layout.tsx
 * (it owns lang, fonts, globals.css); this file exists only because the root
 * not-found.tsx and error.tsx need a layout above them, and those two render
 * their own <html>/<body>.
 *
 * Do NOT add <html>/<body> here: together with the locale layout that nests a
 * second document inside <body>, the browser parser folds it into the first one,
 * and every page throws React hydration error #418 in production.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
