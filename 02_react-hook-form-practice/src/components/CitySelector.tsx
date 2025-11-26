import { FormControl, MenuItem, Select, Typography } from '@mui/material';

const CITIES = ['Seoul', 'Tokyo', 'New York', 'Paris', 'Sydney'];
interface Props {
  selectedCity: string;
  onChange: (value: string) => void;
}

const CitySelector = ({ selectedCity, onChange }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <Typography component="label" htmlFor="city-select" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        도시
      </Typography>

      <Select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onChange(e.target.value as string)}
        size="small"
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>도시를 선택해주세요</em>
        </MenuItem>
        {CITIES.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelector;
