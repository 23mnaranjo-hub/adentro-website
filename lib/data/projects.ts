export interface Project {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    gallery: string[];
    video?: string;
}

export const projectsData: Project[] = [
    {
        id: "andes-ciudad",
        title: "Refugio Vanguardista",
        description: "Proyecto ganador del concurso Cotelco. Una propuesta arquitectónica integradora con la identidad urbana y hospitalaria.",
        coverImage: "/images/proyectos/andes-ciudad/ac1.jpg",
        gallery: [
            "/images/proyectos/andes-ciudad/ac1.jpg",
            "/images/proyectos/andes-ciudad/ac2.jpg",
            "/images/proyectos/andes-ciudad/ac3.jpg",
            "/images/proyectos/andes-ciudad/ac4.jpg"
        ],
        video: "/images/proyectos/andes-ciudad/acvideo.mp4"
    },
    {
        id: "caribe",
        title: "Caribe",
        description: "Diseño costero y sustentable, optimizado para climas cálidos integrando la brisa del mar y materiales endémicos.",
        coverImage: "/images/proyectos/caribe/car1.jpg",
        gallery: [
            "/images/proyectos/caribe/car1.jpg",
            "/images/proyectos/caribe/car2.jpg",
            "/images/proyectos/caribe/car3.jpg",
            "/images/proyectos/caribe/car4.jpg",
            "/images/proyectos/caribe/car5.jpg",
            "/images/proyectos/caribe/car6.jpg",
            "/images/proyectos/caribe/car7.jpg",
            "/images/proyectos/caribe/car8.jpg"
        ]
    },
    {
        id: "conant",
        title: "Conant",
        description: "Estructuras vanguardistas y minimalismo absoluto. Exploración del concreto desnudo y la luz natural.",
        coverImage: "/images/proyectos/conant/con1.jpg",
        gallery: [
            "/images/proyectos/conant/con1.jpg",
            "/images/proyectos/conant/con2.jpg",
            "/images/proyectos/conant/con3.jpg",
            "/images/proyectos/conant/con4.jpg",
            "/images/proyectos/conant/con5.jpg",
            "/images/proyectos/conant/con6.jpg",
            "/images/proyectos/conant/con7.jpg",
            "/images/proyectos/conant/con8.jpg",
            "/images/proyectos/conant/con9.jpg",
            "/images/proyectos/conant/con10.jpg"
        ]
    },
    {
        id: "gym-boutique",
        title: "Gym Boutique",
        description: "Un espacio de entrenamiento wellness de alta gama. Acabados premium e iluminación atmosférica curada.",
        coverImage: "/images/proyectos/gym-boutique/bou1.jpg",
        gallery: [
            "/images/proyectos/gym-boutique/bou1.jpg",
            "/images/proyectos/gym-boutique/bou2.jpg",
            "/images/proyectos/gym-boutique/bou3.jpg",
            "/images/proyectos/gym-boutique/bou4.jpg",
            "/images/proyectos/gym-boutique/gym-boutique-3.jpg"
        ]
    },
    {
        id: "refugio-rural",
        title: "Refugio Rural",
        description: "Conexión directa con la naturaleza. Cabañas inmersivas diseñadas para la tranquilidad y el desconecte ecológico.",
        coverImage: "/images/proyectos/refugio-rural/rur1.jpg",
        gallery: [
            "/images/proyectos/refugio-rural/rur1.jpg",
            "/images/proyectos/refugio-rural/rur2.jpg",
            "/images/proyectos/refugio-rural/rur3.jpg",
            "/images/proyectos/refugio-rural/rur4.jpg",
            "/images/proyectos/refugio-rural/rur5.jpg",
            "/images/proyectos/refugio-rural/rur6.jpg",
            "/images/proyectos/refugio-rural/rur7.jpg",
            "/images/proyectos/refugio-rural/rur8.jpg"
        ]
    },
    {
        id: "urban-living",
        title: "Urban Living",
        description: "Vivienda multifamiliar metropolitana. Optimización de espacios y bio-arquitectura en el centro de la ciudad.",
        coverImage: "/images/proyectos/urban-living/urb1.jpg",
        gallery: [
            "/images/proyectos/urban-living/urb1.jpg",
            "/images/proyectos/urban-living/urb2.jpg",
            "/images/proyectos/urban-living/urb3.jpg",
            "/images/proyectos/urban-living/urb4.jpg",
            "/images/proyectos/urban-living/urb5.jpg",
            "/images/proyectos/urban-living/urb6.jpg",
            "/images/proyectos/urban-living/urb6.2.jpg",
            "/images/proyectos/urban-living/urb7.jpg",
            "/images/proyectos/urban-living/urb8.jpg",
            "/images/proyectos/urban-living/urb9.jpg",
            "/images/proyectos/urban-living/urb10.jpg",
            "/images/proyectos/urban-living/urb11.jpg",
            "/images/proyectos/urban-living/urb12.jpg",
            "/images/proyectos/urban-living/urb13.jpg",
            "/images/proyectos/urban-living/urb14.jpg",
            "/images/proyectos/urban-living/urb15.jpg",
            "/images/proyectos/urban-living/urb16.jpg",
            "/images/proyectos/urban-living/urb17.jpg",
            "/images/proyectos/urban-living/urb18.jpg"
        ]
    }
];
