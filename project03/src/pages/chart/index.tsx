import React, { useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchOHLCData } from '../../apis';
import { getBeforeWeek, parseCandleData, roundNumber, xaxisFormatter } from '../../utils/functions';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../recoil/atom';

const Chart = () => {
  const { id } = useParams();
  const [start, end] = getBeforeWeek();
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery(['ohlcData', id], () => fetchOHLCData(id, start, end));

  // interval day
  // duration
  // 1Week 오늘부터 일주일
  // 1Month 오늘부터 한달
  // 6Month
  // 1Year 오늘부터 일년

  const series = [
    {
      name: 'ohlc',
      data: data ? parseCandleData(data) : [],
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

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> //
      ) : (
        <div>
          <div>
            <button>1Week</button>
            <button>1Month</button>
            <button>6Month</button>
            <button>1Year</button>
          </div>
          <ReactApexChart type="candlestick" series={series} options={options} />
        </div>
      )}
    </>
  );
};

export default Chart;
