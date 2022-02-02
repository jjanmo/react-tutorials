import React from 'react';
import Coin from '../coin';
import { IListProps } from '../../interfaces';

const List = ({ tickers }: IListProps) => {
  return (
    <ul>
      {tickers?.slice(0, 100).map((ticker, index) => (
        <Coin
          key={ticker.symbol}
          coin={ticker}
          price={tickers?.[index].quotes.USD.price}
          percentChange={tickers?.[index].quotes.USD.percent_change_24h}
        />
      ))}
    </ul>
  );
};

export default List;
