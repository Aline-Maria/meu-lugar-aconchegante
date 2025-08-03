import React from 'react';
import { useNavigate } from 'react-router-dom';
import postsData from '../data/postsData';
import PostCard from './PostCard';

export default function PostsList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1343px] mx-auto my-8 flex flex-col gap-6 sm:gap-8 md:gap-12 px-2 sm:px-6 md:px-4">
      {postsData.map(({ id, title, image, text }) => (
        <div
          key={id}
          className="rounded-2xl overflow-hidden shadow-md cursor-pointer"
          onClick={() => navigate(`/post/${id}`)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigate(`/post/${id}`);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Abrir post: ${title}`}
        >
          <PostCard
            id={id}
            title={title}
            image={image && image.startsWith('/assets/') ? process.env.PUBLIC_URL + image : image}
            text={text}
          />
        </div>
      ))}
    </div>
  );
}
