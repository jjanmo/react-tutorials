import { Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

const SKILLS = ['Productive', 'Creative', 'Agile', 'Problem solving'];

interface Props {
  selectedSkills: string[];
  onChange: (value: string[]) => void;
}
const SkillCheckboxes = ({ selectedSkills, onChange }: Props) => {
  return (
    <Stack direction="column">
      <Typography
        component="label"
        htmlFor="skill-checkboxes"
        variant="body2"
        sx={{ display: 'inline-block', mb: 0.5 }}
      >
        스킬
      </Typography>
      <FormControl>
        <FormGroup sx={{ mb: 2 }}>
          {SKILLS.map((skill) => (
            <FormControlLabel
              key={skill}
              control={
                <Checkbox
                  checked={selectedSkills.includes(skill)}
                  onChange={() =>
                    onChange(
                      selectedSkills.includes(skill)
                        ? [...selectedSkills.filter((s) => s !== skill)]
                        : [...selectedSkills, skill]
                    )
                  }
                  size="small"
                  sx={{ py: 0 }}
                />
              }
              label={skill}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};

export default SkillCheckboxes;
