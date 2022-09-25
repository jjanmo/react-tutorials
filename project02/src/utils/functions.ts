import { OHLCData } from '../types/coin';

export const roundNumber = (price: number): string => {
  if (price < 0.0001) return price.toFixed(8);
  else if (price < 1) return price.toFixed(4);
  else return price.toFixed(2);
};

export const addComma = (number: number | undefined): string => {
  if (!number) return '';

  return number.toLocaleString();
};

export const covertMonthFormat = (month: number): string =>
  month > 8 ? `${month + 1}` : `0${month + 1}`;

export const covertDateFormat = (date: number) =>
  date > 9 ? `${date}` : `0${date}`;

export const getDurationDate = (duration: string): string[] => {
  const now = new Date();
  const end = `${now.getFullYear()}-${covertMonthFormat(
    now.getMonth()
  )}-${covertDateFormat(now.getDate())}`;

  switch (duration) {
    case '1Week': {
      now.setDate(now.getDate() - 7);
      break;
    }
    case '1Month': {
      now.setDate(now.getDate() - 30);
      break;
    }
    case '6Month': {
      now.setDate(now.getDate() - 180);
      break;
    }
    case '1Year': {
      now.setDate(now.getDate() - 365);
      break;
    }
    default: {
      now.setDate(now.getDate() - 1);
    }
  }
  const start = `${now.getFullYear()}-${covertMonthFormat(
    now.getMonth()
  )}-${covertDateFormat(now.getDate())}`;

  return [start, end];
};

export const xaxisFormatter = (value: number | string): string => {
  const date = new Date(value);

  return `${date.getFullYear()}-${covertMonthFormat(
    date.getMonth()
  )}-${covertDateFormat(date.getDate())}`;
};

export const parseCandleData = (data: OHLCData[]) => {
  return data.map((item) => ({
    x: new Date(item.time_open),
    y: [
      roundNumber(item.open),
      roundNumber(item.high),
      roundNumber(item.low),
      roundNumber(item.close),
    ],
  }));
};
