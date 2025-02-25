import type { Metadata } from "next";

import { Urbanist } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";


const urbanist = Urbanist({ subsets: ["latin"] });

// paquete Blender
const blenderBold = localFont({
  src: "./fonts/BlenderPro-Bold.woff",
  variable: "--blender-bold",
  weight: "100 900",
});

const blenderNormal = localFont({
  src: "./fonts/BlenderPro-Book.woff",
  variable: "--blender-normal",
  weight: "100 900",
});

const blenderMayus = localFont({
  src: "./fonts/BlenderPro-Heavy.woff",
  variable: "--blender-mayus",
  weight: "100 900",
});

const blenderMedium = localFont({
  src: "./fonts/BlenderPro-Medium.woff",
  variable: "--blender-medium",
  weight: "100 900",
});

const blenderThin = localFont({
  src: "./fonts/BlenderPro-Thin.woff",
  variable: "--blender-thin",
  weight: "100 900",
});

//Title and description 
export const metadata: Metadata = {
  title: "Nacho Dev | Nacho Chiappero",
  description: "Soy Nacho Chiappero, desarrollador web Full Stack y diseñador gráfico. Explorá mi portfolio para ver mis proyectos y contactarme.",
  openGraph: {
    title: "Nacho Dev",
    description: "Soy Nacho Chiappero, desarrollador web Full Stack y diseñador gráfico. Explorá mi portfolio para ver mis proyectos y contactarme.",
    images: [
      {
        url: "/Logo2.png",
        alt: "Logo de Nacho Dev",
        width: 1200,
        height: 630
      }
    ],
    siteName: "Nacho Dev",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nacho Dev",
    description: "Soy Nacho Chiappero, desarrollador web Full Stack y diseñador gráfico. Explorá mi portfolio para ver mis proyectos y contactarme.",
    images: ["/Logo2.png"],
    creator: "@nachodev"
  },
  metadataBase: new URL("https://www.nachochiapperodev.com"), 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${blenderMayus.variable} ${blenderMedium.variable} ${blenderNormal.variable} ${blenderThin.variable} ${blenderBold.variable} `}> 
        
        <div className="font-[family-name:var(--blender-medium)]">
          <Navbar />
          <Header />
          {children}

        </div>
      </body>
    </html>
  );
}
