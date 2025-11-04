import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TimelineDemo } from '../TimelineDemo';

describe('TimelineDemo', () => {
  it('renders the timeline component title', () => {
    render(<TimelineDemo />);
    expect(screen.getByText('Timeline Component')).toBeInTheDocument();
  });

  it('renders timeline events', () => {
    render(<TimelineDemo />);
    expect(screen.getByText('Project Kickoff')).toBeInTheDocument();
    expect(screen.getByText('MVP Complete')).toBeInTheDocument();
    expect(screen.getByText('General Availability')).toBeInTheDocument();
  });

  it('displays event descriptions', () => {
    render(<TimelineDemo />);
    expect(screen.getByText(/Initial project planning/)).toBeInTheDocument();
  });
});
