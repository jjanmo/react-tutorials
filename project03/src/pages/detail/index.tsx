import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Nav from '../../components/nav';
import { ICoinInfo, ILocation, ITicker } from '../../interfaces';
import { Title } from '../home/styles';

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation() as ILocation;

  const [coinInfo, setCoinInfo] = useState<ICoinInfo>();
  const [coinInfoLoading, setCoinInfoLoading] = useState<boolean>(false);
  const [tickerInfo, setTickerInfo] = useState<ITicker>();
  const [tickerInfoLoading, setTickerInfoLoading] = useState<boolean>(false);

  const isLoading = coinInfoLoading || tickerInfoLoading;

  useEffect(() => {
    setCoinInfoLoading(true);
    fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoinInfo(json);
      })
      .catch((e) => console.log(e))
      .finally(() => setCoinInfoLoading(false));

    setTickerInfoLoading(true);
    fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTickerInfo(json);
      })
      .catch((e) => console.log(e))
      .finally(() => setTickerInfoLoading(false));
  }, []);

  return (
    <>
      <Nav />
      <Outlet context={[coinInfo, tickerInfo, 'aaa']} />
    </>
  );
};

export default Detail;
