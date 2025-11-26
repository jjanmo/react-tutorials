import { Box, TextField, Typography } from '@mui/material';

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ label, placeholder, value, onChange }: Props) => {
  return (
    <Box>
      <Typography component="label" htmlFor="text-input" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        placeholder={placeholder}
      />
    </Box>
  );
};

export default TextInput;
