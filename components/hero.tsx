"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

// MANTRA CONFIG:
// Ahora 'text' es un JSX element para poder mezclar estilos (cursivas).
const mantras = [
  {
    content: (
      <>
        Diseñar es <em className="italic text-white/90">cuidar</em> la relación entre el espacio, el cuerpo y la <em className="italic text-white/90">experiencia</em>.
      </>
    ),
    className: "items-center justify-center text-center max-w-4xl" 
  },
  {
    content: (
      <>
        El arte <em className="italic text-white/90">ordena</em> el caos.
      </>
    ),
    className: "items-start justify-center text-left pl-6 md:pl-32 pt-20 max-w-2xl" 
  },
  {
    content: (
      <>
        Mirar hacia <em className="italic text-white/90">adentro</em> para proyectar hacia <em className="italic text-white/90">afuera</em>.
      </>
    ),
    className: "items-end justify-center text-right pr-6 md:pr-32 pb-20 max-w-3xl ml-auto" 
  },
  {
    content: (
      <>
        La pausa no es vacío, es el <em className="italic text-white/90">origen</em> de la intención.
      </>
    ),
    className: "items-center justify-center text-center max-w-3xl" 
  },
  {
    content: (
      <>
        Buscamos la <em className="italic text-white/90">permanencia</em>, no la tendencia.
      </>
    ),
    className: "items-start justify-end text-right pr-6 md:pr-24 pt-32 max-w-3xl ml-auto"
  },
  {
    content: (
      <>
        Cualquier creación nacida del <em className="italic text-white/90">agotamiento</em> es un disfraz.
      </>
    ),
    className: "items-start justify-end text-right pr-6 md:pr-24 pt-32 max-w-3xl ml-auto" 
  },
]

export function Hero() {
  const [currentMantra, setCurrentMantra] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMantra((prev) => (prev + 1) % mantras.length)
    }, 8000) // <--- CAMBIO AQUÍ: Antes era 5000, ahora 8000 (8 segundos)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-slow-zoom w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/b21b1HI16f8?start=19&autoplay=1&mute=1&controls=0&loop=1&playlist=b21b1HI16f8&showinfo=0&rel=0&modestbranding=1"
            className="absolute h-[120%] w-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          />
        </div>
      </div>

      {/* --- OVERLAY --- */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-20 w-full h-full p-6 md:p-12 flex flex-col">
        
        <div className="flex-grow relative flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMantra}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className={`absolute inset-0 flex flex-col ${mantras[currentMantra].className}`}
            >
              {/* CAMBIO AQUÍ: 
                  1. font-body (Usa DM Sans, tu letra de texto).
                  2. font-light (Para que sea más fina y elegante).
                  3. text-ivory-cream (Color crema suave).
              */}
              <h1 className="font-body font-light text-2xl md:text-4xl lg:text-4xl text-ivory-cream leading-relaxed tracking-wide text-balance">
                {mantras[currentMantra].content}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* --- SOCIAL ICONS --- */}
      <div className="absolute bottom-8 right-8 z-30 flex flex-col gap-4">
        <a
          href="https://www.instagram.com/a_dentrostudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory-cream/60 hover:text-ivory-cream transition-colors duration-300 transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory-cream/60 hover:text-ivory-cream transition-colors duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  )
}