import { getGuitar } from '~/models/guitars.server';

export const loader = async ({ params }) => {
  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl);

  return guitar;
};

const Guitar = () => {
  return <h1>Guitar</h1>;
};

export default Guitar;
