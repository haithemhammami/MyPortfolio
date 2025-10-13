"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Arrière-plan avec le dégradé spécifié */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-neon/20 rounded-full blur-3xl" />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading">
              <span className="block">Bonjour, je suis</span>
              <span className="gradient-text">Haithem Hammami</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground font-heading">
            Ingénieur Logiciel Full Stack
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg">
            Je transforme les idées en solutions digitales performantes.
            De l'interface utilisateur à l'architecture logicielle, j'interviens sur l'ensemble du cycle de développement.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-blue-cyan hover:bg-blue-cyan/90 hover-glow">
              <Link href="/#contact">
                Me Contacter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-green-neon text-green-neon hover:bg-green-neon/10"
            >
              <Link href="/CV_Haithem Hammami_Dév Full Stack.pdf" download>
                Voir mon CV
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link href="https://github.com/haithemhammami" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="hover:bg-blue-cyan/10 hover:text-blue-cyan"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/haithem-hammami/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="hover:bg-blue-cyan/10 hover:text-blue-cyan"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:haithem.hammami.pro@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Email"
                className="hover:bg-blue-cyan/10 hover:text-blue-cyan"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto lg:ml-auto"
        >
          <div className="relative w-auto h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 holographic-card">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-cyan/10 to-pink-neon/10 backdrop-blur-lg" />
            <Image
              src="/image.png"
              alt="Profil"
              width={640} 
              height={640} 
              className="object-contain brightness-105" // Légère augmentation de la luminosité
              priority
            />
          </div>


          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-cyan to-pink-neon rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-bold text-white shadow-md">BAC +5</span>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}

