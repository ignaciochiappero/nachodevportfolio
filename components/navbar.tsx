"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#inicio");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);

    const sectionId = section.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", section);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "#inicio";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
        currentSection = `#${section.id}`;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      window.history.replaceState(null, "", currentSection);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <MotionTransition 
      position="right" 
      className={`fixed z-40 flex items-center justify-center ${isLargeScreen ? 'right-5 top-0 h-screen' : 'w-full bottom-8'}`}
    >
      <nav className={`${isLargeScreen ? 'w-14 my-auto' : 'w-auto'}`}>
        <div className={`relative flex items-center justify-center gap-3 px-4 py-2 backdrop-blur-md border-0 
          ${isLargeScreen ? 'flex-col rounded-xl py-4' : 'rounded-xl mx-auto w-max'}`}
        >
          {/* Fondo tech con gradiente */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {/* Capa de gradiente base */}
            <div className="absolute inset-0 bg-gradient-to-r from-darkCyan/40 to-darkerBlue/60"></div>
            
            {/* Líneas hexagonales animadas */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,64,64,0.3)_70%)]"></div>
              <div className="absolute w-full h-full rotate-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(245,116,28,0.1)_10px,rgba(245,116,28,0.1)_12px)]"></div>
              <div className="absolute w-full h-full -rotate-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,rgba(0,64,64,0.2)_15px,rgba(0,64,64,0.2)_17px)]"></div>
            </div>
            
            {/* Patrón de puntos tech */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_10px_10px,rgba(245,116,28,0.4)_2px,transparent_0px)] bg-[length:20px_20px]"></div>
          </div>
          
          {/* Marco octogonal con bordes difuminados */}
          <div className="absolute inset-0">
            {/* Líneas horizontales superiores con fundido */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-stone-700/60 to-transparent"></div>
            <div className="absolute top-1 left-10 right-10 h-px bg-gradient-to-r from-transparent via-stone-700/30 to-transparent"></div>
            
            {/* Líneas diagonales superiores con fundido */}
            <div className="absolute top-0 left-0 w-8 h-8 opacity-60" 
                 style={{ backgroundImage: 'linear-gradient(135deg, transparent calc(50% - 1px), rgba(74, 74, 74, 0.4) calc(50%), transparent calc(50% + 1px))' }}></div>
            <div className="absolute top-0 right-0 w-8 h-8 opacity-60" 
                 style={{ backgroundImage: 'linear-gradient(225deg, transparent calc(50% - 1px), rgba(74, 74, 74, 0.4) calc(50%), transparent calc(50% + 1px))' }}></div>
            
            {/* Líneas verticales con brillo adaptativo y fundido */}
            <div className={`absolute ${isLargeScreen ? 'left-0 top-8 bottom-8 w-px' : 'left-8 right-8 top-0 h-px'} 
                  bg-gradient-to-${isLargeScreen ? 'b' : 'r'} from-transparent via-secondary/70 to-transparent animate-pulse`}></div>
            <div className={`absolute ${isLargeScreen ? 'right-0 top-8 bottom-8 w-px' : 'left-8 right-8 bottom-0 h-px'} 
                  bg-gradient-to-${isLargeScreen ? 'b' : 'r'} from-transparent via-secondary/70 to-transparent animate-pulse`}></div>
            
            {/* Líneas verticales secundarias con fundido */}
            <div className="absolute left-1 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-stone-700/30 to-transparent"></div>
            <div className="absolute right-1 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-stone-700/30 to-transparent"></div>
            
            {/* Líneas horizontales inferiores con fundido */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-stone-700/60 to-transparent"></div>
            <div className="absolute bottom-1 left-10 right-10 h-px bg-gradient-to-r from-transparent via-stone-700/30 to-transparent"></div>
            
            {/* Líneas diagonales inferiores con fundido */}
            <div className="absolute bottom-0 left-0 w-8 h-8 opacity-60" 
                 style={{ backgroundImage: 'linear-gradient(45deg, transparent calc(50% - 1px), rgba(74, 74, 74, 0.4) calc(50%), transparent calc(50% + 1px))' }}></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-60" 
                 style={{ backgroundImage: 'linear-gradient(315deg, transparent calc(50% - 1px), rgba(74, 74, 74, 0.4) calc(50%), transparent calc(50% + 1px))' }}></div>
            
            {/* Detalles de circuito en las esquinas con fundido */}
            <div className="absolute top-2 left-2 w-4 h-1 border-l border-t border-stone-700/40"></div>
            <div className="absolute top-2 right-2 w-4 h-1 border-r border-t border-stone-700/40"></div>
            <div className="absolute bottom-2 left-2 w-4 h-1 border-l border-b border-stone-700/40"></div>
            <div className="absolute bottom-2 right-2 w-4 h-1 border-r border-b border-stone-700/40"></div>
            
            {/* Efecto de resplandor difuminado en las esquinas */}
            <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-secondary/10 to-transparent rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-secondary/10 to-transparent rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-secondary/10 to-transparent rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-secondary/10 to-transparent rounded-br-lg"></div>
            
            {/* Puntos de luz sutiles */}
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-secondary/50 rounded-full filter blur-[1px]"></div>
            <div className="absolute top-0 right-1/4 w-1 h-1 bg-secondary/50 rounded-full filter blur-[1px]"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-secondary/50 rounded-full filter blur-[1px]"></div>
            <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-secondary/50 rounded-full filter blur-[1px]"></div>
          </div>
          
          {itemsNavbar.map((item) => (
            <div key={item.id} className="relative group z-10">
              <div
                className={`p-2 transition-all duration-300 rounded-xl cursor-pointer 
                  ${activeSection === item.section 
                    ? "bg-secondary/90 scale-105 shadow-[0_0_10px_rgba(245,116,28,0.7)]" 
                    : "hover:bg-cyan/40 hover:scale-110"
                  }`}
              >
                <Link
                  href={item.section}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.section);
                  }}
                >
                  {item.icon}
                </Link>

                {/* Tooltip tech */}
                <div
                  className={`absolute whitespace-nowrap px-2 py-1 text-sm
                    bg-gradient-to-r from-darkCyan to-darkerBlue text-white rounded-md opacity-0 
                    transition-all duration-300 ease-in-out pointer-events-none border border-stone-700/40
                    ${isLargeScreen 
                      ? 'right-full mr-2 top-1/2 -translate-y-1/2 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0' 
                      : 'bottom-full left-1/2 -translate-x-1/2 mb-2 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100'
                    }
                  `}
                >
                  <span className="relative z-10">{item.section.replace('#', '').charAt(0).toUpperCase() + item.section.slice(2)}</span>
                  
                  {/* Línea decorativa en tooltip */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-secondary/60"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;