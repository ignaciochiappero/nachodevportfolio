import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
        cyan: "#004040",
        darkCyan: "#002222",
        darkBlue: "#001111",
        darkerBlue: "#000811",
        veryDarkBlue: "#000022",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(0, 0, 0, 0.5) 111.58% )",
        "gradient-cyan-darkblue": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-very-dark": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        cyan: "#004040",
        darkCyan: "#002222",
        darkBlue: "#001111",
        darkerBlue: "#000811",
        veryDarkBlue: "#000022",
      },
      // Keyframes para mover el elemento a la derecha y luego regresar al mismo ritmo
      keyframes: {
        smoothSlide: {
          '0%, 100%': { transform: 'translateX(0)' }, // Posición inicial y final en 0
          '50%': { transform: 'translateX(10px)' },   // Se desplaza hacia la derecha
        },
      },
      animation: {
        'smooth-slide': 'smoothSlide 2s ease-in-out infinite', // 2 segundos para ida y vuelta
      },
    },
  },
  plugins: [scrollbar],
};

export default config;
