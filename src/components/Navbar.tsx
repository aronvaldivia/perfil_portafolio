import React from 'react';
import { Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 size={32} className="text-blue-700" />
            <span className="text-xl font-bold text-gray-800">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">
              Sobre Mí
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-700 transition-colors">
              Proyectos
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-700 transition-colors">
              Tecnologías
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-700 transition-colors">
              Experiencia
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;