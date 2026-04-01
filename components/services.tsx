"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Matter from "matter-js"

const servicesData = [
  {
    id: 0,
    title: "Residencial",
    description: "Hogares que respiran",
    sizeClass: "w-[clamp(180px,45vw,380px)] h-[clamp(180px,45vw,380px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-fluid-h3-lg",
    descClass: "text-fluid-p-md",
  },
  {
    id: 1,
    title: "Wellness",
    description: "Bienestar activo",
    sizeClass: "w-[clamp(140px,35vw,240px)] h-[clamp(140px,35vw,240px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-fluid-h3-md",
    descClass: "text-fluid-p-md",
  },
  {
    id: 2,
    title: "Consultoría",
    description: "Guía experta",
    sizeClass: "w-[clamp(110px,25vw,160px)] h-[clamp(110px,25vw,160px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-fluid-h3-sm",
    descClass: "text-fluid-p-sm",
  },
  {
    id: 3,
    title: "Corporativos",
    description: "Oficinas que inspiran",
    sizeClass: "w-[clamp(150px,40vw,280px)] h-[clamp(150px,40vw,280px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-[clamp(1.1rem,2.5vw,1.8rem)]",
    descClass: "text-[clamp(0.7rem,1.5vw,0.85rem)]",
  },
  {
    id: 4,
    title: "Espacio Público",
    description: "Comunidad",
    sizeClass: "w-[clamp(120px,30vw,200px)] h-[clamp(120px,30vw,200px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-[clamp(1.1rem,2vw,1.25rem)]",
    descClass: "text-fluid-p-sm",
  },
  {
    id: 5,
    title: "Hotelería",
    description: "Inmersivos",
    sizeClass: "w-[clamp(140px,38vw,250px)] h-[clamp(140px,38vw,250px)]",
    textColor: "text-[#1A2611]",
    titleClass: "text-fluid-h3-md",
    descClass: "text-fluid-p-md",
  },
]

export function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // 1. Initialize Physics Engine (Zero gravity, fully floating)
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0 }
    })
    engineRef.current = engine
    const world = engine.world

    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // We create rigid boxes outside the visible frame
    const wallOptions = {
      isStatic: true,
      render: { visible: false },
      friction: 0.05,
      restitution: 0.9 // Ultra bouncy walls for fun
    }

    const wallThickness = 100

    // We create rigid boxes outside the visible frame
    const walls = [
      Matter.Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth + 200, wallThickness, wallOptions),
      Matter.Bodies.rectangle(containerWidth / 2, containerHeight + wallThickness / 2, containerWidth + 200, wallThickness, wallOptions),
      Matter.Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight + 200, wallOptions),
      Matter.Bodies.rectangle(containerWidth + wallThickness / 2, containerHeight / 2, wallThickness, containerHeight + 200, wallOptions)
    ]
    Matter.World.add(world, walls)

    // 3. Create Bubbles natively measuring DOM elements to guarantee exact match
    const bodies: Matter.Body[] = []

    circleRefs.current.forEach((el) => {
      if (!el) return

      const rect = el.getBoundingClientRect()
      const radius = rect.width / 2

      // Distribute randomly near center
      const x = Math.random() * (containerWidth - radius * 2) + radius
      const y = Math.random() * (containerHeight - radius * 2) + radius

      const body = Matter.Bodies.circle(x, y, radius, {
        restitution: 0.8,     // Highly bouncy & elastic between bubbles
        friction: 0.001,      // Super slippery
        frictionAir: 0.015,   // Light damping for fluid, satisfying swift motion
        density: 0.002 * Math.pow(radius / 100, 2), // Satisfying heavy mass on impact
        render: { visible: false },
        plugin: {
          organicPhase: Math.random() * Math.PI * 2,
          organicSpeed: 0.02 + Math.random() * 0.02
        }
      })

      // Give them initial mild velocity spread
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8
      })

      bodies.push(body)
    })

    Matter.World.add(world, bodies)

    // 4. Advanced 10x Mouse Dragging interactions
    const mouse = Matter.Mouse.create(containerRef.current)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.15, // Smooth spring for dragging
        damping: 0.1,
        render: { visible: false }
      }
    })
    Matter.World.add(world, mouseConstraint)

    // Detach scrolling to allow page scroll when swiping on the container
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel)
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel)

    // 5. Magnetic Core Gravity (Agar.io clustering)
    // Constantly pull bubbles gently towards the center
    Matter.Events.on(engine, 'beforeUpdate', () => {
      const centerX = containerWidth / 2
      const centerY = containerHeight / 2

      bodies.forEach(body => {
        const dx = centerX - body.position.x
        const dy = centerY - body.position.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist > 0) {
          // Extremely subtle central attraction force mapping to mass
          const forceMagnitude = 0.0000025 * body.mass
          Matter.Body.applyForce(body, body.position, {
            x: (dx / dist) * forceMagnitude,
            y: (dy / dist) * forceMagnitude
          })
        }
      })
    })

    // 6. Native 60 FPS Render Loop (Syncing DOM strictly)
    let animationFrameId: number
    const Runner = Matter.Runner.create()
    Matter.Runner.run(Runner, engine)

    let tick = 0
    const updateDOM = () => {
      tick++
      circleRefs.current.forEach((el, index) => {
        if (el && bodies[index]) {
          const body = bodies[index]

          // Breathing organic motion
          const wobble = Math.sin(tick * body.plugin.organicSpeed + body.plugin.organicPhase) * 0.03
          const baseScale = 1 + wobble

          // Plasma squish deformation based on velocity
          const speed = Matter.Vector.magnitude(body.velocity)
          const stretchX = 1 + Math.min(speed * 0.015, 0.15)
          const stretchY = 1 - Math.min(speed * 0.005, 0.05)

          // The magic: Combine Translation, Rotation, Squish & Organic scale
          el.style.transform = `translate(${body.position.x}px, ${body.position.y}px) translate(-50%, -50%) rotate(${body.angle}rad) scale(${baseScale * stretchX}, ${baseScale * stretchY})`
        }
      })
      animationFrameId = requestAnimationFrame(updateDOM)
    }
    updateDOM()

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      Matter.Runner.stop(Runner)
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current)
        Matter.World.clear(engineRef.current.world, false)
      }
    }
  }, []) // Empty deps so it calculates exact radii ONCE upon initial paint layout

  return (
    <section
      ref={containerRef}
      id="servicios"
      className="relative py-24 md:py-32 overflow-hidden min-h-[900px] lg:min-h-screen w-full flex flex-col items-center bg-transparent"
    >
      {/* SVG Gooey Filter definition for Organic Merging FX */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Título de la Sección que interactúa visualmente con las bolas (Difference Blending) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // z-40 so it floats OVER the bubbles. mix-blend-difference against the Ivory Cream makes the text turn dark/negative natively.
        className="absolute top-24 md:top-36 left-0 right-0 z-40 text-center px-6 pointer-events-none mix-blend-difference"
      >
        <h2 className="font-heading text-fluid-h2 text-white/90 mb-6 drop-shadow-sm">
          Lo que hacemos
        </h2>
        <p className="font-body text-fluid-p-lg text-white/70 max-w-xl mx-auto tracking-wide">
          Cada proyecto es un organismo vivo.
        </p>
      </motion.div>

      {/* Bubble container wrapped in gooey filter for membrane merging */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30" style={{ filter: "url(#goo)" }}>
        {servicesData.map((service, index) => {
          return (
            <div
              key={service.id}
              ref={(el) => {
                circleRefs.current[index] = el
              }}
              className={`absolute top-0 left-0 rounded-full flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing hover:z-50 pointer-events-auto transition-colors duration-300 touch-none ${service.sizeClass}`}
              style={{
                backgroundColor: "#F9F3E8",
                boxShadow: "inset -15px -15px 40px rgba(0, 0, 0, 0.08), inset 15px 15px 40px rgba(255, 255, 255, 1), 0 20px 45px rgba(0,0,0,0.12)",
                willChange: "transform",
                transformOrigin: "center center",
              }}
            >
              {/* Text Layer - Simple, clean, readable over Ivory Cream */}
              <div className="relative z-10 select-none flex flex-col items-center justify-center w-[85%] h-[85%] px-4">
                <h3
                  className={`font-heading font-bold tracking-tight leading-none break-words ${service.textColor} ${service.titleClass}`}
                >
                  {service.title}
                </h3>

                {service.id !== 2 && service.id !== 4 && (
                  <p
                    className={`font-body ${service.textColor} opacity-90 font-medium leading-tight mt-3 px-2 md:px-6 ${service.descClass}`}
                  >
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Floating indicator for interaction */}
      <p className="absolute bottom-8 left-0 right-0 md:hidden text-xs text-sostenible/50 animate-pulse text-center tracking-wider pointer-events-none z-10">
        Toca, empuja y choca las esferas
      </p>
    </section>
  )
}