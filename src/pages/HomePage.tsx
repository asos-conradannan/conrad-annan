import { Box, Container } from '@mui/material';
import { DayTimeGreeting } from '../components/base/DayTimeGreeting';
import { HomeShowcase } from '../components/HomeShowcase';

export const HomePage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <DayTimeGreeting />
        </Box>
      </Container>
      <HomeShowcase />
    </Box>
  );
};
