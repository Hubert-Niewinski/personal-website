import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <h2>Test Title</h2>
        <p>Test content</p>
      </Card>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies hover effect when hover prop is true', () => {
    const { container } = render(<Card hover>Content</Card>)
    const card = container.firstChild
    expect(card).toHaveClass('hover:border-slate-600/70')
  })

  it('does not apply hover effect when hover prop is false', () => {
    const { container } = render(<Card hover={false}>Content</Card>)
    const card = container.firstChild
    expect(card).not.toHaveClass('hover:border-slate-600/70')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('has default card styling', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.firstChild
    expect(card).toHaveClass('bg-slate-800/40')
    expect(card).toHaveClass('border-slate-700/40')
    expect(card).toHaveClass('rounded-xl')
  })
})
