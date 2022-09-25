import { Coin } from '../types/coin';
import { Ticker } from '../types/ticker';
import { PAPRIKA_API } from '../apis';

export const fetchTickers = () =>
  PAPRIKA_API.get<Ticker[]>('/tickers').then((res) => res.data);

export const fetchCoinById = (id: string) =>
  PAPRIKA_API.get<Coin>(`/coins/${id}`).then((res) => res.data);

export const fetchTickerById = (id: string) =>
  PAPRIKA_API.get<Ticker>(`/tickers/${id}`).then((res) => res.data);

// OHLC 데이터를 일봉으로 밖에 안보여줌 그런데 free tier 제한이 하루임... 😢
export const fetchOHLCData = ({
  id,
  start,
  end,
  limit,
}: {
  id: string;
  start: number;
  end: number;
  limit: number;
}) =>
  PAPRIKA_API.get(
    `/coins/${id}/ohlcv/historical?start=${start}&end=${end}&limit=${limit}`
  ).then((res) => res.data);
