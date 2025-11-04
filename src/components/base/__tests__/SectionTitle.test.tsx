import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from '../SectionTitle';

describe('SectionTitle', () => {
  it('renders title text correctly', () => {
    render(<SectionTitle>Test Title</SectionTitle>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders as h2 element', () => {
    render(<SectionTitle>Test Title</SectionTitle>);
    const title = screen.getByText('Test Title');
    expect(title.tagName).toBe('H2');
  });
});
