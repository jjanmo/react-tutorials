import { Box, TextField, Typography } from '@mui/material';
import { Controller, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import type { ControllerRules } from '@/types';

interface Props<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  placeholder: string;
  control: Control<T>;
  rules?: ControllerRules<T>;
}

const TextInput = <T extends FieldValues>({ name, label, placeholder, control, rules }: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <Box>
          <Typography
            component="label"
            htmlFor={`text-input-${label}`}
            variant="body2"
            sx={{ display: 'inline-block', mb: 0.5 }}
          >
            {label}
          </Typography>
          <TextField
            fullWidth
            size="small"
            id={`text-input-${label}`}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            variant="outlined"
            placeholder={placeholder}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        </Box>
      )}
    />
  );
};

export default TextInput;
