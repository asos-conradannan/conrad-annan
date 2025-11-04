import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Paper,
} from '@mui/material';
import { ContentBox } from '../base/ContentBox';
import { SectionTitle } from '../base/SectionTitle';
import { mockFormSteps, mockCategoryOptions, mockPriorityOptions } from './mockData';

interface FormData {
  name: string;
  email: string;
  category: string;
  priority: string;
  notes: string;
}

export const StepperDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    priority: '',
    notes: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    const validationErrors = validateStep(activeStep);
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      if (activeStep === mockFormSteps.length - 1) {
        // Submit form
        setSubmitted(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setErrors({});
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      name: '',
      email: '',
      category: '',
      priority: '',
      notes: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  const validateStep = (step: number): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};

    if (step === 0) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    if (step === 1) {
      if (!formData.category) {
        newErrors.category = 'Category is required';
      }
      if (!formData.priority) {
        newErrors.priority = 'Priority is required';
      }
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const renderStepContent = (step: number) => {
    if (submitted) {
      return (
        <Box sx={{ mt: 3 }}>
          <Alert severity="success" sx={{ mb: 2 }}>
            Form submitted successfully!
          </Alert>
          <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Submission Summary
            </Typography>
            <Typography variant="body2">
              <strong>Name:</strong> {formData.name}
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> {formData.email}
            </Typography>
            <Typography variant="body2">
              <strong>Category:</strong>{' '}
              {mockCategoryOptions.find((opt) => opt.value === formData.category)?.label}
            </Typography>
            <Typography variant="body2">
              <strong>Priority:</strong>{' '}
              {mockPriorityOptions.find((opt) => opt.value === formData.priority)?.label}
            </Typography>
            {formData.notes && (
              <Typography variant="body2">
                <strong>Notes:</strong> {formData.notes}
              </Typography>
            )}
          </Paper>
          <Button onClick={handleReset} sx={{ mt: 2 }}>
            Start Over
          </Button>
        </Box>
      );
    }

    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={!!errors.name}
              helperText={errors.name || 'Enter your full name'}
              fullWidth
              required
            />
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email || 'Enter your email address'}
              fullWidth
              required
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
            <FormControl fullWidth required error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                label="Category"
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                {mockCategoryOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.category && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                  {errors.category}
                </Typography>
              )}
            </FormControl>
            <FormControl fullWidth required error={!!errors.priority}>
              <InputLabel>Priority</InputLabel>
              <Select
                value={formData.priority}
                label="Priority"
                onChange={(e) => handleInputChange('priority', e.target.value)}
              >
                {mockPriorityOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.priority && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                  {errors.priority}
                </Typography>
              )}
            </FormControl>
            <TextField
              label="Notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              multiline
              rows={4}
              fullWidth
              helperText="Optional additional information"
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Review Your Information
            </Typography>
            <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography variant="body2">
                <strong>Name:</strong> {formData.name}
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong> {formData.email}
              </Typography>
              <Typography variant="body2">
                <strong>Category:</strong>{' '}
                {mockCategoryOptions.find((opt) => opt.value === formData.category)?.label}
              </Typography>
              <Typography variant="body2">
                <strong>Priority:</strong>{' '}
                {mockPriorityOptions.find((opt) => opt.value === formData.priority)?.label}
              </Typography>
              {formData.notes && (
                <Typography variant="body2">
                  <strong>Notes:</strong> {formData.notes}
                </Typography>
              )}
            </Paper>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <ContentBox>
      <SectionTitle>Stepper Component</SectionTitle>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Multi-step form wizard with validation. Required fields must be completed before
        proceeding to the next step.
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {mockFormSteps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {renderStepContent(activeStep)}
        {!submitted && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              aria-label="Go back to previous step"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              aria-label={
                activeStep === mockFormSteps.length - 1 ? 'Submit form' : 'Continue to next step'
              }
            >
              {activeStep === mockFormSteps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        )}
      </Box>
    </ContentBox>
  );
};
