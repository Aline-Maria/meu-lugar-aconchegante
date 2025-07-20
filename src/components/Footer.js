import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#A17C4B] text-creme py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 text-[120%]">

        {/* Coluna 1 */}
        <div className="md:flex-1">
          <h2 className="font-bold text-2xl mb-4">Meu Lugar Aconchegante</h2>
          <p className="mb-6 max-w-xs leading-relaxed">
            Aqui você encontra aconchego, histórias e inspiração para o seu lar.
          </p>
          <div className="text-sm font-mono italic opacity-70">© 2025 All Rights Reserved</div>
        </div>

        {/* Coluna 2 - Você me encontra aqui */}
        <div className="md:flex-1">
          <h2 className="font-bold text-2xl mb-4">Você me encontra aqui</h2>
          <nav className="flex flex-col gap-4 max-w-xs">
            <a
              href="mailto:aline.tecnologiadainformacao@gmail.com"
              className="flex items-center gap-3 underline hover:text-dourado transition-colors"
            >
              <FiMail size={24} />
              <span>e-mail</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aline-maria-b1b82520b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 underline hover:text-dourado transition-colors"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Aline-Maria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 underline hover:text-dourado transition-colors"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://br.pinterest.com/MeuCantinhoAconchegante/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 underline hover:text-dourado transition-colors"
            >
              <FaPinterest size={24} />
              <span>Pinterest</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
