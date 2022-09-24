import React from 'react';
import { useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router';
import { fetchCoinById } from '../../apis';
import Line from '../../components/line';
import Nav from '../../components/nav';
import { Coin } from '../../types/coin';
import * as S from './styles';

const Detail = () => {
  const { id } = useParams();

  const { isLoading: coinLoading, data: coin } = useQuery<Coin>(
    ['coin', id],
    () => fetchCoinById(id as string)
  );

  // const { isLoading: tickerLoading, data: tickerInfo } = useQuery(
  //   ['tickerInfo', id],
  //   () => fetchTickerById(id)
  // );

  const isLoading = coinLoading;

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
          <Outlet context={[coin]} />
        </>
      )}
    </>
  );
};

export default Detail;
