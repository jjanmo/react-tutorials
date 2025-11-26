import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { Dayjs } from 'dayjs';

interface Props {
  startDate: Dayjs;
  endDate: Dayjs;
  onStartDateChange: (value: Dayjs) => void;
  onEndDateChange: (value: Dayjs) => void;
}

const EmploymentDuration = ({ startDate, endDate, onStartDateChange, onEndDateChange }: Props) => {
  return (
    <Box>
      <Typography component="label" variant="body2" sx={{ display: 'inline-block', mb: 1.5 }}>
        근속 기간
      </Typography>

      <Box display="flex" gap={2} sx={{ mb: 2 }}>
        <DatePicker
          label="시작"
          value={startDate}
          onChange={(value) => onStartDateChange(value as Dayjs)}
          slotProps={{
            textField: {
              size: 'small',
              InputProps: {
                style: { fontSize: '14px' },
              },
              InputLabelProps: {
                style: { fontSize: '14px' },
              },
            },
          }}
        />
        <DatePicker
          label="종료"
          value={endDate}
          onChange={(value) => onEndDateChange(value as Dayjs)}
          slotProps={{
            textField: {
              size: 'small',
              InputProps: {
                style: { fontSize: '14px' },
              },
              InputLabelProps: {
                style: { fontSize: '14px' },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EmploymentDuration;
