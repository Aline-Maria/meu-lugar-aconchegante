import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
      <Link
        to="/"
        className="text-4xl font-architects text-black leading-tight whitespace-pre-line"
      >
        Meu<br />Lugar<br />Aconchegante
      </Link>
      <nav className="mt-4 md:mt-0 flex flex-wrap gap-6 text-lg-plus font-medium">
        <Link
          to="/"
          className="hover:text-slick transition-colors duration-300"
        >
          Início
        </Link>
        <Link
          to="/galeria"
          className="hover:text-slick transition-colors duration-300"
        >
          Galeria
        </Link>
        <Link
          to="/sobre"
          className="hover:text-slick transition-colors duration-300"
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          className="hover:text-slick transition-colors duration-300"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
