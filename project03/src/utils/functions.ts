export const addComma = (number: number | undefined): string => {
  if (!number) return '';

  return number.toLocaleString();
};

export const getBeforeWeek = (): string[] => {
  const now = new Date();

  const covertMonthFormat = (month: number): string => (month > 8 ? `${month + 1}` : `0${month + 1}`);
  const covertDateFormat = (date: number) => (date > 9 ? `${date}` : `0${date}`);

  const end = `${now.getFullYear()}-${covertMonthFormat(now.getMonth())}-${covertDateFormat(now.getDate())}`;

  now.setDate(now.getDate() - 6);
  const start = `${now.getFullYear()}-${covertMonthFormat(now.getMonth())}-${covertDateFormat(now.getDate())}`;

  return [start, end];
};
