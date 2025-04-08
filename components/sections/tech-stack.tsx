"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import des icônes de react-icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiVercel,
  SiJest,
  SiFigma,
  SiGraphql,
  SiRedux,
  SiPrisma,
  //SiZustand,
  SiZod,
  SiPostman,
  SiLinux,
  SiNpm,
} from "react-icons/si"

// Définition des technologies avec leurs icônes
const technicalSkills = [
  { name: "HTML", icon: <SiHtml5 className="h-6 w-6 text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss3 className="h-6 w-6 text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" /> },
  { name: "React", icon: <SiReact className="h-6 w-6 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" /> },
  { name: "Framer Motion", icon: <SiFramer className="h-6 w-6 text-[#0055FF]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
  { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 text-[#E10098]" /> },
  { name: "Redux", icon: <SiRedux className="h-6 w-6 text-[#764ABC]" /> },
]

const tools = [
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-[#4169E1]" /> },
  { name: "Prisma", icon: <SiPrisma className="h-6 w-6 text-[#2D3748]" /> },
  { name: "Firebase", icon: <SiFirebase className="h-6 w-6 text-[#FFCA28]" /> },
  { name: "AWS", icon: <SiAmazon className="h-6 w-6 text-[#FF9900]" /> },
  { name: "Docker", icon: <SiDocker className="h-6 w-6 text-[#2496ED]" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="h-6 w-6 text-[#326CE5]" /> },
  { name: "Git", icon: <SiGit className="h-6 w-6 text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="h-6 w-6" /> },
  { name: "Vercel", icon: <SiVercel className="h-6 w-6" /> },
  { name: "Jest", icon: <SiJest className="h-6 w-6 text-[#C21325]" /> },
  { name: "Figma", icon: <SiFigma className="h-6 w-6 text-[#F24E1E]" /> },
  { name: "Zustand", icon: <SiZod className="h-6 w-6" /> },
  { name: "Zod", icon: <SiZod className="h-6 w-6 text-[#3068B7]" /> },
  { name: "Postman", icon: <SiPostman className="h-6 w-6 text-[#FF6C37]" /> },
  { name: "Linux", icon: <SiLinux className="h-6 w-6 text-[#FCC624]" /> },
  { name: "NPM", icon: <SiNpm className="h-6 w-6 text-[#CB3837]" /> },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Mon Tech Stack</h2>
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
              <div className="flex flex-wrap justify-center gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {tool.icon}
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Version alternative avec fond sombre comme dans l'image de référence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8">Technologies Maîtrisées</h3>

          <div className="bg-slate-900 rounded-xl p-8 shadow-xl">
            <div className="flex flex-wrap justify-center gap-4">
              {[...technicalSkills, ...tools].slice(0, 18).map((tech, index) => (
                <motion.div
                  key={`dark-${tech.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-all shadow-md">
                    {tech.icon}
                    <span className="text-sm font-medium text-white">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
