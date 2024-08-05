import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description: string;
    icon: JSX.Element; // Añadido
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub, description, icon } = data;

  return (
    <div
      key={id}
      className="group p-4 bg-darkBg bg-opacity-60 rounded-xl transform transition duration-500 hover:scale-110 hover:bg-opacity-80"
    >
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-4xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-4 backdrop-blur-sm">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          <div className="text-white text-sm overflow-auto max-h-full">
            {description}
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-5 justify-center">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          Github
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Visitar !
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
