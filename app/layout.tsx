import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adentro Studio | Arquitectura Consciente y Sensorial',
  description: 'Diseñamos experiencias que sanan. Arquitectura consciente, interiorismo sensorial y espacios que transforman.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.svg',      // aquí ponemos tu SVG principal
        type: 'image/svg+xml', // tipo SVG
      },
    ],
    apple: '/logo.svg',       // también para Apple Touch
  },
}
