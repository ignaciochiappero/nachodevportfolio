"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#inicio");

  // Maneja el clic en los enlaces del navbar
  const handleLinkClick = (section: string) => {
    setActiveSection(section);

    // Scroll hacia la sección correspondiente
    const sectionId = section.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Actualiza la URL sin recargar la página
    window.history.pushState(null, "", section);
  };

  // Función para verificar la sección visible según el scroll
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "#inicio"; // Por defecto, la sección "Inicio" estará activa

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Si la parte superior de la sección está visible y al menos un 30% de su altura está en la ventana
      if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
        currentSection = `#${section.id}`;
      }
    });

    // Solo actualizamos el estado si la sección ha cambiado
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      window.history.replaceState(null, "", currentSection);
    }
  };

  // Listener para el scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remover el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max 
      max-sm:bottom-2 sm:bottom-5 md:bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-secondary ${
                activeSection === item.section ? "bg-secondary scale-105" : ""
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
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
