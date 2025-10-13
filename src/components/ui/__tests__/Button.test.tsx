import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders button with children text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Click Me</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/contact">Contact</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/contact')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('has gradient styling', () => {
    render(<Button>Gradient Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gradient-to-r')
    expect(button).toHaveClass('from-blue-600')
    expect(button).toHaveClass('to-purple-600')
  })

  it('has hover effects', () => {
    render(<Button>Hover Me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('hover:scale-105')
    expect(button).toHaveClass('hover:shadow-2xl')
  })

  it('applies test ID when provided', () => {
    const { container } = render(<Button testId="cta-button">Button</Button>)
    const button = container.querySelector('[data-test-id="cta-button"]')
    expect(button).toBeInTheDocument()
  })
})
