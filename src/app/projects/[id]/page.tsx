import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const projects = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    fullDescription: `
      This e-commerce platform provides a complete solution for online stores. It includes features such as:
      
      - User authentication and profile management
      - Product catalog with categories and search functionality
      - Shopping cart and wishlist
      - Secure checkout with Stripe integration
      - Order tracking and history
      - Admin dashboard for product and order management
      
      The application is built with Next.js for the frontend, with MongoDB as the database. It uses Stripe for payment processing and features responsive design for optimal viewing on all devices.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Implementing a secure payment system and ensuring data consistency across the application were the main challenges. I solved these by using Stripe's secure API and implementing robust state management.",
    learnings:
      "This project deepened my understanding of e-commerce workflows and improved my skills in handling complex state management in React applications.",
    featured: true,
  },
  {
    id: "project2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    fullDescription: `
      This task management application helps teams collaborate effectively by providing:
      
      - Real-time task updates and notifications
      - Team collaboration with comments and mentions
      - Task assignment and priority management
      - Deadline tracking and calendar integration
      - File attachments and sharing
      - Progress tracking with customizable boards and lists
      
      The application uses React for the frontend with Node.js and Express for the backend. Socket.io enables real-time updates, and PostgreSQL stores the data. The app features a clean, intuitive interface that enhances productivity.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Implementing real-time updates while maintaining performance was challenging. I used Socket.io and optimized database queries to ensure smooth operation even with multiple users.",
    learnings: "This project improved my understanding of real-time applications and database optimization techniques.",
    featured: true,
  },
  {
    id: "project3",
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that creates marketing copy based on user inputs.",
    fullDescription: `
      This AI content generator helps marketers and content creators by:
      
      - Generating marketing copy based on product descriptions
      - Creating social media posts with customizable tones
      - Suggesting headlines and email subject lines
      - Providing SEO-optimized content recommendations
      - Offering editing and refinement tools
      
      The application leverages OpenAI's API for content generation, with a React frontend and Express backend. Firebase handles authentication and data storage.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React", "OpenAI API", "Express", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges:
      "Ensuring the AI generated relevant and high-quality content was the main challenge. I implemented prompt engineering techniques and user feedback mechanisms to improve output quality.",
    learnings:
      "This project taught me about AI integration in web applications and the importance of user feedback loops in AI systems.",
    featured: true,
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
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
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
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
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
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
                <h2>Overview</h2>
                <div className="whitespace-pre-line">{project.fullDescription}</div>

                <h2>Challenges & Solutions</h2>
                <p>{project.challenges}</p>

                <h2>Learnings</h2>
                <p>{project.learnings}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
                <CardDescription>Visit the live demo or view the source code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
                <CardDescription>Key technologies and tools used in this project</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Projects</CardTitle>
                <CardDescription>Check out some of my other work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects
                  .filter((p) => p.id !== project.id)
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

