import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('renders with skill variant by default', () => {
    const { container } = render(<Badge>Skill Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass('bg-slate-700/50')
  })

  it('renders with tag variant', () => {
    const { container } = render(<Badge variant="tag">Tag Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass('bg-slate-700/30')
  })

  it('renders with category variant', () => {
    const { container } = render(<Badge variant="category">Category Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass('bg-slate-700/50')
  })

  it('renders stars for level 1', () => {
    render(<Badge level={1}>Level 1</Badge>)
    const starContainer = screen.getByLabelText('Level 1 of 3')
    expect(starContainer).toBeInTheDocument()
  })

  it('renders stars for level 2', () => {
    render(<Badge level={2}>Level 2</Badge>)
    const starContainer = screen.getByLabelText('Level 2 of 3')
    expect(starContainer).toBeInTheDocument()
  })

  it('renders stars for level 3', () => {
    render(<Badge level={3}>Level 3</Badge>)
    const starContainer = screen.getByLabelText('Level 3 of 3')
    expect(starContainer).toBeInTheDocument()
  })

  it('does not render stars when level is not provided', () => {
    render(<Badge>No Level</Badge>)
    expect(screen.queryByText('★')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-class">Custom</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass('custom-class')
  })
})
