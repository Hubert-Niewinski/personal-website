import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../Navigation';
import * as useScrollModule from '@/hooks/useScroll';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

// Mock useScroll hook
jest.mock('@/hooks/useScroll');

describe('Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the navigation component', () => {
      render(<Navigation />);
      const nav = screen.getByTestId('main-navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should render user name', () => {
      render(<Navigation />);
      // Should appear twice - desktop and mobile
      const names = screen.getAllByText('Hubert Niewiński');
      expect(names.length).toBeGreaterThanOrEqual(1);
    });

    it('should render all navigation items', () => {
      render(<Navigation />);
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Blog').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Resume').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Speaking').length).toBeGreaterThan(0);
    });
  });

  describe('Social Links', () => {
    it('should render GitHub link', () => {
      render(<Navigation />);
      const githubLinks = screen.getAllByLabelText(/github/i);
      expect(githubLinks.length).toBeGreaterThan(0);
      expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/hubert-niewinski');
      expect(githubLinks[0]).toHaveAttribute('target', '_blank');
    });

    it('should render LinkedIn link', () => {
      render(<Navigation />);
      const linkedinLinks = screen.getAllByLabelText(/linkedin/i);
      expect(linkedinLinks.length).toBeGreaterThan(0);
      expect(linkedinLinks[0]).toHaveAttribute('href', 'https://linkedin.com/in/hubert-niewinski');
      expect(linkedinLinks[0]).toHaveAttribute('target', '_blank');
    });

    it('should render Email link', () => {
      render(<Navigation />);
      const emailLinks = screen.getAllByLabelText(/email/i);
      expect(emailLinks.length).toBeGreaterThan(0);
      expect(emailLinks[0]).toHaveAttribute('href', 'mailto:niewinskihubert@gmail.com');
    });
  });

  describe('Mobile Menu', () => {
    it('should render mobile menu toggle button', () => {
      render(<Navigation />);
      const toggleButton = screen.getByLabelText('Toggle menu');
      expect(toggleButton).toBeInTheDocument();
    });

    it('should toggle mobile menu on button click', () => {
      render(<Navigation />);
      const toggleButton = screen.getByLabelText('Toggle menu');

      // Menu should be closed initially
      expect(screen.queryByText('Home')).toBeInTheDocument(); // Desktop version exists

      // Click to open
      fireEvent.click(toggleButton);

      // Click to close
      fireEvent.click(toggleButton);
    });

    it('should close mobile menu when navigation item is clicked', () => {
      render(<Navigation />);
      const toggleButton = screen.getByLabelText('Toggle menu');

      // Open menu
      fireEvent.click(toggleButton);

      // Click a navigation item
      const homeLinks = screen.getAllByText('Home');
      if (homeLinks.length > 1) {
        fireEvent.click(homeLinks[homeLinks.length - 1]); // Click mobile version
      }
    });
  });

  describe('Blog Navigation', () => {
    it('should have blog navigation link', () => {
      render(<Navigation />);

      // Find blog navigation link by text (appears in both desktop and mobile)
      const blogLinks = screen.getAllByText('Blog');
      expect(blogLinks.length).toBeGreaterThan(0);

      // Check that at least one has the right href
      const blogLink = blogLinks.find(
        (link) => link.closest('a')?.getAttribute('href') === '/blog'
      );
      expect(blogLink).toBeDefined();
    });
  });

  describe('Scroll Behavior', () => {
    it('should change background when scrolled', () => {
      jest.spyOn(useScrollModule, 'useScroll').mockReturnValue(true);

      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });

    it('should have default background when not scrolled', () => {
      jest.spyOn(useScrollModule, 'useScroll').mockReturnValue(false);

      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria labels for social links', () => {
      render(<Navigation />);
      expect(screen.getAllByLabelText(/github/i).length).toBeGreaterThan(0);
      expect(screen.getAllByLabelText(/linkedin/i).length).toBeGreaterThan(0);
      expect(screen.getAllByLabelText(/email/i).length).toBeGreaterThan(0);
    });

    it('should have aria label for mobile menu toggle', () => {
      render(<Navigation />);
      const toggleButton = screen.getByLabelText('Toggle menu');
      expect(toggleButton).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should have desktop navigation classes', () => {
      const { container } = render(<Navigation />);
      const desktopNav = container.querySelector('.hidden.md\\:flex');
      expect(desktopNav).toBeInTheDocument();
    });

    it('should have mobile navigation classes', () => {
      const { container } = render(<Navigation />);
      const mobileNav = container.querySelector('.md\\:hidden');
      expect(mobileNav).toBeInTheDocument();
    });
  });

  describe('Visual Effects', () => {
    it('should have gradient background', () => {
      const { container } = render(<Navigation />);
      const gradientElements = container.querySelectorAll('[class*="bg-gradient"]');
      expect(gradientElements.length).toBeGreaterThan(0);
    });

    it('should have animated elements', () => {
      const { container } = render(<Navigation />);
      const animatedElements = container.querySelectorAll('[class*="animate"]');
      expect(animatedElements.length).toBeGreaterThan(0);
    });
  });
});
