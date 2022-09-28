import React from 'react';
import { useQuery } from 'react-query';
import { fetchTickers } from '../../apis/paprika';
import List from '../../components/list';
import { Ticker } from '../../types/ticker';

const Home = () => {
  const { isLoading, data: tickers } = useQuery<Ticker[]>(
    'tickers',
    fetchTickers
  );

  if (!tickers) return null;

  return <>{isLoading ? <div>loading...</div> : <List tickers={tickers} />}</>;
};

export default Home;
