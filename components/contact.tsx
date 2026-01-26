"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const projectTypes = [
  { id: "residencial", label: "Residencial" },
  { id: "wellness", label: "Wellness & Center" },
  { id: "corporativo", label: "Corporativo" },
  { id: "hotelero", label: "Hoteles & Resorts" },
  { id: "espacio-publico", label: "Espacio Público" },
  { id: "consultoria", label: "Consultoría" },
]

// The 4 Pillars: Qué, Cómo, Cuándo, Por qué
const questions = [
  {
    id: "que",
    pillar: "Qué",
    prompt: "¿Qué quieres crear?",
    placeholder: "Describe el espacio o la transformación que imaginas...",
  },
  {
    id: "como",
    pillar: "Cómo",
    prompt: "¿Cómo imaginas la experiencia?",
    placeholder: "¿Qué sensaciones, materiales o atmósferas te atraen?",
  },
  {
    id: "cuando",
    pillar: "Cuándo",
    prompt: "¿Cuándo te gustaría iniciar?",
    placeholder: "¿Tienes un plazo ideal o alguna fecha importante?",
  },
  {
    id: "porque",
    pillar: "Por qué",
    prompt: "¿Cuál es la intención profunda del proyecto?",
    placeholder: "¿Qué te impulsa a crear este espacio? ¿Qué significado tiene para ti?",
  },
]

export function CrearJuntos() {
  const [step, setStep] = useState(0)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId]
    )
  }

  const handleNext = () => {
    if (step === 0 && selectedTypes.length > 0) {
      setStep(1)
    } else if (step > 0 && step < questions.length) {
      setStep(step + 1)
    } else if (step === questions.length) {
      setIsSubmitted(true)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const currentQuestion = questions[step - 1]
  const canProceed = step === 0 
    ? selectedTypes.length > 0 
    : answers[currentQuestion?.id]?.trim().length > 0

  return (
    <section id="crear-juntos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Atmospheric Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pistachio/20 via-oatmilk to-warm-sand/30" />
      
      {/* Abstract Illustrated Gradient Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pistachio/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-soft-clay/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-sand/20 rounded-full blur-3xl" />
      </div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-sostenible mb-6 text-balance">
            <span className="relative inline-block">
              Crear juntos
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-sostenible/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="font-body text-sm text-sostenible/70 tracking-wide">
            Cada gran proyecto comienza con una conversación
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {[0, ...questions.map((_, i) => i + 1)].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-sostenible w-8" : "bg-sostenible/20 w-4"
              }`}
            />
          ))}
        </div>

        {/* Conversational Form */}
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sostenible flex items-center justify-center">
                <Check className="w-8 h-8 text-ivory-cream" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-sostenible mb-4">
                Gracias por compartir tu visión
              </h3>
              <p className="font-body text-sostenible/70">
                Nos pondremos en contacto contigo pronto para comenzar esta conversación.
              </p>
            </motion.div>
          ) : step === 0 ? (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h3 className="font-nav text-2xl md:text-3xl text-sostenible text-center">
                Selecciona el tipo de proyecto
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeToggle(type.id)}
                    className={`
                      px-6 py-3 rounded-full font-body text-sm tracking-wide
                      transition-all duration-300
                      ${
                        selectedTypes.includes(type.id)
                          ? "bg-sostenible text-ivory-cream"
                          : "bg-ivory-cream text-sostenible border border-sostenible/20 hover:border-sostenible/40"
                      }
                    `}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h3 className="font-nav text-2xl md:text-3xl text-sostenible text-center text-balance">
                {currentQuestion.prompt}
              </h3>
              
              <textarea
                value={answers[currentQuestion.id] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [currentQuestion.id]: e.target.value }))
                }
                placeholder={currentQuestion.placeholder}
                className="w-full h-40 p-6 rounded-2xl bg-ivory-cream border border-sostenible/10 text-sostenible placeholder:text-sostenible/40 font-body text-lg resize-none focus:outline-none focus:border-sostenible/30 transition-colors"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!isSubmitted && (
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={handleBack}
              className={`font-body text-sm text-sostenible/60 hover:text-sostenible transition-colors ${
                step === 0 ? "invisible" : ""
              }`}
            >
              Volver
            </button>
            
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`
                flex items-center gap-2 px-8 py-4 rounded-full font-body text-sm tracking-wide
                transition-all duration-300
                ${
                  canProceed
                    ? "bg-sostenible text-ivory-cream hover:bg-sostenible/90"
                    : "bg-sostenible/20 text-sostenible/40 cursor-not-allowed"
                }
              `}
            >
              {step === questions.length ? "Enviar" : "Continuar"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
