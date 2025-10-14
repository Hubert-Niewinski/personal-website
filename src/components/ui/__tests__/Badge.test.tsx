import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders with children text', () => {
    render(<Badge>Test Badge</Badge>);

    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies default skill variant styling', () => {
    render(<Badge>Default</Badge>);

    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('px-4', 'py-2', 'rounded-lg', 'text-sm', 'font-medium');
  });

  it('applies tag variant styling', () => {
    render(<Badge variant="tag">Tag Badge</Badge>);

    const badge = screen.getByText('Tag Badge');
    expect(badge).toHaveClass('text-xs', 'px-2', 'py-1', 'rounded');
  });

  it('applies category variant styling', () => {
    render(<Badge variant="category">Category Badge</Badge>);

    const badge = screen.getByText('Category Badge');
    expect(badge).toHaveClass('px-3', 'py-1', 'text-xs', 'rounded-full');
  });

  it('applies additional className', () => {
    render(<Badge className="custom-class">Custom</Badge>);

    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-class');
  });
});
