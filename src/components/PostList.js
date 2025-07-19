import React from 'react';
import { useNavigate } from 'react-router-dom';
import postsData from '../data/postsData';
import PostCard from './PostCard';

export default function PostsList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1343px] mx-auto my-8 flex flex-col gap-12 px-4">
      {postsData.map(({ id, title, image, text }) => (
        <div
          key={id}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <PostCard
            id={id}
            title={title}
            image={image}
            text={text}
            onClick={() => navigate(`/post/${id}`)}
          />
        </div>
      ))}
    </div>
  );
}
