import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';

import GuitarsList from '~/components/guitars-list';

export const meta = () => ({
  title: 'GuitaLA Remix | Loja de Guitarras',
  description: 'Nossa coleção de guitarras'
});

export const loader = async () => {
  const guitars = await getGuitars();

  return guitars.data;
};

const Store = () => {
  const guitars = useLoaderData();

  return <GuitarsList guitars={guitars} />;
};

export default Store;
