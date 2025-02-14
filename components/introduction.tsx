"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Photo from "./Photo";

const Introduction = () => {
  return (
    <div className="z-20 w-full">
      <div className="md:py-0 z-20 flex flex-col md:flex-row items-center justify-center h-full p-6 py-20 ">
        {/* Contenedor de la imagen */}
        <div className="xl:mt-28 md:w-1/2 xl:ml-16 flex justify-center items-center mb-24">
          <Photo />
        </div>

        {/* Contenedor del texto */}
        <div className="xl:mr-40 flex flex-col items-center justify-center max-w-md mx-auto xl:mt-20 max-sm:-mt-28 md:w-1/2 md:items-start md:pl-10">
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
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-center md:text-left">
            Desarrollador Web Full Stack, apasionado por la Inteligencia Artificial y Diseñador Gráfico.
          </p>

          {/* Botones */}
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 max:sm:mb-20">
            {/* Botón de ver proyectos */}
            <Link
              href="#portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/50"
            >
              Ver proyectos
            </Link>

            {/* Botón de Contacta conmigo */}
            <a
              href="https://wa.me/5493424094061"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-md hover:shadow-secondary"
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