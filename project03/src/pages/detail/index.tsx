import React from 'react';
import { useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router';
import { fetchCoinById, fetchTickerById } from '../../apis';
import Line from '../../components/line';
import Nav from '../../components/nav';

const Detail = () => {
  const { id } = useParams();

  const { isLoading: coinLoading, data: coinInfo } = useQuery(['coinInfo', id], () => fetchCoinById(id));
  const { isLoading: tickerLoading, data: tickerInfo } = useQuery(['tickerInfo', id], () => fetchTickerById(id));

  const isLoading = coinLoading || tickerLoading;

  return (
    <>
      <Nav />
      <Line text="§§" />
      {isLoading ? <div>loading...</div> : <Outlet context={[coinInfo, tickerInfo]} />}
    </>
  );
};

export default Detail;
