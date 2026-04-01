"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"
import { projectsData } from "@/lib/data/projects"

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
            Nuestra huella materializada.
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid Dinámico */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <Link href={`/proyectos/${project.id}`} className="group block">
                  <div
                    className="relative overflow-hidden rounded-2xl bg-warm-sand/30 aspect-[4/5] object-cover"
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-sostenible/0 group-hover:bg-sostenible/20 transition-colors duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className="mt-4 space-y-1">
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-sostenible group-hover:text-sostenible/80 transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-body text-xs md:text-sm text-sostenible/70 tracking-wide line-clamp-1">
                      {project.description}
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
