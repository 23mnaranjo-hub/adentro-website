"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Navigation links (without CTA)
const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ritmo", href: "#ritmo" },
  { label: "Nosotros", href: "#nosotros" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-ivory-cream/10 backdrop-blur-md border-b border-sostenible/10">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        {/* Logo - Left */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Adentro Studio"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation - Center/Right */}
        <nav className="hidden md:flex items-center gap-10 ml-auto mr-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-nav text-sm tracking-wide transition-all duration-300 ${
                isScrolled
                  ? "text-soft-clay drop-shadow-[0_0_8px_rgba(197,188,170,0.5)]"
                  : "text-ivory-cream/80 hover:text-ivory-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Far Right (Pistachio bg, Deep Green text) */}
        <Link
          href="#crear-juntos"
          className="hidden md:inline-flex font-nav text-sm text-sostenible bg-pistachio hover:bg-pistachio/90 px-5 py-1.5 rounded-full transition-all duration-300 tracking-wide"
        >
          Crear juntos
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ivory-cream z-10 ml-auto"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-0 bg-sostenible z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-ivory-cream hover:text-pistachio transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
          >
            <Link
              href="#crear-juntos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-nav text-lg text-sostenible bg-pistachio px-6 py-3 rounded-full"
            >
              Crear juntos
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  )
}
