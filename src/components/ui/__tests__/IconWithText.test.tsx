import { render, screen } from '@testing-library/react'
import { IconWithText } from '../IconWithText'

describe('IconWithText Component', () => {
  it('renders icon and text', () => {
    render(<IconWithText icon="calendar">January 2024</IconWithText>)
    expect(screen.getByText('January 2024')).toBeInTheDocument()
  })

  it('renders with location icon', () => {
    render(<IconWithText icon="location">New York</IconWithText>)
    expect(screen.getByText('New York')).toBeInTheDocument()
  })

  it('renders with document icon', () => {
    render(<IconWithText icon="document">Document Title</IconWithText>)
    expect(screen.getByText('Document Title')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <IconWithText icon="location" className="custom-class">
        Location
      </IconWithText>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('has default styling', () => {
    const { container } = render(<IconWithText icon="calendar">Test</IconWithText>)
    expect(container.firstChild).toHaveClass('flex')
    expect(container.firstChild).toHaveClass('items-center')
    expect(container.firstChild).toHaveClass('gap-2')
  })
})
