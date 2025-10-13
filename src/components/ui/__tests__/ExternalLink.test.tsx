import { render, screen } from '@testing-library/react'
import { ExternalLink } from '../ExternalLink'

describe('ExternalLink Component', () => {
  it('renders with text', () => {
    render(<ExternalLink href="https://example.com">Example Link</ExternalLink>)
    expect(screen.getByText('Example Link')).toBeInTheDocument()
  })

  it('renders with correct href', () => {
    render(<ExternalLink href="https://test.com">Test</ExternalLink>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://test.com')
  })

  it('opens in new tab', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders external link icon (SVG)', () => {
    const { container } = render(<ExternalLink href="https://example.com">Link</ExternalLink>)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <ExternalLink href="https://example.com" className="custom-class">
        Link
      </ExternalLink>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
