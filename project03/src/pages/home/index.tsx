import React from 'react';
import { useQuery } from 'react-query';
import List from '../../components/list';
import { ITicker } from '../../interfaces';
import { fetchTickers } from '../../apis';

const Home = () => {
  const { isLoading, data: tickers } = useQuery<ITicker[]>('tickers', fetchTickers);

  return <>{isLoading ? <div>loading...</div> : <List tickers={tickers} />}</>;
};

export default Home;
