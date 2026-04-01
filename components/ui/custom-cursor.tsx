"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Usamos useMotionValue en vez de state puro de React para
    // evitar re-renderizados constantes al mover el mouse (60fps)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Otorga suavidad (easing) matemática al movimiento
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        // Si el dispositivo es táctil, no mostramos el custom cursor
        if (window.matchMedia("(pointer: coarse)").matches) return

        const moveCursor = (e: MouseEvent) => {
            // Ajustamos el offset para que el cursor exacto quede en el centro del círculo
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        const mouseEnter = () => setIsVisible(true)
        const mouseLeave = () => setIsVisible(false)

        // Detectar si el usuario está haciendo hover sobre elementos clickeables
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Comprueba si está pasando el ratón sobre un enlace o botón
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseenter", mouseEnter)
        window.addEventListener("mouseleave", mouseLeave)
        window.addEventListener("mouseover", handleMouseOver)

        // Mostrarlo inicialmente en el primer movimiento
        setIsVisible(true)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseenter", mouseEnter)
            window.removeEventListener("mouseleave", mouseLeave)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [cursorX, cursorY])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                backgroundColor: "var(--ivory-cream)",
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                opacity: isHovered ? 0.8 : 1,
            }}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
            }}
        />
    )
}
