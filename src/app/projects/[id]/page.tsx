import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Données des projets cohérentes avec components/sections/projects.tsx
const projects = [
  {
    id: "project1",
    title: "YumiMind",
    description:
      "Application innovante basée sur l'intelligence artificielle qui simplifie votre quotidien en gérant vos courses alimentaires de A à Z.",
    fullDescription: `
      YumiMind est une application innovante qui révolutionne la façon dont vous gérez vos courses alimentaires. Grâce à l'intelligence artificielle, elle vous permet de:
      
      - Planifier vos repas de la semaine en fonction de vos préférences et restrictions alimentaires
      - Générer automatiquement des listes de courses optimisées
      - Suggérer des recettes personnalisées basées sur les ingrédients que vous avez déjà
      - Réduire le gaspillage alimentaire grâce à une gestion intelligente des stocks
      - Suivre vos habitudes alimentaires et vous proposer des améliorations
      
      L'application est construite avec Next.js pour le frontend, utilise une API Node.js pour le backend, et intègre des modèles d'IA pour les recommandations personnalisées.
    `,
    image: "/yumimind.png",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["Next.js", "AI", "E-commerce"],
    liveUrl: "https://yumimind.vercel.app",
    githubUrl: "https://github.com/haithemhammami/IA_Drive_PEC.git",
    challenges:
      "Le principal défi était d'intégrer des modèles d'IA capables de comprendre les préférences alimentaires des utilisateurs et de générer des recommandations pertinentes. J'ai également dû concevoir une interface utilisateur intuitive qui simplifie la planification des repas et la gestion des courses.",
    learnings:
      "Ce projet m'a permis d'approfondir mes connaissances en IA et en traitement du langage naturel. J'ai également amélioré mes compétences en conception d'interfaces utilisateur centrées sur l'expérience utilisateur.",
    featured: true,
  },
  {
    id: "project2",
    title: "ICO Workshop",
    description:
      "Un projet collaboratif pour développer un jeu interactif intégrant un système de back-office et un front-end immersif, avec une base de données robuste.",
    fullDescription: `
      ICO Workshop est un projet de jeu interactif développé en collaboration avec une équipe de développeurs. Ce projet comprend:
      
      - Un système de back-office complet pour la gestion du contenu et des utilisateurs
      - Une interface front-end immersive avec des animations fluides
      - Une base de données robuste pour stocker les progressions et les statistiques des joueurs
      - Un système d'authentification sécurisé
      - Des fonctionnalités multijoueurs en temps réel
      
      Le projet utilise React pour le front-end, Node.js pour le back-end, et une base de données MongoDB pour le stockage des données. L'architecture est conçue pour être évolutive et performante, même avec un grand nombre d'utilisateurs simultanés.
    `,
    image: "/ICO.png",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React", "Node.js", "Game", "Database"],
    liveUrl: "https://ico-game.vercel.app",
    githubUrl: "https://github.com/ArthurDelaporte/ico-workshop.git",
    challenges:
      "La synchronisation en temps réel entre les joueurs était un défi majeur, ainsi que la conception d'une architecture de base de données qui permet des requêtes rapides pour les fonctionnalités de jeu. L'optimisation des performances pour garantir une expérience fluide a également nécessité beaucoup de travail.",
    learnings:
      "Ce projet m'a appris l'importance de la planification architecturale dans les applications complexes et m'a permis de développer mes compétences en travail d'équipe et en gestion de projet.",
    featured: true,
  },
  {
    id: "project3",
    title: "Mon Portfolio",
    description:
      "Mon portfolio actuel à explorer à votre goût, offrant un aperçu complet de mes projets et compétences.",
    fullDescription: `
      Ce portfolio personnel est conçu pour présenter mes compétences, projets et expériences professionnelles de manière interactive et engageante. Caractéristiques principales:
      
      - Design moderne et responsive adapté à tous les appareils
      - Animations fluides avec Framer Motion pour une expérience utilisateur dynamique
      - Sections détaillées sur mes compétences techniques, projets et parcours professionnel
      - Formulaire de contact fonctionnel pour faciliter la prise de contact
      - Mode sombre/clair pour une expérience de lecture confortable
      - Optimisation des performances pour des temps de chargement rapides
      
      Développé avec Next.js, TypeScript et Tailwind CSS, ce portfolio met en pratique les meilleures pratiques de développement web moderne.
    `,
    image: "/portfolio.png",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["Next.js", "React", "Portfolio"],
    liveUrl: "https://haithem.netlify.app/",
    githubUrl: "https://github.com/haithemhammami/MyPortfolio.git",
    challenges:
      "Créer un design unique et personnel tout en maintenant une excellente performance était un défi. J'ai également travaillé à rendre le site accessible et compatible avec tous les navigateurs modernes.",
    learnings:
      "Ce projet m'a permis d'approfondir mes connaissances en design UI/UX et d'explorer des techniques d'animation avancées avec Framer Motion. J'ai également appris à optimiser les performances d'une application Next.js.",
    featured: true,
  },
  {
    id: "project4",
    title: "Projet PokémonTP",
    description:
      "Application web simple utilisant Express.js pour récupérer des données depuis une API Pokémon et permettre aux utilisateurs de contacter l'équipe du projet.",
    fullDescription: `
      Projet PokémonTP est une application web éducative qui utilise l'API Pokémon pour afficher des informations sur différents Pokémon. Fonctionnalités principales:
      
      - Interface utilisateur simple et intuitive pour rechercher des Pokémon
      - Affichage détaillé des caractéristiques et statistiques de chaque Pokémon
      - Système de filtrage par type, génération et autres attributs
      - Formulaire de contact pour permettre aux utilisateurs de communiquer avec l'équipe
      - API RESTful construite avec Express.js
      
      Ce projet a été développé comme exercice pratique pour démontrer l'utilisation d'Express.js et la consommation d'API externes.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["Express.js", "API", "Web App"],
    liveUrl: "",
    githubUrl: "https://github.com/haithemhammami/ProjectPokemonTP.git",
    challenges:
      "La gestion des limites de l'API Pokémon et l'optimisation des requêtes pour éviter les temps de chargement longs étaient les principaux défis. J'ai également dû concevoir une interface utilisateur intuitive pour naviguer dans une grande quantité de données.",
    learnings:
      "Ce projet m'a permis de mieux comprendre le fonctionnement des API RESTful et d'améliorer mes compétences en Express.js. J'ai également appris à gérer efficacement les données externes et à les présenter de manière claire.",
    featured: false,
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Projet Non Trouvé</h1>
        <p className="text-muted-foreground mb-8">Le projet que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux Projets
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="py-20">
      <div className="container">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux Projets
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video overflow-hidden rounded-lg border">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading">{project.title}</h1>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold font-heading">Aperçu</h2>
                <div className="whitespace-pre-line">{project.fullDescription}</div>

                <h2 className="text-2xl font-semibold font-heading">Défis & Solutions</h2>
                <p>{project.challenges}</p>

                <h2 className="text-2xl font-semibold font-heading">Apprentissages</h2>
                <p>{project.learnings}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} capture d'écran ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Liens du Projet</CardTitle>
                <CardDescription>Visitez la démo en direct ou consultez le code source</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.liveUrl && (
                  <Button className="w-full bg-blue-cyan hover:bg-blue-cyan/90 hover-glow" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Démo en Ligne
                    </Link>
                  </Button>
                )}
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code Source
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Technologies Utilisées</CardTitle>
                <CardDescription>Technologies et outils clés utilisés dans ce projet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Autres Projets</CardTitle>
                <CardDescription>Découvrez mes autres réalisations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects
                  .filter((p) => p.id !== project.id && p.featured)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.id}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium">{p.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
