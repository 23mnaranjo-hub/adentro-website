import type { Metadata } from "next"
import "./globals.css"
import { codanBold, nord, nectoMono } from "./fonts/fonts"

export const metadata: Metadata = {
  title: "Tu Empresa | Arquitectura & Diseño",
  description: "Estudio de arquitectura y diseño",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body 
        className={`${nord.variable} ${codanBold.variable} ${nectoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
