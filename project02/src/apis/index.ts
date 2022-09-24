import axios from 'axios';
import { Coin } from '../types/coin';
import { Ticker } from '../types/ticker';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchTickers = () =>
  axios.get<Ticker[]>(`${BASE_URL}/tickers`).then((res) => res.data);

export const fetchCoinById = (id: string) =>
  axios.get<Coin>(`${BASE_URL}/coins/${id}`).then((res) => res.data);

export const fetchTickerById = (id: string) =>
  axios.get<Ticker>(`${BASE_URL}/tickers/${id}`).then((res) => res.data);

// export function fetchOHLCData(
//   id: string | undefined,
//   start: string,
//   end: string
// ): Promise<IOHLCData[]> {
//   return fetch(
//     `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/historical?start=${start}&end=${end}`
//   ).then((response) => response.json());
// }
