import { PR_API } from '.';

export const fetchCoins = async () =>
  await PR_API.get('/coins').then((res) => res.data);

export const fetchTickers = async () =>
  await PR_API.get('/tickers').then((res) => res.data);
