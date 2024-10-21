
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTechnologies } from "@/data";


const SwipeTech = () => {
    return (
        <>
            <div className="flex flex-col justify-center h-lvh mt-10 ">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 ">
            Algunas tecnologías
            <span className="block font-bold text-secondary "> que utilizo</span>
          </h1>
          <div className="flex items-center justify-center ">
            <div>
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="h-[400px] max-sm:h-[360px] md:h-[400px] lg:h-[300px] w-[270px] md:w-[600px]"
              >
                {dataTechnologies.map(({ id, name, description, imageUrl }) => (
                  <SwiperSlide key={id}>
                    <Image
                      src={imageUrl}
                      alt={name}
                      width="100"
                      height="100"
                      className="mx-auto rounded-full"
                    />
                    <h4 className="text-center">{name}</h4>
                    <div className="mt-5 text-center">{description}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-gray-500 flex justify-center mb-3 animate-smooth-slide">
                Deslizá para ver más tecnologías ➤➤➤
              </div>
            </div>
          </div>
        </div>
        
        </>
      
    );
  };
  
  export default SwipeTech;
  