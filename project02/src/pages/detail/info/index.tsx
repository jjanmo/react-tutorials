import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Line from '../../../components/line';
import { Coin } from '../../../types/coin';
import { Ticker } from '../../../types/ticker';
import { addComma } from '../../../utils/functions';
import * as S from './styles';

const Info = () => {
  const [coinInfo, tickerInfo] = useOutletContext<[Coin, Ticker]>();

  return (
    <S.Container>
      <S.Row>
        <div>Rank</div>
        <div>No.{coinInfo?.rank}</div>
      </S.Row>
      <S.Row>
        <div>Market Cap</div>
        <div>${addComma(tickerInfo?.quotes.USD.market_cap)}</div>
      </S.Row>
      <S.Row>
        <div>Circulation Supply</div>
        <div>{addComma(tickerInfo?.circulating_supply) || ''}</div>
      </S.Row>
      <S.Row>
        <div>Max Supply</div>
        <div>{addComma(tickerInfo?.max_supply) || ''}</div>
      </S.Row>
      <S.Row>
        <div>Total Supply</div>
        <div>{addComma(tickerInfo?.total_supply) || ''}</div>
      </S.Row>
      <S.Row>
        <div>Consensus Algorithm</div>
        <div>{coinInfo?.proof_type}</div>
      </S.Row>
      <S.Row>
        <div>Link</div>
        <S.LinkContainer>
          <a href={coinInfo?.whitepaper.link} target="_blank">
            WhitePaper
          </a>
          <a href={coinInfo?.links.website?.[0]} target="_blank">
            Website
          </a>
        </S.LinkContainer>
      </S.Row>
      <S.DescContainer>
        <div>Description</div>
        <div>{coinInfo?.description}</div>
      </S.DescContainer>
    </S.Container>
  );
};

export default Info;
