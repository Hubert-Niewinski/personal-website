import { render, screen } from '@testing-library/react'
import { BlogCard } from '../BlogCard'
import { BlogPost } from '@/constants/blog'

describe('BlogCard Component', () => {
  const mockBlogPost: BlogPost = {
    id: '1',
    slug: 'test-automation-guide',
    title: 'Getting Started with Test Automation',
    excerpt: 'Learn the fundamentals of test automation and how to build robust E2E tests.',
    date: '2024-01-15',
    category: 'it',
    tags: ['Testing', 'Automation', 'Playwright', 'Best Practices'],
    readTime: '5 min read',
    published: true
  }

  const mockSpeakingPost: BlogPost = {
    id: '2',
    slug: 'first-tech-talk',
    title: 'Preparing for Your First Tech Talk',
    excerpt: 'Tips and strategies for delivering an effective technical presentation.',
    date: '2024-02-20',
    category: 'speaking',
    tags: ['Public Speaking', 'Presentations'],
    readTime: '3 min read',
    published: true
  }

  const mockOffTopicPost: BlogPost = {
    id: '3',
    slug: 'basketball-lessons',
    title: 'Life Lessons from Basketball',
    excerpt: 'What team sports taught me about collaboration and leadership.',
    date: '2024-03-10',
    category: 'offtopic',
    tags: ['Life', 'Sports', 'Leadership'],
    readTime: '4 min read',
    published: true
  }

  it('renders blog post title', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('Getting Started with Test Automation')).toBeInTheDocument()
  })

  it('renders blog post excerpt', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('Learn the fundamentals of test automation and how to build robust E2E tests.')).toBeInTheDocument()
  })

  it('displays IT & Development category for IT posts', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('IT & Development')).toBeInTheDocument()
  })

  it('displays Public Speaking category for speaking posts', () => {
    const { container } = render(<BlogCard post={mockSpeakingPost} />)
    const categoryBadge = container.querySelector('.mb-4 span')
    expect(categoryBadge).toHaveTextContent('Public Speaking')
  })

  it('displays Off Topic category for offtopic posts', () => {
    render(<BlogCard post={mockOffTopicPost} />)
    expect(screen.getByText('Off Topic')).toBeInTheDocument()
  })

  it('renders first 3 tags', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('Testing')).toBeInTheDocument()
    expect(screen.getByText('Automation')).toBeInTheDocument()
    expect(screen.getByText('Playwright')).toBeInTheDocument()
  })

  it('displays formatted date', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('Jan 15, 2024')).toBeInTheDocument()
  })

  it('displays read time', () => {
    render(<BlogCard post={mockBlogPost} />)
    expect(screen.getByText('5 min read')).toBeInTheDocument()
  })

  it('has hover effects', () => {
    const { container } = render(<BlogCard post={mockBlogPost} />)
    const article = container.querySelector('article')
    expect(article).toHaveClass('hover:scale-[1.02]')
    expect(article).toHaveClass('hover:-translate-y-1')
  })

  it('renders as an article element', () => {
    const { container } = render(<BlogCard post={mockBlogPost} />)
    const article = container.querySelector('article')
    expect(article).toBeInTheDocument()
  })
})
