"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Tag, ThumbsUp, Share2, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/components/sections/blog"
import { BlogContentRenderer } from "@/components/blog-content-renderer"

// Contenu complet des articles de blog
const blogContents = {
  post1: `
# Comment j'ai optimisé les performances d'une application Next.js

Les performances web sont cruciales pour offrir une bonne expérience utilisateur et améliorer le référencement. Dans cet article, je partage les techniques que j'ai utilisées pour optimiser significativement les performances d'une application Next.js.

## Le problème initial

J'ai récemment travaillé sur une application Next.js qui présentait des problèmes de performance. Les métriques Web Vitals étaient préoccupantes :

- **Largest Contentful Paint (LCP)** : 4.2s (l'idéal est < 2.5s)
- **First Input Delay (FID)** : 180ms (l'idéal est < 100ms)
- **Cumulative Layout Shift (CLS)** : 0.25 (l'idéal est < 0.1)

## Les optimisations mises en place

### 1. Optimisation des images

L'une des premières choses que j'ai faites a été d'optimiser toutes les images du site :

\`\`\`jsx
import Image from 'next/image'

// Avant
<img src="/large-image.jpg" alt="Description" />

// Après
<Image
  src="/large-image.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  priority={isAboveFold}
/>
\`\`\`

Le composant Image de Next.js offre plusieurs avantages :
- Chargement paresseux automatique
- Redimensionnement et optimisation des images
- Prévention du décalage de mise en page (CLS)

### 2. Mise en œuvre du Server-Side Rendering (SSR) et de la Static Generation

J'ai analysé chaque page pour déterminer la meilleure stratégie de rendu :

\`\`\`jsx
// Pour les pages avec des données statiques
export async function getStaticProps() {
  const data = await fetchData()
  return { props: { data }, revalidate: 3600 }
}

// Pour les pages avec des données dynamiques
export async function getServerSideProps(context) {
  const data = await fetchData(context.params.id)
  return { props: { data } }
}
\`\`\`

### 3. Implémentation du code splitting

J'ai utilisé l'importation dynamique pour charger les composants uniquement lorsqu'ils sont nécessaires :

\`\`\`jsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Chargement...</p>,
  ssr: false
})
\`\`\`

### 4. Optimisation des polices

J'ai optimisé le chargement des polices pour éviter le FOUT (Flash of Unstyled Text) :

\`\`\`jsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
\`\`\`

### 5. Mise en cache et Incremental Static Regeneration (ISR)

J'ai implémenté ISR pour les pages qui nécessitent des données fraîches mais qui peuvent être mises en cache :

\`\`\`jsx
export async function getStaticProps() {
  const posts = await fetchPosts()
  return {
    props: { posts },
    revalidate: 60 // Régénère la page toutes les 60 secondes
  }
}
\`\`\`

## Résultats obtenus

Après ces optimisations, les métriques Web Vitals se sont considérablement améliorées :

- **LCP** : de 4.2s à 1.8s (↓ 57%)
- **FID** : de 180ms à 45ms (↓ 75%)
- **CLS** : de 0.25 à 0.05 (↓ 80%)

Le score Lighthouse est passé de 65 à 94 pour les performances.

## Conclusion

L'optimisation des performances est un processus continu. Ces techniques ont permis d'améliorer significativement l'expérience utilisateur de l'application. N'hésitez pas à les appliquer à vos propres projets Next.js.

N'oubliez pas que chaque application est unique, et il est important de mesurer l'impact de chaque optimisation pour s'assurer qu'elle apporte réellement une amélioration.
  `,
  post2: `
# L'avenir du développement web avec l'IA

L'intelligence artificielle (IA) transforme rapidement le paysage du développement web. Dans cet article, j'explore comment l'IA change notre façon de travailler et quelles compétences seront essentielles pour les développeurs dans les années à venir.

## Comment l'IA transforme déjà le développement web

### 1. Génération de code assistée par IA

Des outils comme GitHub Copilot et Amazon CodeWhisperer révolutionnent la façon dont nous écrivons du code :

- Suggestion de code en temps réel
- Génération de fonctions complètes
- Conversion de commentaires en code fonctionnel

J'ai récemment utilisé GitHub Copilot pour accélérer le développement d'une API REST, et j'ai été impressionné par sa capacité à générer des endpoints complets à partir de simples commentaires.

### 2. Conception UI/UX automatisée

Des outils comme Midjourney et DALL-E permettent de générer des maquettes et des assets visuels à partir de descriptions textuelles. Des plateformes comme Builder.io commencent à proposer la génération de composants React à partir de maquettes.

### 3. Débogage et optimisation du code

L'IA peut analyser le code pour détecter les bugs potentiels, les problèmes de sécurité et suggérer des optimisations de performance. Des outils comme DeepCode et Snyk utilisent l'apprentissage automatique pour identifier les problèmes que les analyseurs statiques traditionnels pourraient manquer.

## L'impact sur le rôle du développeur

### Le développeur devient un "prompt engineer"

Une partie croissante de notre travail consiste à formuler les bonnes requêtes pour obtenir les résultats souhaités des outils d'IA. Cette compétence, appelée "prompt engineering", devient de plus en plus importante.

### Focus sur l'architecture et la conception

Avec l'IA qui prend en charge une partie du codage de bas niveau, les développeurs peuvent se concentrer davantage sur l'architecture, la conception et les décisions stratégiques.

### Validation et personnalisation

Le code généré par l'IA n'est pas toujours parfait. Les développeurs doivent être capables de valider, corriger et personnaliser ce code pour répondre aux besoins spécifiques du projet.

## Les compétences essentielles pour l'avenir

### 1. Compréhension approfondie des fondamentaux

Paradoxalement, alors que l'IA peut générer du code, une compréhension solide des fondamentaux devient encore plus importante pour évaluer et améliorer ce code.

### 2. Pensée systémique et résolution de problèmes complexes

L'IA excelle dans les tâches bien définies, mais les développeurs doivent exceller dans la résolution de problèmes complexes et mal définis.

### 3. Communication et collaboration

La capacité à communiquer efficacement avec les parties prenantes et à collaborer au sein d'équipes pluridisciplinaires devient encore plus précieuse.

### 4. Apprentissage continu et adaptabilité

Le rythme du changement s'accélère. Les développeurs doivent être prêts à apprendre continuellement et à s'adapter aux nouvelles technologies et méthodologies.

## Conclusion

L'IA ne remplace pas les développeurs web, mais elle transforme profondément notre façon de travailler. En embrassant ces changements et en développant les compétences appropriées, nous pouvons utiliser l'IA comme un puissant multiplicateur de productivité.

L'avenir appartient aux développeurs qui sauront combiner expertise technique, créativité et collaboration efficace avec les outils d'IA.
  `,
  post3: `
# Créer des animations fluides avec Framer Motion

Les animations bien conçues peuvent considérablement améliorer l'expérience utilisateur de votre application React. Dans cet article, je vais vous montrer comment utiliser Framer Motion pour créer des animations fluides et professionnelles.

## Pourquoi Framer Motion ?

Framer Motion est une bibliothèque d'animation puissante pour React qui simplifie la création d'animations complexes. Voici pourquoi je l'ai choisie pour mes projets :

- API déclarative et intuitive
- Animations basées sur la physique pour un rendu naturel
- Gestion des transitions entre les composants
- Support des gestes tactiles
- Excellentes performances grâce à l'utilisation de l'API Web Animation

## Installation et configuration de base

Commençons par installer Framer Motion :

\`\`\`bash
npm install framer-motion
# ou
yarn add framer-motion
\`\`\`

Voici un exemple simple d'animation avec Framer Motion :

\`\`\`jsx
import { motion } from 'framer-motion'

function FadeInComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello, Framer Motion!
    </motion.div>
  )
}
\`\`\`

## Animations avancées avec variants

Les variants permettent de définir des états d'animation réutilisables et de coordonner les animations entre les composants parents et enfants :

\`\`\`jsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function StaggeredList() {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map(item => (
        <motion.li key={item.id} variants={itemVariants}>
          {item.text}
        </motion.li>
      ))}
    </motion.ul>
  )
}
\`\`\`

## Animations basées sur le scroll

Framer Motion permet facilement de déclencher des animations au scroll :

\`\`\`jsx
import { motion, useScroll } from 'framer-motion'

function ScrollAnimation() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: "#0070f3"
      }}
    />
  )
}
\`\`\`

## Animations de page avec AnimatePresence

AnimatePresence permet d'animer les composants lorsqu'ils sont montés ou démontés du DOM, ce qui est parfait pour les transitions de page :

\`\`\`jsx
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
\`\`\`

## Animations interactives avec les gestes

Framer Motion excelle dans la gestion des interactions utilisateur :

\`\`\`jsx
import { motion } from 'framer-motion'

function DraggableCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileDrag={{ scale: 1.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      Glissez-moi !
    </motion.div>
  )
}
\`\`\`

## Optimisation des performances

Pour maintenir de bonnes performances, suivez ces conseils :

1. Utilisez transform et opacity pour vos animations quand c'est possible
2. Évitez d'animer trop d'éléments simultanément
3. Utilisez layoutId pour les transitions entre différents états d'un même élément
4. Profitez de useReducedMotion pour respecter les préférences d'accessibilité

## Conclusion

Framer Motion est un outil puissant qui permet de créer des animations professionnelles avec relativement peu de code. En suivant les principes présentés dans cet article, vous pouvez améliorer considérablement l'expérience utilisateur de vos applications React.

N'oubliez pas que les animations doivent toujours servir l'expérience utilisateur et non la distraire. Utilisez-les judicieusement pour guider l'attention de l'utilisateur et rendre votre interface plus intuitive.
  `,
  post4: `
# Les meilleures pratiques pour l'architecture d'une API REST

La conception d'une API REST bien structurée est essentielle pour créer des applications web évolutives et maintenables. Dans cet article, je partage les meilleures pratiques que j'ai apprises en développant des API REST pour divers projets.

## Principes fondamentaux d'une API REST

### Utiliser les méthodes HTTP de manière appropriée

Chaque méthode HTTP a un objectif spécifique :

- **GET** : Récupérer des ressources
- **POST** : Créer une nouvelle ressource
- **PUT** : Mettre à jour une ressource existante (remplacement complet)
- **PATCH** : Mettre à jour partiellement une ressource
- **DELETE** : Supprimer une ressource

### Concevoir des URLs orientées ressources

Les URLs doivent représenter des ressources (noms) et non des actions (verbes) :

\`\`\`
# Bon
GET /articles
GET /articles/123

# À éviter
GET /getArticles
GET /getArticleById/123
\`\`\`

### Utiliser les codes de statut HTTP appropriés

Les codes de statut HTTP communiquent clairement le résultat d'une requête :

- **2xx** : Succès (200 OK, 201 Created, 204 No Content)
- **3xx** : Redirection
- **4xx** : Erreur client (400 Bad Request, 401 Unauthorized, 404 Not Found)
- **5xx** : Erreur serveur

## Structure et organisation

### Versionnement de l'API

Le versionnement permet d'évoluer sans casser la compatibilité :

\`\`\`
/api/v1/articles
/api/v2/articles
\`\`\`

### Pagination, filtrage et tri

Pour les collections volumineuses :

\`\`\`
GET /articles?page=2&limit=10
GET /articles?category=tech&sort=date
\`\`\`

### Relations entre ressources

Représentez clairement les relations entre ressources :

\`\`\`
GET /articles/123/comments
GET /users/456/articles
\`\`\`

## Sécurité

### Authentification et autorisation

- Utilisez JWT ou OAuth 2.0 pour l'authentification
- Implémentez une gestion fine des permissions
- Utilisez HTTPS pour toutes les communications

### Protection contre les attaques courantes

- Validez toutes les entrées utilisateur
- Implémentez une limitation de débit (rate limiting)
- Protégez contre les attaques CSRF et XSS

## Exemple d'implémentation avec Node.js et Express

Voici un exemple simplifié d'une API RESTful bien structurée avec Express :

\`\`\`javascript
const express = require("express")
const router = express.Router()

// GET /api/v1/articles
router.get("/articles", async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, category } = req.query

    // Construire la requête avec les filtres et le tri
    const query = {}
    if (category) query.category = category

    const sortOption = {}
    if (sort) sortOption[sort] = 1

    const articles = await Article.find(query)
      .sort(sortOption)
      .limit(Number.parseInt(limit))
      .skip((Number.parseInt(page) - 1) * Number.parseInt(limit))

    const total = await Article.countDocuments(query)

    res.status(200).json({
      articles,
      totalPages: Math.ceil(total / limit),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

// GET /api/v1/articles/:id
router.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)

    if (!article) {
      return res.status(404).json({ error: "Article not found" })
    }

    res.status(200).json(article)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

// POST /api/v1/articles
router.post("/articles", authenticate, async (req, res) => {
  try {
    const { title, content, category } = req.body

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" })
    }

    const article = new Article({
      title,
      content,
      category,
      author: req.user.id,
    })

    await article.save()

    res.status(201).json(article)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

// Autres routes...

module.exports = router
\`\`\`

## Documentation

Une bonne documentation est essentielle pour une API utilisable :

- Utilisez des outils comme Swagger/OpenAPI pour documenter votre API
- Incluez des exemples de requêtes et de réponses
- Documentez les erreurs possibles et leur signification
- Maintenez la documentation à jour

## Tests

Testez rigoureusement votre API :

- Tests unitaires pour la logique métier
- Tests d'intégration pour les endpoints
- Tests de charge pour vérifier les performances

## Conclusion

Une API REST bien conçue est un plaisir à utiliser pour les développeurs et constitue une base solide pour vos applications. En suivant ces meilleures pratiques, vous créerez des API évolutives, maintenables et sécurisées.

N'oubliez pas que la conception d'API est un équilibre entre la pureté théorique et les besoins pratiques. Adaptez ces principes à votre contexte spécifique tout en gardant à l'esprit la cohérence et la facilité d'utilisation.
  `,
  post5: `
# Pourquoi j'ai adopté TypeScript pour tous mes projets

Après des années de développement en JavaScript, j'ai décidé de passer à TypeScript pour tous mes projets. Dans cet article, je partage mon expérience et les avantages que j'ai constatés.

## Mon parcours avec JavaScript

J'ai commencé à coder en JavaScript il y a plusieurs années. C'était flexible, omniprésent et puissant. Mais au fur et à mesure que mes projets grandissaient, je rencontrais régulièrement des problèmes :

- Bugs difficiles à déboguer liés à des erreurs de type
- Difficulté à comprendre le code après quelques mois
- Refactoring risqué sans savoir quelles parties du code seraient affectées
- Documentation insuffisante sur les structures de données attendues

## La transition vers TypeScript

Ma première expérience avec TypeScript a été sur un projet d'équipe. Au début, j'étais sceptique:
- La courbe d'apprentissage semblait raide
- La configuration initiale paraissait complexe
- Je craignais que cela ralentisse le développement

Mais après quelques semaines, j'ai commencé à voir les avantages.

## Les avantages qui m'ont convaincu

### 1. Détection des erreurs pendant le développement

TypeScript détecte de nombreuses erreurs avant même l'exécution du code :

\`\`\`typescript
// JavaScript - Aucune erreur détectée avant l'exécution
function calculateArea(rectangle) {
  return rectangle.width * rectangle.height
}

calculateArea({ width: 10 }) // Erreur en production : Cannot read property 'height' of undefined

// TypeScript - Erreur détectée pendant le développement
interface Rectangle {
  width: number
  height: number
}

function calculateArea(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height
}

calculateArea({ width: 10 }) // Erreur : Property 'height' is missing in type '{ width: number; }'
\`\`\`

### 2. Meilleure expérience de développement

L'autocomplétion et la documentation intégrée ont considérablement amélioré ma productivité :

- Suggestions précises basées sur le type
- Documentation des paramètres et des retours de fonction
- Navigation facile vers les définitions de types

### 3. Refactoring plus sûr

Lorsque je modifie une interface ou une fonction, TypeScript m'indique immédiatement tous les endroits qui doivent être mis à jour :

\`\`\`typescript
// Avant le refactoring
interface User {
  id: number
  name: string
  email: string
}

// Après avoir ajouté un champ obligatoire
interface User {
  id: number
  name: string
  email: string
  role: string // Nouveau champ obligatoire
}

// TypeScript signale toutes les créations d'utilisateurs qui n'incluent pas le rôle
\`\`\`

### 4. Documentation implicite

Les types servent de documentation qui reste toujours à jour :

\`\`\`typescript
// Le type explique clairement ce qu'est un utilisateur valide
interface User {
  id: number
  name: string
  email: string
  role: "admin" | "editor" | "viewer"
  settings: {
    notifications: boolean
    theme: "light" | "dark"
  }
}

// La signature de fonction explique clairement ce qu'elle attend et retourne
function updateUserSettings(userId: number, settings: Partial<User["settings"]>): Promise<User> {
  // ...
}
\`\`\`

### 5. Meilleure collaboration en équipe

TypeScript a considérablement amélioré la collaboration au sein de l'équipe :

- Les nouveaux membres comprennent plus rapidement la structure du code
- Les interfaces définissent clairement les contrats entre les différentes parties du code
- Moins de temps passé à déboguer des erreurs de type

## Comment j'ai surmonté les défis

### Configuration initiale

J'ai créé des templates pour mes projets courants (React, Node.js) avec des configurations TypeScript optimisées.

### Courbe d'apprentissage

J'ai adopté une approche progressive :

1. Commencer avec des types simples
2. Utiliser \`any\` temporairement pour les parties complexes
3. Progressivement remplacer \`any\` par des types plus précis

### Bibliothèques tierces sans types

J'ai utilisé DefinitelyTyped (@types/...) ou créé mes propres définitions de types.

## Résultats concrets

Après avoir converti tous mes projets à TypeScript :

- **Réduction de 40% des bugs en production** liés à des erreurs de type
- **Temps de débogage réduit de moitié**
- **Documentation du code améliorée** sans effort supplémentaire
- **Refactoring plus rapide et plus sûr**

## Conclusion

Aujourd'hui, je ne peux plus imaginer démarrer un projet sans TypeScript. Les avantages en termes de qualité de code, de productivité et de maintenabilité surpassent largement le coût initial d'apprentissage et de configuration.

Si vous hésitez encore à faire le saut, je vous encourage vivement à essayer TypeScript sur votre prochain projet. Commencez avec des configurations simples et des types basiques, puis évoluez progressivement. Vous serez probablement surpris de voir à quel point cela peut améliorer votre expérience de développement.
  `,
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Non Trouvé</h1>
        <p className="text-muted-foreground mb-8">L'article que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au Blog
          </Link>
        </Button>
      </div>
    )
  }

  // Récupérer le contenu de l'article
  const content = blogContents[post.id as keyof typeof blogContents] || ""

  // Récupérer les articles connexes (même catégorie ou tags similaires)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  return (
    <main className="py-20">
      <div className="container">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/#blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour au Blog
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-cyan text-white">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{post.title}</h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border">
              <Image
                src={post.image || "/placeholder.svg?height=600&width=1200"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-muted/50">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center py-2 border-y">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 mr-1" /> J'aime
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="h-4 w-4 mr-1" /> Partager
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Bookmark className="h-4 w-4 mr-1" /> Sauvegarder
              </Button>
            </div>

            <BlogContentRenderer content={content} />

            <div className="pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Articles Récents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.id}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium">{p.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{p.date}</span>
                        <span>•</span>
                        <span>{p.readTime}</span>
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Articles Connexes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.id}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium">{p.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <Badge className="text-xs">{p.category}</Badge>
                        <span>•</span>
                        <span>{p.readTime}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm">Aucun article connexe trouvé.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Catégories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                    <Badge key={category} variant="secondary" className="bg-blue-cyan/10 text-blue-cyan">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
