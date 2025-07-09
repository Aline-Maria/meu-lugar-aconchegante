import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post({ title, image, id }) {
  const navigate = useNavigate();

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      navigate(`/post/${id}`);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/post/${id}`)}
      onKeyDown={handleKeyDown}
      className="cursor-pointer bg-[#F6F1E7] rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden p-6 m-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="md:w-1/2 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`Imagem do post: ${title}`}
          className="w-full h-[400px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-[#A17C4B] text-center md:text-left">
          {title}
        </h2>
      </div>
    </div>
  );
}
