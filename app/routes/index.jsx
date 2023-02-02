import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';
import { getPosts } from '~/models/posts.server';

import GuitarsList from '~/components/guitars-list';
import PostsList from '~/components/posts-list';

import stylesGuitars from '~/styles/guitars.css';
import stylesBlog from '~/styles/blog.css';

export const meta = () => {};

export const links = () => [
  {
    rel: 'stylesheet',
    href: stylesGuitars
  },
  {
    rel: 'stylesheet',
    href: stylesBlog
  }
];

export const loader = async () => {
  const [guitars, posts] = await Promise.all([getGuitars(), getPosts()]);

  return [guitars.data, posts.data];
};

const Index = () => {
  const [guitars, posts] = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitars} />
      </main>
      <section className='container'>
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
