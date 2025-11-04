import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContentBox } from '../ContentBox';

describe('ContentBox', () => {
  it('renders children correctly', () => {
    render(
      <ContentBox>
        <div>Test Content</div>
      </ContentBox>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
