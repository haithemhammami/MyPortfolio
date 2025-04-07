"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const checkCursorType = () => {
      const target = document.querySelector(":hover") as HTMLElement
      if (target) {
        const cursor = window.getComputedStyle(target).cursor
        setIsPointer(cursor === "pointer")
      }
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousemove", checkCursorType)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousemove", checkCursorType)
    }
  }, [])

  // Masquer le curseur sur les appareils mobiles
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]) {
          cursor: none;
        }
      `}</style>

      {/* Cercle extérieur simple */}
      <motion.div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full border-2 ${isPointer ? "border-pink-neon" : "border-blue-cyan"} pointer-events-none z-[9999]`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Point central */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full ${isPointer ? "bg-pink-neon" : "bg-blue-cyan"} pointer-events-none z-[10000]`}
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          mass: 0.1,
        }}
      />
    </>
  )
}

