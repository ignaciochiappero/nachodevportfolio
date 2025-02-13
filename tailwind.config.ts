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
        cyan: "#0a3f45",
        darkCyan: "#002222",
        darkBlue: "#1c0312",
        darkerBlue: "#000811",
        veryDarkBlue: "#000022",
      },
      // Keyframes para mover el elemento a la derecha y luego regresar al mismo ritmo
      keyframes: {
        smoothSlide: {
          '0%, 100%': { transform: 'translateX(0)' }, // Posición inicial y final en 0
          '50%': { transform: 'translateX(10px)' },   // Se desplaza hacia la derecha
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        'smooth-slide': 'smoothSlide 2s ease-in-out infinite',
         // 2 segundos para ida y vuelta

         first: "moveVertical 30s ease infinite",
         second: "moveInCircle 20s reverse infinite",
         third: "moveInCircle 40s linear infinite",
         fourth: "moveHorizontal 40s ease infinite",
         fifth: "moveInCircle 20s ease infinite",
      },
    },
  },
  plugins: [scrollbar],
};

export default config;
