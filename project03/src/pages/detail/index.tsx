import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Nav from '../../components/nav';
import { ICoinInfo, ILocation } from '../../interfaces';
import { Title } from '../home/styles';

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation() as ILocation;

  const [coinInfo, setCoinInfo] = useState<ICoinInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoinInfo(json);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));

    // props
    //
    //
  }, []);

  return (
    <>
      <Title>{state ? state?.name : coinInfo ? coinInfo.name : 'Loading'}</Title>
      <Nav />

      <Outlet />
    </>
  );
};

export default Detail;
