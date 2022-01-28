import React from 'react';
import { ICoin } from '../list/interfaces';
import { ChangeBox, Logo, LogoBox, NameBox, NumberBox, SCoin, SLink } from './styles';

const Coin = ({ id, name, symbol }: ICoin) => {
  return (
    <SCoin>
      <SLink
        to={{
          pathname: `/${id}`,
        }}
      >
        <LogoBox>
          <Logo src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`} />
        </LogoBox>
        <NameBox>
          <div>{name}</div>
          <div>{symbol}/USDT</div>
        </NameBox>
        <NumberBox>$385.45</NumberBox>
        <ChangeBox>
          <div>+6.49%</div>
        </ChangeBox>
      </SLink>
    </SCoin>
  );
};

export default Coin;
