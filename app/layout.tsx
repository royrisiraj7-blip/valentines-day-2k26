import React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"

import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "For Sneha",
  description: "A Valentine's Week letter, written from the heart.",
}

export const viewport: Viewport = {
  themeColor: "#f7f3ef",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
