import { IOHLCData } from './../interfaces';

export const addComma = (number: number | undefined): string => {
  if (!number) return '';

  return number.toLocaleString();
};

const covertMonthFormat = (month: number): string => (month > 8 ? `${month + 1}` : `0${month + 1}`);
const covertDateFormat = (date: number) => (date > 9 ? `${date}` : `0${date}`);
const fixNumber = (price: number | undefined): string | undefined =>
  price && price < 2 ? price.toFixed(8) : price?.toFixed(4);

export const getBeforeWeek = (): string[] => {
  const now = new Date();
  const end = `${now.getFullYear()}-${covertMonthFormat(now.getMonth())}-${covertDateFormat(now.getDate())}`;

  now.setDate(now.getDate() - 13);
  const start = `${now.getFullYear()}-${covertMonthFormat(now.getMonth())}-${covertDateFormat(now.getDate())}`;

  return [start, end];
};

export const parseCandleData = (data: IOHLCData[] | undefined) => {
  return data?.map((item) => ({
    x: new Date(item.time_open),
    y: [fixNumber(item.open), fixNumber(item.high), fixNumber(item.low), fixNumber(item.close)],
  }));
};

export const xFormatter = (value: number | string): string => {
  const date = new Date(value);

  return `${date.getFullYear()}-${covertMonthFormat(date.getMonth())}-${covertDateFormat(date.getDate())}`;
};
