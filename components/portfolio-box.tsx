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
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub, description } = data;

  return (
    <div
      key={id}
      className="group p-4 bg-darkBg bg-opacity-60 rounded-xl transform transition duration-500 hover:scale-110 hover:bg-opacity-80"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <Image
            src={image}
            alt="Image"
            width={300}
            height={300}
            className="w-full h-auto rounded-2xl transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-filter backdrop-blur-md">
            <div className="text-white text-sm p-4 max-h-full overflow-y-auto">
              {description}
            </div>
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
