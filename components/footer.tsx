import Link from "next/link"
import { Book, Mail, Instagram, Twitter } from "lucide-react"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 mt-16 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logos/logo.png" alt="Logo" width={200} height={200} />
              </Link>
            </div>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://www.instagram.com/mellamoalexz/"
              className="transition-opacity text-secondary-foreground hover:opacity-80"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.instagram.com/rumboalatesis/"
              className="transition-opacity text-secondary-foreground hover:opacity-80"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-secondary-foreground/20 text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} Alex Zani. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

