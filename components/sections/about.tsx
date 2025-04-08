"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
           🧠 À propos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Mon Parcours</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
          Apprenez-en plus sur moi, mon expérience et ce qui me motive en tant qu'ingénieur logiciel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">👨‍💻 Qui je suis</h3>
                <p className="text-muted-foreground">
                Ingénieur Logiciel Full Stack passionné par l'innovation, je conçois des solutions numériques robustes et évolutives. 
                Spécialisé en JavaScript, TypeScript, React, Next.js et Node.js, j'intègre également les pratiques DevOps et l'IoT dans mes projets. 
                </p>
                <p className="text-muted-foreground">
                Mon parcours est nourri par des expériences variées, allant de projets IoT à l'automatisation d'infrastructures Cloud,
                 en passant par le développement d'outils métiers sur mesure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">🛠️ Mon approche</h3>
                <p className="text-muted-foreground">
                Je privilégie un code propre, structuré et maintenable, tout en optimisant l'expérience utilisateur et les performances. 
                </p>
                <p className="text-muted-foreground">
                Curieux et constamment en veille, je m'adapte aux dernières tendances technologiques pour proposer des solutions innovantes et adaptées aux besoins.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">🎯 Mes objectifs</h3>
                <p className="text-muted-foreground">
                Créer des logiciels à fort impact qui répondent aux exigences techniques et offrent une expérience utilisateur optimale.
                </p>
                <p className="text-muted-foreground">
                Je recherche des projets stimulants qui me permettent de relever de nouveaux défis et de contribuer efficacement à la croissance de l'organisation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">🌱 En dehors du code</h3>
                <p className="text-muted-foreground">
                Passionné par l'IoT, le Cloud et l'automatisation, je partage mes connaissances via des projets open-source et du mentorat.
                </p>
                <p className="text-muted-foreground">
                En dehors du numérique, je me ressource en pratiquant la randonnée, la musculation et la natation.
                Ces activités m'aident à maintenir un style de vie équilibré et apportent de nouvelles perspectives à mon travail.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

