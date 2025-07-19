import React from 'react';

export default function PostCard({ onClick }) {
  const fullText = `Este espaço foi pensado para transmitir leveza, com muitas plantas, luz natural e detalhes em madeira clara. 
É pra cá que eu venho quando minha alma pede um descanso. Eu que montei tudo isso: as plantas, minha poltrona marrom que já começou a desbotar, meu sofá de segunda mão... Eu deito neste sofá, olho pela janela e vejo o céu: não um muro com a tinta descascando, não um janela (e a vida) do vizinho. É o céu! Minhas plantas se abrem. Quem cria plantas sabe que elas se abrem com a luz do sol. Lá fora também tem árvores e o cheiro do ar fica uma delícia quando chove, mas hoje eu vejo o dourado do crepúsculo. Aqui eu estou protegida, eu posso respirar num ritmo mais calmo, eu posso ouvir as minhas músicas. E eu nem sei por que comprei essa caixa de som enorme, não gosto de barulho, deixo o som fica baixinho e minha mente vai se acalmando… se acalmando… Eu sinto meu coração batendo, o céu está ficando cada vez mais escuro. Tudo deu certo, no fim das contas. Eu tenho o meu lugar, é do jeito que eu sonhei. Não sei se é muito cedo pra dizer isso, mas eu estou feliz!`;

  const charLimit = 500;
  const truncatedText = fullText.length > charLimit ? fullText.slice(0, charLimit).trimEnd() + "..." : fullText;

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex max-w-[1343px] h-[466px] mx-auto bg-neve shadow-none cursor-pointer overflow-hidden rounded-2xl"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      {/* LADO ESQUERDO - IMAGEM */}
      <div className="w-1/2 h-full overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + '/assets/card1.png'}
          alt="Imagem do post"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>

      {/* LADO DIREITO - TÍTULO E TEXTO */}
      <div className="w-1/2 h-full flex flex-col justify-start px-10 py-6 gap-4 bg-neve overflow-hidden">
        <h1 className="text-5xl font-gwendolyn font-bold leading-tight text-cafe">
          Uma sala iluminada e cheia de plantas
        </h1>

        <p className="text-cafe font-hand text-[18px] leading-relaxed">
          {truncatedText}{" "}
          {fullText.length > charLimit && (
            <a
              href="/meu-lugar-aconchegante/post/1"
              className="font-bold underline text-cafe cursor-pointer"
              aria-label="Ver mais detalhes do post"
              onClick={(e) => e.stopPropagation()} // evita disparo do clique geral do card
            >
              ver mais
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
