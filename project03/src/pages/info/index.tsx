import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ICoinInfo, ITicker } from '../../interfaces';
import { Line, Logo, Row } from './styles';

const Info = () => {
  const [coinInfo, tickerInfo] = useOutletContext<[ICoinInfo, ITicker]>();

  return (
    <div>
      <div>
        <Logo src={`https://cryptoicon-api.vercel.app/api/icon/${coinInfo?.symbol.toLowerCase()}`} alt="logo" />
        <div>
          <div>{coinInfo?.name}</div>
          <div>{coinInfo?.symbol}</div>
        </div>
      </div>
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
        <div>{tickerInfo?.circulating_supply}</div>
      </Row>
      <Row>
        <div>Max Supply</div>
        <div>{tickerInfo?.max_supply}</div>
      </Row>
      <Row>
        <div>Total Supply</div>
        <div>{tickerInfo?.total_supply}</div>
      </Row>
      <Row>
        <div>Consensus Algorithm</div>
        <div>{coinInfo?.hash_algorithm}</div>
      </Row>
      <Row>
        <div>Link</div>
        <div>
          <a href={coinInfo?.whitepaper.link} target="_blank">
            WhitePaper
          </a>
          <a href={coinInfo?.links.website?.[0]} target="_blank">
            Website
          </a>
        </div>
      </Row>
      <div>
        <div>Description</div>
        <div>{coinInfo?.description}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Info;
