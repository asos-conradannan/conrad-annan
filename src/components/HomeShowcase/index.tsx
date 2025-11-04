import { Box, Container, Typography } from '@mui/material';
import { AccordionDemo } from './AccordionDemo';
import { TimelineDemo } from './TimelineDemo';
import { DateTimePickerDemo } from './DateTimePickerDemo';
import { StepperDemo } from './StepperDemo';

export const HomeShowcase = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Component Showcase
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore interactive Material UI components with live demos and examples
        </Typography>
      </Box>

      <Box id="accordion-section">
        <AccordionDemo />
      </Box>

      <Box id="timeline-section">
        <TimelineDemo />
      </Box>

      <Box id="datetime-picker-section">
        <DateTimePickerDemo />
      </Box>

      <Box id="stepper-section">
        <StepperDemo />
      </Box>
    </Container>
  );
};
