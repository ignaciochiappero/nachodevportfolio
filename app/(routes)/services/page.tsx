

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/cover-particles";

const ServicePage = () => {
    
    return (
    <>
      <TransitionPage />
      <CircleImage />
      
      <CoverParticles/>

      <div className="
      
      max-sm:mt-10 sm:mt-10
      max-sm:mx-4 md:mx-3
      grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 ">
            
            <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5
                    max-sm:mb-4
                    
                    ">Mis 
                      
                    <span className="font-bold text-secondary"> servicios.</span>
                    
                    </h1>


                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web y aplicaciones, frontend y backend, con un enfoque en estética y funcionalidad. Utilizo las últimas tecnologías y también ofrezco diseño gráfico y contenido, creando interfaces atractivas e intuitivas que reflejan la identidad de mis clientes y conectan integralmente con su público.</p>


                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
           </div>


            {/* Slider  */}

           <div>

            <SliderServices/>

           </div>
        </div>
    </>
    )
  }
  
  export default ServicePage;
  