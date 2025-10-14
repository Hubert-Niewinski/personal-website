import { render, screen } from '@testing-library/react';
import { ActionButton } from '../ActionButton';

describe('ActionButton', () => {
  it('renders with default icon and text', () => {
    render(<ActionButton href="https://example.com">View</ActionButton>);

    expect(screen.getByText('View')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders with custom icon', () => {
    const customIcon = <span data-testid="custom-icon">★</span>;
    render(
      <ActionButton href="https://example.com" icon={customIcon}>
        Custom
      </ActionButton>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('applies correct size classes for small size', () => {
    render(
      <ActionButton href="https://example.com" size="sm">
        Small
      </ActionButton>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-xs', 'px-3', 'py-2');
  });

  it('applies correct size classes for medium size', () => {
    render(
      <ActionButton href="https://example.com" size="md">
        Medium
      </ActionButton>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('px-4', 'py-2', 'text-sm');
  });

  it('opens link in new tab with security attributes', () => {
    render(<ActionButton href="https://example.com">External</ActionButton>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
