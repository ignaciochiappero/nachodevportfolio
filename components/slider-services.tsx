"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { serviceData } from "@/data";

const SliderServices = () => {
  return (
    <>
    <div className=" text-gray-500  flex justify-center mb-3">Deslizá para ver más servicios ➤➤➤</div>
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="
            
            h-[280px] md:h-[340px] 
            w-[270px]  max-md:w-[350px] md:w-[400px] lg:w-[550px] 
            
            "
    >
        
      {serviceData.map((item, index) => (
        //Marco deslizable
        <SwiperSlide key={index}>
            

          <div
            className="
                    sm:flex-col
                    sm:gap-x-0

                    flex px-6 py-6 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] gap-x-6  group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2 "
          >
            <div className="mb-1 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3 className="mb- text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </>
  );
};

export default SliderServices;
