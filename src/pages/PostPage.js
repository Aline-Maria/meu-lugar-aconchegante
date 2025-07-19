import React from 'react';
import { useParams } from 'react-router-dom';
import postComponents from '../posts'; // mapa Post1, Post2, ...

export default function PostPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const PostComponent = postComponents[numericId];

  if (!PostComponent) {
    return <div className="p-6 text-red-600">Post não encontrado.</div>;
  }

  return <PostComponent />;
}
