import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock Next.js Link component (prevents runtime errors in the test environment)
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Footer Component', () => {
  it('renders the core elements and navigation links', () => {
    render(<Footer />);

    // FIX: Using a space to match the "Rabat Keys" content of the h3 element
    expect(screen.getByRole('heading', { name: /Rabat Keys/i })).toBeInTheDocument();

    // Check for a key link using the 'About Us' link
    expect(screen.getByRole('link', { name: /About Us/i })).toHaveAttribute('href', '/about');

    // Check for contact information
    expect(screen.getByText('+212 5 37 00 00 00')).toBeInTheDocument();
  });
});