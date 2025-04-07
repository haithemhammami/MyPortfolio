"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building, Calendar } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    id: "exp1",
    title: "Développeur Frontend Senior",
    company: "Tech Innovations Inc.",
    period: "Jan 2022 - Présent",
    description:
      "Direction de l'équipe de développement frontend dans la création d'applications web modernes utilisant React, Next.js et TypeScript.",
    responsibilities: [
      "Architecture et implémentation de solutions frontend évolutives",
      "Mentorat des développeurs juniors et réalisation de revues de code",
      "Collaboration avec les équipes de design et de produit pour offrir des expériences utilisateur de haute qualité",
      "Mise en place de pipelines CI/CD et de stratégies de test",
    ],
  },
  {
    id: "exp2",
    title: "Développeur Full-Stack",
    company: "Digital Solutions Ltd.",
    period: "Mar 2020 - Déc 2021",
    description: "Développement d'applications web full-stack utilisant React, Node.js et MongoDB.",
    responsibilities: [
      "Création d'API RESTful et de points de terminaison GraphQL",
      "Implémentation de systèmes d'authentification et d'autorisation",
      "Optimisation des performances des applications et des requêtes de base de données",
      "Collaboration avec des équipes pluridisciplinaires pour livrer des fonctionnalités dans les délais",
    ],
  },
  {
    id: "exp3",
    title: "Développeur Frontend",
    company: "WebCraft Agency",
    period: "Juin 2018 - Fév 2020",
    description: "Création d'interfaces web responsives et interactives pour divers clients.",
    responsibilities: [
      "Développement de sites web responsifs utilisant HTML, CSS et JavaScript",
      "Implémentation de composants UI avec React et Redux",
      "Collaboration avec les designers pour assurer des implémentations fidèles aux maquettes",
      "Optimisation des sites web pour les performances et le SEO",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Expérience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Parcours Professionnel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon expérience professionnelle et les entreprises avec lesquelles j'ai collaboré
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-heading">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Building className="h-4 w-4 mr-1" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Responsabilités principales:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" size="sm" className="px-0" asChild>
                      <Link href={`/experience/${exp.id}`}>
                        Voir les détails <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

