import type { Dayjs } from 'dayjs';
import type { LANGUAGES, MAIN_STRENGTHS, REGIONS } from './constants';

export type Language = (typeof LANGUAGES)[number];
export type Strength = (typeof MAIN_STRENGTHS)[number];
export type Region = (typeof REGIONS)[number];

export interface FormData {
  name: string;
  email: string;
  region: Region | '';
  language: Language;
  gender: string;
  strengths: Strength[];
  startDate: Dayjs;
  endDate: Dayjs;
  salaryRange: [number, number];
}

export type FormDataKey = keyof FormData;
