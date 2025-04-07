"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "project1",
    title: "Plateforme E-Commerce",
    description:
      "Une plateforme e-commerce full-stack avec gestion des produits, fonctionnalité de panier et traitement des paiements.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project2",
    title: "Application de Gestion de Tâches",
    description:
      "Une application collaborative de gestion de tâches avec mises à jour en temps réel et fonctionnalités de collaboration d'équipe.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project3",
    title: "Générateur de Contenu IA",
    description:
      "Un outil de génération de contenu alimenté par l'IA qui crée des textes marketing basés sur les entrées des utilisateurs.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "OpenAI API", "Express", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project4",
    title: "Tableau de Bord Météo",
    description:
      "Un tableau de bord météo qui affiche les données météorologiques actuelles et prévisionnelles pour plusieurs emplacements.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Weather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Projets
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Projets en Vedette</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes travaux récents et projets personnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Démo
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>
                      Détails <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/projects">
              Voir Tous les Projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

