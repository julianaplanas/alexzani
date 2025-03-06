"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Book className="h-8 w-8 text-primary-foreground" />
          <span className="text-xl font-bold">Nombre del Educador</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="font-medium hover:text-primary-foreground transition-colors">
            Inicio
          </Link>
          <Link href="/rumbo-a-la-tesis" className="font-medium hover:text-primary-foreground transition-colors">
            Rumbo a la Tesis
          </Link>
          <Link href="/escritura-creativa" className="font-medium hover:text-primary-foreground transition-colors">
            Escritura Creativa
          </Link>
          <Link href="/newsletter" className="font-medium hover:text-primary-foreground transition-colors">
            Sumate al Newsletter
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 flex flex-col gap-4">
          <Link
            href="/"
            className="font-medium hover:text-primary-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/rumbo-a-la-tesis"
            className="font-medium hover:text-primary-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Rumbo a la Tesis
          </Link>
          <Link
            href="/escritura-creativa"
            className="font-medium hover:text-primary-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Escritura Creativa
          </Link>
          <Link
            href="/newsletter"
            className="font-medium hover:text-primary-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sumate al Newsletter
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar

