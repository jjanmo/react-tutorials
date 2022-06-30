import React from 'react';
import { IItemProps } from '../../types/coin';
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

const Coin = ({ coin, price, percentChange }: IItemProps) => {
  console.log(coin?.symbol);
  return (
    <SCoin>
      <SLink to={coin?.id || ''}>
        <LogoBox>
          {/* <Logo
            src={`https://images.coinviewer.io/currencies/64x64/${coin?.symbol}.png`}
          /> */}
        </LogoBox>
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
