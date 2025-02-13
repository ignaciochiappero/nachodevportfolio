"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full ">
      <div className="md:py-0 sm:grid-cols-2 z-20 grid items-center justify-center h-full p-6 py-20 max-sm:mt-8 ">
        
  

          {/* Contenedor de la imagen */}
          <div className="flex justify-center  max-sm:mt-20 max-sm:mb-20 lg:mt-48">
            <div className="w-full  sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-96 border border-orange-400  rounded-full">
              <Image 
                src="/perfil-n-d.png" 
                priority 
                width={1000} 
                height={1000}
                alt="Profile pic" 
                className=" w-full h-auto" 
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-md mx-auto xl:mt-40 ">
            {/* Título estático */}
            <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 w-[360px]">
              Si podés soñarlo, <br />
              {/* Texto animado */}
              <TypeAnimation 
                sequence={[
                  "podés programarlo",
                  1000,
                  "podés optimizarlo",
                  1000,
                  "podés implementarlo",
                  1000,
                  "podés mejorarlo",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold text-secondary font-[family-name:var(--blender-bold)]"
              />
            </h1>

            {/* Descripción del portfolio */}
            <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-center">
              Desarrollador Web Full Stack, Especialista en Inteligencia Artificial y Diseñador Gráfico.
            </p>

            {/* Botones */}
            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 max:sm:mb-20">
              {/* Botón de ver proyectos */}
              {/* <Link 
                href="#portfolio"
                className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/50"
              >
                Ver proyectos
              </Link> */}

              {/* Botón de Contacta conmigo */}
              {/* <a 
                href="https://wa.me/5493424094061"
                className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-md hover:shadow-secondary"
              >
                Contacta conmigo
              </a> */}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Introduction;
