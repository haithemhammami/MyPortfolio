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
		title: "YumiMind",
		description:
			"Application innovante basée sur l'intelligence artificielle qui simplifie votre quotidien en gérant vos courses alimentaires de A à Z.",
		image: "/yumimind.png?height=300&width=600",
		tags: ["Next.js", "AI", "E-commerce"],
		liveUrl: "https://yumimind.vercel.app",
		githubUrl: "https://github.com/haithemhammami/IA_Drive_PEC.git",
		featured: true,
	},
	{
		id: "project2",
		title: "ICO Workshop",
		description:
			"Un projet collaboratif pour développer un jeu interactif intégrant un système de back-office et un front-end immersif, avec une base de données robuste.",
		image: "/ICO.png?height=300&width=600",
		tags: ["React", "Node.js", "Game", "Database"],
		liveUrl: "https://ico-game.vercel.app",
		githubUrl: "https://github.com/ArthurDelaporte/ico-workshop.git",
		featured: true,
	},
	{
		id: "projet5",
		title: "ThinkShare",
		description:
			"Thinkshare est une plateforme académique innovante qui facilite le partage de savoir en permettant aux experts et enseignants de publier des contenus éducatifs variés.",
		image: "/thinkshare.png?height=300&width=600",
		tags: [
			"Flutter",
			"Go",
			"Gin",
			"PostgreSQL",
			"Stripe",
			"Azure",
			"Kubernetes",
			"Terraform",
			"Grafana",
		],
		liveUrl: "https://thinkshare-app.web.app/",
		githubUrl: "https://github.com/khalidaBerki/thinkshare",
		apkUrl: "https://thinkshare-apk.vercel.app/app-release.apk",
		swaggerUrl: "http://4.178.177.89/swagger/index.html#",
		featured: true,
		details: {
			resume:
				"Thinkshare est une plateforme sociale académique innovante...",
			objectifs: [
				"Promouvoir une nouvelle façon d’apprendre, plus interactive et engageante.",
				"Offrir aux experts un espace pour monétiser leurs contenus premium via des abonnements mensuels.",
				"Créer une communauté éducative vivante et collaborative.",
			],
			fonctionnalites: [
				"Feed interactif avec scroll infini (posts publics ou privés)",
				"Création et publication de cours ou fiches",
				"Contenus premium accessibles via abonnement",
				"Messagerie intégrée pour échanger avec les experts ou d'autres utilisateurs",
				"Gestion de profils (expert & utilisateur)",
				"Support des thèmes clair et sombre",
				"Dashboard analytics pour les experts (consultations, revenus)",
			],
			stack: {
				frontend: [
					"Flutter (web & APK mobile)",
					"Provider",
					"GoRouter",
					"Dio",
				],
				backend: ["Go (Golang)", "Gin", "PostgreSQL", "JWT", "Stripe"],
				infra: [
					"Azure Cloud",
					"Kubernetes (K8s)",
					"Terraform (IaC)",
					"Docker",
					"GitHub Actions",
				],
				monitoring: ["Grafana", "Prometheus", "Azure Monitor"],
			},
			deploiement: [
				"Frontend Web : Flutter web hébergé sur Firebase Hosting",
				"APK Mobile : Déployé en parallèle (Android)",
				"Backend API : Conteneurisé et orchestré via Kubernetes sur Azure",
			],
			pourquoi:
				"Thinkshare offre une expérience académique unique, mêlant le social et l’apprentissage, tout en donnant aux experts un moyen simple et sécurisé de partager et valoriser leurs connaissances.",
		},
	},
	{
		id: "project5",
		title: "Mon Portfolio",
		description:
			"Mon portfolio actuel à explorer à votre goût, offrant un aperçu complet de mes projets et compétences.",
		image: "/portfolio.png?height=300&width=600",
		tags: ["Next.js", "React", "Portfolio"],
		liveUrl: "https://haithem.netlify.app/",
		githubUrl: "https://github.com/haithemhammami/MyPortfolio.git",
		featured: false,
	},
	{
		id: "project4",
		title: "Projet PokémonTP",
		description:
			"Application web simple utilisant Express.js pour récupérer des données depuis une API Pokémon et permettre aux utilisateurs de contacter l'équipe du projet.",
		image: "/placeholder.svg?height=300&width=600",
		tags: ["Express.js", "API", "Web App"],
		liveUrl: "",
		githubUrl: "https://github.com/haithemhammami/ProjectPokemonTP.git",
		featured: false,
	},
]

export default function Projects() {
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

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
					<h2 className="text-3xl md:text-4xl font-bold font-heading">
						Projets en Vedette
					</h2>
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
									<CardTitle className="font-heading">
										{project.title}
									</CardTitle>
									<CardDescription>
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-2 flex-grow">
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="bg-primary/10 text-primary hover:bg-primary/20"
											>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="flex justify-between">
									<Button variant="outline" size="sm" asChild>
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="h-4 w-4 mr-1" /> Code
										</Link>
									</Button>
									<Button variant="outline" size="sm" asChild>
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="h-4 w-4 mr-1" /> Démo
										</Link>
									</Button>
									<Button variant="ghost" size="sm" asChild>
										<Link href={`/projects/${project.id}`}>
											Détails{" "}
											<ArrowRight className="h-4 w-4 ml-1" />
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
							Voir Tous les Projets{" "}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}