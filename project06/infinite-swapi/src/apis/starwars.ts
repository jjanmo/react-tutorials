import { SW_API } from './index';
import * as T from './types';

export const fetchPeople = async () =>
  await SW_API.get<T.FetchPeopleResponse>('/people').then((res) => res.data);

export const fetchStarShips = async () =>
  await SW_API.get('/starships').then((res) => res.data);
