"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Globe, Server, Cpu, Terminal, Cloud, GitBranch, Figma, Layers } from "lucide-react"

const technicalSkills = [
  { name: "JavaScript", icon: <Code2 className="h-5 w-5" /> },
  { name: "TypeScript", icon: <Code2 className="h-5 w-5" /> },
  { name: "React", icon: <Code2 className="h-5 w-5" /> },
  { name: "Next.js", icon: <Globe className="h-5 w-5" /> },
  { name: "Node.js", icon: <Server className="h-5 w-5" /> },
  { name: "Express", icon: <Server className="h-5 w-5" /> },
  { name: "GraphQL", icon: <Database className="h-5 w-5" /> },
  { name: "REST API", icon: <Server className="h-5 w-5" /> },
  { name: "HTML5", icon: <Code2 className="h-5 w-5" /> },
  { name: "CSS3", icon: <Code2 className="h-5 w-5" /> },
  { name: "Tailwind CSS", icon: <Code2 className="h-5 w-5" /> },
  { name: "Redux", icon: <Layers className="h-5 w-5" /> },
]

const tools = [
  { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
  { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
  { name: "Firebase", icon: <Database className="h-5 w-5" /> },
  { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
  { name: "Docker", icon: <Cpu className="h-5 w-5" /> },
  { name: "Kubernetes", icon: <Cpu className="h-5 w-5" /> },
  { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
  { name: "GitHub", icon: <GitBranch className="h-5 w-5" /> },
  { name: "CI/CD", icon: <Terminal className="h-5 w-5" /> },
  { name: "Jest", icon: <Terminal className="h-5 w-5" /> },
  { name: "Figma", icon: <Figma className="h-5 w-5" /> },
  { name: "Vercel", icon: <Cloud className="h-5 w-5" /> },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1 border-primary/20">
            Compétences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Mon Expertise Technique</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour donner vie aux produits
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="technical">Compétences Techniques</TabsTrigger>
              <TabsTrigger value="tools">Outils & Technologies</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technicalSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex flex-col items-center justify-center p-4 h-full rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors">
                          <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">{skill.icon}</div>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools">
              <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {tools.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex flex-col items-center justify-center p-4 h-full rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors">
                          <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">{tool.icon}</div>
                          <span className="text-sm font-medium">{tool.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

