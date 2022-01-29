import React from 'react';
import { IItemProps } from '../../interfaces';
import { ChangeBox, Logo, LogoBox, NameBox, NumberBox, SCoin, SLink } from './styles';

const Coin = ({ coin, ticker }: IItemProps) => {
  return (
    <SCoin>
      <SLink
        to={{
          pathname: `/${coin.id}`,
        }}
      >
        <LogoBox>
          <Logo src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
        </LogoBox>
        <NameBox>
          <div>{coin.name}</div>
          <div>{coin.symbol}/USD</div>
        </NameBox>
        <NumberBox>
          <div>${ticker.quotes.USD.price.toFixed(3)}</div>
        </NumberBox>
        <ChangeBox
          bgColor={
            ticker.quotes.USD.percent_change_24h > 0
              ? '#42A66D'
              : ticker.quotes.USD.percent_change_24h < 0
              ? '#CF304A'
              : '#989FAB'
          }
        >
          <div>
            {ticker.quotes.USD.percent_change_24h > 0
              ? `+${ticker.quotes.USD.percent_change_24h}`
              : ticker.quotes.USD.percent_change_24h}
            %
          </div>
        </ChangeBox>
      </SLink>
    </SCoin>
  );
};

export default Coin;
