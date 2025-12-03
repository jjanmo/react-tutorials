import type { Dayjs } from 'dayjs';
import type { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import type { LANGUAGES, MAIN_STRENGTHS, REGIONS } from './constants/jobApplicationForm';

/**
 * Controller의 rules prop 타입
 * register와 동일하지만 Controller에서 지원하지 않는 옵션들을 제외
 */
export type ControllerRules<T extends FieldValues = FieldValues, TName extends FieldPath<T> = FieldPath<T>> = Omit<
  RegisterOptions<T, TName>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

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
