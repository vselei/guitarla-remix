export const getGuitars = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  return await response.json();
};

export const getGuitar = async (url) => {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const result = await response.json();
  return result;
};
