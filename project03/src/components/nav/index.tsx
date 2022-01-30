import React from 'react';
import { Link } from 'react-router-dom';
import { SNav } from './styles';

const Nav = () => {
  return (
    <SNav>
      <Link to="info">Info</Link>
      <Link to="chart">Chart</Link>
      <Link to="price">Price</Link>
    </SNav>
  );
};

export default Nav;
