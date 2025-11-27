import { LANGUAGES } from '@/constants/jobApplicationForm';
import type { Language } from '@/types';
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

interface Props {
  selectedLanguage: Language;
  onChange: (value: Language) => void;
}

const LanguageSelector = ({ selectedLanguage, onChange }: Props) => {
  return (
    <Stack direction="column">
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 0.5 }}>
        주요 사용 언어
      </Typography>
      <ToggleButtonGroup exclusive value={selectedLanguage} onChange={(_e, val) => val && onChange(val)} size="small">
        {LANGUAGES.map((language) => (
          <ToggleButton key={language} value={language} sx={{ width: 114 }}>
            {language}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default LanguageSelector;
