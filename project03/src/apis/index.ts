import { ICoin, ITicker } from '../interfaces';

export function fetchCoins(): Promise<ICoin[]> {
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) => response.json());
}

export function fetchTickers(): Promise<ITicker[]> {
  return fetch('https://api.coinpaprika.com/v1/tickers').then((response) => response.json());
}

export function fetchCoinById(id: string | undefined): Promise<ICoin[]> {
  return fetch(`https://api.coinpaprika.com/v1/coins/${id}`).then((response) => response.json());
}

export function fetchTickerById(id: string | undefined): Promise<ITicker[]> {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then((response) => response.json());
}
