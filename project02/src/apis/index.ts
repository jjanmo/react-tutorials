import axios from 'axios';

export const PAPRIKA_API = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1',
});

export const FINNHUB_API = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
});
