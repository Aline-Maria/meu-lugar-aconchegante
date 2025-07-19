import React from 'react';

export default function CardSala() {
  return (
    <div className="bg-white py-10">
      {/* Fundo do card */}
      <div className="max-w-[1343px] mx-auto bg-[#fdf6ef] shadow-lg rounded-xl overflow-hidden">
        {/* Título do card */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-cafe mb-4">
            sala repaginada com objetos interativos
          </h2>
        </div>

        {/* Imagem com container arredondado */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="/assets/fundocard-sala.png"
            alt="Sala aconchegante com objetos interativos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Legenda */}
      <div className="max-w-[1343px] mx-auto px-6 mt-4">
        <p className="text-base font-bold text-cafe text-left">
          Que tal redecorar esta sala? Clique e arraste para mudar os objetos de lugar 💡
        </p>
      </div>
    </div>
  );
}
