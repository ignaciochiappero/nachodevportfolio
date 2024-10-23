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
      className={`fixed z-40 flex items-center justify-center 
        ${isLargeScreen 
          ? 'right-5 top-0 h-screen'
          : 'w-full bottom-8'
        }`}
    >
      <nav className={`${isLargeScreen ? 'w-14 my-auto' : 'w-auto'}`}>
        <div className={`flex items-center justify-center gap-3 px-4 py-2 
          bg-white/15 backdrop-blur-sm border border-white
          ${isLargeScreen 
            ? 'flex-col rounded-full py-4' 
            : 'rounded-full mx-auto w-max'
          }`}
        >
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className="relative group"
            >
              <div
                className={`p-2 transition-all duration-300 rounded-2xl cursor-pointer
                  hover:bg-secondary hover:scale-110
                  ${activeSection === item.section ? "bg-secondary scale-105" : ""}
                `}
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

                {/* Tooltip sin pico */}
                <div className={`absolute whitespace-nowrap px-2 py-1 text-sm
                  bg-white text-gray-900 rounded-md opacity-0 
                  transition-all duration-300 ease-in-out pointer-events-none
                  ${isLargeScreen 
                    ? 'right-full mr-2 top-1/2 -translate-y-1/2 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0' 
                    : 'bottom-full left-1/2 -translate-x-1/2 mb-2 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100'
                  }
                `}>
                  {item.section.replace('#', '').charAt(0).toUpperCase() + item.section.slice(2)}
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
