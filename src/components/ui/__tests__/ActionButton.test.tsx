import { render, screen } from '@testing-library/react'
import { ActionButton } from '../ActionButton'

describe('ActionButton Component', () => {
  it('renders with text', () => {
    render(<ActionButton href="/test">View Certificate</ActionButton>)
    expect(screen.getByText('View Certificate')).toBeInTheDocument()
  })

  it('renders as a link with correct href', () => {
    render(<ActionButton href="/test-url">Click Me</ActionButton>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test-url')
  })

  it('always opens links in new tab', () => {
    render(<ActionButton href="https://example.com">External</ActionButton>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders default icon when no icon provided', () => {
    const { container } = render(<ActionButton href="/test">Button</ActionButton>)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('has button styling', () => {
    const { container } = render(
      <ActionButton href="/test" icon="✨">
        Button
      </ActionButton>
    )
    const link = container.firstChild
    expect(link).toHaveClass('inline-flex')
    expect(link).toHaveClass('items-center')
  })
})
