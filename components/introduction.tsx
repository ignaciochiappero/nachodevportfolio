"use client"

import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";


const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        
        {/* Foto de perfil transparente png */}
        <Image 
            src="/home-4.png" 
            priority 
            width="800"
            height="800"
            alt="Profile pic" 
        />

        <div className="flex flex-col justify-center max-w-md">

            {/* Título estático color blanco */}
            <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Si puedes pensarlo, <br />

                {/* Acá abajo comienza la funcionalidad de la librería que importamos */}

                <TypeAnimation 

                    sequence={[
                        "puedes programarlo",
                        1000, //Tiempo en milisegundos en que se muestra el texto
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

                /> {/* Fin de la funcionalidad */}
                
                
            </h1> {/*Fin del texto animado */}


            {/* Descripción de mi portfolio */}
            <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Desarrollador web full stack con experiencia en tecnologías como React, Node.js, MongoDB, C++, Java y Diseño gráfico

            </p>
            
            {/* Botones debajo de la descripción */}
            <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                    
                    {/* Botón de ver proyectos */}
                    <Link 
                      href="/projects"
                      className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 " >
                        Ver proyectos
                    </Link>

                    {/* Botón de Contacta conmigo */}
                    <Link 
                      href="/contact"
                      className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary" >
                        Contacta conmigo
                    </Link>

            </div>

        </div>

      </div>
    </div>
  )
};

export default Introduction