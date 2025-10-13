import { render, screen, fireEvent } from '@testing-library/react'
import { CollapsibleSection } from '../CollapsibleSection'

describe('CollapsibleSection Component', () => {
  const mockOnToggle = jest.fn()

  beforeEach(() => {
    mockOnToggle.mockClear()
  })

  it('renders section title', () => {
    render(
      <CollapsibleSection title="Experience" isExpanded={true} onToggle={mockOnToggle}>
        <div>Content</div>
      </CollapsibleSection>
    )
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('shows children when expanded', () => {
    render(
      <CollapsibleSection title="Experience" isExpanded={true} onToggle={mockOnToggle}>
        <div>Experience Content</div>
      </CollapsibleSection>
    )
    expect(screen.getByText('Experience Content')).toBeInTheDocument()
  })

  it('hides children when collapsed', () => {
    render(
      <CollapsibleSection title="Experience" isExpanded={false} onToggle={mockOnToggle}>
        <div>Experience Content</div>
      </CollapsibleSection>
    )
    expect(screen.queryByText('Experience Content')).not.toBeInTheDocument()
  })

  it('calls onToggle when button is clicked', () => {
    render(
      <CollapsibleSection title="Experience" isExpanded={true} onToggle={mockOnToggle}>
        <div>Content</div>
      </CollapsibleSection>
    )
    
    const button = screen.getByRole('button', { name: /toggle experience section/i })
    fireEvent.click(button)
    
    expect(mockOnToggle).toHaveBeenCalledTimes(1)
  })

  it('has correct aria-expanded when expanded', () => {
    render(
      <CollapsibleSection title="Skills" isExpanded={true} onToggle={mockOnToggle}>
        <div>Skills Content</div>
      </CollapsibleSection>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has correct aria-expanded when collapsed', () => {
    render(
      <CollapsibleSection title="Skills" isExpanded={false} onToggle={mockOnToggle}>
        <div>Skills Content</div>
      </CollapsibleSection>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('rotates icon when expanded', () => {
    const { container } = render(
      <CollapsibleSection title="Education" isExpanded={true} onToggle={mockOnToggle}>
        <div>Content</div>
      </CollapsibleSection>
    )
    
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('rotate-180')
  })

  it('does not rotate icon when collapsed', () => {
    const { container } = render(
      <CollapsibleSection title="Education" isExpanded={false} onToggle={mockOnToggle}>
        <div>Content</div>
      </CollapsibleSection>
    )
    
    const svg = container.querySelector('svg')
    expect(svg).not.toHaveClass('rotate-180')
  })

  it('has proper aria-label', () => {
    render(
      <CollapsibleSection title="Certifications" isExpanded={true} onToggle={mockOnToggle}>
        <div>Content</div>
      </CollapsibleSection>
    )
    
    expect(screen.getByLabelText('Toggle Certifications section')).toBeInTheDocument()
  })
})
