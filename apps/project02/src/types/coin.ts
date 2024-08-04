export interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tag[];
  team: Team[];
  description: string | null;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string | null;
  development_status: string | null;
  proof_type: string | null;
  org_structure: string | null;
  hash_algorithm: string | null;
  contracts: Contract[];
  first_data_at: string;
  last_data_at: string;
  whitepaper: Whitepaper;
  links: Links;
}
interface Team {
  id: string;
  name: string;
  position: string;
}
interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}
interface Contract {
  contract: string;
  platform: string;
  type: string;
}
interface Whitepaper {
  link: string;
  thumbnail: string;
}
interface Links {
  explorer: string[] | null;
  facebook: string[] | null;
  reddit: string[] | null;
  source_code: string[] | null;
  website: string[] | null;
  youtube: string[] | null;
  medium: string[] | null;
}
