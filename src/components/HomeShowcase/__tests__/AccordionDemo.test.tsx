import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccordionDemo } from '../AccordionDemo';

describe('AccordionDemo', () => {
  it('renders the accordion component title', () => {
    render(<AccordionDemo />);
    expect(screen.getByText('Accordion Component')).toBeInTheDocument();
  });

  it('renders all accordion panels', () => {
    render(<AccordionDemo />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Guidelines')).toBeInTheDocument();
    expect(screen.getByText('Tips')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('expands accordion panel when clicked', async () => {
    const user = userEvent.setup();
    render(<AccordionDemo />);
    
    const guidelinesButton = screen.getByText('Guidelines');
    await user.click(guidelinesButton);
    
    expect(screen.getByText(/When implementing these components/)).toBeInTheDocument();
  });
});
