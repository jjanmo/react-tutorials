export const addComma = (number: number | undefined): string => {
  if (!number) return '';

  return number.toLocaleString();
};
