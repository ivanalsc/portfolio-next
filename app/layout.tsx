import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ivana Sosa Cordero | Frontend Developer & Design Engineer",
  icons: [
    {
      rel: "icon",
      url: "/favicon-white.ico",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      url: "/favicon-black.ico",
      media: "(prefers-color-scheme: light)",
    }
  ],
  description: "Portfolio of Ivana Sosa Cordero, a Frontend Developer and Design Engineer based in Argentina.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
