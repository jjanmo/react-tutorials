import React from 'react';
import { useMatch, Link } from 'react-router-dom';
import { Item, SNav } from './styles';

const Nav = () => {
  const isActiveDefault = !!useMatch(':id');
  const isActiveInfo = !!useMatch(':id/info');
  const isActiveChart = !!useMatch(':id/chart');
  const isActivePrice = !!useMatch(':id/price');

  return (
    <SNav>
      <Item isActive={isActiveDefault || isActiveInfo}>
        <Link to="info">Info</Link>
      </Item>
      <Item isActive={isActiveChart}>
        {/* <Link to="chart">Chart</Link> */}
      </Item>
      <Item isActive={isActivePrice}>
        {/* <Link to="price">Price</Link> */}
      </Item>
    </SNav>
  );
};

export default Nav;
