"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Menu, X } from "lucide-react"
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logos/logo.png" alt="Logo" width={150} height={150} />
      </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="font-medium transition-colors hover:text-primary-foreground">
            Inicio
          </Link>
          <Link href="/rumbo-a-la-tesis" className="font-medium transition-colors hover:text-primary-foreground">
            Rumbo a la Tesis
          </Link>
          <Link href="/escritura-creativa" className="font-medium transition-colors hover:text-primary-foreground">
            Escritura Creativa
          </Link>
          <Link href="/newsletter" className="font-medium transition-colors hover:text-primary-foreground">
            Sumate al Newsletter
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 px-4 py-4 bg-white md:hidden">
          <Link
            href="/"
            className="py-2 font-medium transition-colors hover:text-primary-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/rumbo-a-la-tesis"
            className="py-2 font-medium transition-colors hover:text-primary-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Rumbo a la Tesis
          </Link>
          <Link
            href="/escritura-creativa"
            className="py-2 font-medium transition-colors hover:text-primary-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Escritura Creativa
          </Link>
          <Link
            href="/newsletter"
            className="py-2 font-medium transition-colors hover:text-primary-foreground"
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

