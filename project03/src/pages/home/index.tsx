import React, { useEffect, useState } from 'react';
import List from '../../components/list';
import { Title } from './styles';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then((response) => response.json())
      .then((json) => {
        const data = json.slice(0, 100);
        setCoins(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Title>Coins</Title>
      {isLoading ? <div>'loading...'</div> : <List coins={coins} />}
    </>
  );
};

export default Home;
