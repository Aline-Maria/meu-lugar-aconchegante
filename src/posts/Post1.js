import React, { useRef, useState } from 'react';

const icons = [
  { id: 1, src: process.env.PUBLIC_URL + '/assets/janelafechada.png', width: 280, height: 300, x: -16, y: -25 },
  { id: 2, src: process.env.PUBLIC_URL + '/assets/poltronamarrom.png', width: 170, height: 230, x: 3, y: 205 },
  { id: 3, src: process.env.PUBLIC_URL + '/assets/samambaia.png', width: 180, height: 100, x: 310, y: 230 },
  { id: 4, src: process.env.PUBLIC_URL + '/assets/vasopreto.png', width: 150, height: 90, x: 115, y: 110 },
  { id: 5, src: process.env.PUBLIC_URL + '/assets/mesacentro.png', width: 200, height: 260, x: 110, y: 288 },
  { id: 6, src: process.env.PUBLIC_URL + '/assets/armario.png', width: 170, height: 220, x: 220, y: 130 },
  { id: 7, src: process.env.PUBLIC_URL + '/assets/orquidea.png', width: 72, height: 70, x: 230, y: 165 },
  { id: 8, src: process.env.PUBLIC_URL + '/assets/vasobranco.png', width: 180, height: 100, x: -10, y: 400 },
  { id: 9, src: process.env.PUBLIC_URL + '/assets/janelaaberta.png', width: 300, height: 300, x: 310, y: -20 },
  { id: 10, src: process.env.PUBLIC_URL + '/assets/sofaverde.png', width: 320, height: 340, x: 256, y: 200 },
  { id: 11, src: process.env.PUBLIC_URL + '/assets/caixasom.png', width: 120, height: 130, x: 135, y: 185 },
];

export default function Post1({ fundocardWidth = 570, fundocardHeight = 500, textSize = "lg" }) {
  const containerRef = useRef(null);

  const [positions, setPositions] = useState(() =>
    icons.reduce((acc, icon) => {
      acc[icon.id] = { x: icon.x, y: icon.y };
      return acc;
    }, {})
  );

  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  function handleMouseDown(e, id) {
    e.preventDefault();
    setDraggingId(id);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleMouseMove(e) {
    if (draggingId === null) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    setPositions((prev) => ({
      ...prev,
      [draggingId]: { x: newX, y: newY },
    }));
  }

  function handleMouseUp() {
    setDraggingId(null);
  }

  function getZIndex(id) {
    if (draggingId === id) return 1000;
    switch (id) {
      case 1:
      case 9:
        return 50;
      case 6:
        return 100;
      case 2:
        return 150;
      case 3:
        return 180;
      case 11:
        return 200;
      case 10:
        return 250;
      case 5:
        return 300;
      case 7:
        return 310;
      case 4:
        return 320;
      case 8:
        return 330;
      default:
        return 500;
    }
  }

  return (
    <>
      {/* Menu fixo no topo */}
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <a
          className="text-4xl font-architects text-black leading-tight whitespace-pre-line"
          href="/meu-lugar-aconchegante"
        >
          Meu<br />Lugar<br />Aconchegante
        </a>
        <nav className="mt-4 md:mt-0 flex flex-wrap gap-6 text-lg-plus font-medium">
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante">Início</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/galeria">Galeria</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/sobre">Sobre</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/contato">Contato</a>
        </nav>
      </div>

      {/* Conteúdo principal com layout em duas colunas */}
      <main className="mx-auto text-cafe max-w-[1343px] px-6 mt-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* LADO ESQUERDO: Imagem e legenda */}
          <div className="md:w-1/2 w-full">
            <div
              ref={containerRef}
              className="relative mx-auto overflow-hidden"
              style={{
                width: fundocardWidth,
                height: fundocardHeight,
                userSelect: draggingId ? 'none' : 'auto',
              }}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/fundocard1.png'}
                alt="Fundo do card"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 0,
                }}
                className="select-none pointer-events-none"
                draggable={false}
              />

              {icons.map(({ id, src, width, height }) => {
                const pos = positions[id];
                const isFixed = id === 1 || id === 9;

                return (
                  <img
                    key={id}
                    src={src}
                    alt={`Ícone ${id}`}
                    onMouseDown={isFixed ? undefined : (e) => handleMouseDown(e, id)}
                    style={{
                      position: 'absolute',
                      left: pos.x,
                      top: pos.y,
                      width,
                      height,
                      cursor: isFixed ? 'default' : 'grab',
                      userSelect: 'none',
                      zIndex: getZIndex(id),
                    }}
                    draggable={false}
                  />
                );
              })}
            </div>

            {/* Legenda abaixo da imagem */}
            <div className="mt-4 max-w-[570px] mx-auto">
              <p className="text-base font-bold text-cafe text-left">
                Que tal redecorar esta sala? Clique e arraste para mudar os objetos de lugar 💡
              </p>
            </div>
          </div>

          {/* LADO DIREITO: Texto descritivo */}
          <div
            className={`md:w-1/2 w-full flex flex-col items-start text-left leading-relaxed font-hand space-y-4`}
            style={{ fontSize: textSizeMap[textSize] }}
          >
            <h1 className="text-5xl font-gwendolyn font-bold leading-tight">
              Uma sala iluminada e cheia de plantas
            </h1>

            <p>
              É pra cá que eu venho quando minha alma pede um descanso. Eu que montei tudo isso:
              as plantas, minha poltrona marrom que já começou a desbotar, meu sofá de segunda mão...
            </p>

            <p>
              Eu deito neste sofá, olho pela janela e vejo o céu: não um muro com a tinta descascando,
              não um janela (e a vida) do vizinho. É o céu! Minhas plantas se abrem. Quem cria plantas sabe
              que elas se abrem com a luz do sol. Lá fora também tem árvores e o cheiro do ar fica uma delícia
              quando chove, mas hoje eu vejo o dourado do crepúsculo.
            </p>

            <p>
              Aqui eu estou protegida, eu posso respirar num ritmo mais calmo, eu posso ouvir as minhas músicas.
              E eu nem sei por que comprei essa caixa de som enorme, não gosto de barulho, deixo o som fica baixinho
              e minha mente vai se acalmando… se acalmando… Eu sinto meu coração batendo, o céu está ficando
              cada vez mais escuro. Tudo deu certo, no fim das contas. Eu tenho o meu lugar, é do jeito que eu sonhei.
              Não sei se é muito cedo pra dizer isso, mas eu estou feliz!
            </p>
          </div>

        </div>
      </main>
    </>
  );
}

// Mapeamento simples de tamanhos para fontSize CSS em pixels (pode ajustar conforme quiser)
const textSizeMap = {
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
};
