import React from 'react';
import Coin from '../coin';
import { IListProps } from '../../interfaces';

const List = ({ coins, tickers }: IListProps) => {
  return (
    <ul>
      {coins.map((coin, index) => (
        <Coin key={coin.symbol} coin={coin} ticker={tickers[index]} />
      ))}
    </ul>
  );
};

export default List;
