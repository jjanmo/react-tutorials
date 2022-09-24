import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import { fetchOHLCData } from '../../apis';
import {
  getDurationDate,
  parseCandleData,
  roundNumber,
  xaxisFormatter,
} from '../../../utils/functions';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../../recoil/atom';
import { Button, ButtonContainer } from './styles';

const Chart = () => {
  const { id } = useParams();
  const isDark = useRecoilValue(isDarkAtom);

  const [duration, setDuration] = useState('1Day');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [start, end] = getDurationDate(duration);
  console.log(duration, start, end);

  const series = [
    {
      name: 'ohlc',
      data: parseCandleData(data),
    },
  ];

  const options: ApexOptions = {
    theme: {
      mode: isDark ? 'dark' : 'light',
    },
    chart: {
      type: 'candlestick',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: isDark ? '#18191A' : '#FFFFFF',
    },
    xaxis: {
      type: 'datetime',
      tickPlacement: 'on',
      labels: {
        show: true,
        format: 'yyyy-MM-dd',
      },
      tooltip: {
        enabled: true,
        formatter: (val) => xaxisFormatter(val),
        offsetY: 10,
      },
    },
    yaxis: {
      labels: {
        formatter: (val, index) => {
          return roundNumber(val);
        },
      },
      tooltip: {
        enabled: true,
        offsetX: -40,
      },
      tickAmount: 6,
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetX: 0,
        offsetY: -50,
      },
    },
  };

  const onClick = useCallback((e) => {
    const _duration = e.target.textContent;
    setDuration(_duration);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.coinpaprika.com/v1/coins/${id}/ohlcv/latest`)
      .then((response) => response.json())
      .then((json) => {
        console.log('✅', json);
        setData(json);
      })
      .finally(() => setIsLoading(false));
  }, [duration]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ButtonContainer>
            <Button onClick={onClick} selected={duration === '1Week'}>
              1Week
            </Button>
            <Button onClick={onClick} selected={duration === '1Month'}>
              1Month
            </Button>
            <Button onClick={onClick} selected={duration === '6Month'}>
              6Month
            </Button>
            <Button onClick={onClick} selected={duration === '1Year'}>
              1Year
            </Button>
          </ButtonContainer>

          {/* <ReactApexChart
            type="candlestick"
            series={series}
            options={options}
          /> */}
        </div>
      )}
    </>
  );
};

export default Chart;
