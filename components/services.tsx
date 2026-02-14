  "use client"

  import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
  import { useRef, useState, useEffect } from "react"

  // Definimos los tamaños en píxeles para que la física sepa calcular colisiones
  // w-64 = 256px, w-56 = 224px, etc.
  const getSizeInPixels = (sizeClass: string) => {
    if (sizeClass.includes("w-64")) return 160 // Reducido un poco visualmente para el radio de colisión
    if (sizeClass.includes("w-60")) return 140
    if (sizeClass.includes("w-56")) return 130
    if (sizeClass.includes("w-52")) return 120
    if (sizeClass.includes("w-48")) return 110
    if (sizeClass.includes("w-40")) return 90
    return 100
  }

  const servicesData = [
    {
      id: 0,
      title: "Residencial",
      description: "Hogares que respiran contigo",
      gradient: "from-pistachio/60 via-pistachio/30 to-transparent",
      blurColor: "bg-pistachio/20",
      sizeClass: "w-64 h-64 md:w-80 md:h-80", 
      radius: 128, // Radio base para física (mitad de w-64 aprox)
    },
    {
      id: 1,
      title: "Wellness & Center",
      description: "Espacios para el bienestar",
      gradient: "from-soft-clay/60 via-soft-clay/30 to-transparent",
      blurColor: "bg-soft-clay/20",
      sizeClass: "w-56 h-56 md:w-72 md:h-72",
      radius: 112,
    },
    {
      id: 2,
      title: "Consultoría",
      description: "Guía experta",
      gradient: "from-warm-sand/70 via-warm-sand/40 to-transparent",
      blurColor: "bg-warm-sand/30",
      sizeClass: "w-40 h-40 md:w-48 md:h-48",
      radius: 80,
    },
    {
      id: 3,
      title: "Corporativos",
      description: "Oficinas que inspiran",
      gradient: "from-oatmilk/80 via-oatmilk/50 to-transparent",
      blurColor: "bg-oatmilk/40",
      sizeClass: "w-60 h-60 md:w-72 md:h-72",
      radius: 120,
    },
    {
      id: 4,
      title: "Espacio público",
      description: "Comunidad",
      gradient: "from-pistachio/50 via-pistachio/25 to-transparent",
      blurColor: "bg-pistachio/15",
      sizeClass: "w-48 h-48 md:w-56 md:h-56",
      radius: 96,
    },
    {
      id: 5,
      title: "Hoteles & Resorts",
      description: "Experiencias inmersivas",
      gradient: "from-soft-clay/50 via-soft-clay/25 to-transparent",
      blurColor: "bg-soft-clay/15",
      sizeClass: "w-52 h-52 md:w-64 md:h-64",
      radius: 104,
    },
  ]

  // Animación de "Gelatina" (Blob visual)
  const blobAnimation = {
    initial: {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  export function Services() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    // Estado para saber si el usuario está agarrando una bola (pausar física para esa bola)
    const [draggingId, setDraggingId] = useState<number | null>(null)

    // Inicializamos posiciones y velocidades aleatorias
    // Usamos useRef para mantener el estado de la física sin re-renderizar React constantemente
    const physicsState = useRef(
      servicesData.map((s) => ({
        x: Math.random() * 800, // Posición inicial aleatoria X
        y: Math.random() * 600, // Posición inicial aleatoria Y
        vx: (Math.random() - 0.5) * 0.15, // Velocidad X (lenta para efecto flotante)
        vy: (Math.random() - 0.5) * 0.15, // Velocidad Y
        radius: s.radius,
        mass: s.radius, // Masa proporcional al tamaño
      }))
    )

    // MotionValues para actualizar el DOM directamente (Optimizado)
    // Creamos un array de MotionValues para X e Y
    const xValues = servicesData.map(() => useMotionValue(0))
    const yValues = servicesData.map(() => useMotionValue(0))

    // Loop de Física (Se ejecuta en cada frame ~60fps)
    useAnimationFrame(() => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const containerHeight = containerRef.current.offsetHeight
      const balls = physicsState.current

      // 1. Mover las bolas
      balls.forEach((ball, i) => {
        // Si el usuario la está arrastrando, no actualizamos su posición por física
        if (draggingId === i) return

        ball.x += ball.vx
        ball.y += ball.vy

        // Rebote con PAREDES
        // Pared Derecha
        if (ball.x + ball.radius > containerWidth) {
          ball.x = containerWidth - ball.radius
          ball.vx *= -0.6
        }
        // Pared Izquierda
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius
          ball.vx *= -0.6
        }
        // Pared Abajo
        if (ball.y + ball.radius > containerHeight) {
          ball.y = containerHeight - ball.radius
          ball.vy *= -0.6
        }
        // Pared Arriba
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius
          ball.vy *= -0.6
        }
      })

      // 2. Detectar y Resolver Colisiones entre BOLAS
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const b1 = balls[i]
          const b2 = balls[j]

          const dx = b2.x - b1.x
          const dy = b2.y - b1.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const minDist = b1.radius + b2.radius

          // Si se tocan...
          if (distance < minDist) {
            // A. Resolver superposición (Separarlas para que no se queden pegadas)
            const angle = Math.atan2(dy, dx)
            const targetX = b1.x + Math.cos(angle) * minDist
            const targetY = b1.y + Math.sin(angle) * minDist
            
            // Empujar suavemente (corrección de posición)
            const overlap = minDist - distance
            const ax = Math.cos(angle) * overlap * 0.5
            const ay = Math.sin(angle) * overlap * 0.5

            if (draggingId !== i) {
              b1.x -= ax
              b1.y -= ay
            }
            if (draggingId !== j) {
              b2.x += ax
              b2.y += ay
            }

            // B. Resolver Velocidad (Rebote elástico)
            // Normal unitaria
            const nx = dx / distance
            const ny = dy / distance

            // Velocidad relativa
            const dvx = b2.vx - b1.vx
            const dvy = b2.vy - b1.vy
            
            // Velocidad a lo largo de la normal
            const velAlongNormal = dvx * nx + dvy * ny

            // Si se están alejando, no hacer nada
            if (velAlongNormal > 0) continue

            // Coeficiente de restitución (1 = elástico perfecto, < 1 pierde energía)
            const restitution = 0.1 

            // Impulso escalar
            let jVal = -(1 + restitution) * velAlongNormal
            jVal /= (1 / b1.mass + 1 / b2.mass)

            // Aplicar impulso
            const impulseX = jVal * nx
            const impulseY = jVal * ny

            if (draggingId !== i) {
              b1.vx -= impulseX / b1.mass
              b1.vy -= impulseY / b1.mass
            }
            if (draggingId !== j) {
              b2.vx += impulseX / b2.mass
              b2.vy += impulseY / b2.mass
            }
          }
        }
      }

      // 3. Aplicar posiciones visuales
      balls.forEach((ball, i) => {
          // Ajustamos porque el "x,y" es el centro, pero el div se posiciona desde la esquina top-left normalmente,
          // pero aquí usaremos transform translate.
          // Restamos el radio para centrar visualmente.
          xValues[i].set(ball.x - ball.radius)
          yValues[i].set(ball.y - ball.radius)
      })
    })

    // Inicializar posiciones dispersas al cargar
    useEffect(() => {
  if (containerRef.current) {
    const w = containerRef.current.offsetWidth
    const h = containerRef.current.offsetHeight

    // Cuadrícula 3 columnas x 2 filas
    const cols = 3
    const rows = 2
    const cellW = w / cols
    const cellH = h / rows

    physicsState.current.forEach((b, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)

      // Centro de cada celda + pequeño offset aleatorio para que no sea robótico
      b.x = cellW * col + cellW / 2 + (Math.random() - 0.5) * 40
      b.y = cellH * row + cellH / 2 + (Math.random() - 0.5) * 40

      // Velocidad inicial muy suave
      b.vx = (Math.random() - 0.5) * 0.1
      b.vy = (Math.random() - 0.5) * 0.1
    })
  }
}, [])

    return (
      <section id="servicios" className="relative py-24 md:py-32 overflow-hidden min-h-[900px] flex flex-col items-center bg-transparent">
        
        {/* Texture Layer */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Título de la Sección */}
        {/* Título de la Sección */}
      {/* Título de la Sección */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-20 text-center mb-12 px-6 pointer-events-none"
      >
        {/* CAMBIO AQUÍ: Usamos 'font-heading' que es tu JosefinSans-SemiBold */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-sostenible mb-6">
          Lo que hacemos
        </h2>
        
        <p className="font-body text-sm text-sostenible/70 max-w-xl mx-auto tracking-wide">
          Cada proyecto es un organismo vivo.
        </p>
      </motion.div>

        {/* Contenedor de Física */}
        <div 
          ref={containerRef} 
          className="relative w-full max-w-7xl h-[600px] md:h-[700px] mx-auto overflow-hidden"
          style={{ touchAction: "none" }} // Importante para drag en móviles
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              // Eventos para pausar física al arrastrar
              onDragStart={() => setDraggingId(index)}
              onDragEnd={() => setDraggingId(null)}
              // En vez de actualizar por React state, actualizamos la referencia física
              onDrag={(e, info) => {
  const ball = physicsState.current[index]
  if (ball && containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect()
    
    // Compensar el scroll de la página
    ball.x = info.point.x - rect.left
    ball.y = info.point.y - rect.top - window.scrollY

    // Clamp para que no salga del contenedor
    ball.x = Math.max(ball.radius, Math.min(rect.width - ball.radius, ball.x))
    ball.y = Math.max(ball.radius, Math.min(rect.height - ball.radius, ball.y))

    // Velocidad de lanzamiento suave al soltar
    ball.vx = info.velocity.x * 0.01
    ball.vy = info.velocity.y * 0.01
  }
}}

              variants={blobAnimation}
              initial="initial"
              animate="animate"
              
              // Aquí enlazamos la posición física con el div visual
              style={{
                  x: xValues[index],
                  y: yValues[index],
                  position: "absolute",
                  top: 0, 
                  left: 0,
              }}
              
              whileHover={{ scale: 1.05, zIndex: 50, cursor: "grab" }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
              
              className={`flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/30 shadow-lg ${service.sizeClass}`}
            >
              {/* Background Layers */}
              <div className={`absolute inset-0 bg-[#F0EAD8]/40 -z-20`} style={{ borderRadius: "inherit" }} />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} -z-10`}
                style={{ borderRadius: "inherit" }}
              />
              
              {/* Glass Shine */}
              <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent -z-10" 
                  style={{ borderRadius: "inherit" }}
              />

              {/* Contenido */}
              <div className="relative z-10 pointer-events-none select-none">
                <h3 className="font-heading text-lg md:text-2xl font-bold text-sostenible mb-1">
                  {service.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-sostenible/70 opacity-0 md:opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Indicador sutil para móviles */}
        <p className="md:hidden text-xs text-sostenible/40 mt-8 animate-pulse text-center">
          Toca, arrastra y choca las esferas
        </p>
      </section>
    )
  }