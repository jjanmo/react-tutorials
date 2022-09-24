import React from 'react';
import { Ticker } from '../../types/ticker';
import { roundNumber } from '../../utils/functions';
import * as S from './styles';

interface IProps {
  coin: Ticker;
}

const Coin = ({ coin }: IProps) => {
  const price = coin.quotes.USD.price;
  const percentChange = coin.quotes.USD.percent_change_24h;

  return (
    <S.Coin>
      <S.SLink to={coin.id}>
        <S.Name>
          <div>{coin.symbol}</div>
          <div>{coin.name}</div>
        </S.Name>
        <S.Price>
          <div>${price && roundNumber(price)}</div>
        </S.Price>
        <S.Change
          bgColor={
            percentChange && percentChange > 0
              ? '#42A66D' //
              : percentChange && percentChange < 0
              ? '#CF304A'
              : '#989FAB'
          }
        >
          <div>
            {percentChange && percentChange > 0
              ? `+${percentChange}`
              : percentChange}
            %
          </div>
        </S.Change>
      </S.SLink>
    </S.Coin>
  );
};

export default Coin;
