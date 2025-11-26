import { FormControl, InputLabel, TextField } from '@mui/material';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ label, value, onChange }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="name-input-label">{label}</InputLabel>
      <TextField id="name-input" value={value} onChange={(e) => onChange(e.target.value)} sx={{ mb: 2 }} />
    </FormControl>
  );
};

export default TextInput;
