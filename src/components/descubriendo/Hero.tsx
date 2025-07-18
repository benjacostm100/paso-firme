import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const carouselImages = [
 {
    url: '/imagenes/car10.avif',
    alt: 'Grupo de adolescentes colaborando'
  },
  {
    url: '/imagenes/car20.avif',
    alt: 'Estudiante recibiendo orientación'
  },
  {
    url: '/imagenes/car30.avif',
    alt: 'Equipo de estudiantes trabajando juntos'
  }
];


  const galleryImages = [
    '/imagenes/gal10.avif',
  '/imagenes/gal20.avif',
  '/imagenes/gal30.avif',
  '/imagenes/gal40.avif'
  ];

  const rightSideImage = '/imagenes/right2.avif';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[72vh] min-h-[720px] md:min-h-[650px] overflow-hidden">
      {/* Estructura de fondo */}
      <div className="absolute inset-0 flex">
        {/* Carrusel izquierdo */}
        <div className="w-full xl:w-[75%] h-full relative overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Overlay negro más oscuro para mejor contraste */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Overlay con degradado más pronunciado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/40 to-brand-purple/35" />
            </div>
          ))}
        </div>

        {/* Lado derecho con múltiples overlays */}
        <div className="hidden xl:block w-[40%] h-full relative">
          {/* Imagen base */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rightSideImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Overlay negro más oscuro */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Overlay de color principal más intenso */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          
          {/* Segundo overlay de color más pronunciado */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 via-brand-purple/25 to-brand-coral/20" />

          {/* Logo potencial */}
           <div
            className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain mix-blend-soft-light"
            style={{
              backgroundImage: "url('/logos/familia2.png')",
              backgroundSize: '120%',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Galería flotante (solo en pantallas grandes) */}
      <div className="hidden xl:block absolute top-[30%] right-4 md:right-24 z-20">
        <div className="relative w-56 md:w-64 h-80">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="absolute bg-white/90 p-1 shadow-lg rounded-md overflow-hidden transition-all duration-300 hover:z-10 hover:scale-105 border border-white/30"
              style={{
                width: '210px',
                height: '160px',
                transform: `rotate(${index % 2 === 0 ? -5 : 5}deg) translateX(${index % 2 === 0 ? 10 : -10}px) translateY(${index * 40}px)`,
                zIndex: index,
                right: `${index * 15}px`
              }}
            >
              <img
                src={img}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal - alineado a la izquierda */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-4 pt-20 relative z-30">
        <div className="max-w-4xl animate-fade-in ml-0 md:ml-8 lg:ml-16">
          {/* Título o logo responsive */}
          <div className="mb-6">
            
            {/* Título visible en pantallas md o mayores */}
            <h1 className=" md:text-7xl text-5xl font-bold text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
              Descubriendo mi{" "} <span className="italic font-light font-pacifico">Potencial</span>
  
            </h1>
          </div>

          {/* Subtítulos con texto más grande y sombra más marcada */}
          <p
            className="text-base md:text-xl text-white mb-4 font-medium [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]"
            style={{ animationDelay: '0.2s' }}
          >
            <span>¿Tu adolescente no suelta el celular y se la vive dejando todo para el último?</span><br />
             <em className="text-brand-beige font-semibold">¡Entonces, este taller es justo lo que necesita!</em>
          </p>

          {/* Destacado con fondo más opaco */}
          <div className="bg-white/30 rounded-xl p-2 md:p-4 mb-8 inline-block shadow-xl backdrop-blur-lg border border-white">
            <p className="text-white font-semibold text-sm md:text-base">
              ✅Disponible en vivo online y diseñado para adolescentes de cualquier parte del mundo
            </p>
          </div>

          {/* Botón CTA */}
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-brand-purple to-brand-teal text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group"
            onClick={() => onScrollToSection('pricing')}
          >
            <span className="relative z-10">Quiero inscribir a mi hijo ahora</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-teal/40 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-brand-purple/40 z-0"></div>
    </section>
  );
};

export default Hero;