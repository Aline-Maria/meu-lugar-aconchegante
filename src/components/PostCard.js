import React from 'react';

export default function PostCard({ onClick, customText = "É pra cá que eu venho quando minha alma pede um descanso. Eu que montei tudo isso: as plantas, minha poltrona marrom que já começou a desbotar, meu sofá de segunda mão..." }) {
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
      <div className="w-1/2 h-full flex flex-col justify-center px-10 py-6 gap-4 bg-neve overflow-hidden">
        <h1 className="text-5xl font-gwendolyn font-bold leading-tight text-cafe">
          Uma sala iluminada e cheia de plantas
        </h1>

        <p className="text-cafe font-hand text-[18px] leading-relaxed">
          {customText}
        </p>
      </div>
    </div>
  );
}
