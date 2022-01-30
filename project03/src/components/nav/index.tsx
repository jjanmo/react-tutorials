import React, { useEffect } from 'react';
import { generatePath, useMatch, Link } from 'react-router-dom';
import { LinkText, SNav } from './styles';

const Nav = () => {
  const isActiveDefault = !!useMatch(':id');
  const isActiveInfo = !!useMatch(':id/info');
  const isActiveChart = !!useMatch(':id/chart');
  const isActivePrice = !!useMatch(':id/price');

  return (
    <SNav>
      <Link to="info">
        <LinkText isActive={isActiveDefault || isActiveInfo}>Info</LinkText>
      </Link>
      <Link to="chart">
        <LinkText isActive={isActiveChart}>Chart</LinkText>
      </Link>
      <Link to="price">
        <LinkText isActive={isActivePrice}>Price</LinkText>
      </Link>
    </SNav>
  );
};

export default Nav;
