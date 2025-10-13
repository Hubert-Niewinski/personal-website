import { render, screen } from '@testing-library/react'
import { ServiceCard } from '../ServiceCard'
import { Service } from '@/constants/services'

describe('ServiceCard Component', () => {
  const mockPrimaryService: Service = {
    title: 'Test Automation',
    description: 'Expert in E2E testing with Playwright and Cypress',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    features: ['Playwright', 'Cypress', 'CI/CD'],
    level: 'primary',
    testId: 'test-automation'
  }

  const mockSecondaryService: Service = {
    title: 'DevOps & Cloud',
    description: 'Infrastructure automation and cloud solutions',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    features: ['AWS', 'Docker', 'Terraform'],
    level: 'secondary',
    testId: 'devops-cloud'
  }

  it('renders service title and description', () => {
    render(<ServiceCard service={mockPrimaryService} index={0} />)
    expect(screen.getByText('Test Automation')).toBeInTheDocument()
    expect(screen.getByText('Expert in E2E testing with Playwright and Cypress')).toBeInTheDocument()
  })

  it('renders all features', () => {
    render(<ServiceCard service={mockPrimaryService} index={0} />)
    expect(screen.getByText('Playwright')).toBeInTheDocument()
    expect(screen.getByText('Cypress')).toBeInTheDocument()
    expect(screen.getByText('CI/CD')).toBeInTheDocument()
  })

  it('displays primary expertise badge for primary services', () => {
    render(<ServiceCard service={mockPrimaryService} index={0} />)
    expect(screen.getByText('⭐ Primary Expertise')).toBeInTheDocument()
  })

  it('does not display primary badge for secondary services', () => {
    render(<ServiceCard service={mockSecondaryService} index={0} />)
    expect(screen.queryByText('⭐ Primary Expertise')).not.toBeInTheDocument()
  })

  it('applies primary styling for primary services', () => {
    const { container } = render(<ServiceCard service={mockPrimaryService} index={0} />)
    const card = container.querySelector('[data-test-id="test-automation"]')
    expect(card).toHaveClass('border-2')
    expect(card).toHaveClass('border-blue-500/50')
  })

  it('applies secondary styling for secondary services', () => {
    const { container } = render(<ServiceCard service={mockSecondaryService} index={0} />)
    const card = container.querySelector('[data-test-id="devops-cloud"]')
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('border-slate-700/40')
  })

  it('has hover effects', () => {
    const { container } = render(<ServiceCard service={mockPrimaryService} index={0} />)
    const card = container.querySelector('[data-test-id="test-automation"]')
    expect(card).toHaveClass('hover:scale-[1.03]')
    expect(card).toHaveClass('hover:-translate-y-3')
  })

  it('applies animation delay based on index', () => {
    const { container } = render(<ServiceCard service={mockPrimaryService} index={2} />)
    const card = container.querySelector('[data-test-id="test-automation"]')
    expect(card).toHaveStyle({ animationDelay: '200ms' })
  })

  it('renders icon SVG', () => {
    const { container } = render(<ServiceCard service={mockPrimaryService} index={0} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
