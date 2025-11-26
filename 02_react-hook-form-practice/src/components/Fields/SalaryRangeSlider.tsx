import { Slider, Box, Typography } from '@mui/material';

interface Props {
  salaryRange: [number, number];
  onChange: (value: [number, number]) => void;
}

const SalaryRangeSlider = ({ salaryRange, onChange }: Props) => {
  return (
    <Box>
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 1.5 }}>
        급여 범위
      </Typography>
      <Slider
        value={salaryRange}
        onChange={(_, value) => onChange(value as [number, number])}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        step={100}
      />
    </Box>
  );
};

export default SalaryRangeSlider;
