import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DataSoul - AI-Powered Data Sharing & SocialFi Ecosystem",
  description:
    "Turn your data, insights, and social influence into financial rewards through AI-driven monetization and on-chain social interaction.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#06b6d4',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['DataSoul', 'AI', 'Blockchain', 'Data Monetization', 'SocialFi', 'Web3', 'Crypto'],
  authors: [{ name: 'DataSoul Team' }],
  creator: 'DataSoul',
  publisher: 'DataSoul',
  robots: 'index, follow',
  openGraph: {
    title: 'DataSoul - AI-Powered Data Sharing & SocialFi Ecosystem',
    description: 'Turn your data, insights, and social influence into financial rewards through AI-driven monetization and on-chain social interaction.',
    url: 'https://datasoul.network',
    siteName: 'DataSoul',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'DataSoul Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataSoul - AI-Powered Data Sharing & SocialFi Ecosystem',
    description: 'Turn your data, insights, and social influence into financial rewards through AI-driven monetization and on-chain social interaction.',
    images: ['/logo.png'],
    creator: '@DataSoul',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="color-scheme" content="dark" />
        <meta name="application-name" content="DataSoul" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DataSoul" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
