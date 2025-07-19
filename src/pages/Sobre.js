import React from 'react';

export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center px-4">
      {/* Imagem do lado esquerdo */}
      <div className="flex-shrink-0" style={{ marginRight: '2.4cm' }}>
        <img
          src={process.env.PUBLIC_URL + '/assets/fotoperfil.png'}
          alt="Foto de perfil"
          className="rounded-[2rem] object-cover transition-all duration-300 ease-in-out hover:rounded-[4rem]"
          style={{ width: '280px', height: '500px' }}
        />
      </div>

      {/* Coluna do texto */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Oi, eu sou a Aline</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Eu acredito profundamente no poder do estudo como uma força transformadora de vidas!
          Essa é a minha principal característica. Sou formada em Administração e pós-graduada em
          Marketing – trabalho com isso atualmente, dá uma olhada no meu{' '}
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .<br />
          Este site nasceu como parte dos meus estudos em Tecnologia da Informação. A ideia surgiu
          da vontade de organizar meu{' '}
          <a
            href="https://github.com/seu-usuario"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          e criar um portfólio, mas também veio do meu amor por conteúdos que aquecem o coração,
          daqueles que parecem um abraço em forma de palavras e imagens, sabe?
        </p>
        <p className="text-lg leading-relaxed">
          Espero que você se sinta em casa por aqui. O aconchego é o tema principal, e este espaço é
          também um lugar para compartilhar histórias.
        </p>
      </div>
    </div>
  );
}
