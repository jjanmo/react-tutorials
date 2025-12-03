import type { FormData } from '@/types';
import { Box, FormHelperText, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Controller, useWatch, type Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

// @TODO data-fns 로 변경하기
const EmploymentDuration = ({ control }: Props) => {
  // endDate를 watch하여 startDate 검증에 사용
  const endDate = useWatch({ control, name: 'endDate' });
  // startDate를 watch하여 endDate 검증에 사용
  const startDate = useWatch({ control, name: 'startDate' });

  return (
    <Box>
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 1.5 }}>
        근속 기간
      </Typography>

      <Box display="flex" gap={2} sx={{ mb: 0.5 }}>
        <Controller
          control={control}
          name="startDate"
          rules={{
            required: '시작 날짜를 선택해주세요',
            validate: (value) => {
              if (value && endDate && value > endDate) {
                return '시작일은 종료일보다 이전이어야 합니다';
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <Box>
              <DatePicker
                label="시작"
                value={field.value ? dayjs(field.value) : null}
                onChange={(dayjsValue) => {
                  field.onChange(dayjsValue?.toDate() ?? null);
                }}
                slotProps={{
                  textField: {
                    size: 'small',
                    error: !!fieldState.error,
                    InputProps: { style: { fontSize: '14px' } },
                    InputLabelProps: { style: { fontSize: '14px' } },
                  },
                }}
              />
              {fieldState.error && (
                <FormHelperText error sx={{ mx: 0.5 }}>
                  {fieldState.error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        <Controller
          control={control}
          name="endDate"
          rules={{
            required: '종료 날짜를 선택해주세요',
            validate: (value) => {
              if (value && startDate && value < startDate) {
                return '종료일은 시작일보다 이후여야 합니다';
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <Box>
              <DatePicker
                label="종료"
                value={field.value ? dayjs(field.value) : null}
                onChange={(dayjsValue) => {
                  field.onChange(dayjsValue?.toDate() ?? null);
                }}
                slotProps={{
                  textField: {
                    size: 'small',
                    error: !!fieldState.error,
                    InputProps: { style: { fontSize: '14px' } },
                    InputLabelProps: { style: { fontSize: '14px' } },
                  },
                }}
              />
              {fieldState.error && (
                <FormHelperText error sx={{ mx: 0.5 }}>
                  {fieldState.error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default EmploymentDuration;
