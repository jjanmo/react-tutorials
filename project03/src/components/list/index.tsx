import React from 'react';
import Coin from '../coin';
import { IListProps } from './interfaces';

const List = ({ coins }: IListProps) => {
  return (
    <ul>
      {coins.map((coin) => (
        <Coin key={coin.symbol} {...coin} />
      ))}
    </ul>
  );
};

export default List;
