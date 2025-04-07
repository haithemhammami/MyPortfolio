import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const blogPosts = [
  {
    id: "post1",
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure your React applications for scalability and maintainability.",
    content: `
      # Building Scalable React Applications

      When building React applications that need to scale, it's important to consider the architecture and structure from the beginning. This post explores best practices for creating maintainable and scalable React applications.

      ## Component Structure

      Organizing your components effectively is crucial for scalability. Consider the following structure:

      - **Atomic Design Methodology**: Break down your UI into atoms, molecules, organisms, templates, and pages.
      - **Feature-based Organization**: Group components by feature rather than type.
      - **Container/Presentational Pattern**: Separate logic from presentation.

      ## State Management

      As your application grows, state management becomes increasingly important:

      - **Local State**: Use React's useState for component-specific state.
      - **Context API**: For sharing state between related components.
      - **Redux/Zustand**: For complex global state management.
      - **Server State**: Use React Query or SWR for data fetching and caching.

      ## Code Splitting

      Improve performance by splitting your code:

      - **Dynamic Imports**: Load components only when needed.
      - **Route-based Splitting**: Split code based on routes.
      - **Component-level Splitting**: Lazy load heavy components.

      ## Testing

      A comprehensive testing strategy ensures your application remains stable as it scales:

      - **Unit Tests**: Test individual components and functions.
      - **Integration Tests**: Test how components work together.
      - **End-to-End Tests**: Test complete user flows.

      ## Conclusion

      Building scalable React applications requires thoughtful architecture, effective state management, performance optimization, and comprehensive testing. By following these best practices, you can create applications that are maintainable and can grow with your needs.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Best Practices", "Performance"],
  },
  {
    id: "post2",
    title: "The Future of Web Development with AI",
    excerpt: "Exploring how AI is transforming the landscape of web development and what it means for developers.",
    content: `
      # The Future of Web Development with AI

      Artificial Intelligence is rapidly transforming the web development landscape. This post explores current AI applications in web development and what the future might hold.

      ## Current AI Applications in Web Development

      AI is already making an impact in several areas:

      - **Code Generation**: Tools like GitHub Copilot help developers write code faster.
      - **Design Assistance**: AI can generate UI components and suggest design improvements.
      - **Testing and Debugging**: AI can identify potential bugs and suggest fixes.
      - **Performance Optimization**: AI can analyze and optimize website performance.

      ## The Future of AI in Web Development

      Looking ahead, we can expect AI to play an even larger role:

      - **Automated Development**: AI might be able to build entire websites based on simple descriptions.
      - **Personalized User Experiences**: AI will enable highly personalized content and interfaces.
      - **Predictive Maintenance**: AI will identify and fix issues before they affect users.
      - **Natural Language Interfaces**: Building websites through conversation with AI.

      ## Impact on Developers

      As AI becomes more prevalent, the role of web developers will evolve:

      - **Focus on Creativity**: Developers will spend less time on repetitive tasks and more on creative problem-solving.
      - **AI Collaboration**: Learning to effectively collaborate with AI tools will become a key skill.
      - **Specialization**: Developers may specialize in areas where human expertise remains crucial.
      - **Ethical Considerations**: Understanding the ethical implications of AI in web development will be important.

      ## Conclusion

      AI is set to revolutionize web development, automating routine tasks and enabling new possibilities. While the landscape is changing, the need for human creativity, problem-solving, and ethical oversight will ensure that developers remain essential in the AI-augmented future.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "Feb 28, 2023",
    readTime: "6 min read",
    category: "AI",
    tags: ["AI", "Future Tech", "Web Development", "Machine Learning"],
  },
  {
    id: "post3",
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Practical tips and techniques for improving the performance of your Next.js applications.",
    content: `
      # Optimizing Performance in Next.js Applications

      Next.js provides many built-in optimizations, but there are additional steps you can take to ensure your application performs at its best. This post covers practical techniques for optimizing Next.js applications.

      ## Image Optimization

      Images often account for the largest portion of page weight:

      - **Use next/image**: Leverage Next.js's built-in Image component for automatic optimization.
      - **Proper Sizing**: Always provide width and height to prevent layout shifts.
      - **Format Selection**: Use modern formats like WebP or AVIF when possible.
      - **Lazy Loading**: Only load images when they enter the viewport.

      ## JavaScript Optimization

      Reducing JavaScript bundle size is crucial for performance:

      - **Code Splitting**: Use dynamic imports to split your code.
      - **Tree Shaking**: Ensure unused code is eliminated from bundles.
      - **Dependency Management**: Regularly audit and optimize dependencies.
      - **Script Loading Strategies**: Use defer or async attributes appropriately.

      ## Server-Side Rendering and Static Generation

      Choose the right rendering strategy:

      - **Static Generation**: Pre-render pages at build time when possible.
      - **Incremental Static Regeneration**: Update static pages without rebuilding.
      - **Server-Side Rendering**: Use for pages that need fresh data on each request.
      - **Client-Side Rendering**: Reserve for highly interactive components.

      ## Caching and Data Fetching

      Optimize how your application fetches and stores data:

      - **SWR or React Query**: Implement smart client-side caching.
      - **API Route Optimization**: Ensure backend routes are efficient.
      - **Edge Caching**: Leverage CDN caching for static assets.
      - **Database Query Optimization**: Ensure database queries are efficient.

      ## Conclusion

      Optimizing Next.js applications involves a combination of built-in features and additional techniques. By focusing on image optimization, JavaScript bundle size, rendering strategies, and efficient data fetching, you can create fast, responsive applications that provide an excellent user experience.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "Jan 10, 2023",
    readTime: "10 min read",
    category: "Next.js",
    tags: ["Next.js", "Performance", "Optimization", "Web Development"],
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
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
            <Link href="/#blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

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
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-line">{post.content}</div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts
                  .filter((p) => p.id !== post.id)
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

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                    <Badge key={category} variant="secondary">
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

