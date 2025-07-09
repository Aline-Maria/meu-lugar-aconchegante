import React, { useState, useEffect } from 'react';

const allPosts = [
  {
    id: '1',
    title: 'Meu Lugar Aconchegante',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1343&q=80',
  },
  {
    id: '2',
    title: 'Sala Charmosa',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1343&q=80',
  },
  {
    id: '3',
    title: 'Varanda com Vista',
    image:
      'https://images.unsplash.com/photo-1501183638714-5e60b3e9e5af?auto=format&fit=crop&w=1343&q=80',
  },
];

const PAGE_SIZE = 2;

export default function Home() {
  const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, PAGE_SIZE));
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200
      ) {
        setVisiblePosts((prev) => {
          const nextPosts = allPosts.slice(prev.length, prev.length + PAGE_SIZE);
          if (nextPosts.length === 0) {
            setIsEnd(true);
            return prev;
          }
          return [...prev, ...nextPosts];
        });
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-[#F6F1E7] min-h-screen text-[#7a5e3c] py-8 px-4 flex flex-col items-center gap-12">
      {visiblePosts.map((post) => (
        <article
          key={post.id}
          className="w-[1343px] h-[466px] flex rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-1/2 h-full object-cover"
          />
          <div className="w-1/2 p-12 flex flex-col items-start justify-start">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            {/* Aqui você pode adicionar texto adicional abaixo do título, se quiser */}
          </div>
        </article>
      ))}
      {isEnd && (
        <p className="text-center text-lg opacity-70 mt-4 max-w-[600px]">
          Você chegou ao final da página, obrigada por visitar meu lugar aconchegante 🌷
        </p>
      )}
    </main>
  );
}
