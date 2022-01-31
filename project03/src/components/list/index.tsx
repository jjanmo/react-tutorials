import React from 'react';
import Coin from '../coin';
import { IListProps } from '../../interfaces';

const List = ({ coins, tickers }: IListProps) => {
  return (
    <ul>
      {coins?.slice(0, 100).map((coin, index) => (
        <Coin
          key={coin.symbol}
          coin={coin}
          price={tickers?.[index].quotes.USD.price}
          percentChange={tickers?.[index].quotes.USD.percent_change_24h}
        />
      ))}
    </ul>
  );
};

export default List;
