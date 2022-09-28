import React from 'react';
import { useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router';
import { fetchCoinById, fetchTickerById } from '../../apis/paprika';
import Line from '../../components/line';
import Nav from '../../components/nav';
import { Coin } from '../../types/coin';
import * as S from './styles';

const Detail = () => {
  const { id } = useParams();

  const { isLoading: coinLoading, data: coin } = useQuery<Coin>(
    ['coin-info', id],
    () => fetchCoinById(id as string)
  );

  const { isLoading: tickerLoading, data: ticker } = useQuery(
    ['ticker-info', id],
    () => fetchTickerById(id as string)
  );

  const isLoading = coinLoading || tickerLoading;

  return (
    <>
      <Nav />
      <Line text="§§" />
      {isLoading ? (
        <S.Loading>loading...</S.Loading>
      ) : (
        <>
          <S.LogoContainer>
            <img src={coin?.logo} alt="logo" />
            <div>{coin?.name}</div>
            <div>/ {coin?.symbol}</div>
          </S.LogoContainer>
          <Line text="§§§" />
          <Outlet context={[coin, ticker]} />
        </>
      )}
    </>
  );
};

export default Detail;
