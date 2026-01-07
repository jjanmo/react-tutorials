import type { FormData } from '@/types';
import { Slider, Box, Typography, FormHelperText } from '@mui/material';
import { Controller, type Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

const SalaryRangeSlider = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="salaryRange"
      rules={{
        validate: {
          maxRange: (value) => value[1] - value[0] <= 5000 || '급여 범위는 최대 5000만원을 초과할 수 없습니다',
        },
      }}
      render={({ field, fieldState }) => (
        <Box>
          <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 1 }}>
            급여 범위: {field.value[0].toLocaleString()}만원 ~ {field.value[1].toLocaleString()}만원
          </Typography>
          <Slider
            value={field.value}
            onChange={(_, value) => field.onChange(value as [number, number])}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value.toLocaleString()}만원`}
            min={0}
            max={10000}
            step={100}
          />
          {fieldState.error && (
            <FormHelperText error sx={{ mx: 0.5 }}>
              {fieldState.error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};

export default SalaryRangeSlider;
