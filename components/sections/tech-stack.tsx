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
  SiPrisma,
  SiPostman,
  SiLinux,
  SiNpm,
  // Nouvelles icônes pour Embarqué/IoT
  SiArduino,
  SiRaspberrypi,
  SiPython,
  // Nouvelles icônes pour Mobile
  SiFlutter,
  SiDart,
  SiAndroidstudio,
  SiKotlin,
  SiOpenjdk,
  SiMqtt,
  SiBluetooth,
  SiWii,
  SiC,
  SiCplusplus,
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
  { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 text-[#E10098]" /> },
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
  { name: "Postman", icon: <SiPostman className="h-6 w-6 text-[#FF6C37]" /> },
  { name: "Linux", icon: <SiLinux className="h-6 w-6 text-[#FCC624]" /> },
  { name: "NPM", icon: <SiNpm className="h-6 w-6 text-[#CB3837]" /> },
]

// Nouvelles compétences pour l'embarqué/IoT
const embeddedSkills = [
  { name: "Arduino", icon: <SiArduino className="h-6 w-6 text-[#00979D]" /> },
  { name: "Raspberry Pi", icon: <SiRaspberrypi className="h-6 w-6 text-[#A22846]" /> },
  {
    name: "ESP32 / ESP8266",
    icon: (
      <div className="flex items-center justify-center h-6 w-6 bg-[#E7352C] rounded-full text-white font-bold text-xs">
        ESP
      </div>
    ),
  },
  { name: "MicroPython", icon: <SiPython className="h-6 w-6 text-[#3776AB]" /> },
  // Technologies de communication
  { name: "MQTT", icon: <SiMqtt className="h-6 w-6 text-[#660066]" /> },
  { name: "Bluetooth", icon: <SiBluetooth className="h-6 w-6 text-[#0082FC]" /> },
  { name: "WiFi", icon: <SiWii className="h-6 w-6 text-[#0089D0]" /> },
  {
    name: "LoRaWAN",
    icon: (
      <div className="flex items-center justify-center h-6 w-6 bg-[#2C3E50] rounded-full text-white font-bold text-xs">
        LoRa
      </div>
    ),
  },
  {
    name: "HTTP/HTTPS",
    icon: (
      <div className="flex items-center justify-center h-6 w-6 bg-[#5BBB7B] rounded-full text-white font-bold text-xs">
        HTTP
      </div>
    ),
  },
  // Langages de programmation embarqués
  { name: "C", icon: <SiC className="h-6 w-6 text-[#A8B9CC]" /> },
  { name: "C++", icon: <SiCplusplus className="h-6 w-6 text-[#00599C]" /> },
  {
    name: "C embarqué",
    icon: (
      <div className="flex items-center justify-center h-6 w-6 bg-[#283593] rounded-full text-white font-bold text-xs">
        C
      </div>
    ),
  },
]

// Nouvelles compétences pour le mobile
const mobileSkills = [
  { name: "Flutter", icon: <SiFlutter className="h-6 w-6 text-[#02569B]" /> },
  { name: "Dart", icon: <SiDart className="h-6 w-6 text-[#0175C2]" /> },
  { name: "Android Studio", icon: <SiAndroidstudio className="h-6 w-6 text-[#3DDC84]" /> },
  { name: "Kotlin", icon: <SiKotlin className="h-6 w-6 text-[#7F52FF]" /> },
  { name: "Java", icon: <SiOpenjdk  className="h-6 w-6 text-[#007396]" /> },
]

// Toutes les compétences combinées pour la section sombre
const allSkills = [
  ...technicalSkills,
  ...tools.slice(0, 8), // Prendre seulement une partie des outils pour ne pas surcharger
  ...embeddedSkills.slice(0, 2),
  ...mobileSkills.slice(0, 3),
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Ma Stack Technique</h2>
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
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="tools">Outils</TabsTrigger>
              <TabsTrigger value="technical">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="embedded">IoT</TabsTrigger>
            </TabsList>

            <TabsContent value="tools">
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {tool.icon}
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <div className="flex flex-wrap justify-center gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <div className="flex flex-wrap justify-center gap-4">
                {mobileSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="embedded">
              <div className="flex flex-wrap justify-center gap-4">
                {embeddedSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
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
            <div className="text-center mb-6">
              <p className="text-slate-400 italic">Je m'efforce constamment de m'améliorer</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {allSkills.map((tech, index) => (
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
