"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"
import { projectsData } from "@/lib/data/projects"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData.find(p => p.id === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-ivory-cream">
        <Header />
        <div className="pt-32 px-6 text-center">
          <h1 className="font-heading text-4xl text-sostenible">Proyecto no encontrado</h1>
          <Link href="/proyectos" className="mt-8 inline-block font-body text-sm text-sostenible/60 hover:text-sostenible">
            Volver a proyectos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-ivory-cream">
      <Header />

      {/* Magazine Cover Header */}
      <section className="relative h-[70vh] md:h-[80vh] w-full">
        {/* Real Cover Image */}
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-sostenible/90 via-sostenible/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-sm text-ivory-cream/80 tracking-widest uppercase mb-4 shadow-sm">
                Proyecto Especial // Adentro Studio
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory-cream text-balance drop-shadow-lg">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sostenible/60 hover:text-sostenible font-body text-sm mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todos los proyectos
          </Link>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 flex md:justify-center"
          >
            <h2 className="font-heading text-2xl md:text-4xl text-sostenible/90 mb-6 leading-relaxed text-balance md:text-center max-w-4xl">
              {project.description}
            </h2>
          </motion.div>

          {/* Massive Real Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 md:gap-8"
          >
            {project.video && (
              <div className="md:col-span-2 relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl">
                <video
                  src={project.video}
                  autoPlay loop muted playsInline controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {project.gallery.map((imgSrc, i) => (
              <div
                key={i}
                className={`
                  relative overflow-hidden rounded-2xl shadow-md group
                  ${(i % 3 === 0) ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"}
                `}
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} Image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
