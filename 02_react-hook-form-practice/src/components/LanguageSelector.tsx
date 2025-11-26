import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const LANGUAGES = ['Korean', 'English', 'Japanese'];

interface Props {
  selectedLanguage: string;
  onChange: (value: string) => void;
}

const LanguageSelector = ({ selectedLanguage, onChange }: Props) => {
  return (
    <Stack direction="column">
      <Typography component="label" htmlFor="language-select" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        모국어
      </Typography>
      <ToggleButtonGroup exclusive value={selectedLanguage} onChange={(_e, val) => val && onChange(val)} size="small">
        {LANGUAGES.map((l) => (
          <ToggleButton key={l} value={l}>
            {l}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default LanguageSelector;
