import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';

import styles from '~/styles/blog.css';
import PostsList from '~/components/posts-list';

export const meta = () => ({
  title: 'GuitarLA Remix | Nosso Blog',
  description: 'Blog de música e venda de guitarras'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

export const loader = async () => {
  const posts = await getPosts();
  return posts.data;
};

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container">
      <PostsList posts={posts} />
    </main>
  );
};

export default Blog;
