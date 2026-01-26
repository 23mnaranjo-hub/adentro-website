import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Ritmo } from "@/components/ritmo"
import { About } from "@/components/about"
import { CrearJuntos } from "@/components/contact"
import { Footer } from "@/components/footer"
import { GrainOverlay } from "@/components/grain-overlay"

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <Header />
      <Hero />
      <Services />
      <Ritmo />
      <About />
      <CrearJuntos />
      <Footer />
    </main>
  )
}
