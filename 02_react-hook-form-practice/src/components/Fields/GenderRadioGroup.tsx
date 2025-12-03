import { Box, FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from '@mui/material';

import type { FormData } from '@/types';
import { Controller, type Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

const GenderRadioGroup = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="gender"
      rules={{
        required: '성별을 선택해주세요',
      }}
      render={({ field, fieldState }) => (
        <Box>
          <Typography component="label" variant="body2" sx={{ display: 'inline-block' }}>
            성별
          </Typography>
          <RadioGroup row {...field}>
            <FormControlLabel value="male" control={<Radio size="small" />} label="남성" />
            <FormControlLabel value="female" control={<Radio size="small" />} label="여성" />
          </RadioGroup>
          {fieldState.error && (
            <FormHelperText error sx={{ mt: -0.5 }}>
              {fieldState.error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};

export default GenderRadioGroup;
