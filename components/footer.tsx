"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sostenible py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/logo.svg"
              alt="Adentro Studio"
              width={120}
              height={35}
              className="h-8 w-auto brightness-0 invert mb-6"
            />
            <p className="font-body text-sm text-ivory-cream/60 leading-relaxed">
              Arquitectura consciente y sensorial.
              <br />
              Diseñamos experiencias que sanan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-nav text-xs text-ivory-cream/40 tracking-widest uppercase mb-6">
              Navegación
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Filosofía", href: "#filosofia" },
                { label: "Proyectos", href: "/proyectos" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-nav text-ivory-cream/70 hover:text-ivory-cream transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-nav text-xs text-ivory-cream/40 tracking-widest uppercase mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hola@adentrostudio.com"
                className="flex items-center gap-3 font-body text-ivory-cream/70 hover:text-ivory-cream transition-colors"
              >
                <Mail className="w-4 h-4" />
                hola@adentrostudio.com
              </a>
              
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-cream/50 hover:text-ivory-cream transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-cream/50 hover:text-ivory-cream transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ivory-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-ivory-cream/40">
            © {new Date().getFullYear()} Adentro Studio. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-ivory-cream/40">
            Arquitectura que sana
          </p>
        </div>
      </div>
    </footer>
  )
}
