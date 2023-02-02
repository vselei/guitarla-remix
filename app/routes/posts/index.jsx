import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';

import PostsList from '~/components/posts-list';

export const meta = () => ({
  title: 'GuitarLA Remix | Nosso Blog',
  description: 'Blog de música e venda de guitarras'
});


export const loader = async () => {
  const posts = await getPosts();
  return posts.data;
};

const Blog = () => {
  const posts = useLoaderData();

  return <PostsList posts={posts} />;
};

export default Blog;
