import Link from "next/link"
import { Book, Mail, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-8 w-8 text-secondary-foreground" />
              <span className="text-xl font-bold text-secondary-foreground">Nombre del Educador</span>
            </div>
            <p className="text-secondary-foreground text-center md:text-left max-w-md">
              Acompañando a estudiantes en su camino académico y creativo, brindando herramientas para el éxito en la
              escritura.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://instagram.com"
              className="text-secondary-foreground hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className="text-secondary-foreground hover:opacity-80 transition-opacity">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:contacto@ejemplo.com"
              className="text-secondary-foreground hover:opacity-80 transition-opacity"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} Nombre del Educador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

