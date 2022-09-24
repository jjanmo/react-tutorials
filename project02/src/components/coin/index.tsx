import React from 'react';
import { Ticker } from '../../types/ticker';
import { roundNumber } from '../../utils/functions';
import {
  ChangeBox,
  Logo,
  LogoBox,
  NameBox,
  NumberBox,
  SCoin,
  SLink,
} from './styles';

interface IProps {
  coin: Ticker;
  price: number;
  percentChange: number;
}

const Coin = ({ coin, price, percentChange }: IProps) => {
  return (
    <SCoin>
      <SLink to={coin?.id || ''}>
        <NameBox>
          <div>{coin?.name}</div>
          <div>{coin?.symbol}/USD</div>
        </NameBox>
        <NumberBox>
          <div>${price && roundNumber(price)}</div>
        </NumberBox>
        <ChangeBox
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
        </ChangeBox>
      </SLink>
    </SCoin>
  );
};

export default Coin;
