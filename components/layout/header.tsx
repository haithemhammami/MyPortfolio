"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "@/components/logo"

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/#about" },
  { name: "Expérience", path: "/#experience" },
  { name: "Projets", path: "/#projects" },
  { name: "Blog", path: "/#blog" },
  { name: "Contact", path: "/#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Logo size="sm" className="text-blue-cyan dark:text-blue-cyan" />
            <span className="ml-2 font-bold text-xl">H.Haithem</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-cyan",
                pathname === item.path ? "text-blue-cyan" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button size="sm" className="ml-4 bg-pink-neon hover:bg-pink-neon/90 hover-neon" asChild>
            <Link href="/CV_Haithem Hammami_CDI_Octobre .pdf" download>
              CV
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-cyan py-2",
                  pathname === item.path ? "text-blue-cyan" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-pink-neon hover:bg-pink-neon/90 hover-neon" asChild>
              <Link href="/CV_Haithem Hammami_CDI_Octobre .pdf" download>
                CV
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

