import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import CoverParticles from "@/components/cover-particles";


const PageAboutMe = () => {
  return (
    <>
        <CoverParticles/>
        <TransitionPage/>
        <ContainerPage>
          
          <Avatar />
          
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
            Mi{' '}
              <span className="font-bold text-secondary"> trayectoria profesional </span>
          </h1>

          <CounterServices/>

          <TimeLine />
        </ContainerPage>
    </>
  )
}

export default PageAboutMe;

