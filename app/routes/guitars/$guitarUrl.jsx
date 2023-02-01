import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

import styles from '~/styles/guitars.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

export const loader = async ({ params }) => {
  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl);

  return guitar;
};

const Guitar = () => {
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <main className="container guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Imagem da guitarra ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
      </div>
    </main>
  );
};

export default Guitar;
