export const loader = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const result = await response.json();

  return result;
};

const Store = () => <h1>Store</h1>;

export default Store;
