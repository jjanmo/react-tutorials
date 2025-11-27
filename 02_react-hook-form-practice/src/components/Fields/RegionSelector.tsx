import { REGIONS } from '@/constants/jobApplicationForm';
import type { Region } from '@/types';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';

interface Props {
  selectedRegion: Region | '';
  onChange: (value: Region) => void;
}

const RegionSelector = ({ selectedRegion, onChange }: Props) => {
  return (
    <FormControl fullWidth>
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        근무 지역
      </Typography>

      <Select value={selectedRegion} onChange={(e) => onChange(e.target.value as Region)} size="small" displayEmpty>
        <MenuItem value="" disabled>
          <em>지역을 선택해주세요</em>
        </MenuItem>
        {REGIONS.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionSelector;
