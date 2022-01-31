import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import List from '../../components/list';
import { ICoin, ITicker } from '../../interfaces';
import { fetchCoins, fetchTickers } from '../../apis';

const Home = () => {
  const { isLoading: coinsLoading, data: coins } = useQuery<ICoin[]>('coins', fetchCoins);
  const { isLoading: tickersLoading, data: tickers } = useQuery<ITicker[]>('tickers', fetchTickers);

  const isLoading = coinsLoading || tickersLoading;

  return <>{isLoading ? <div>loading...</div> : <List coins={coins} tickers={tickers} />}</>;
};

export default Home;
