import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#A17C4B] text-[#F6F1E7] px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold font-serif">Meu Lugar Aconchegante</h1>
      <ul className="flex gap-6 text-lg font-medium">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
