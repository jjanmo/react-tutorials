import { MAIN_STRENGTHS } from '@/constants';
import type { Strength } from '@/types';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

interface Props {
  selectedStrengths: Strength[];
  onChange: (value: Strength[]) => void;
}
const MainStrengthCheckBoxes = ({ selectedStrengths, onChange }: Props) => {
  return (
    <Stack direction="column">
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        주요 강점
      </Typography>
      <FormControl>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {MAIN_STRENGTHS.map((strength) => (
            <FormControlLabel
              key={strength}
              sx={{ width: '50%', m: 0 }}
              control={
                <Checkbox
                  checked={selectedStrengths.includes(strength)}
                  onChange={() =>
                    onChange(
                      selectedStrengths.includes(strength)
                        ? [...selectedStrengths.filter((s) => s !== strength)]
                        : [...selectedStrengths, strength]
                    )
                  }
                  size="small"
                  sx={{ py: 0, pl: 0 }}
                />
              }
              label={strength}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};

export default MainStrengthCheckBoxes;
