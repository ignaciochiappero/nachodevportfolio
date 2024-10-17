"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Si ya hay un hash en la URL al cargar la página, navega hacia esa sección
    if (window.location.hash) {
      setActiveSection(window.location.hash);
      const element = document.getElementById(window.location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  // Observer para detectar la sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const options = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Detecta cuando la sección está en la parte media
      threshold: 0.2, // Se activa cuando un 20% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          setActiveSection(sectionId);
          window.history.pushState(null, "", sectionId);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                activeSection === item.section ? "bg-secondary" : ""
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
