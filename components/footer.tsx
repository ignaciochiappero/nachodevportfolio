import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-gray-300 mt-20">

      {/* Simple divider line */}
      <hr className="border-gray-700 my-8" />


      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Nacho Dev</h3>
            <p className="text-sm">
              Desarrollo soluciones web innovadoras y personalizadas para impulsar tu presencia digital.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-white transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors duration-200">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors duration-200">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/+543424094061" className="hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <p className="text-sm">Santa Fe, Argentina</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/ignaciochiappero" className="hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ignacio-chiappero-129360228/" className="hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/+543424094061" className="hover:text-white transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Simple divider line */}
        <hr className="border-gray-700 my-8" />
        
        {/* Bottom Bar */}
        <div className="pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nacho Dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;