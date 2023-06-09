import "@/styles/globals.css"
import { Metadata } from "next"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import openGraph from "@/public/openGraph.jpg"
export const metadata: Metadata = {
  metadataBase: new URL('https://job-reply-bot.vercel.app/'),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white"},
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: openGraph.src,
    authors: ["Joana Santos"],
    locale: "en_GB",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
