import { Link } from '@remix-run/react';

const Guitar = ({ guitar }) => {
  const { description, image, price, url, name } = guitar;

  const imageUrl = image.data.attributes.formats.small.url;

  return (
    <div className="guitar">
      <img src={imageUrl} alt={`Guitarra ${name}`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <Link className="link" to={`/guitars/${url}`}>
          Ver Produto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
