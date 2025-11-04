import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DateTimePickerDemo } from '../DateTimePickerDemo';

describe('DateTimePickerDemo', () => {
  it('renders the datetime picker component title', () => {
    render(<DateTimePickerDemo />);
    expect(screen.getByText('DateTime Picker Component')).toBeInTheDocument();
  });

  it('renders start and end date pickers', () => {
    render(<DateTimePickerDemo />);
    expect(screen.getAllByText('Start Date & Time').length).toBeGreaterThan(0);
    expect(screen.getAllByText('End Date & Time').length).toBeGreaterThan(0);
  });

  it('displays helper text', () => {
    render(<DateTimePickerDemo />);
    expect(screen.getByText('Select the start date and time')).toBeInTheDocument();
    expect(screen.getByText('Select the end date and time')).toBeInTheDocument();
  });
});
