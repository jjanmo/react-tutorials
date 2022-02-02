import { ITicker, ICoinInfo } from '../interfaces';

export function fetchTickers(): Promise<ITicker[]> {
  return fetch('https://api.coinpaprika.com/v1/tickers').then((response) => response.json());
}

export function fetchCoinById(id: string | undefined): Promise<ICoinInfo[]> {
  return fetch(`https://api.coinpaprika.com/v1/coins/${id}`).then((response) => response.json());
}

export function fetchTickerById(id: string | undefined): Promise<ITicker[]> {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then((response) => response.json());
}
