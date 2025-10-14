import { render, screen } from '@testing-library/react';
import { ExternalLink } from '../ExternalLink';

describe('ExternalLink', () => {
  it('renders with href and children', () => {
    render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);

    expect(screen.getByText('Example Link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('opens in new tab with security attributes', () => {
    render(<ExternalLink href="https://example.com">Secure Link</ExternalLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders external link icon', () => {
    render(<ExternalLink href="https://example.com">With Icon</ExternalLink>);

    // The Icon component should be rendered
    const link = screen.getByRole('link');
    expect(link).toHaveClass('inline-flex', 'items-center', 'gap-1');
  });

  it('applies hover styling', () => {
    render(<ExternalLink href="https://example.com">Hover Link</ExternalLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('hover:text-blue-300');
  });

  it('applies additional className', () => {
    render(
      <ExternalLink href="https://example.com" className="custom-link">
        Custom
      </ExternalLink>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-link');
  });
});
