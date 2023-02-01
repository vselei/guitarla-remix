export const getGuitars = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  return await response.json();
};
