"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-sostenible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-warm-sand/20 rounded-2xl overflow-hidden">
              {/* Portrait Placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-ivory-cream/40">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-ivory-cream/10 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="font-body text-xs tracking-wider">Retrato de los socios</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pistachio/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ivory-cream mb-8 text-balance">
              Somos Adentro
            </h2>
            
            <div className="space-y-6 text-ivory-cream/80 font-body leading-relaxed">
              <p>
                Nacimos de la convicción de que los espacios tienen el poder de transformar. 
                Somos dos almas creativas que encontraron en la arquitectura y el diseño interior 
                un lenguaje común: el de la emoción traducida en forma, textura y luz.
              </p>
              
              <p>
                Nuestra práctica es un acto de co-creación constante. No diseñamos para imponer, 
                sino para escuchar. Cada proyecto comienza con una pregunta profunda sobre quién 
                lo habitará, cómo vivirá, qué necesita sanar.
              </p>
              
              <p>
                Creemos en la arquitectura como medicina: espacios que respiran, que acogen, 
                que permiten ser. En Adentro, el proceso es tan importante como el resultado. 
                Cada decisión es consciente, cada material tiene un propósito, cada rincón 
                cuenta una historia.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-10 border-t border-ivory-cream/20"
            >
              <p className="font-body text-xs text-ivory-cream/50 tracking-widest uppercase">
                Arquitectura consciente desde 2018
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
