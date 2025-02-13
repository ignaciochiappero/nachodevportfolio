"use client";

import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import { dataPortfolio } from "@/data";
import PortfolioBox from "@/components/portfolio-box";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import FlipCard from "@/components/flip-card";
import HoverFlipCard from "@/components/flip-card-hover";
import Footer from "@/components/footer";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      offset: 100,
      once: true, // Las animaciones solo se ejecutan una vez
    });
  }, []);
  
  return (
    <main className="bg-gradient-to-b from-cyan to-darkBlue bg-darkBg/60">
      
      
      
      {/* SECCIÓN INICIO */}
      <section id="inicio">
        <TransitionPage />

        <div className="flex min-h-[100vh] h-full">
          <CoverParticles />
          <Introduction />
        </div>
      </section>









      {/* SECCIÓN PORTFOLIO */}
      <section id="portfolio" className="py-8 bg-gray-900 ">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-center xl:mb-48"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          Mis trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 max-w-6xl mx-auto">
          {dataPortfolio.map((project, index) => (
            <div 
              key={project.id} 
              className={`transform transition-all duration-300 ${
                index % 2 === 0 ? 'xl:-translate-y-40 xl:mb-80' : 'xl:translate-y-44'
              }`}
            >
              {/* Contenedor interno para la animación */}
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100} // Retraso más corto entre elementos
                data-aos-anchor-placement="center-center"
              >
                <PortfolioBox data={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  







      {/* SECCIÓN ABOUT ME */}
      <section id="about">
        <ContainerPage>
          <div className="flex justify-center">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
              Mi{" "}
              <span className="font-bold text-secondary">
                trayectoria profesional
              </span>
            </h1>
          </div>

          <CounterServices />
          <TimeLine />
        </ContainerPage>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="services" className="max-sm:mt-16 mt-0">
        <div
          className="
            flex justify-center items-center px-4
            sm:px-6 md:px-20
            max-sm:pt-16 h-screen max-sm:pb-48 text-black
          "
        >
          <div className="bg-white p-10 absolute left-0 right-0">
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto
              "
            >
              {/* Contenedor del texto descriptivo */}
              <div className="flex items-center justify-center -mt-20">
                <div
                  className="
                    max-w-[450px] max-sm:mt-0 mt-20 md:mt-0 text-center md:text-left
                    md:pt-0 max-sm:pt-20 sm:pt-20
                  "
                >
                  <h1
                    className="
                      text-2xl leading-tight md:text-4xl md:mb-5 font-bold
                    "
                  >
                    Mis <span className="text-secondary">servicios.</span>
                  </h1>
                  <p className="mb-3 text-xl text-gray-600">
                    Ofrezco servicios de desarrollo web y aplicaciones, frontend
                    y backend, con un enfoque en estética y funcionalidad.
                    Utilizo las últimas tecnologías y también ofrezco diseño
                    gráfico y contenido, creando interfaces atractivas e
                    intuitivas que reflejan la identidad de mis clientes y
                    conectan integralmente con su público.
                  </p>

                  <a href="https://wa.me/5493424094061">
                    <button
                      className="
                        px-3 py-2 transition-all border-2 cursor-pointer
                        text-secondary border-secondary text-md w-fit
                        rounded-xl hover:shadow-md hover:shadow-secondary
                      "
                    >
                      Contacta conmigo
                    </button>
                  </a>
                </div>
              </div>

              {/* Slider y texto arriba */}
              <div className="w-full">
                {/* Texto deslizante arriba del FlipCard */}
                <div className="text-gray-500 flex justify-center mb-3 animate-smooth-slide max-sm:text-sm">
                  Deslizá para ver más tecnologías ➤➤➤
                </div>

                {/* FlipCard (slider) */}
                <FlipCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN TECNOLOGÍAS */}
      <section id="technologies" className="mt-10 max-sm:mt-32">
        <HoverFlipCard />
      </section>

      {/* SECCIÓN FOOTER */}
      <Footer />
    </main>
  );
}
