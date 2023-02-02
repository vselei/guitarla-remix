import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';
import { getPosts } from '~/models/posts.server';

import GuitarsList from '~/components/guitars-list';

import stylesGuitars from '~/styles/guitars.css';

export const meta = () => {};

export const links = () => [
  {
    rel: 'stylesheet',
    href: stylesGuitars
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
    </>
  );
};

export default Index;
