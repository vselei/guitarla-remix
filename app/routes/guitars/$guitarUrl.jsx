import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

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

const Guitar = () => {
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <div className="guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Imagem da guitarra ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
        <form className="form">
          <label htmlFor="qty">Quantidade</label>
          <select id="qty">
            <option value="">-- Selecione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Adicionar ao Carrinho" />
        </form>
      </div>
    </div>
  );
};

export default Guitar;
