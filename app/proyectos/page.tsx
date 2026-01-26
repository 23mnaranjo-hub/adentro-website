"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "casa-alba",
    name: "Casa Alba",
    type: "Residencial",
    image: null,
    aspect: "tall",
  },
  {
    id: 2,
    slug: "wellness-botanica",
    name: "Wellness Botánica",
    type: "Wellness Center",
    image: null,
    aspect: "wide",
  },
  {
    id: 3,
    slug: "hotel-oceano",
    name: "Hotel Océano",
    type: "Hoteles & Resorts",
    image: null,
    aspect: "square",
  },
  {
    id: 4,
    slug: "oficinas-verde",
    name: "Oficinas Verde",
    type: "Corporativo",
    image: null,
    aspect: "tall",
  },
  {
    id: 5,
    slug: "casa-tierra",
    name: "Casa Tierra",
    type: "Residencial",
    image: null,
    aspect: "wide",
  },
  {
    id: 6,
    slug: "plaza-central",
    name: "Plaza Central",
    type: "Espacio Público",
    image: null,
    aspect: "square",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-ivory-cream">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sostenible/60 hover:text-sostenible font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-sostenible text-balance"
          >
            Proyectos
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm text-sostenible/70 mt-6 max-w-xl tracking-wide"
          >
            Una selección de espacios donde la arquitectura consciente cobra vida
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <Link href={`/proyectos/${project.slug}`} className="group block">
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl bg-warm-sand/30
                      ${project.aspect === "tall" ? "aspect-[3/4]" : ""}
                      ${project.aspect === "wide" ? "aspect-[4/3]" : ""}
                      ${project.aspect === "square" ? "aspect-square" : ""}
                    `}
                  >
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-sostenible/30">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-sostenible/0 group-hover:bg-sostenible/10 transition-colors duration-500" />
                  </div>
                  
                  {/* Project Info */}
                  <div className="mt-4 space-y-1">
                    <h2 className="font-nav text-xl text-sostenible group-hover:text-sostenible/80 transition-colors">
                      {project.name}
                    </h2>
                    <p className="font-body text-xs text-sostenible/50 tracking-wide">
                      {project.type}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
