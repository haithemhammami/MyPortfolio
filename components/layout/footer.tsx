import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" className="text-blue-cyan" />
              <h3 className="text-lg font-semibold">H.Haithem</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Développeur Full-Stack spécialisé dans la création d'expériences numériques exceptionnelles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-blue-cyan transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-blue-cyan transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-muted-foreground hover:text-blue-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-blue-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Me Suivre</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-blue-cyan transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-blue-cyan transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-blue-cyan transition-colors" />
              </Link>
              <Link href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-blue-cyan transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} H.Haithem. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

