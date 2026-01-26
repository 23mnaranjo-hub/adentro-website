"use client"

import { motion } from "framer-motion"

const processColumns = [
  {
    title: "Qué hacemos",
    content: [
      "Arquitectura consciente que respira con el entorno",
      "Interiorismo sensorial que evoca emociones",
      "Diseño de experiencias espaciales transformadoras",
      "Consultoría en bienestar arquitectónico",
    ],
  },
  {
    title: "Cómo trabajamos",
    content: [
      "Escuchamos profundamente tus necesidades y sueños",
      "Co-creamos desde la empatía y la intuición",
      "Integramos naturaleza, luz y materialidad",
      "Acompañamos cada fase con dedicación artesanal",
    ],
  },
  {
    title: "El Proceso",
    content: [
      "01 — Conversación inicial y diagnóstico",
      "02 — Concepto y narrativa espacial",
      "03 — Desarrollo técnico y material",
      "04 — Ejecución y acompañamiento",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sostenible/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-sostenible mb-6 text-balance">
            Nuestro Proceso
          </h2>
          <p className="font-body text-sm text-sostenible/70 max-w-xl mx-auto tracking-wide">
            Un viaje colaborativo desde la visión hasta la realidad construida
          </p>
        </motion.div>

        {/* 3-Column Layout with Glass Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {processColumns.map((column, index) => (
            <motion.div
              key={column.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-colors duration-500"
            >
              {/* Column Header */}
              <div className="mb-8">
                <span className="font-body text-xs text-sostenible/40 tracking-widest uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-nav text-xl md:text-2xl text-sostenible mt-2">
                  {column.title}
                </h3>
              </div>

              {/* Column Content */}
              <ul className="space-y-4">
                {column.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-body text-sm text-sostenible/70 leading-relaxed tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
