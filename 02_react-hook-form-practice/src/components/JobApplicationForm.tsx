import { useState } from 'react';
import { Typography, Stack, Button } from '@mui/material';
import 'dayjs/locale/ko';
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
import { useForm } from 'react-hook-form';

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  region: '',
  language: '한국어',
  gender: '',
  strengths: [],
  startDate: new Date(),
  endDate: new Date(),
  salaryRange: [2000, 5000],
};

export default function CandidateForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const { handleSubmit, control } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: INITIAL_FORM_DATA,
  });

  const handleChange =
    <V,>(key: FormDataKey) =>
    (value: V) => {
      setFormData((prev: FormData) => ({ ...prev, [key]: value }));
    };

  const onSubmit = (data: FormData) => {
    alert(`제출되었습니다. ${JSON.stringify(data)}`);
  };

  return (
    <Stack direction="row" maxWidth={600} mx="auto" p={2}>
      <Stack component="form" gap={2} width="100%" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5">지원자 정보</Typography>

        <TextInput
          label="이름"
          placeholder="이름을 입력해주세요"
          name="name"
          control={control}
          rules={{
            required: '이름을 입력해주세요',
            minLength: { value: 2, message: '이름은 최소 2자 이상이어야 합니다' },
            maxLength: { value: 20, message: '이름은 최대 20자까지 입력 가능합니다' },
          }}
        />
        <TextInput
          label="이메일"
          placeholder="이메일을 입력해주세요"
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 형식이 아닙니다',
            },
          }}
        />

        <RegionSelector control={control} />

        <LanguageSelector control={control} />

        <GenderRadioGroup control={control} />

        <MainStrengthCheckBoxes control={control} />

        <EmploymentDuration control={control} />

        <SalaryRangeSlider salaryRange={formData.salaryRange} onChange={handleChange('salaryRange')} />

        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          제출
        </Button>
      </Stack>
    </Stack>
  );
}
