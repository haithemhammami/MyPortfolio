"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { AlertCircle, CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const [messageTimer, setMessageTimer] = useState<number>(0)
  const [timerActive, setTimerActive] = useState<boolean>(false)
  const progressRef = useRef<HTMLDivElement>(null)

  // Gestion du timer pour les messages
  useEffect(() => {
    if ((formSuccess || formError) && !timerActive) {
      setMessageTimer(5)
      setTimerActive(true)

      // Animation fluide de la barre de progression
      if (progressRef.current) {
        progressRef.current.style.transition = "width 5s linear"
        progressRef.current.style.width = "0%"
      }
    }

    if (timerActive) {
      const interval = setInterval(() => {
        setMessageTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setTimerActive(false)
            // Effacer les messages après le délai
            if (formSuccess) setFormSuccess(null)
            if (formError) setFormError(null)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [formSuccess, formError, timerActive])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Réinitialiser les messages lors de la modification du formulaire
    if (formError) {
      setFormError(null)
      setTimerActive(false)
    }
    if (formSuccess) {
      setFormSuccess(null)
      setTimerActive(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setFormSuccess(null)
    setTimerActive(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi du message")
      }

      // Succès
      setFormSuccess("Votre message a été envoyé avec succès !\nJe vous répondrai dans les plus brefs délais.")
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      })

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      setFormError(error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi du message")

      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi du message",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fonction pour créer un lien mailto avec les données du formulaire
  const createMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || "Contact depuis le portfolio")
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    return `mailto:haithem.hammami.pro@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Me Contacter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou vous souhaitez collaborer ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-heading">Informations de Contact</h3>
                  <p className="text-muted-foreground">N'hésitez pas à me contacter par l'un des canaux suivants :</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Email</h4>
                      <Link
                        href="mailto:haithem.hammami.pro@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        haithem.hammami.pro@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Téléphone</h4>
                      <Link
                        href="tel:+33614647905"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 64 14 79 05
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Localisation</h4>
                      <p className="text-sm text-muted-foreground">Paris, Île-de-France</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Me suivre</h4>
                  <div className="flex gap-4">
                    <Link href="https://github.com/haithemhammami" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/haithem-hammami/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-destructive/10 text-destructive p-3 rounded-md"
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div className="space-y-2 flex-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm">{formError}</p>
                            <span className="text-xs font-medium">{messageTimer}s</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-destructive text-destructive hover:bg-destructive/10"
                            asChild
                          >
                            <Link href={createMailtoLink()}>Envoyer par email directement</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="w-full bg-background/30 h-1 mt-2 rounded-full overflow-hidden">
                        <div ref={progressRef} className="h-full bg-destructive" style={{ width: "100%" }} />
                      </div>
                    </motion.div>
                  )}

                  {formSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-neon/10 text-green-neon p-3 rounded-md"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm whitespace-pre-line">{formSuccess}</p>
                            <span className="text-xs font-medium">{messageTimer}s</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-background/30 h-1 mt-2 rounded-full overflow-hidden">
                        <div ref={progressRef} className="h-full bg-green-neon" style={{ width: "100%" }} />
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-cyan hover:bg-blue-cyan/90 hover-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </div>
                      ) : (
                        <>
                          Envoyer le Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-green-neon text-green-neon hover:bg-green-neon/10"
                      asChild
                    >
                      <Link href={createMailtoLink()}>
                        <Mail className="mr-2 h-4 w-4" /> Envoyer par Email
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
