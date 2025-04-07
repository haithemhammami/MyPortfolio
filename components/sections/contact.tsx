"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai bientôt.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
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
                        href="mailto:hello@example.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@example.com
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
                        href="tel:+1234567890"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Localisation</h4>
                      <p className="text-sm text-muted-foreground">Paris, France</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Me suivre</h4>
                  <div className="flex gap-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
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
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        Envoyer le Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

