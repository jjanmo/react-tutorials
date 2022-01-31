import React from 'react';
import { IItemProps } from '../../interfaces';
import { addComma } from '../../utils/functions';
import { ChangeBox, Logo, LogoBox, NameBox, NumberBox, SCoin, SLink } from './styles';

const Coin = ({ coin, price, percentChange }: IItemProps) => {
  return (
    <SCoin>
      <SLink to={coin?.id || ''}>
        <LogoBox>
          <Logo src={`https://cryptoicon-api.vercel.app/api/icon/${coin?.symbol.toLowerCase()}`} />
        </LogoBox>
        <NameBox>
          <div>{coin?.name}</div>
          <div>{coin?.symbol}/USD</div>
        </NameBox>
        <NumberBox>
          <div>${price && price < 2 ? price?.toFixed(5) : addComma(Number(price?.toFixed(3)))}</div>
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
          <div>{percentChange && percentChange > 0 ? `+${percentChange}` : percentChange}%</div>
        </ChangeBox>
      </SLink>
    </SCoin>
  );
};

export default Coin;
