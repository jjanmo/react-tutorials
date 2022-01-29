import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { ILocation } from '../../interfaces';
import { Title } from '../home/styles';

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation() as ILocation;

  useEffect(() => {
    // props
    //
    // https://api.coinpaprika.com/v1/coins/{coin_id}
  }, []);

  return (
    <>
      <Title>{state.name}</Title>
    </>
  );
};

export default Detail;
