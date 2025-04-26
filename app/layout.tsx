import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import BackgroundPattern from "@/components/background-pattern"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Compass - Local AI Chat App",
  description: "An open-source AI chat application focused on privacy, decentralization, and true data ownership.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BackgroundPattern>{children}</BackgroundPattern>
        </ThemeProvider>
      </body>
    </html>
  )
}
