import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import postsData from '../data/postsData';
import PostCard from '../components/PostCard';

export default function Home() {
  const navigate = useNavigate();

  // Post 1 fixo
  const post1 = postsData.find(post => String(post.id) === '1');

  // Outros posts (exceto post 1), ordenados do maior id para o menor
  const otherPosts = postsData
    .filter(post => String(post.id) !== '1')
    .sort((a, b) => Number(b.id) - Number(a.id)); // decrescente

  // Estado para posts que vão carregando, começa vazio
  const [visibleExtraPosts, setVisibleExtraPosts] = useState([]);

  const [hasMore, setHasMore] = useState(otherPosts.length > 0);

  const fetchMorePosts = () => {
    const nextIndex = visibleExtraPosts.length;

    if (nextIndex < otherPosts.length) {
      const nextPost = otherPosts[nextIndex];

      setTimeout(() => {
        // Adiciona no topo da lista de extras (para que fique acima dos que já existem)
        setVisibleExtraPosts(prev => [nextPost, ...prev]);
        if (nextIndex + 1 === otherPosts.length) {
          setHasMore(false);
        }
      }, 600);
    } else {
      setHasMore(false);
    }
  };

  if (!post1) {
    return <p className="text-center p-6">Post 1 não encontrado.</p>;
  }

  return (
    <InfiniteScroll
      dataLength={visibleExtraPosts.length + 1}
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<p className="text-center text-cafe py-6">Carregando mais aconchego...</p>}
      className="flex flex-col items-center gap-10 py-8 bg-white"
    >
      {/* Posts carregados dinamicamente */}
      {visibleExtraPosts.map(post => (
        <div
          key={post.id}
          className="w-full max-w-[90%] md:max-w-[1343px] cursor-pointer"
          onClick={() => navigate(`/post/${post.id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigate(`/post/${post.id}`);
            }
          }}
          aria-label={`Abrir post: ${post.title}`}
        >
          <PostCard
            id={post.id}
            title={post.title}
            image={
              post.image && post.image.startsWith('/assets/')
                ? process.env.PUBLIC_URL + post.image
                : post.image
            }
            text={post.text}
            onClick={() => navigate(`/post/${post.id}`)}
          />
        </div>
      ))}

      {/* Post 1 sempre por último */}
      <div
        key={post1.id}
        className="max-w-[1343px] w-full cursor-pointer"
        onClick={() => navigate(`/post/${post1.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(`/post/${post1.id}`);
          }
        }}
        aria-label={`Abrir post: ${post1.title}`}
      >
        <PostCard
          id={post1.id}
          title={post1.title}
          image={
            post1.image && post1.image.startsWith('/assets/')
              ? process.env.PUBLIC_URL + post1.image
              : post1.image
          }
          text={post1.text}
          onClick={() => navigate(`/post/${post1.id}`)}
        />
      </div>
    </InfiniteScroll>
  );
}
