import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

const icons = [
  { id: 1, src: '/assets/janelafechada.png', width: 420, height: 450, xPct: 21 , yPct: 25 },
  { id: 2, src: '/assets/poltronamarrom.png', width: 290, height: 370, xPct: 16.5, yPct: 62 },
  { id: 3, src: '/assets/samambaia.png', width: 270, height: 150, xPct: 70, yPct: 55 },
  { id: 4, src: '/assets/vasopreto.png', width: 250, height: 145, xPct: 35, yPct: 28 },
  { id: 5, src: '/assets/mesacentro.png', width: 300, height: 380, xPct: 40, yPct: 83 },
  { id: 6, src: '/assets/armario.png', width: 270, height: 350, xPct: 55, yPct: 44.5 },
  { id: 7, src: '/assets/orquidea.png', width: 110, height: 115, xPct: 48, yPct: 36.5 },
  { id: 8, src: '/assets/vasobranco.png', width: 310, height: 165, xPct: 16, yPct: 89 },
  { id: 9, src: '/assets/janelaaberta.png', width: 450, height: 450, xPct: 82, yPct: 26 },
  { id: 10, src: '/assets/sofaverde.png', width: 490, height: 470, xPct: 72.6, yPct: 72 },
  { id: 11, src: '/assets/caixasom.png', width: 190, height: 200, xPct: 35.9, yPct: 46.8 },
];

export default function Post1({ fundocardWidth = 900, fundocardHeight = 770 }) {
  const containerRef = useRef(null);
  const iconRefs = useRef({});

  const [positions, setPositions] = useState(() =>
    icons.reduce((acc, icon) => {
      acc[icon.id] = { xPct: icon.xPct, yPct: icon.yPct };
      return acc;
    }, {})
  );

  const [targetPositions, setTargetPositions] = useState(() =>
    icons.reduce((acc, icon) => {
      acc[icon.id] = { xPct: icon.xPct, yPct: icon.yPct };
      return acc;
    }, {})
  );

  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ xPct: 0, yPct: 0 });
  const [containerWidth, setContainerWidth] = useState(fundocardWidth);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationId;

    const animate = () => {
      setPositions((prev) => {
        const newPositions = { ...prev };
        let needsUpdate = false;

        for (const id in prev) {
          const current = prev[id];
          const target = targetPositions[id];

          const newX = current.xPct + (target.xPct - current.xPct) * 0.2;
          const newY = current.yPct + (target.yPct - current.yPct) * 0.2;

          if (Math.abs(newX - target.xPct) > 0.1 || Math.abs(newY - target.yPct) > 0.1) {
            needsUpdate = true;
          }

          newPositions[id] = { xPct: newX, yPct: newY };
        }

        if (needsUpdate) {
          animationId = requestAnimationFrame(animate);
        }

        return newPositions;
      });
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [targetPositions]);

  useEffect(() => {
    const onPointerMove = (e) => {
      if (draggingId === null || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      let relX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      let relY = ((e.clientY - containerRect.top) / containerRect.height) * 100;

      relX -= dragOffset.xPct;
      relY -= dragOffset.yPct;

      if (relX < 0) relX = 0;
      if (relX > 100) relX = 100;
      if (relY < 0) relY = 0;
      if (relY > 100) relY = 100;

      setTargetPositions((prev) => ({
        ...prev,
        [draggingId]: { xPct: relX, yPct: relY },
      }));
    };

    const onPointerUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [draggingId, dragOffset]);

  function handlePointerDown(e, id) {
    if (id === 1 || id === 9) return;

    e.preventDefault();

    const containerRect = containerRef.current.getBoundingClientRect();
    const currentPos = targetPositions[id];

    const clickX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const clickY = ((e.clientY - containerRect.top) / containerRect.height) * 100;

    const offsetX = clickX - currentPos.xPct;
    const offsetY = clickY - currentPos.yPct;

    setDraggingId(id);
    setDragOffset({ xPct: offsetX, yPct: offsetY });
    e.currentTarget.setPointerCapture(e.pointerId);
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
      <header className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <a
          className="text-4xl font-architects text-black leading-tight whitespace-pre-line"
          href="/meu-lugar-aconchegante"
        >
          Meu
          <br />
          Lugar
          <br />
          Aconchegante
        </a>
        <nav className="mt-4 md:mt-0 flex flex-wrap gap-6 text-lg-plus font-medium">
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante">Início</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/galeria">Galeria</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/sobre">Sobre</a>
          <a className="hover:text-slick transition-colors duration-300" href="/meu-lugar-aconchegante/contato">Contato</a>
        </nav>
      </header>

      <main className="mx-auto text-cafe max-w-[1343px] px-6 mt-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
            <div
              ref={containerRef}
              className="relative mx-auto overflow-hidden"
              style={{
                width: '100%',
                maxWidth: fundocardWidth + 'px',
                aspectRatio: fundocardWidth / fundocardHeight,
                userSelect: draggingId ? 'none' : 'auto',
                position: 'relative',
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/fundocard1.png'}
                alt="Fundo do card"
                className="select-none pointer-events-none"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                draggable={false}
              />
              <div className="absolute inset-0">
                {icons.map(({ id, src, width, height }) => {
                  const pos = positions[id];
                  const isFixed = id === 1 || id === 9;
                  const scale = containerWidth / fundocardWidth;
                  const widthScaled = width * scale;
                  const heightScaled = height * scale;

                  return (
                    <img
                      key={id}
                      ref={(el) => (iconRefs.current[id] = el)}
                      src={process.env.PUBLIC_URL + src}
                      alt={`Ícone ${id}`}
                      onPointerDown={isFixed ? undefined : (e) => handlePointerDown(e, id)}
                      style={{
                        position: 'absolute',
                        left: `${pos.xPct}%`,
                        top: `${pos.yPct}%`,
                        width: widthScaled,
                        height: heightScaled,
                        transform: 'translate(-50%, -50%)',
                        cursor: draggingId === id ? 'grabbing' : (isFixed ? 'default' : 'grab'),
                        userSelect: 'none',
                        zIndex: getZIndex(id),
                        transition: draggingId === id ? 'none' : 'transform 0.1s ease-out',
                      }}
                      draggable={false}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-4 max-w-[570px] text-center md:text-left">
              <p className="text-base font-bold text-cafe">
                Que tal redecorar esta sala? Clique e arraste para mudar os objetos de lugar 💡
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex flex-col items-start text-left leading-relaxed font-hand space-y-4">
            <h1 className="text-5xl font-gwendolyn font-bold leading-tight">
              Uma sala iluminada e cheia de plantas
            </h1>

            <p className="text-lg">
              É pra cá que eu venho quando minha alma pede um descanso. Eu que montei tudo isso:
              as plantas, minha poltrona marrom que já começou a desbotar, meu sofá de segunda mão...
            </p>

            <p className="text-lg">
              Eu deito neste sofá, olho pela janela e vejo o céu: não um muro com a tinta descascando,
              não uma janela (e a vida) do vizinho. É o céu! Minhas plantas se abrem. Quem cria plantas sabe
              que elas se abrem com a luz do sol. Lá fora também tem árvores e o cheiro do ar fica uma delícia
              quando chove, mas hoje eu vejo o dourado do crepúsculo.
            </p>

            <p className="text-lg">
              Aqui eu estou protegida, eu posso respirar num ritmo mais calmo, eu posso ouvir as minhas músicas.
              E eu nem sei por que comprei essa caixa de som enorme, não gosto de barulho, deixo o som ficar baixinho
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
