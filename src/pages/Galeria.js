import React, { useState } from 'react';
import GaleriaModal from '../components/GaleriaModal';
import { Link } from 'react-router-dom';

const imagens = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + '/assets/card1.png',
    alt: 'Uma sala iluminada e cheia de plantas',
  },
];

export default function Galeria() {
  const [modalIndex, setModalIndex] = useState(null);

  function openModal(index) {
    setModalIndex(index);
  }
  function closeModal() {
    setModalIndex(null);
  }
  function prevImage() {
    setModalIndex((i) => (i > 0 ? i - 1 : i));
  }
  function nextImage() {
    setModalIndex((i) => (i < imagens.length - 1 ? i + 1 : i));
  }

  return (
    <main className="bg-[#F6F1E7] min-h-screen text-[#7a5e3c] py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 max-w-3xl mx-auto">
        Aqui você encontra todas as colagens que fiz até agora 🌷
      </h1>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {imagens.map((img, index) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Abrir imagem: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <h2 className="font-gwendolyn font-semibold text-2xl text-center mt-4 px-4">
              {img.alt}
            </h2>
          </div>
        ))}
      </section>

      {modalIndex !== null && (
        <GaleriaModal
          imagens={imagens}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </main>
  );
}
