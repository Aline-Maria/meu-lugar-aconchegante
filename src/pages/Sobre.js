import React from 'react';

export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-12 gap-10 md:gap-16">
      {/* Imagem do lado esquerdo */}
      <div className="flex-shrink-0 md:mr-24">
        <img
          src={process.env.PUBLIC_URL + '/assets/fotoperfil.png'}
          alt="Foto de perfil da Aline"
          className="rounded-[2rem] object-cover transition-all duration-300 ease-in-out hover:rounded-[4rem]"
          style={{ width: '280px', height: '500px' }}
          loading="lazy"
        />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6">Oi, eu sou a Aline</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Eu acredito profundamente no poder do estudo como uma força transformadora de vidas! Essa é a minha principal característica. Sou formada em Administração e pós-graduada em Marketing – trabalho com isso atualmente, dá uma olhada no meu{' '}
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            className="underline text-dourado hover:text-dourado-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
          <br />
          Este site nasceu como parte dos meus estudos em Tecnologia da Informação. A ideia surgiu da vontade de organizar meu{' '}
          <a
            href="https://github.com/seu-usuario"
            className="underline text-dourado hover:text-dourado-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          e criar um portfólio, mas também veio do meu amor por conteúdos que aquecem o coração, daqueles que parecem um abraço em forma de palavras e imagens, sabe?
        </p>
        <p className="text-lg leading-relaxed">
          Espero que você se sinta em casa por aqui. O aconchego é o tema principal, e este espaço é também um lugar para compartilhar histórias.
        </p>
      </div>
    </div>
  );
}
