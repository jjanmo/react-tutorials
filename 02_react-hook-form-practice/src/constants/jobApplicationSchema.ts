import dayjs from 'dayjs';
import * as z from 'zod';
import { LANGUAGES, REGIONS } from './jobApplicationForm';

export const FormSchema = z.object({
  name: z.string(),
  email: z.email(),
  region: z.enum(REGIONS),
  language: z.enum(LANGUAGES),
  gender: z.string(),
  strengths: z.array(z.string()).min(1),
  startDate: z
    .string()
    .refine((v) => dayjs(v).isValid(), '올바른 날짜 형식이 아닙니다')
    .transform((v) => dayjs(v)),
  endDate: z
    .string()
    .refine((v) => dayjs(v).isValid(), '올바른 날짜 형식이 아닙니다')
    .transform((v) => dayjs(v)),
  salaryRange: z.array(z.number()).min(1),
});

export type FormValues = z.infer<typeof FormSchema>;
