import axios from 'axios';

const STARTWARS_BASE_URL = 'https://swapi.dev/api/';
const PAPRIKA_BASE_URL = 'https://api.coinpaprika.com/v1/';

export const SW_API = axios.create({
  baseURL: STARTWARS_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const PR_API = axios.create({
  baseURL: PAPRIKA_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
