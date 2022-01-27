import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams();

  return <h1>Detail Page</h1>;
};

export default Detail;
