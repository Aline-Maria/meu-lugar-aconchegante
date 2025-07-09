import React from 'react';
import { useNavigate } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Cantinho Aconchegante',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Varanda Tranquila',
    image:
      'https://images.unsplash.com/photo-1522098543979-ffc7f79d7f43?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Sala com Lareira',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9e9d6ac6a?auto=format&fit=crop&w=800&q=80',
  },
];

export default function PostsList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto my-8 flex flex-col gap-12 px-4">
      {posts.map(({ id, title, image }) => (
        <div
          key={id}
          className="flex items-center bg-[#F6F1E7] rounded-3xl shadow-lg max-w-[1343px] h-[466px] overflow-hidden px-12"
        >
          <img
            src={image}
            alt={title}
            className="w-1/2 h-full object-cover rounded-l-3xl"
          />
          <div className="w-1/2 p-8 flex flex-col justify-between h-full">
            <h3 className="text-4xl text-[#704214] mt-0">{title}</h3>
            <button
              onClick={() => navigate(`/post/${id}`)}
              type="button"
              className="self-start px-6 py-2 bg-[#A17C4B] text-[#F6F1E7] rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#8A6638]"
            >
              Ver mais...
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
