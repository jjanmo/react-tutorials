import React, { useEffect, useState } from 'react';
import List from '../../components/list';
import { ICoin, ITicker } from '../../interfaces';
import { Title } from './styles';

const Home = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [tickers, setTickers] = useState<ITicker[]>([]);
  const [coinsLoading, setCoinsLoading] = useState(false);
  const [tickersLoading, setTickersLoading] = useState(false);

  const isLoading = coinsLoading || tickersLoading;

  useEffect(() => {
    setCoinsLoading(true);
    fetch('https://api.coinpaprika.com/v1/coins')
      .then((response) => response.json())
      .then((json) => {
        const data = json.slice(0, 100);
        setCoins(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setCoinsLoading(false));

    setTickersLoading(true);
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        const data = json.slice(0, 100);
        setTickers(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setTickersLoading(false));
  }, []);

  return (
    <>
      <Title>Coins</Title>
      {isLoading ? <div>loading...</div> : <List coins={coins} tickers={tickers} />}
    </>
  );
};

export default Home;
