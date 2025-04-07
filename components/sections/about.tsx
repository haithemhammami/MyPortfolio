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
            À propos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Mon Parcours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apprenez-en plus sur moi, mon expérience et ce qui me motive en tant que développeur.
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
                <h3 className="text-xl font-semibold font-heading">Qui suis-je</h3>
                <p className="text-muted-foreground">
                  Je suis un développeur Full-Stack passionné avec plus de 5 ans d'expérience dans la création
                  d'applications web. Je me spécialise en JavaScript, TypeScript, React et Node.js, avec un accent
                  particulier sur la création d'expériences utilisateur performantes et accessibles.
                </p>
                <p className="text-muted-foreground">
                  Mon parcours dans le développement logiciel a commencé pendant mes études en informatique, où j'ai
                  découvert ma passion pour la création de solutions élégantes à des problèmes complexes. Depuis, j'ai
                  travaillé avec des startups et des entreprises établies pour livrer des produits logiciels de haute
                  qualité.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">Mon Approche</h3>
                <p className="text-muted-foreground">
                  Je crois en l'écriture de code propre et maintenable, en suivant les meilleures pratiques. Je suis
                  passionné par l'expérience utilisateur et l'accessibilité, m'assurant que les applications que je
                  construis sont utilisables par tous.
                </p>
                <p className="text-muted-foreground">
                  J'apprends constamment et me tiens au courant des dernières technologies et tendances en développement
                  web. J'aime relever des défis et trouver des solutions innovantes.
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
                <h3 className="text-xl font-semibold font-heading">Mes Objectifs</h3>
                <p className="text-muted-foreground">
                  Mon objectif est de créer des logiciels qui non seulement répondent aux exigences commerciales, mais
                  offrent également une expérience utilisateur exceptionnelle. Je suis passionné par la création de
                  produits qui ont un impact positif sur la vie des gens.
                </p>
                <p className="text-muted-foreground">
                  Je suis toujours à la recherche d'opportunités pour travailler sur des projets stimulants qui me
                  poussent à grandir en tant que développeur et me permettent de contribuer à des solutions
                  significatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-heading">Au-delà du Code</h3>
                <p className="text-muted-foreground">
                  Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de
                  contribuer à des projets open-source, ou de partager mes connaissances à travers des articles de blog
                  et du mentorat.
                </p>
                <p className="text-muted-foreground">
                  J'apprécie également la randonnée, la photographie et les échecs. Ces activités m'aident à maintenir
                  un style de vie équilibré et apportent de nouvelles perspectives à mon travail.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

