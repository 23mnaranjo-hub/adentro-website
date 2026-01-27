export default function FontTestPage() {
  return (
    <div className="p-12 space-y-16 bg-ivory-cream min-h-screen">
      
      {/* CODAN BOLD */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">Codan Bold (Display)</h2>
        <div className="space-y-2">
          <p className="font-display text-8xl">Adentro Studio</p>
          <p className="font-display text-6xl">Arquitectura Sostenible</p>
          <p className="font-display text-4xl">Diseño Contemporáneo</p>
        </div>
      </section>

      {/* NORD - TODOS LOS PESOS */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">Nord - Todos los Pesos</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-gray-500">Thin (100)</span>
            <p className="font-sans font-thin text-6xl">Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Light (300)</span>
            <p className="font-sans font-light text-6xl">Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Regular (400)</span>
            <p className="font-sans font-normal text-6xl">Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Book (450)</span>
            <p className="font-sans text-6xl" style={{ fontWeight: 450 }}>Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Medium (500)</span>
            <p className="font-sans font-medium text-6xl">Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Bold (700)</span>
            <p className="font-sans font-bold text-6xl">Diseñamos espacios</p>
          </div>
          
          <div>
            <span className="text-xs text-gray-500">Black (900)</span>
            <p className="font-sans font-black text-6xl">Diseñamos espacios</p>
          </div>
        </div>
      </section>

      {/* COMPARACIÓN DE TAMAÑOS CON DIFERENTES PESOS */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">Jerarquía Visual</h2>
        <div className="space-y-6">
          <h1 className="font-sans font-thin text-8xl leading-tight">
            Título Principal
          </h1>
          <h2 className="font-sans font-medium text-5xl">
            Subtítulo Importante
          </h2>
          <h3 className="font-sans font-bold text-3xl">
            Sección Destacada
          </h3>
          <p className="font-sans font-light text-xl max-w-3xl">
            Este es un párrafo de ejemplo que muestra cómo el peso Light (300) 
            funciona perfectamente para textos largos, ofreciendo una lectura 
            cómoda y elegante.
          </p>
          <p className="font-sans font-normal text-base max-w-3xl">
            Este párrafo usa Regular (400) que es el estándar para texto de 
            cuerpo. Es más legible en pantallas y funciona bien para bloques 
            de texto más densos.
          </p>
        </div>
      </section>

      {/* STATS CON CONTRASTE */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">Stats & Números</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="font-sans font-black text-8xl text-sostenible">150+</div>
            <p className="font-sans font-light text-lg mt-2">Proyectos</p>
          </div>
          <div className="text-center">
            <div className="font-sans font-black text-8xl text-sostenible">10</div>
            <p className="font-sans font-light text-lg mt-2">Años</p>
          </div>
          <div className="text-center">
            <div className="font-sans font-black text-8xl text-sostenible">100%</div>
            <p className="font-sans font-light text-lg mt-2">Sostenible</p>
          </div>
        </div>
      </section>

      {/* NECTO MONO */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">NectoMono - Datos Técnicos</h2>
        <div className="space-y-3 font-mono text-lg">
          <div className="flex justify-between max-w-xl">
            <span>Área construida:</span>
            <span className="font-bold">250.00 m²</span>
          </div>
          <div className="flex justify-between max-w-xl">
            <span>Ubicación:</span>
            <span className="font-bold">Medellín, CO</span>
          </div>
          <div className="flex justify-between max-w-xl">
            <span>Coordenadas:</span>
            <span className="font-bold">6.2442° N, 75.5812° W</span>
          </div>
          <div className="flex justify-between max-w-xl">
            <span>Proyecto:</span>
            <span className="font-bold">ADN-2024-001</span>
          </div>
        </div>
      </section>

      {/* COMBINACIONES RECOMENDADAS */}
      <section>
        <h2 className="text-sm uppercase mb-4 text-gray-600">Combinaciones Recomendadas</h2>
        
        <div className="space-y-12">
          {/* Combo 1: Elegante */}
          <div className="p-8 bg-white rounded-lg">
            <span className="text-xs uppercase text-gray-400">Estilo: Elegante</span>
            <h3 className="font-sans font-thin text-7xl mb-4">Casa Moderna</h3>
            <p className="font-sans font-light text-xl">
              Un espacio donde la luz natural define cada rincón
            </p>
          </div>

          {/* Combo 2: Impactante */}
          <div className="p-8 bg-sostenible text-ivory-cream rounded-lg">
            <span className="text-xs uppercase text-pistachio">Estilo: Impactante</span>
            <h3 className="font-display text-6xl mb-4">Sostenibilidad</h3>
            <p className="font-sans font-medium text-lg">
              Cada proyecto es una declaración de respeto por el medio ambiente
            </p>
          </div>

          {/* Combo 3: Minimalista */}
          <div className="p-8 bg-oatmilk rounded-lg">
            <span className="text-xs uppercase text-gray-500">Estilo: Minimalista</span>
            <h3 className="font-sans font-medium text-5xl mb-4">Simplicidad</h3>
            <p className="font-sans font-light text-base max-w-2xl">
              Menos es más cuando cada elemento tiene un propósito claro 
              y contribuye a la armonía del espacio
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
