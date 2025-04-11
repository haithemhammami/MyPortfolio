"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Données partagées pour les articles de blog
export const blogPosts = [
  {
    id: "post1",
    title: "Comment j'ai optimisé les performances d'une application Next.js",
    excerpt:
      "Découvrez les techniques que j'ai utilisées pour réduire le temps de chargement et améliorer l'expérience utilisateur d'une application Next.js.",
    image: "/Blog1.png?height=200&width=100",
    date: "15 Mars 2025",
    readTime: "8 min de lecture",
    category: "Performance Web",
    tags: ["Next.js", "Performance", "React", "Optimisation"],
    featured: true,
  },
  {
    id: "post2",
    title: "L'avenir du développement web avec l'IA",
    excerpt:
      "Comment l'intelligence artificielle transforme le métier de développeur web et quelles compétences seront essentielles dans les années à venir.",
    image: "/Blog2.png?height=400&width=400",
    date: "28 Février 2023",
    readTime: "6 min de lecture",
    category: "Intelligence Artificielle",
    tags: ["IA", "Futur", "Développement Web", "Machine Learning"],
    featured: true,
  },
  {
    id: "post3",
    title: "Créer des animations fluides avec Framer Motion",
    excerpt:
      "Un guide pratique pour intégrer des animations élégantes dans vos applications React avec la bibliothèque Framer Motion.",
    image: "/Blog3.png?height=400&width=400",
    date: "10 Janvier 2023",
    readTime: "10 min de lecture",
    category: "Animation",
    tags: ["React", "Framer Motion", "Animation", "UX"],
    featured: true,
  },
  {
    id: "post4",
    title: "Les meilleures pratiques pour l'architecture d'une API REST",
    excerpt:
      "Comment concevoir des API RESTful évolutives, maintenables et sécurisées pour vos applications web modernes.",
    image: "/blog-api-rest.jpg?height=400&width=800",
    date: "5 Décembre 2022",
    readTime: "12 min de lecture",
    category: "Backend",
    tags: ["API", "REST", "Architecture", "Node.js"],
    featured: false,
  },
  {
    id: "post5",
    title: "Pourquoi j'ai adopté TypeScript pour tous mes projets",
    excerpt:
      "Les avantages que j'ai constatés en passant de JavaScript à TypeScript et comment cela a amélioré la qualité de mon code.",
    image: "/blog-typescript.jpg?height=400&width=800",
    date: "20 Novembre 2022",
    readTime: "7 min de lecture",
    category: "Langages",
    tags: ["TypeScript", "JavaScript", "Typage", "Productivité"],
    featured: false,
  },
]

export default function Blog() {
  // Filtrer pour n'afficher que les articles mis en avant sur la page d'accueil
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Derniers Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Réflexions, tutoriels et insights sur le développement web et les technologies que j'utilise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-cyan text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 font-heading hover:text-blue-cyan transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 flex-grow">
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 mt-auto">
                  <Button variant="ghost" size="sm" className="ml-auto group" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Lire Plus <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-blue-cyan hover:bg-blue-cyan/90 hover-glow">
            <Link href="/blog">
              Voir Tous les Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
