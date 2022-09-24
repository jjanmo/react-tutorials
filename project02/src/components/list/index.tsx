import React from 'react';
import Coin from '../coin';
import { Ticker } from '../../types/ticker';

interface IProps {
  tickers: Ticker[];
}

const List = ({ tickers }: IProps) => {
  return (
    <ul>
      {tickers?.slice(0, 50).map((ticker, index) => (
        <Coin key={ticker.symbol} coin={ticker} />
      ))}
    </ul>
  );
};

export default List;
