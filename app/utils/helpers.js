export const dateFormatter = date => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
};
