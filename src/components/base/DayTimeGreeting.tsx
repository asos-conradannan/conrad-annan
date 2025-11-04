import { Typography } from '@mui/material';
import dayjs from 'dayjs';

export const DayTimeGreeting = () => {
  const hour = dayjs().hour();
  let greeting = 'Good Evening';
  
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  }

  const currentDate = dayjs().format('MMMM D, YYYY');

  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {greeting}! Today is {currentDate}
    </Typography>
  );
};
