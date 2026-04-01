"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { projectsData } from "@/lib/data/projects"

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Efecto de scroll horizontal anclado (Sticky Horizontal Scroll)
    const { scrollYProgress } = useScroll({
        target: containerRef,
    })

    // Mapeamos el progreso de scroll vertical (0 a 1) a traslación horizontal (-X%)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

    const [activeProject, setActiveProject] = useState<string | null>(null)

    return (
        <>
            <section
                ref={containerRef}
                id="proyectos"
                // Le damos un height inmenso (400vh) para que el usuario scrollee mucho rato 
                // mientras la sección real se queda "sticky" en la pantalla
                className="relative h-[400vh] bg-[#F9F3E8]"
            >
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                    <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-24">

                        {/* Título Introductorio Fijo al inicio del scroll */}
                        <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center shrink-0">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="font-heading text-5xl md:text-7xl lg:text-8xl text-sostenible mb-6"
                            >
                                Nuestra <br /> Huella
                            </motion.h2>
                            <p className="font-body text-lg md:text-xl text-sostenible/70 max-w-md">
                                Cada obra es una excusa para materializar lo intangible. Explora los proyectos que definen a Adentro Studio.
                            </p>
                        </div>

                        {/* Tarjetas de Proyectos */}
                        {projectsData.map((project, idx) => (
                            <div
                                key={project.id}
                                className="relative group w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] shrink-0 cursor-pointer overflow-hidden rounded-2xl"
                                onClick={() => setActiveProject(project.id)}
                            >
                                {/* Imagen Cover de Alta Calidad */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover bg-sostenible/10"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                </div>

                                {/* Overlay Oscuro On Hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 opacity-60 md:opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Textos Informativos */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-4 mb-4 overflow-hidden">
                                        <span className="font-sora text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            0{idx + 1}
                                        </span>
                                        <div className="h-[1px] w-12 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                                    </div>
                                    <h3 className="font-heading text-4xl md:text-5xl font-bold mb-3 drop-shadow-md">
                                        {project.title}
                                    </h3>
                                    <p className="font-body text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 max-w-lg line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Cierre / Espaciador final */}
                        <div className="w-[10vw] shrink-0" />
                    </motion.div>

                </div>
            </section>

            {/* Modal de Galería Expansiva */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#F9F3E8] overflow-y-auto"
                    >
                        {/* Header del Modal */}
                        <div className="fixed top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-center z-50 bg-gradient-to-b from-[#F9F3E8] to-transparent">
                            <h2 className="font-heading text-3xl md:text-5xl text-sostenible font-bold">
                                {projectsData.find(p => p.id === activeProject)?.title}
                            </h2>
                            <button
                                onClick={() => setActiveProject(null)}
                                className="w-12 h-12 rounded-full border border-sostenible text-sostenible flex items-center justify-center hover:bg-sostenible hover:text-white transition-colors"
                                aria-label="Cerrar galería"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Grid de Galería Masiva (Masonry inspirado) */}
                        <div className="pt-32 pb-24 px-4 md:px-12 columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
                            {projectsData.find(p => p.id === activeProject)?.video && (
                                <div className="relative w-full overflow-hidden rounded-xl break-inside-avoid">
                                    <video
                                        src={projectsData.find(p => p.id === activeProject)?.video}
                                        controls
                                        className="w-full h-auto"
                                        muted autoPlay loop
                                    />
                                </div>
                            )}

                            {projectsData.find(p => p.id === activeProject)?.gallery.map((imgSrc, i) => (
                                <div key={i} className="relative w-full overflow-hidden rounded-xl break-inside-avoid group">
                                    <Image
                                        src={imgSrc}
                                        alt={`Galería ${i}`}
                                        width={800}
                                        height={1200} // Altura proxy para Image, se auto-proporciona por layout
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Descripción Completa */}
                        <div className="max-w-3xl mx-auto px-6 pb-32 text-center">
                            <p className="font-body text-lg md:text-2xl text-sostenible/80 leading-relaxed">
                                {projectsData.find(p => p.id === activeProject)?.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
