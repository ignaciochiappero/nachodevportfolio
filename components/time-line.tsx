import { dataAboutPage } from "@/data";

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12  bg-opacity-80">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
        {dataAboutPage.map((data) => (
          <div
            key={data.id}
            className="relative p-8 transition-transform duration-300 bg-gray-800/60 backdrop-blur-lg rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-2xl group border border-cyan-500/20 hover:border-cyan-400"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Título con efecto neón */}
              <h3 className="text-3xl font-bold text-cyan-400 neon-shadow transition-colors group-hover:text-cyan-300">
                {data.title}
              </h3>

              {/* Fecha */}
              <time className="text-xs font-semibold text-gray-400 uppercase">
                {data.date}
              </time>
            </div>

            {/* Subtítulo con efecto neón */}
            <div className="mb-4 text-lg font-semibold text-cyan-300 neon-shadow transition-colors group-hover:text-cyan-200">
              {data.subtitle}
            </div>

            {/* Descripción */}
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {data.description}
            </p>

            {/* Decoración dinámica estilo tech */}
            <div className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-br from-cyan-900 via-cyan-800 to-purple-900 blur-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
