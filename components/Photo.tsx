"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center relative  ">
      <motion.div
        
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Contenedor de la Imagen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[498px] xl:h-[498px] relative"
        >
          <Image
            src="/Perfil-color.png"
            priority
            quality={100}
            fill
            alt="perfil"
            className="object-contain"
          />
        </motion.div>

        {/* SVG superpuesto */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 10 }} // Asegura que el SVG esté por encima
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#f59740"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;