import React from 'react';
import ContatoForm from '../components/ContatoForm';

export default function Contato() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-creme rounded-xl shadow-md text-cafe">
      <h2 className="text-3xl font-bold mb-6">Você me encontra aqui:</h2>
      <ul className="mb-6 list-disc list-inside space-y-2 text-lg">
        <li>
          Por{' '}
          <a
            href="mailto:aline.tecnologiadainformacao@gmail.com"
            className="text-dourado hover:underline"
          >
            e-mail
          </a>
        </li>
        <li>
          No{' '}
          <a
            href="https://www.linkedin.com/in/aline-maria-b1b82520b/"
            target="_blank"
            rel="noreferrer"
            className="text-dourado hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          No{' '}
          <a
            href="https://br.pinterest.com/MeuCantinhoAconchegante/_created/"
            target="_blank"
            rel="noreferrer"
            className="text-dourado hover:underline"
          >
            Pinterest
          </a>
        </li>
        <li>
          No{' '}
          <a
            href="https://github.com/Aline-Maria"
            target="_blank"
            rel="noreferrer"
            className="text-dourado hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>

      <p className="mb-6 text-lg">Ou envie uma mensagem pelo formulário:</p>

      <ContatoForm />
    </div>
  );
}
