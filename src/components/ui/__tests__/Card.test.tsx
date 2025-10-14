import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <div>Card Content</div>
      </Card>
    );

    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies hover effect by default', () => {
    const { container } = render(<Card>Hover Card</Card>);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('transition-all', 'duration-300', 'hover:border-slate-600/70');
  });

  it('disables hover effect when hover is false', () => {
    const { container } = render(<Card hover={false}>No Hover</Card>);

    const card = container.firstChild as HTMLElement;
    expect(card).not.toHaveClass('transition-all');
    expect(card).not.toHaveClass('hover:border-slate-600/70');
  });

  it('applies additional className', () => {
    const { container } = render(<Card className="custom-card">Custom</Card>);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-card');
  });

  it('has proper card styling', () => {
    const { container } = render(<Card>Styled Card</Card>);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('rounded-xl', 'p-6');
  });
});
