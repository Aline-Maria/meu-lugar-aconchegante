import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post({ title, image, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${id}`)}
      className="cursor-pointer bg-[#F6F1E7] rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden p-6 m-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-2xl"
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-[#704214] text-center md:text-left">
          {title}
        </h2>
      </div>
    </div>
  );
}
