import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import postsData from '../data/postsData';
import PostCard from '../components/PostCard';

export default function Home() {
  const navigate = useNavigate();

  const post1 = postsData.find(post => String(post.id) === '1');
  const post2 = postsData.find(post => String(post.id) === '2');

  const otherPosts = postsData
    .filter(post => String(post.id) !== '1' && String(post.id) !== '2')
    .sort((a, b) => Number(b.id) - Number(a.id));

  const [visibleExtraPosts, setVisibleExtraPosts] = useState([]);
  const [hasMore, setHasMore] = useState(otherPosts.length > 0);

  const fetchMorePosts = () => {
    const nextIndex = visibleExtraPosts.length;

    if (nextIndex < otherPosts.length) {
      const nextPost = otherPosts[nextIndex];

      setTimeout(() => {
        setVisibleExtraPosts(prev => [nextPost, ...prev]);
        if (nextIndex + 1 === otherPosts.length) {
          setHasMore(false);
        }
      }, 600);
    } else {
      setHasMore(false);
    }
  };

  if (!post1 || !post2) {
    return <p className="text-center p-6">Posts 1 ou 2 não encontrados.</p>;
  }

  return (
    <InfiniteScroll
      dataLength={visibleExtraPosts.length + 2} 
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<p className="text-center text-cafe py-6">Carregando mais aconchego...</p>}
      className="flex flex-col items-center gap-10 py-8 bg-white"
    >
      {/* Renderiza post2 */}
      <div
        key={post2.id}
        className="max-w-[1343px] w-full cursor-pointer"
        onClick={() => navigate(`/post/${post2.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(`/post/${post2.id}`);
          }
        }}
        aria-label={`Abrir post: ${post2.title}`}
      >
        <PostCard
          id={post2.id}
          title={post2.title}
          image={
            post2.image && post2.image.startsWith('/assets/')
              ? process.env.PUBLIC_URL + post2.image
              : post2.image
          }
          text={post2.text}
          onClick={() => navigate(`/post/${post2.id}`)}
        />
      </div>

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
