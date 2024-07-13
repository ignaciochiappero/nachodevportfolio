"use client"
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="md:py-0 md:grid-cols-2 z-20 grid items-center h-full p-6 py-20 ">
        
        {/* Contenedor de la imagen */}
        <div className="flex justify-center sm:mt-10 max-sm:mt-10 lg:mt-20">
          <div className="max-w-md md:max-w-lg lg:max-w-xl"> {/* Ancho máximo ajustable para controlar el tamaño en pantallas grandes */}
            <Image 
              src="/home-4.png" 
              priority 
              width={800} // Tamaño inicial más grande para pantallas grandes
              height={800}
              alt="Profile pic" 
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
  {/* Título estático */}
  <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
    Si puedes pensarlo, <br />
    {/* Texto animado */}
    <TypeAnimation 
      sequence={[
        "puedes programarlo",
        1000,
        "puedes optimizarlo",
        1000,
        "puedes implementarlo",
        1000,
        "puedes desarrollarlo",
        1000,
        "puedes mejorarlo",
        1000,
        "puedes agigantarlo",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="font-bold text-secondary"
    />
  </h1>

  {/* Descripción del portfolio */}
  <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-center">
    Desarrollador web full stack con experiencia en tecnologías como React, Node.js, MongoDB, C++, Java y Diseño gráfico
  </p>

  {/* Botones */}
  <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 max:sm:mb-20">
    {/* Botón de ver proyectos */}
    <Link 
      href="/portfolio"
      className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
    >
      Ver proyectos
    </Link>

    {/* Botón de Contacta conmigo */}
    <a 
      href="https://w.app/NachoChiappero"
      className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary"
    >
      Contacta conmigo
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Introduction;
