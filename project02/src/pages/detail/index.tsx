import React from 'react';
import { useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router';
import { fetchCoinById, fetchTickerById } from '../../apis';
import Line from '../../components/line';
import Nav from '../../components/nav';
import { LogoContainer } from './styles';

const Detail = () => {
  const { id } = useParams();

  const { isLoading: coinLoading, data: coinInfo } = useQuery(
    ['coinInfo', id],
    () => fetchCoinById(id)
  );
  const { isLoading: tickerLoading, data: tickerInfo } = useQuery(
    ['tickerInfo', id],
    () => fetchTickerById(id)
  );

  const isLoading = coinLoading || tickerLoading;

  return (
    <>
      <Nav />
      <Line text="§§" />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <LogoContainer>
            {/* <img
              src={`https://cryptoicon-api.vercel.app/api/icon/${coinInfo?.symbol.toLowerCase()}`}
              alt="logo"
            /> */}
            <div>{coinInfo?.name}</div>
            <div>/{coinInfo?.symbol}</div>
          </LogoContainer>
          <Line text="§§§" />
          <Outlet context={[coinInfo, tickerInfo]} />
        </>
      )}
    </>
  );
};

export default Detail;
