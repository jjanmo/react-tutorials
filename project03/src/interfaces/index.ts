// interface related coin-ticker
export interface IQuote {
  USD: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number;
    ath_date: string;
    percent_from_price_ath: number;
  };
}
export interface ITicker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: IQuote;
}

// list & item
export interface IListProps {
  tickers?: ITicker[];
}
export interface IItemProps {
  coin?: ITicker;
  price?: number;
  percentChange?: number;
}
export interface StyledBox {
  bgColor: string;
}

// interface related coin-info
interface ITeam {
  id: string;
  name: string;
  position: string;
}
interface ITag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}
interface IContract {
  contract: string;
  platform: string;
  type: string;
}
interface IWhitepaper {
  link: string;
  thumbnail: string;
}
interface ILinks {
  explorer: string[] | null;
  facebook: string[] | null;
  reddit: string[] | null;
  source_code: string[] | null;
  website: string[] | null;
  youtube: string[] | null;
  medium: string[] | null;
}
export interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: ITag[];
  team: ITeam[];
  description: string | null;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string | null;
  development_status: string | null;
  proof_type: string | null;
  org_structure: string | null;
  hash_algorithm: string | null;
  contracts: IContract[];
  first_data_at: string;
  last_data_at: string;
  whitepaper: IWhitepaper;
  links: ILinks;
}

export interface ILineProps {
  text: string;
}

export interface INavItemProps {
  isActive: boolean;
}
