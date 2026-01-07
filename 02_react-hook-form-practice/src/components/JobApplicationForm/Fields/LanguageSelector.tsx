import { LANGUAGES } from '@/constants/jobApplicationForm';
import type { FormData } from '@/types';
import { FormHelperText, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

const LanguageSelector = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="language"
      rules={{
        required: '주요 사용 언어를 선택해주세요',
      }}
      render={({ field, fieldState }) => (
        <Stack direction="column">
          <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
            주요 사용 언어
          </Typography>
          <ToggleButtonGroup exclusive {...field} size="small">
            {LANGUAGES.map((language) => (
              <ToggleButton key={language} value={language} sx={{ width: 114 }}>
                {language}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          {fieldState.error && (
            <FormHelperText error sx={{ mx: 1.5 }}>
              {fieldState.error.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default LanguageSelector;
