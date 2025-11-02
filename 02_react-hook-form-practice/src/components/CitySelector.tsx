import { useState } from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CITIES = [
  { value: 'New York', label: 'New York' },
  { value: 'London', label: 'London' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Tokyo', label: 'Tokyo' },
  { value: 'Dubai', label: 'Dubai' },
];

const CitySelector = () => {
  const [cities, setCities] = useState<string[]>([]);

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="cities-label">Cities</InputLabel>
      <Select
        fullWidth
        labelId="cities-label"
        label="Cities"
        name="cities"
        multiple
        value={cities}
        onChange={(event) => setCities(event.target.value as string[])}
        renderValue={(selected: string[]) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value: string) => (
              <Chip key={value} label={value}></Chip>
            ))}
          </Box>
        )}
      >
        {CITIES.map((city) => (
          <MenuItem key={city.value} value={city.value}>
            {city.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelector;
