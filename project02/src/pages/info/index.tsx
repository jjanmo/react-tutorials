import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Line from '../../components/line';
import { ICoinInfo, Ticker } from '../../types/ticker';
import { addComma } from '../../utils/functions';
import { DescContainer, InfoContainer, LinkContainer, Row } from './styles';

const Info = () => {
  const [coinInfo, tickerInfo] = useOutletContext<[ICoinInfo, Ticker]>();

  return (
    <InfoContainer>
      <Row>
        <div>Rank</div>
        <div>No.{coinInfo?.rank}</div>
      </Row>
      <Row>
        <div>Market Cap</div>
        <div>${addComma(tickerInfo?.quotes.USD.market_cap)}</div>
      </Row>
      <Row>
        <div>Circulation Supply</div>
        <div>{addComma(tickerInfo?.circulating_supply) || ''}</div>
      </Row>
      <Row>
        <div>Max Supply</div>
        <div>{addComma(tickerInfo?.max_supply) || ''}</div>
      </Row>
      <Row>
        <div>Total Supply</div>
        <div>{addComma(tickerInfo?.total_supply) || ''}</div>
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
