import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchPeople = async () =>
  await axios.get(`${BASE_URL}/people`).then((res) => res.data);

export const fetchStarShips = async () =>
  await axios.get(`${BASE_URL}/starships`).then((res) => res.data);
