import React from 'react';
import { fetchTickers } from '../../apis/paprika';
import List from '../../components/list';
import { Ticker } from '../../types/ticker';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { isLoading, data: tickers } = useQuery<Ticker[]>({ queryKey: ['tickers'], queryFn: fetchTickers });

  if (!tickers) return null;

  return <>{isLoading ? <div>loading...</div> : <List tickers={tickers} />}</>;
};

export default Home;
