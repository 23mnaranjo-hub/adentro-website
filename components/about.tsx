"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section
      id="nosotros"
      // 1. Usamos el color SÓLIDO de base. La máscara se encargará del degradado.
      className="py-24 md:py-32 bg-[#2B391C] crumpled-paper relative"
      style={{
        // 2. MÁSCARA DE RECORTE (El secreto):
        // - transparent 0%: El tope de la sección es invisible (deja ver el beige de atrás).
        // - black 15%: Al 15% de altura, la sección ya es totalmente visible (Sólida).
        // - black 100%: Se mantiene sólida hasta el final.
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)"
      }}
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] bg-warm-sand/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-ivory-cream/10 relative group">
              {/* Fotografía de los Fundadores */}
              <Image
                src="/images/fundadores.jpg"
                alt="Socios Fundadores Adentro Studio"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay sutil para que no rompa el diseño si la foto original tiene muchos colores */}
              <div className="absolute inset-0 bg-sostenible/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pistachio/30 rounded-full blur-2xl opacity-60" />
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

            <div className="space-y-6 text-ivory-cream/90 font-body leading-relaxed text-lg font-light">
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