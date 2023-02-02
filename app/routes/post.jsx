import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import Post from '../components/post';

import styles from '~/styles/blog.css';

export const meta = () => ({
  title: 'GuitarLA Remix | Nosso Blog',
  description: 'Blog de música e venda de guitarras'
})

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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
