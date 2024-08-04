import { FINNHUB_API } from '.';

type ResolutionType = 1 | 5 | 15 | 30 | 60 | 'D' | 'W' | 'M';

// 주말 데이터가 빠짐 🤯
export const fetchOHLCData = ({
  symbol,
  resolution,
  from,
  to,
  token = process.env.API_KEY,
}: {
  symbol: string;
  resolution: ResolutionType;
  from: number;
  to: number;
  token?: string;
}) =>
  FINNHUB_API.get(`/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`).then(
    (res) => res.data
  );
