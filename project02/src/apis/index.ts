import axios from 'axios';
import { Ticker } from '../types/ticker';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchTickers = () =>
  axios.get<Ticker[]>(`${BASE_URL}/tickers`).then((res) => res.data);

// export function fetchTickers(): Promise<ITicker[]> {
//   return fetch(`${BASIC_URL}v1/tickers`).then((response) => response.json());
// }

// export function fetchCoinById(id: string | undefined): Promise<ICoinInfo> {
//   return fetch(`https://api.coinpaprika.com/v1/coins/${id}`).then((response) =>
//     response.json()
//   );
// }

// export function fetchTickerById(id: string | undefined): Promise<ITicker> {
//   return fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then(
//     (response) => response.json()
//   );
// }

// export function fetchOHLCData(
//   id: string | undefined,
//   start: string,
//   end: string
// ): Promise<IOHLCData[]> {
//   return fetch(
//     `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/historical?start=${start}&end=${end}`
//   ).then((response) => response.json());
// }
