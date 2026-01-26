"use client"

import { motion } from "framer-motion"

const nodes = [
  { id: "health", label: "Salud", x: 50, y: 20 },
  { id: "habitat", label: "Hábitat", x: 20, y: 70 },
  { id: "spirit", label: "Espíritu", x: 80, y: 70 },
]

const connections = [
  { from: "health", to: "habitat" },
  { from: "habitat", to: "spirit" },
  { from: "spirit", to: "health" },
]

export function Philosophy() {
  return (
    <section id="filosofia" className="py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pistachio/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-soft-clay/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-warm-sand/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-ivory-cream/70 backdrop-blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-sostenible mb-6 text-balance">
            Nuestra Filosofía
          </h2>
          <p className="font-body text-sm text-sostenible/70 max-w-xl mx-auto tracking-wide">
            Tres pilares que guían cada decisión de diseño
          </p>
        </motion.div>

        {/* Mind Map Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/10] max-w-3xl mx-auto"
        >
          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {connections.map((conn, index) => {
              const fromNode = nodes.find((n) => n.id === conn.from)
              const toNode = nodes.find((n) => n.id === conn.to)
              if (!fromNode || !toNode) return null

              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="currentColor"
                  className="text-sostenible/20"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                />
              )
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-ivory-cream border border-sostenible/10 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                <span className="font-nav text-xl md:text-2xl text-sostenible text-center">
                  {node.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Center Connection Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-4 h-4 rounded-full bg-sostenible/30" />
          </motion.div>
        </motion.div>

        {/* Philosophy Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center max-w-2xl mx-auto"
        >
          <p className="font-body text-lg md:text-xl text-sostenible/80 leading-relaxed">
            En la intersección de la salud, el hábitat y el espíritu, encontramos el verdadero 
            propósito de nuestro trabajo: crear espacios que nutren el cuerpo, acogen la vida 
            cotidiana y elevan el alma.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
