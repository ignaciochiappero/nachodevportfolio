import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import CoverParticles from "@/components/cover-particles";

const PortfolioPage = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <ContainerPage>
        <div className="flex flex-col justify-center h-full mb-20 max-sm:mb-0">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis últimos{" "}
            <span className="font-bold text-secondary">trabajos realizados</span>
          </h1>

          <div className="relative z-10 grid max-w-[1200px] gap-6 mx-auto mt-4 sm:grid-cols-2 min-md:grid-cols-3 lg:grid-cols-3">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default PortfolioPage;
