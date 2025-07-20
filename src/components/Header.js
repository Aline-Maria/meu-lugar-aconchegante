import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#A17C4B] px-6 py-4 shadow-md z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-[#F6F1E7] font-bold text-2xl font-serif">
          Meu Lugar Aconchegante
        </h1>

        {/* Botão do menu (mobile) */}
        <button
          className="md:hidden text-[#F6F1E7]"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" label="Início" active={isActive('/')} />
          <NavLink to="/posts" label="Posts" active={isActive('/posts')} />
          <NavLink to="/galeria" label="Galeria" active={isActive('/galeria')} />
          <NavLink to="/sobre" label="Sobre" active={isActive('/sobre')} />
          <NavLink to="/contato" label="Contato" active={isActive('/contato')} />
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="mt-4 flex flex-col gap-4 md:hidden">
          <NavLink to="/" label="Início" active={isActive('/')} onClick={() => setIsOpen(false)} />
          <NavLink to="/posts" label="Posts" active={isActive('/posts')} onClick={() => setIsOpen(false)} />
          <NavLink to="/galeria" label="Galeria" active={isActive('/galeria')} onClick={() => setIsOpen(false)} />
          <NavLink to="/sobre" label="Sobre" active={isActive('/sobre')} onClick={() => setIsOpen(false)} />
          <NavLink to="/contato" label="Contato" active={isActive('/contato')} onClick={() => setIsOpen(false)} />
        </nav>
      )}
    </header>
  );
}

function NavLink({ to, label, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-[#F6F1E7] font-semibold text-base font-serif transition duration-300 pb-1 ${
        active ? 'border-b-2 border-[#F6F1E7] font-bold' : 'hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
}
