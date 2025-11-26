import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

interface Props {
  selectedGender: string;
  onChange: (value: string) => void;
}

const GenderRadioGroup = ({ selectedGender, onChange }: Props) => {
  return (
    <Box>
      <Typography component="label" htmlFor="gender-radio" variant="body2" sx={{ display: 'inline-block' }}>
        성별
      </Typography>
      <RadioGroup row value={selectedGender} onChange={(e) => onChange(e.target.value)}>
        <FormControlLabel value="male" control={<Radio size="small" />} label="남성" />
        <FormControlLabel value="female" control={<Radio size="small" />} label="여성" />
      </RadioGroup>
    </Box>
  );
};

export default GenderRadioGroup;
