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
  description: "Page made by Nacho Chiappero",
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
