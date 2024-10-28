import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";


const urbanist = Urbanist({ subsets: ["latin"] });

//Title and description 
export const metadata: Metadata = {
  title: "Nacho Dev",
  description: "Soy Nacho Chiappero, desarrollador web Full Stack, desarrollador de AI y diseñador gráfico. Explora mi portfolio para ver mis proyectos y contactarme.",
  openGraph: {
    title: "Nacho Dev",
    description: "Soy Nacho Chiappero, desarrollador web Full Stack, desarrollador de AI  y diseñador gráfico. Explora mi portfolio para ver mis proyectos y contactarme.",
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
    description: "Soy Nacho Chiappero, desarrollador web Full Stack, desarrollador de AI  y diseñador gráfico. Explora mi portfolio para ver mis proyectos y contactarme.",
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
      <body className={urbanist.className}> 
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
