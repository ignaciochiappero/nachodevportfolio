import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub } = data;

  return (
<div key={id} className="p-4 bg-darkBg bg-opacity-60 rounded-xl">
  <div className="flex flex-col items-center justify-center">
    <div className="lg:h-20 flex items-center">
      <h3 className="mb-4 text-md">{title}</h3>
    </div>
    <Image
      src={image}
      alt="Image"
      width={200}
      height={200}
      className="w-full md:w-[200px] lg:w-[300px] rounded-2xl h-auto transform transition duration-500 hover:scale-110"
    />
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
