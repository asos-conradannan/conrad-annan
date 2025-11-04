import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DayTimeGreeting } from '../DayTimeGreeting';

describe('DayTimeGreeting', () => {
  it('renders a greeting message', () => {
    render(<DayTimeGreeting />);
    const greeting = screen.getByRole('heading', { level: 1 });
    expect(greeting).toBeInTheDocument();
    expect(greeting.textContent).toMatch(/Good (Morning|Afternoon|Evening)!/);
  });

  it('displays the current date', () => {
    render(<DayTimeGreeting />);
    const greeting = screen.getByRole('heading', { level: 1 });
    expect(greeting.textContent).toMatch(/Today is/);
  });
});
