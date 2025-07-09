import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const allPosts = [
  {
    id: 1,
    title: 'Varanda Charmosa',
    image: 'https://source.unsplash.com/1343x466/?cozy,balcony',
    description: 'Um espaço com plantas, luz natural e tranquilidade.',
  },
  {
    id: 2,
    title: 'Leitura em Paz',
    image: 'https://source.unsplash.com/1343x466/?cozy,books',
    description: 'Um cantinho para relaxar com um bom livro.',
  },
  {
    id: 3,
    title: 'Sala Aconchegante',
    image: 'https://source.unsplash.com/1343x466/?cozy,living-room',
    description: 'Sofás confortáveis e luz quente para o fim de tarde.',
  },
  {
    id: 4,
    title: 'Luz Natural',
    image: 'https://source.unsplash.com/1343x466/?cozy,window',
    description: 'Iluminação suave que aquece o ambiente.',
  },
  {
    id: 5,
    title: 'Tarde Preguiçosa',
    image: 'https://source.unsplash.com/1343x466/?cozy,nap',
    description: 'Almofadas, cobertor e tempo para não fazer nada.',
  },
  {
    id: 6,
    title: 'Estudo Tranquilo',
    image: 'https://source.unsplash.com/1343x466/?cozy,study',
    description: 'Ambiente propício para aprender com calma.',
  },
];

export default function PostList() {
  const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 3));

  const fetchMoreData = () => {
    const next = allPosts.slice(visiblePosts.length, visiblePosts.length + 3);
    setTimeout(() => {
      setVisiblePosts([...visiblePosts, ...next]);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={visiblePosts.length}
      next={fetchMoreData}
      hasMore={visiblePosts.length < allPosts.length}
      loader={
        <h4 className="text-center text-cafe">Carregando mais aconchego...</h4>
      }
      endMessage={
        <p className="text-center mt-8 text-cafe font-semibold">
          Chegamos ao fim do aconchego por hoje ☕
        </p>
      }
    >
      <section className="flex flex-col items-center p-8 gap-6">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="w-[1343px] h-[466px] flex overflow-hidden rounded-3xl shadow-lg bg-neve"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-1/2 h-full object-cover"
            />
            <div className="w-1/2 p-12 flex flex-col justify-start">
              <h2 className="text-4xl font-bold text-cafe mb-2">{post.title}</h2>
              <p className="text-lg text-cafe opacity-80">{post.description}</p>
            </div>
          </div>
        ))}
      </section>
    </InfiniteScroll>
  );
}
