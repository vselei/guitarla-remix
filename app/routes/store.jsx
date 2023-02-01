import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';

import Guitar from '~/components/guitar';

import styles from '~/styles/guitars.css';

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
      <h2 className="heading">Nossa Coleção</h2>

      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map(guitar => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Store;
