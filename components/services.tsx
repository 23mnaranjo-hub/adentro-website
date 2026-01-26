"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Residencial",
    description: "Hogares que respiran contigo",
    gradient: "from-pistachio/60 via-pistachio/30 to-transparent",
    blurColor: "bg-pistachio/20",
  },
  {
    title: "Wellness & Center",
    description: "Espacios para el bienestar",
    gradient: "from-soft-clay/60 via-soft-clay/30 to-transparent",
    blurColor: "bg-soft-clay/20",
  },
  {
    title: "Consultoría",
    description: "Guía experta en cada decisión",
    gradient: "from-warm-sand/70 via-warm-sand/40 to-transparent",
    blurColor: "bg-warm-sand/30",
  },
  {
    title: "Corporativos",
    description: "Oficinas que inspiran",
    gradient: "from-oatmilk/80 via-oatmilk/50 to-transparent",
    blurColor: "bg-oatmilk/40",
  },
  {
    title: "Espacio público",
    description: "Comunidades que conectan",
    gradient: "from-pistachio/50 via-pistachio/25 to-transparent",
    blurColor: "bg-pistachio/15",
  },
  {
    title: "Hoteles & Resorts",
    description: "Experiencias inmersivas",
    gradient: "from-soft-clay/50 via-soft-clay/25 to-transparent",
    blurColor: "bg-soft-clay/15",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-cream via-warm-sand/30 to-ivory-cream" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-sostenible mb-6 text-balance">
            Lo que hacemos
          </h2>
          <p className="font-body text-sm text-sostenible/70 max-w-xl mx-auto tracking-wide">
            Cada proyecto es una oportunidad de crear espacios que transforman vidas
          </p>
        </motion.div>

        {/* Organic Circles Layout */}
        <div className="relative flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden backdrop-blur-md border border-white/20"
              style={{
                marginTop: index % 2 === 0 ? "0" : "40px",
              }}
            >
              {/* Blurred color background */}
              <div className={`absolute inset-0 ${service.blurColor} rounded-full`} />
              
              {/* Gradient overlay for depth */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full`} />
              
              {/* Subtle noise texture */}
              <div className="absolute inset-0 rounded-full opacity-[0.08]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }} />
              
              {/* Glass highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
              
              <div className="relative z-10">
                <h3 className="font-nav text-lg md:text-xl lg:text-2xl text-sostenible mb-2 text-balance">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-sostenible/60 hidden md:block">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
