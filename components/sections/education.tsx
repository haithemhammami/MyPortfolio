"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, GraduationCap, Award, Languages } from "lucide-react"

const education = [
  {
    degree: "Mastère Lead Développeur Full Stack (en cours)",
    institution: "EEMI",
    period: "Depuis Oct. 2023",
    description:
      "Optimisation des logiciels, automatisation, intégration DevOps et solutions IoT & web.",
    icon: <GraduationCap className="h-10 w-10" />,
  },
  {
    degree: "Licence en Automatisme et Informatique Industrielle",
    institution: "ISTIC",
    period: "Sept. 2020 - Juin 2023",
    description:
      "Développement de systèmes de contrôle industriel, applications en temps réel et systèmes embarqués.",
    icon: <GraduationCap className="h-10 w-10" />,
  },
]

const languages = [
  {
    id: "lang1",
    language: "Arabe",
    level: "Langue maternelle",
    icon: <Languages className="h-10 w-10" />,
  },
  {
    id: "lang2",
    language: "Français",
    level: "Courant",
    icon: <Languages className="h-10 w-10" />,
  },
  {
    id: "lang3",
    language: "Anglais",
    level: "Niveau avancé",
    icon: <Languages className="h-10 w-10" />,
  },
  {
    id: "lang4",
    language: "Allemand",
    level: "Niveau débutant",
    icon: <Languages className="h-10 w-10" />,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Formation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Formation & Langues</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes compétences linguistiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold font-heading flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Formation Académique
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">{item.icon}</div>
                    <div>
                      <CardTitle className="font-heading">{item.degree}</CardTitle>
                      <CardDescription>{item.institution}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold font-heading flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              Langues
            </h3>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">{lang.icon}</div>
                    <div>
                      <CardTitle className="font-heading">{lang.language}</CardTitle>
                      <CardDescription>{lang.level}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
