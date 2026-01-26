"use client"

import { motion } from "framer-motion"

// The Flow: Conexión -> Análisis -> Diseño -> Materialización
const flowSteps = [
  {
    id: "conexion",
    label: "Conexión",
    description: "Escuchamos tu visión y sentimos el espacio",
  },
  {
    id: "analisis",
    label: "Análisis",
    description: "Estudiamos luz, contexto y necesidades",
  },
  {
    id: "diseno",
    label: "Diseño",
    description: "Co-creamos la narrativa espacial",
  },
  {
    id: "materializacion",
    label: "Materialización",
    description: "Acompañamos cada detalle hasta el habitar",
  },
]

// Elegant easing
const elegantEase = [0.22, 1, 0.36, 1]

export function Ritmo() {
  return (
    <section id="ritmo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pistachio/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-soft-clay/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-warm-sand/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-ivory-cream/60 backdrop-blur-3xl" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: elegantEase }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-sostenible mb-8 tracking-tight">
            Ritmo
          </h2>
          <p className="font-body text-base md:text-lg text-sostenible/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
            La arquitectura no es estática. Sigue el ritmo de la naturaleza, la luz y las personas que la habitan.
          </p>
        </motion.div>

        {/* Philosophy Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: elegantEase }}
          className="mb-20 md:mb-28"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm md:text-base text-sostenible/60 leading-relaxed tracking-wide mb-8">
              Nuestro proceso nace de una conexión ecológica profunda: los ciclos circadianos, 
              el movimiento de la luz, el fluir del aire. Cada espacio que diseñamos respira 
              con el entorno y acompaña el ritmo natural de quienes lo habitan.
            </p>
            <div className="flex items-center justify-center gap-8 text-sostenible/40">
              <span className="font-nav text-sm tracking-widest uppercase">Salud</span>
              <span className="w-8 h-px bg-sostenible/20" />
              <span className="font-nav text-sm tracking-widest uppercase">Hábitat</span>
              <span className="w-8 h-px bg-sostenible/20" />
              <span className="font-nav text-sm tracking-widest uppercase">Espíritu</span>
            </div>
          </div>
        </motion.div>

        {/* The Flow - Musical Score Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: elegantEase }}
          className="relative"
        >
          {/* Horizontal Line - The Score */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-sostenible/10 -translate-y-1/2" />
          
          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: elegantEase }}
                className="relative text-center group"
              >
                {/* Connector dot on the line */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                    className="w-3 h-3 rounded-full bg-sostenible/20 group-hover:bg-sostenible/40 transition-colors duration-300"
                  />
                </div>
                
                {/* Step Number */}
                <div className="mb-4 md:mb-6 md:pt-8">
                  <span className="font-body text-xs text-sostenible/30 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Step Label */}
                <h3 className="font-heading text-2xl md:text-3xl text-sostenible mb-3 tracking-tight">
                  {step.label}
                </h3>
                
                {/* Step Description */}
                <p className="font-body text-sm text-sostenible/60 leading-relaxed tracking-wide max-w-[200px] mx-auto">
                  {step.description}
                </p>

                {/* Arrow to next (except last) */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-0 -right-2 -translate-y-1/2 text-sostenible/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: elegantEase }}
          className="mt-20 md:mt-28 text-center max-w-2xl mx-auto"
        >
          <p className="font-body text-lg md:text-xl text-sostenible/80 leading-relaxed italic">
            &ldquo;En la intersección de la salud, el hábitat y el espíritu, encontramos el verdadero 
            propósito: crear espacios que nutren el cuerpo, acogen la vida y elevan el alma.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
