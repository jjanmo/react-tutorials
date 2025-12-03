import { MAIN_STRENGTHS } from '@/constants/jobApplicationForm';
import type { FormData, Strength } from '@/types';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Stack, Typography } from '@mui/material';
import { Controller, type Control } from 'react-hook-form';

interface Props {
  control: Control<FormData>;
}

const MainStrengthCheckBoxes = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="strengths"
      rules={{
        validate: {
          required: (value) => value.length > 0 || '주요 강점을 선택해주세요',
          minLength: (value) => value.length >= 2 || '주요 강점을 최소 2개 이상 선택해주세요',
          maxLength: (value) => value.length <= 4 || '주요 강점은 최대 4개까지 선택 가능합니다',
        },
      }}
      render={({ field, fieldState }) => {
        const handleChange = (strength: Strength, checked: boolean) => {
          if (checked) {
            field.onChange([...field.value, strength]);
          } else {
            field.onChange(field.value.filter((v) => v !== strength));
          }
        };

        return (
          <Stack direction="column">
            <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
              주요 강점
            </Typography>
            <FormControl error={!!fieldState.error}>
              <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {MAIN_STRENGTHS.map((strength) => (
                  <FormControlLabel
                    key={strength}
                    sx={{ width: '50%', m: 0 }}
                    control={
                      <Checkbox
                        size="small"
                        sx={{ py: 0, pl: 0 }}
                        checked={field.value.includes(strength)}
                        onChange={(e) => handleChange(strength, e.target.checked)}
                      />
                    }
                    label={strength}
                  />
                ))}
              </FormGroup>
            </FormControl>
            {fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
          </Stack>
        );
      }}
    />
  );
};

export default MainStrengthCheckBoxes;
