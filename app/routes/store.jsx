import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';

import styles from '~/styles/guitars.css';

import GuitarsList from '~/components/guitars-list';

export const meta = () => ({
  title: 'GuitaLA Remix | Loja de Guitarras',
  description: 'Nossa coleção de guitarras'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

export const loader = async () => {
  const guitars = await getGuitars();

  return guitars.data;
};

const Store = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <GuitarsList guitars={guitars} />
    </main>
  );
};

export default Store;
