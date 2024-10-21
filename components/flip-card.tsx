"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { serviceData } from "@/data";




// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function FlipCard() {
  return (
    <div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper "
      >
        {serviceData.map((item, index) => (
        //Marco deslizable
        <SwiperSlide key={index}>
            

          <div
            className="
                    flex-col
                    justify-center
                    items-center
                    text-center

                    sm:gap-x-0

                    flex px-6 py-6 

                    h-auto 
                    max-sm:h-80 
                    md:h-[400px] 
                    lg:md:h-[330px] 

                    rounded-lg cursor-pointer
                    backdrop-blur-sm
                    bg-[rgba(65,47,123,0.15)] gap-x-6  group hover:bg-black/35 transition-all duration-300 hover:border-secondary    border-2 "
          >
            <div className="mb-5 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3 className="mb-4 text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

</Swiper>
    </div>
  );
}
