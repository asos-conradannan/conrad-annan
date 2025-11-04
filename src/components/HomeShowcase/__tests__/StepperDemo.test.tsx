import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StepperDemo } from '../StepperDemo';

describe('StepperDemo', () => {
  it('renders the stepper component title', () => {
    render(<StepperDemo />);
    expect(screen.getByText('Stepper Component')).toBeInTheDocument();
  });

  it('renders all step labels', () => {
    render(<StepperDemo />);
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Configuration')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  it('renders form fields on first step', () => {
    render(<StepperDemo />);
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<StepperDemo />);
    
    const nextButton = screen.getByRole('button', { name: /Continue to next step/ });
    await user.click(nextButton);
    
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('navigates to next step when fields are valid', async () => {
    const user = userEvent.setup();
    render(<StepperDemo />);
    
    const nameInput = screen.getByLabelText(/Name/);
    const emailInput = screen.getByLabelText(/Email/);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    
    const nextButton = screen.getByRole('button', { name: /Continue to next step/ });
    await user.click(nextButton);
    
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
  });
});
