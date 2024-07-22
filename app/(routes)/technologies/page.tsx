"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataTechnologies } from "@/data";
import CircleImage from "@/components/circle-image";

import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/cover-particles";

const TestimonialsPage = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh mt-10">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunas tecnologías
          <span className="block font-bold text-secondary"> que utilizo</span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
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
            <div className=" text-gray-500  flex justify-center mb-3">Deslizá para ver más tecnologías ➤➤➤</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
