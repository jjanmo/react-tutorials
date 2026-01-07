import { REGIONS } from '@/constants/jobApplicationForm';
import type { FormData } from '@/types';
import { FormControl, FormHelperText, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Controller, type Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

const RegionSelector = ({ control }: Props) => {
  return (
    <Controller
      name="region"
      control={control}
      rules={{
        required: '근무 지역을 선택해주세요',
      }}
      render={({ field, fieldState }) => (
        <Stack direction="column">
          <FormControl fullWidth>
            <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
              근무 지역
            </Typography>

            <Select value={field.value} onChange={field.onChange} size="small" displayEmpty>
              <MenuItem value="" disabled>
                <em>지역을 선택해주세요</em>
              </MenuItem>
              {REGIONS.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default RegionSelector;
