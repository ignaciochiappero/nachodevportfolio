import React from "react";
import Image from "next/image";
import { dataTechnologies } from "@/data"; // Asegúrate de importar la data

interface FlipCardProps {
  frontContent: string | React.ReactNode;
  backContent: string;
  frontBgColor: string;
  cardSize: string; // nuevo prop para el tamaño 
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  frontBgColor,
  cardSize,
}) => {
  return (
    <div className={`group ${cardSize} [perspective:1000px]`}>
      <div className="relative h-full w-full rounded-[32px] shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Parte frontal - negra con el ícono */}
        <div className={`absolute inset-0 ${frontBgColor} rounded-[32px] flex items-center justify-center border-2 border-white`}>
          <div className="text-white text-3xl font-bold">
            {frontContent}
          </div>
        </div>
        {/* Parte trasera - blanca con el texto */}
        <div className="absolute inset-0 h-full w-full rounded-[32px] bg-white border-2 border-black px-8 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-lg">{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlipCardsGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Cartel animado */}
      <div className="flex justify-center mb-5">
        <div className="text-gray-500 mb-3 animate-breathe">
          Tocá para ver descripción
        </div>

      </div>

      <div className="grid grid-rows-[repeat(24,60px)] md:grid-rows-[repeat(15,50px)] xl:grid-rows-[repeat(10,50px)] grid-cols-[repeat(1,360px)] md:grid-cols-[repeat(2,360px)] xl:grid-cols-[repeat(3,360px)] auto-rows-[minmax(100px,auto)] grid-flow-dense gap-6 justify-center">
        {/* Tarjeta fija, con el mismo tamaño que las dinámicas */}
        <div className="rounded-[32px] row-span-4 md:row-span-6 max-w-[360px] group">
          <div className="relative rounded-[32px] h-full w-full transition-all duration-500 [transform-style:preserve-3d]">
            <div className=" border-2 border-secondary backdrop-blur-sm rounded-[32px] h-full flex items-center justify-center absolute inset-0 [backface-visibility:hidden]">
              <div className="text-secondary text-center">
                <h4 className="text-xl font-bold">Mis principales tecnologías</h4>
              </div>
            </div>
            <div className="text-black absolute inset-0 rounded-[32px] bg-gray-crombie h-full flex flex-col p-8 justify-center gap-y-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h6 className="text-left font-bold">Nuestro principal objetivo</h6>
              <p>El fin de este proyecto es <strong>capacitar a la próxima generación de desarrolladores</strong>, alineados a la alta demanda de talento IT.</p>
            </div>
          </div>
        </div>

        {/* Tarjetas dinámicas con datos */}
        {dataTechnologies.map(({ id, name, description, imageUrl }, index) => (
          <div key={id} className="rounded-[32px] row-span-4 md:row-span-5 max-w-[360px] group">
            <FlipCard
              frontContent={
                <div className="flex flex-col items-center">
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <h4 className="mt-3 text-center">{name}</h4>
                </div>
              }
              backContent={description}
              frontBgColor={"bg-black"} // Cambiar color según el índice
              cardSize="h-full w-full" // Ajusta tamaño automático
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCardsGrid;
