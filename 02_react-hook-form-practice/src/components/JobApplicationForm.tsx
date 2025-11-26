import { useState } from 'react';
import { Typography, Stack, Button } from '@mui/material';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import type { FormData, FormDataKey } from '@/types';
import {
  TextInput,
  LanguageSelector,
  GenderRadioGroup,
  EmploymentDuration,
  SalaryRangeSlider,
  MainStrengthCheckBoxes,
  RegionSelector,
} from './Fields';

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  region: '',
  language: '한국어',
  gender: '',
  strengths: [],
  startDate: dayjs(),
  endDate: dayjs(),
  salaryRange: [2000, 5000],
};

export default function CandidateForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleChange =
    <V,>(key: FormDataKey) =>
    (value: V) => {
      setFormData((prev: FormData) => ({ ...prev, [key]: value }));
    };

  return (
    <Stack direction="row" maxWidth={600} mx="auto" p={2}>
      <Stack component="form" gap={2} width="100%">
        <Typography variant="h5">지원자 정보</Typography>

        <TextInput
          label="이름"
          placeholder="이름을 입력해주세요"
          value={formData.name}
          onChange={handleChange('name')}
        />
        <TextInput
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={handleChange('email')}
        />

        <RegionSelector selectedRegion={formData.region} onChange={handleChange('region')} />

        <LanguageSelector selectedLanguage={formData.language} onChange={handleChange('language')} />

        <GenderRadioGroup selectedGender={formData.gender} onChange={handleChange('gender')} />

        <MainStrengthCheckBoxes selectedStrengths={formData.strengths} onChange={handleChange('strengths')} />

        <EmploymentDuration
          startDate={formData.startDate}
          endDate={formData.endDate}
          onStartDateChange={handleChange('startDate')}
          onEndDateChange={handleChange('endDate')}
        />

        <SalaryRangeSlider salaryRange={formData.salaryRange} onChange={handleChange('salaryRange')} />

        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          제출
        </Button>
      </Stack>
    </Stack>
  );
}
