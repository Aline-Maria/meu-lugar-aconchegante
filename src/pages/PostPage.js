import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const postsData = [
  {
    id: '1',
    title: 'Meu Lugar Aconchegante',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1343&q=80',
    text:
      'Aqui está um texto aconchegante que descreve o lugar e cria uma atmosfera agradável.',
  },
  {
    id: '2',
    title: 'Sala Charmosa',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1343&q=80',
    text:
      'Uma sala com charme, cheia de conforto e calor para você relaxar.',
  },
  {
    id: '3',
    title: 'Varanda com Vista',
    image:
      'https://images.unsplash.com/photo-1501183638714-5e60b3e9e5af?auto=format&fit=crop&w=1343&q=80',
    text:
      'Varanda com uma vista incrível, perfeita para momentos de paz e reflexão.',
  },
];

export default function PostPage() {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === id);

  const [revealHeight, setRevealHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleRatio = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );
      setRevealHeight(visibleRatio * 100);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) return <p className="text-cafe text-center mt-8">Post não encontrado</p>;

  return (
    <div
      ref={containerRef}
      className="max-w-[1343px] mx-auto mt-8 px-12 font-serif text-cafe"
    >
      <Link
        to="/"
        className="inline-block mb-4 text-cafe text-base no-underline hover:underline cursor-pointer"
      >
        ← Voltar
      </Link>
      <h1 className="text-5xl mb-4 font-bold">{post.title}</h1>
      <div
        className="w-full overflow-hidden rounded-3xl mb-4"
        style={{ height: 466 }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[466px] object-cover rounded-b-3xl block"
          style={{
            clipPath: `inset(${100 - revealHeight}% 0 0 0)`,
            transition: 'clip-path 0.3s ease-out',
          }}
        />
      </div>
      <p className="text-lg leading-relaxed">{post.text}</p>
    </div>
  );
}
