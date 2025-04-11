"use client"

import { useState, useEffect } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  code: string
  filename?: string
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (error) {
      console.error("Failed to copy code:", error)
    }
  }

  // Déterminer la classe de couleur en fonction du langage
  const getLanguageColor = () => {
    switch (language.toLowerCase()) {
      case "javascript":
      case "js":
        return "text-yellow-500"
      case "typescript":
      case "ts":
        return "text-blue-500"
      case "jsx":
      case "tsx":
        return "text-cyan-500"
      case "css":
        return "text-pink-500"
      case "html":
        return "text-orange-500"
      case "bash":
      case "shell":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="relative my-6 rounded-lg overflow-hidden border bg-muted/50">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/70">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="h-4 w-4" />
            <span>{filename}</span>
          </div>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-md bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copier le code"
        >
          {copied ? <Check className="h-4 w-4 text-green-neon" /> : <Copy className="h-4 w-4" />}
        </button>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-cyan to-pink-neon" />
        <div className="overflow-x-auto p-4 pl-6">
          <pre className="text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className={cn("text-xs font-mono font-bold", getLanguageColor())}>{language}</span>
            </div>
            <code className="font-mono">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
