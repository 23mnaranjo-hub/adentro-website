import type { Metadata } from "next";
// 1. IMPORTAMOS DESDE GOOGLE FONTS (Más seguro y rápido)
import { Josefin_Sans, Sora, DM_Sans } from "next/font/google";
import "./globals.css";

/* ===============================
   CONFIGURACIÓN DE FUENTES
   =============================== */

// 1. Títulos: Josefin Sans (SemiBold 600)
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"], // Cargamos específicamente el peso SemiBold
  variable: "--font-josefin",
  display: "swap",
});

// 2. Subtítulos / Nav: Sora (Regular 400)
const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sora",
  display: "swap",
});

// 3. Cuerpo: DM Sans (Regular 400)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Cargamos varios pesos por si acaso
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adentro Studio | Arquitectura & Wellness",
  description: "Concebimos el espacio desde la emoción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // Inyectamos las variables CSS en el body
        className={`${josefin.variable} ${sora.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}