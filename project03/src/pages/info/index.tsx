import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ICoinInfo, ITicker } from '../../interfaces';
import { DescContainer, InfoContainer, Line, LinkContainer, LogoContainer, Row } from './styles';

const Info = () => {
  const [coinInfo, tickerInfo] = useOutletContext<[ICoinInfo, ITicker]>();

  return (
    <InfoContainer>
      <LogoContainer>
        <img src={`https://cryptoicon-api.vercel.app/api/icon/${coinInfo?.symbol.toLowerCase()}`} alt="logo" />
        <div>{coinInfo?.name}</div>
        <div>/{coinInfo?.symbol}</div>
      </LogoContainer>
      <Line />
      <Row>
        <div>Rank</div>
        <div>No.{coinInfo?.rank}</div>
      </Row>
      <Row>
        <div>Market Cap</div>
        <div>{tickerInfo?.quotes.USD.market_cap}</div>
      </Row>
      <Row>
        <div>Circulation Supply</div>
        <div>{tickerInfo?.circulating_supply || ''}</div>
      </Row>
      <Row>
        <div>Max Supply</div>
        <div>{tickerInfo?.max_supply || ''}</div>
      </Row>
      <Row>
        <div>Total Supply</div>
        <div>{tickerInfo?.total_supply || ''}</div>
      </Row>
      <Row>
        <div>Consensus Algorithm</div>
        <div>{coinInfo?.proof_type}</div>
      </Row>
      <Row>
        <div>Link</div>
        <LinkContainer>
          <a href={coinInfo?.whitepaper.link} target="_blank">
            WhitePaper
          </a>
          <a href={coinInfo?.links.website?.[0]} target="_blank">
            Website
          </a>
        </LinkContainer>
      </Row>
      <DescContainer>
        <div>Description</div>
        <div>{coinInfo?.description}</div>
      </DescContainer>
    </InfoContainer>
  );
};

export default Info;
