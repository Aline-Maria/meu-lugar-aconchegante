import React from 'react';

export default function PostCard({
  onClick,
  customText = "É pra cá que eu venho quando minha alma pede um descanso. Eu que montei tudo isso: as plantas, minha poltrona marrom que já começou a desbotar, meu sofá de segunda mão..."
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex flex-col md:flex-row w-full max-w-[90%] md:max-w-[1343px] h-auto md:h-[466px] mx-auto bg-neve shadow-none cursor-pointer overflow-hidden rounded-2xl"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      {/* LADO ESQUERDO - IMAGEM */}
      <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + '/assets/card1.png'}
          alt="Imagem do post"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>

      {/* LADO DIREITO - TÍTULO E TEXTO */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-6 py-4 md:px-10 md:py-6 gap-4 bg-neve text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-gwendolyn font-bold leading-tight text-cafe">
          Uma sala iluminada e cheia de plantas
        </h1>

        <p className="text-cafe font-hand text-base md:text-[18px] leading-relaxed">
          {customText}
        </p>
      </div>
    </div>
  );
}
