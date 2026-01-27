"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

const mantras = [
  "Diseñamos experiencias que sanan",
  "Concebimos el espacio desde la emoción",
  "Arquitectura consciente y sensorial",
]

export function Hero() {
  const [currentMantra, setCurrentMantra] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMantra((prev) => (prev + 1) % mantras.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-slow-zoom w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/hxOXxPAYmiY?start=100&autoplay=1&mute=1&controls=0&loop=1&playlist=hxOXxPAYmiY&showinfo=0&rel=0&modestbranding=1"
            className="absolute h-[120%] w-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-black/30 backdrop-blur-[1px]" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">
        <div className="h-40 md:h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentMantra}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="font-sans font-thin text-4xl md:text-6xl lg:text-7xl text-ivory-cream text-center tracking-wide text-balance leading-tight max-w-5xl"
            >
              {mantras[currentMantra]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-ivory-cream/0 via-ivory-cream/60 to-ivory-cream/0"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory-cream/70 hover:text-ivory-cream transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory-cream/70 hover:text-ivory-cream transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  )
}
