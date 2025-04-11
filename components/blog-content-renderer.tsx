"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { CodeBlock } from "@/components/ui/code-block"

interface BlogContentRendererProps {
  content: string
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const [renderedContent, setRenderedContent] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Fonction pour analyser le contenu et extraire les blocs de code
    const parseContent = () => {
      const codeBlockRegex = /```([\w-]+)?\n([\s\S]*?)```/g
      const parts: React.ReactNode[] = []

      let lastIndex = 0
      let match

      // Rechercher tous les blocs de code dans le contenu
      while ((match = codeBlockRegex.exec(content)) !== null) {
        // Ajouter le texte avant le bloc de code
        if (match.index > lastIndex) {
          parts.push(
            <div key={`text-${lastIndex}`} className="whitespace-pre-line">
              {content.slice(lastIndex, match.index)}
            </div>,
          )
        }

        // Extraire le langage et le code
        const language = match[1]?.trim() || "plaintext"
        const code = match[2].trim()

        // Ajouter le bloc de code avec notre composant
        parts.push(<CodeBlock key={`code-${match.index}`} language={language} code={code} />)

        lastIndex = match.index + match[0].length
      }

      // Ajouter le reste du texte après le dernier bloc de code
      if (lastIndex < content.length) {
        parts.push(
          <div key={`text-${lastIndex}`} className="whitespace-pre-line">
            {content.slice(lastIndex)}
          </div>,
        )
      }

      return parts
    }

    setRenderedContent(parseContent())
  }, [content])

  return <div className="prose dark:prose-invert max-w-none">{renderedContent}</div>
}
