import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CITIES = ['Seoul', 'Tokyo', 'New York', 'Paris', 'Sydney'];
interface Props {
  selectedCity: string;
  onChange: (value: string) => void;
}

const CitySelector = ({ selectedCity, onChange }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="city-select-label">City</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
        value={selectedCity}
        label="City"
        onChange={(e) => onChange(e.target.value as string)}
      >
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
