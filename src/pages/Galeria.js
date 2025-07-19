import React from 'react';

const imagens = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + '/assets/card1.png',
    alt: 'Uma sala iluminada e cheia de plantas',
    link: '/meu-lugar-aconchegante/post/1', // URL completa do post 1
  },
];

export default function Galeria() {
  return (
    <main className="bg-[#F6F1E7] min-h-screen text-[#7a5e3c] py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-10">
        Aqui você encontra todas as colagens que fiz até agora 🌷
      </h1>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {imagens.map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-80 object-cover"
              />
            </a>
            <h2 className="font-gwendolyn font-semibold text-2xl text-center mt-4">
              {img.alt}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
}
