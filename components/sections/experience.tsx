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
    title: "Développeur Automatisation Outils RH (Alternance)",
    company: "Valeo – Cergy, Île-de-France (Hybride)",
    period: "Janv. 2024 – Présent",
    description:
      "Développement et optimisation d’outils numériques RH pour l’administration, la formation et la paie.",
    responsibilities: [
      "Automatisation de processus métier via Apps Script et outils Workday",
      "Maintenance, debug et suivi de production des outils développés",
      "Rédaction de spécifications techniques et analyse fonctionnelle",
      "Mise en place de tableaux de bord et reporting RH",
    ],
  },
  {
    id: "exp2",
    title: "Développeur Full Stack IoT – Projet de Fin d’Étude",
    company: "COFICAB Group – Tunisie (Hybride)",
    period: "Janv. 2023 – Juin 2023",
    description:
      "Conception d’un système IoT pour la supervision de chariots élévateurs à distance.",
    responsibilities: [
      "Développement d’un système embarqué avec ESP32 pour la collecte de données (GPS, batterie, capteurs)",
      "Communication temps réel via MQTT vers un dashboard web",
      "Création d’une interface web intuitive pour visualiser les KPIs",
      "Déploiement et tests en conditions réelles",
    ],
  },
  {
    id: "exp3",
    title: "Stage Technique | Analyse Électronique",
    company: "COFICAB Group – Tunisie (Sur site)",
    period: "Juin 2022 – Juil. 2022",
    description:
      "Analyse d’une carte électronique dans un environnement industriel pour améliorer la fiabilité matérielle.",
    responsibilities: [
      "Étude des entrées/sorties et diagnostic des dysfonctionnements électroniques",
      "Mise en place de solutions de protection électrique",
      "Création d’une check-list de tests et procédures de validation",
      "Documentation des résultats et recommandations techniques",
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

