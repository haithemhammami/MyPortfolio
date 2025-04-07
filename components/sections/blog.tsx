"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "post1",
    title: "Construire des Applications React Évolutives",
    excerpt: "Apprenez à structurer vos applications React pour l'évolutivité et la maintenabilité.",
    image: "/placeholder.svg?height=200&width=400",
    date: "15 Mar 2023",
    readTime: "8 min de lecture",
    category: "React",
  },
  {
    id: "post2",
    title: "L'Avenir du Développement Web avec l'IA",
    excerpt:
      "Explorer comment l'IA transforme le paysage du développement web et ce que cela signifie pour les développeurs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "28 Fév 2023",
    readTime: "6 min de lecture",
    category: "IA",
  },
  {
    id: "post3",
    title: "Optimisation des Performances dans les Applications Next.js",
    excerpt: "Conseils pratiques et techniques pour améliorer les performances de vos applications Next.js.",
    image: "/placeholder.svg?height=200&width=400",
    date: "10 Jan 2023",
    readTime: "10 min de lecture",
    category: "Next.js",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
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
            Réflexions, idées et tutoriels sur le développement web et la technologie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
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
                  <CardTitle className="line-clamp-2 font-heading">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 flex-grow">
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Lire Plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/blog">
              Voir Tous les Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

