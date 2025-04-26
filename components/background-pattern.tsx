"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface BackgroundPatternProps {
  children: React.ReactNode
}

export default function BackgroundPattern({ children }: BackgroundPatternProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <div
      className={`grid-pattern min-h-screen ${
        theme === "dark" ? "bg-[#232323] text-white" : "bg-[#efefef] text-gray-900"
      }`}
      style={{
        color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </div>
  )
}
