import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navbar from '@/components/navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Executive Board')).toBeInTheDocument();
    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('Lineage')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('renders the fraternity logo', () => {
    render(<Navbar />);
    expect(screen.getByText('ΑΒΓ')).toBeInTheDocument();
  });
});