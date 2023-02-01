import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

import styles from '~/styles/guitars.css';

export const loader = async ({ params }) => {
  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra não encontrada'
    });
  }

  return guitar;
};

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: 'GuitarLA Remix | Guitarra Não Encontrada',
      description: 'Venda de guitarras. Guitarra não encontrada.'
    };
  }

  return {
    title: `GuitarLA Remix | ${data.data[0].attributes.name}`,
    description: `Venda de guitarras. Guitarra ${data.data[0].attributes.name}}`
  };
};

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

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
