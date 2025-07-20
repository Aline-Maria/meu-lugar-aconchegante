import React, { useEffect } from 'react';

export default function GaleriaModal({ imagens, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || currentIndex < 0 || currentIndex >= imagens.length) {
    return null;
  }

  const img = imagens[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
    >
      <button
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
        className="self-end mb-4 text-white text-3xl font-bold focus:outline-none"
        aria-label="Fechar modal"
      >
        &times;
      </button>

      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
        onClick={e => e.stopPropagation()}
      />

      <div className="mt-4 flex gap-8">
        <button
          onClick={e => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={currentIndex === 0}
          className="text-white text-4xl font-bold disabled:opacity-30 disabled:cursor-not-allowed select-none"
          aria-label="Imagem anterior"
        >
          ‹
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            onNext();
          }}
          disabled={currentIndex === imagens.length - 1}
          className="text-white text-4xl font-bold disabled:opacity-30 disabled:cursor-not-allowed select-none"
          aria-label="Próxima imagem"
        >
          ›
        </button>
      </div>
    </div>
  );
}
