"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

const projectsData: Record<string, {
  name: string
  type: string
  year: string
  location: string
  concept: string
  description: string
}> = {
  "casa-alba": {
    name: "Casa Alba",
    type: "Residencial",
    year: "2023",
    location: "Ciudad de México",
    concept: "Un refugio de luz natural donde cada espacio invita a la contemplación y el descanso.",
    description: "Casa Alba nació del deseo de crear un hogar que respirara con sus habitantes. La luz natural es la protagonista, filtrándose a través de celosías de madera que crean patrones cambiantes a lo largo del día. Los materiales locales —piedra volcánica, madera de encino recuperada y barro— conectan la arquitectura con su entorno. Cada rincón fue diseñado para fomentar la pausa, la conversación y el encuentro con uno mismo.",
  },
  "wellness-botanica": {
    name: "Wellness Botánica",
    type: "Wellness Center",
    year: "2022",
    location: "Valle de Bravo",
    concept: "Un santuario donde la naturaleza y la arquitectura se fusionan para sanar.",
    description: "Este centro de bienestar fue concebido como una extensión del bosque que lo rodea. Grandes ventanales enmarcan el paisaje, convirtiéndolo en protagonista de cada experiencia. Los espacios fluyen orgánicamente entre áreas de tratamiento, meditación y descanso, siempre manteniendo una conexión visual y sensorial con la naturaleza. La paleta de materiales naturales y la iluminación cuidadosamente diseñada crean un ambiente de serenidad profunda.",
  },
  "hotel-oceano": {
    name: "Hotel Océano",
    type: "Hoteles & Resorts",
    year: "2024",
    location: "Puerto Escondido",
    concept: "Arquitectura que dialoga con el mar, donde cada habitación es un mirador al infinito.",
    description: "Hotel Océano reimagina la experiencia costera a través de una arquitectura que celebra la horizontalidad del océano. Las habitaciones se escalonan suavemente hacia el mar, cada una con su propia terraza privada que captura el amanecer y el atardecer. Los materiales locales —madera de parota, piedra de la región y textiles artesanales— crean un ambiente de calidez sofisticada que invita a la desconexión y el asombro.",
  },
  "oficinas-verde": {
    name: "Oficinas Verde",
    type: "Corporativo",
    year: "2023",
    location: "Monterrey",
    concept: "Espacios de trabajo que nutren la creatividad y el bienestar del equipo.",
    description: "Este proyecto corporativo desafía la noción tradicional de oficina. Jardines interiores, zonas de descanso biofílicas y espacios de colaboración flexible se entrelazan para crear un ambiente que prioriza el bienestar de quienes lo habitan. La iluminación natural, la ventilación cruzada y los materiales sostenibles reducen el impacto ambiental mientras mejoran la productividad y satisfacción del equipo.",
  },
  "casa-tierra": {
    name: "Casa Tierra",
    type: "Residencial",
    year: "2022",
    location: "Oaxaca",
    concept: "Una casa que crece desde la tierra, honrando las tradiciones constructivas locales.",
    description: "Casa Tierra es un homenaje a la arquitectura vernácula oaxaqueña reinterpretada para la vida contemporánea. Los muros de adobe, los techos de teja y los patios interiores crean un microclima natural que mantiene el confort sin necesidad de sistemas mecánicos. Cada espacio fue diseñado en colaboración con artesanos locales, integrando textiles, cerámicas y carpintería que cuentan la historia de una región y su gente.",
  },
  "plaza-central": {
    name: "Plaza Central",
    type: "Espacio Público",
    year: "2024",
    location: "Guadalajara",
    concept: "Un corazón urbano que invita al encuentro, el descanso y la celebración comunitaria.",
    description: "La Plaza Central busca recuperar el sentido de comunidad en el espacio público. Áreas de sombra con vegetación nativa, mobiliario flexible y superficies permeables crean un oasis urbano que se adapta a múltiples usos: desde el mercado semanal hasta conciertos y reuniones vecinales. El diseño prioriza la accesibilidad universal y la sostenibilidad, con sistemas de captación de agua pluvial y pavimentos que reducen el efecto de isla de calor.",
  },
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug]

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
      <section className="relative h-[70vh] md:h-[80vh]">
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-warm-sand/40">
          <div className="absolute inset-0 flex items-center justify-center text-sostenible/20">
            <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sostenible/80 via-sostenible/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-sm text-ivory-cream/70 tracking-widest uppercase mb-4">
                {project.type} — {project.year}
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory-cream text-balance">
                {project.name}
              </h1>
              <p className="font-body text-sm text-ivory-cream/70 mt-4">
                {project.location}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sostenible/60 hover:text-sostenible font-body text-sm mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todos los proyectos
          </Link>

          {/* Concept */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-sostenible mb-6 leading-relaxed text-balance">
              {project.concept}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <p className="font-body text-lg text-sostenible/80 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Gallery Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`
                  bg-warm-sand/30 rounded-2xl flex items-center justify-center text-sostenible/20
                  ${i === 1 ? "md:col-span-2 aspect-video" : "aspect-square"}
                `}
              >
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
