"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, RefreshCw } from "lucide-react"

export default function NotFound() {
  const [isExploding, setIsExploding] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Suivre la position de la souris pour les animations interactives
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Déclencher l'animation d'explosion
  const triggerExplode = () => {
    setIsExploding(true)
    setTimeout(() => setIsExploding(false), 1000)
  }

  // Générer des particules aléatoires pour l'animation d'explosion
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 100 + 50
      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: Math.random() * 10 + 5,
        color: [
          "#00A6C7", // blue-cyan
          "#00C974", // green-neon
          "#4A008E", // violet-electric
          "#FF4DBD", // pink-neon
        ][Math.floor(Math.random() * 4)],
      }
    })
  }

  const particles = generateParticles(30)

  // Variantes d'animation pour les différents éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.8,
      },
    },
  }

  const floatingShapes = [
    { id: 1, shape: "circle", size: 80, x: "10%", y: "20%", delay: 0 },
    { id: 2, shape: "triangle", size: 70, x: "85%", y: "15%", delay: 0.5 },
    { id: 3, shape: "square", size: 60, x: "75%", y: "75%", delay: 1 },
    { id: 4, shape: "circle", size: 50, x: "15%", y: "80%", delay: 1.5 },
    { id: 5, shape: "donut", size: 90, x: "50%", y: "50%", delay: 2 },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4">
      {/* Formes flottantes en arrière-plan */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-20 pointer-events-none"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, shape.id % 2 === 0 ? 360 : -360],
          }}
          transition={{
            duration: 10 + shape.id * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.shape === "circle" && (
            <div className="rounded-full bg-blue-cyan" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.shape === "square" && (
            <div className="bg-green-neon" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.shape === "triangle" && (
            <div
              className="bg-pink-neon"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid currentColor`,
              }}
            />
          )}
          {shape.shape === "donut" && (
            <div
              className="rounded-full border-8 border-violet-electric"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
        </motion.div>
      ))}

      {/* Contenu principal */}
      <motion.div
        className="z-10 text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Numéro 404 animé */}
        <motion.div className="relative mb-8" variants={numberVariants} whileHover={{ scale: 1.2 }} onHoverStart={triggerExplode}>
          <h1 className="text-9xl font-bold font-heading gradient-text inline-block">404</h1>

          {/* Particules d'explosion */}
          <AnimatePresence>
            {isExploding &&
              particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute top-1/2 left-1/2 rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: particle.x,
                    y: particle.y,
                    opacity: 0,
                    scale: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    backgroundColor: particle.color,
                    width: particle.size,
                    height: particle.size,
                  }}
                />
              ))}
          </AnimatePresence>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading" variants={itemVariants}>
          Oups ! Page introuvable
        </motion.h2>

        <motion.p className="text-muted-foreground mb-8 text-lg" variants={itemVariants}>
          Il semble que vous vous soyez aventuré dans un territoire inexploré.
          <br />
          Cette page n'existe pas ou a été déplacée.
        </motion.p>

        {/* Illustration animée */}
        <motion.div className="mb-8 relative h-40 w-full" variants={itemVariants}>
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg width="150" height="150" viewBox="0 0 200 200" className="fill-current">
              <motion.path
                d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="70"
                cy="80"
                r="10"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.circle
                cx="130"
                cy="80"
                r="10"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.path
                d="M70,120 Q100,140 130,120"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </svg>
          </motion.div>

          {/* Éléments interactifs qui suivent la souris */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,166,199,0.1) 0%, rgba(0,0,0,0) 50%)`,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Boutons d'action */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-blue-cyan hover:bg-blue-cyan/90 hover-glow">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Retour à l'accueil
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-green-neon text-green-neon hover:bg-green-neon/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Page précédente
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.location.reload()}
              className="hover:bg-pink-neon/10 hover:text-pink-neon"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Rafraîchir
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
