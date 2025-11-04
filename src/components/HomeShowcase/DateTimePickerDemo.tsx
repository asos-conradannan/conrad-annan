import { useState } from 'react';
import { Typography, Box, Alert } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { ContentBox } from '../base/ContentBox';
import { SectionTitle } from '../base/SectionTitle';

export const DateTimePickerDemo = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, 'day'));
  const [error, setError] = useState<string>('');

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
    if (newValue && endDate && newValue.isAfter(endDate)) {
      setError('Start date must be before or equal to end date');
    } else {
      setError('');
    }
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
    if (startDate && newValue && newValue.isBefore(startDate)) {
      setError('End date must be after or equal to start date');
    } else {
      setError('');
    }
  };

  return (
    <ContentBox>
      <SectionTitle>DateTime Picker Component</SectionTitle>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Interactive date and time selection with validation. Ensures end date is not before start
        date.
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <DateTimePicker
            label="Start Date & Time"
            value={startDate}
            onChange={handleStartDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText: 'Select the start date and time',
              },
            }}
          />
          <DateTimePicker
            label="End Date & Time"
            value={endDate}
            onChange={handleEndDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText: 'Select the end date and time',
                error: !!error,
              },
            }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {error}
            </Alert>
          )}
          {!error && startDate && endDate && (
            <Alert severity="success" sx={{ mt: 1 }}>
              Duration: {endDate.diff(startDate, 'day')} day(s) and{' '}
              {endDate.diff(startDate, 'hour') % 24} hour(s)
            </Alert>
          )}
        </Box>
      </LocalizationProvider>
    </ContentBox>
  );
};
