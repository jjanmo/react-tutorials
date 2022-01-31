import React from 'react';
import { IItemProps } from '../../interfaces';
import { ChangeBox, Logo, LogoBox, NameBox, NumberBox, SCoin, SLink } from './styles';

const Coin = ({ coin, price, percentChange }: IItemProps) => {
  return (
    <SCoin>
      <SLink to={coin?.id || ''} state={{ name: coin?.name }}>
        <LogoBox>
          <Logo src={`https://cryptoicon-api.vercel.app/api/icon/${coin?.symbol.toLowerCase()}`} />
        </LogoBox>
        <NameBox>
          <div>{coin?.name}</div>
          <div>{coin?.symbol}/USD</div>
        </NameBox>
        <NumberBox>
          <div>${price?.toFixed(3)}</div>
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
