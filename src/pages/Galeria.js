import React from 'react';

const imagens = [
  {
    id: 1,
    src: '/images/colagem1.jpg',
    alt: 'Colagem aconchegante 1',
  },
  {
    id: 2,
    src: '/images/colagem2.jpg',
    alt: 'Colagem aconchegante 2',
  },
  {
    id: 3,
    src: '/images/colagem3.jpg',
    alt: 'Colagem aconchegante 3',
  },
  // adicione mais colagens se quiser
];

export default function Galeria() {
  return (
    <main className="bg-[#F6F1E7] min-h-screen text-[#7a5e3c] py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Minha Galeria de Colagens</h1>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {imagens.map((img) => (
          <div key={img.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={img.src} alt={img.alt} className="w-full h-80 object-cover" />
          </div>
        ))}
      </section>
    </main>
  );
}
