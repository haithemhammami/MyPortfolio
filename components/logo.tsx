"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const { theme } = useTheme()

  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={cn("relative", sizes[size], className)}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Modern H */}
        <path
          d="M40 40V160M40 100H80"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M80 40V160" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        {/* Calligraphic H */}
        <path
          d="M100 40C120 40 140 40 160 40C160 60 160 80 140 80C120 80 100 80 100 80"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 80C100 100 100 120 100 140C100 160 120 160 140 160C160 160 160 140 160 140"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M100 110H140" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dot */}
        <circle cx="175" cy="100" r="6" fill="currentColor" />
      </svg>
    </div>
  )
}

