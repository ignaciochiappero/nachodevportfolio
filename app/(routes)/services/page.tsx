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
            <CoverParticles />

            <div className="
                flex justify-center items-center h-screen px-4
                sm:px-6 md:px-20
                max-sm:pt-16 
            ">
                <div className="
                    grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto
                ">
                    {/* Contenedor del texto descriptivo */}
                    <div className="max-w-[450px] mt-20 md:mt-0 text-center md:text-left
                        md:pt-0
                        max-sm:mt-20 max-sm:pt-20
                        sm:pt-20
                    ">
                        <h1 className="
                            text-2xl leading-tight md:text-4xl md:mb-5
                            font-bold
                        ">
                            Mis <span className="text-secondary">servicios.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Ofrezco servicios de desarrollo web y aplicaciones, frontend y backend, con un enfoque en estética y funcionalidad. Utilizo las últimas tecnologías y también ofrezco diseño gráfico y contenido, creando interfaces atractivas e intuitivas que reflejan la identidad de mis clientes y conectan integralmente con su público.
                        </p>


                        <a href="https://wa.me/5493424094061">
                            <button className="
                               px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-md hover:shadow-secondary
                            ">
                                Contacta conmigo
                            </button>
                        
                        </a>


                    </div>

                    {/* Slider */}
                    <div className="w-full">
                        <SliderServices />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicePage;
