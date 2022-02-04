import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchOHLCData } from '../../apis';
import { getBeforeWeek, parseCandleData, roundNumber, xaxisFormatter } from '../../utils/functions';

const Chart = () => {
  const { id } = useParams();
  const [start, end] = getBeforeWeek();

  const { isLoading, data } = useQuery(['ohlcData', id], () => fetchOHLCData(id, start, end));

  const series = [
    {
      name: 'ohlc',
      data: data ? parseCandleData(data) : [],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
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
        <ReactApexChart type="candlestick" series={series} options={options} />
      )}
    </>
  );
};

export default Chart;
