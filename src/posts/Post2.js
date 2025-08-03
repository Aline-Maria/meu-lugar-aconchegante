import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";

const icons = [
  { id: 1, src: "/assets/abaju.png", width: 130, height: 135, xPct: 63, yPct: 34.5 },
  { id: 2, src: "/assets/artpop1.png", width: 190, height: 190, xPct: 83, yPct: 23 },
  { id: 3, src: "/assets/artpop2.png", width: 150, height: 160, xPct: 67, yPct: 15 },
  { id: 4, src: "/assets/canecastanley.png", width: 90, height: 90, xPct: 83, yPct: 74.5 },
  { id: 5, src: "/assets/criadomudo.png", width: 300, height: 320, xPct: 16, yPct: 80.5 },
  { id: 6, src: "/assets/flor1.png", width: 175, height: 170, xPct: 51, yPct: 44.5 },
  { id: 7, src: "/assets/flor2.png", width: 175, height: 175, xPct: 10, yPct: 58 },
  { id: 8, src: "/assets/livros.png", width: 120, height: 120, xPct: 17.5, yPct: 63.5 },
  { id: 9, src: "/assets/livros2.png", width: 120, height: 134, xPct: 92, yPct: 74 },
  { id: 10, src: "/assets/luminariachao.png", width: 320, height: 420, xPct: 25, yPct: 50 },
  { id: 11, src: "/assets/mantaxadrez.png", width: 190, height: 200, xPct: 68, yPct: 55 },
  { id: 12, src: "/assets/mesabaixa.png", width: 380, height: 220, xPct: 87, yPct: 86 },
  { id: 13, src: "/assets/mesamadeira.png", width: 330, height: 200, xPct: 63.8, yPct: 51 },
  { id: 14, src: "/assets/quadroflor.png", width: 175, height: 170, xPct: 38.5, yPct: 27 },
  { id: 15, src: "/assets/sofaroxo.png", width: 500, height: 530, xPct: 73, yPct: 60.8 },
  { id: 16, src: "/assets/tapete.png", width: 400, height: 400, xPct: 40, yPct: 70 },
];

export default function Post2({ fundocardWidth = 900, fundocardHeight = 770 }) {
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
  const [topId, setTopId] = useState(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    updateWidth();
    const currentRef = containerRef.current;
    const resizeObserver = new ResizeObserver(updateWidth);
    if (currentRef) resizeObserver.observe(currentRef);
    return () => {
      if (currentRef) resizeObserver.unobserve(currentRef);
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
        if (needsUpdate) animationId = requestAnimationFrame(animate);
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
      relX = Math.max(0, Math.min(relX, 100));
      relY = Math.max(0, Math.min(relY, 100));
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

  useEffect(() => {
    function preventTouchScroll(e) {
      if (draggingId !== null) e.preventDefault();
    }
    document.addEventListener("touchmove", preventTouchScroll, { passive: false });
    return () => document.removeEventListener("touchmove", preventTouchScroll);
  }, [draggingId]);

  function handlePointerDown(e, id) {
    e.preventDefault();
    const containerRect = containerRef.current.getBoundingClientRect();
    const currentPos = targetPositions[id];
    const clickX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const clickY = ((e.clientY - containerRect.top) / containerRect.height) * 100;
    const offsetX = clickX - currentPos.xPct;
    const offsetY = clickY - currentPos.yPct;
    setDraggingId(id);
    setTopId(id);
    setDragOffset({ xPct: offsetX, yPct: offsetY });
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function getZIndex(id) {
    if (draggingId === id) return 1000;
    if (topId === id) return 990;
    const topIcons = [1, 4, 6, 7, 8, 9, 11];
    if (topIcons.includes(id)) return 950;
    if (id === 15) return 930;
    if (id === 13) return 920;
    if (id === 12) return 910;
    if (id === 5) return 900;
    if (id === 10) return 850;
    return 100;
  }

  const post = postsData[0];

  return (
    <>
      <header className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <Link
          className="text-4xl font-architects text-black leading-tight whitespace-pre-line"
          to="/"
        >
          Meu
          <br />
          Lugar
          <br />
          Aconchegante
        </Link>
        <nav className="mt-4 md:mt-0 flex flex-wrap gap-6 text-lg-plus font-medium">
          <Link className="hover:text-slick transition-colors duration-300" to="/">
            Início
          </Link>
          <Link className="hover:text-slick transition-colors duration-300" to="/galeria">
            Galeria
          </Link>
          <Link className="hover:text-slick transition-colors duration-300" to="/sobre">
            Sobre
          </Link>
          <Link className="hover:text-slick transition-colors duration-300" to="/contato">
            Contato
          </Link>
        </nav>
      </header>

      <main className="mx-auto text-cafe max-w-[1343px] px-6 mt-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
            <div
              ref={containerRef}
              className="relative mx-auto overflow-hidden"
              style={{
                width: "100%",
                maxWidth: fundocardWidth + "px",
                aspectRatio: fundocardWidth / fundocardHeight,
                userSelect: draggingId ? "none" : "auto",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/fundocard2.png"}
                alt="Fundo do card"
                className="select-none pointer-events-none"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                draggable={false}
              />
              <div className="absolute inset-0">
                {icons.map(({ id, src, width, height }) => {
                  const pos = positions[id];
                  if (!pos) return null;
                  const scale = containerWidth / fundocardWidth;
                  const widthScaled = width * scale;
                  const heightScaled = height * scale;
                  return (
                    <img
                      key={id}
                      ref={(el) => (iconRefs.current[id] = el)}
                      src={process.env.PUBLIC_URL + src}
                      alt={`Ícone ${id}`}
                      onPointerDown={(e) => handlePointerDown(e, id)}
                      style={{
                        position: "absolute",
                        left: `${pos.xPct}%`,
                        top: `${pos.yPct}%`,
                        width: widthScaled,
                        height: heightScaled,
                        transform: "translate(-50%, -50%)",
                        cursor: draggingId === id ? "grabbing" : "grab",
                        userSelect: "none",
                        zIndex: getZIndex(id),
                        transition: draggingId === id ? "none" : "transform 0.1s ease-out",
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
            <h1 className="text-5xl font-gwendolyn font-bold leading-tight">{post.title}</h1>

            <p className="text-lg">
              Este lugar é uma homenagem ao meu eu do passado, aquela que sobreviveu e (espero) está muito orgulhosa de mim agora. A lembrança mais forte da minha adolescência é passar a tarde toda lendo com meu gato no colo. Ainda me falta um gato.
            </p>

            <p className="text-lg">
              Eu lia vários livros por mês, às vezes mais de um ao mesmo tempo. Me pergunto como deixei meu cérebro ficar tão disperso… Eu realmente acho que fui mais inteligente naquela época. Não sei se foi uma ato exagerado, mas espalhei vários livros que possam me interessar nesta sala para não cair na tentação de pegar o celular. Tem funcionado bem.
            </p>

            <p className="text-lg">
              Batizei este lugar de “sala analógica” e é tão caótica quanto minha mente: tem pop art, tem móveis que não combinam, tem minhas plantinhas e aqui eu posso sonhar! Quando eu fico aqui, sinto que sou a versão mais fiel e honesta de mim mesma, e é desta forma que quero sair e levar meus sonhos para o mundo.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export const postsData = [
  {
    id: "2",
    title: "Do meu cantinho de leitura eu sonho com o mundo!",
    image: "/assets/card2.png",
    text: "Este lugar é uma homenagem ao meu eu do passado, aquela que sobreviveu e (espero) está muito orgulhosa de mim agora. A lembrança mais forte da minha adolescência é passar a tarde toda lendo com meu gato no colo. Ainda me falta um gato.",
  },
];
