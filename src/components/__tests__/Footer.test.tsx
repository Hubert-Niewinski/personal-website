import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  describe('Rendering', () => {
    it('should render the footer component', () => {
      render(<Footer />);
      const footer = screen.getByTestId('site-footer');
      expect(footer).toBeInTheDocument();
    });

    it('should render footer sections', () => {
      render(<Footer />);
      expect(screen.getByTestId('footer-about')).toBeInTheDocument();
      expect(screen.getByTestId('footer-links')).toBeInTheDocument();
      expect(screen.getByTestId('footer-contact')).toBeInTheDocument();
    });
  });

  describe('About Section', () => {
    it('should display author name', () => {
      render(<Footer />);
      expect(screen.getByText('Hubert Niewiński')).toBeInTheDocument();
    });

    it('should display professional description', () => {
      render(<Footer />);
      expect(screen.getByText(/Senior Test Automation Engineer/i)).toBeInTheDocument();
      expect(screen.getByText(/Sii Poland/i)).toBeInTheDocument();
      expect(screen.getByText(/Toastmasters/i)).toBeInTheDocument();
    });
  });

  describe('Quick Links', () => {
    it('should render quick links heading', () => {
      render(<Footer />);
      expect(screen.getByText('Quick Links')).toBeInTheDocument();
    });

    it('should render home link', () => {
      render(<Footer />);
      const homeLink = screen.getByTestId('footer-link-home');
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toHaveAttribute('href', '/');
      expect(homeLink).toHaveTextContent('Home');
    });

    it('should render resume link', () => {
      render(<Footer />);
      const resumeLink = screen.getByTestId('footer-link-resume');
      expect(resumeLink).toBeInTheDocument();
      expect(resumeLink).toHaveAttribute('href', '/resume');
      expect(resumeLink).toHaveTextContent('Resume');
    });

    it('should render speaking link', () => {
      render(<Footer />);
      const speakingLink = screen.getByTestId('footer-link-speaking');
      expect(speakingLink).toBeInTheDocument();
      expect(speakingLink).toHaveAttribute('href', '/speaking');
      expect(speakingLink).toHaveTextContent('Speaking');
    });

    it('should render blog link', () => {
      render(<Footer />);
      const blogLink = screen.getByTestId('footer-link-blog');
      expect(blogLink).toBeInTheDocument();
      expect(blogLink).toHaveAttribute('href', '/blog');
      expect(blogLink).toHaveTextContent('Blog');
    });
  });

  describe('Connect Section', () => {
    it('should render connect heading', () => {
      render(<Footer />);
      expect(screen.getByText('Connect')).toBeInTheDocument();
    });

    it('should render LinkedIn link', () => {
      render(<Footer />);
      const linkedinLink = screen.getByTestId('footer-linkedin');
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/hubert-niewinski');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render GitHub link', () => {
      render(<Footer />);
      const githubLink = screen.getByTestId('footer-github');
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('href', 'https://github.com/hubert-niewinski');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });

    it('should render Email link', () => {
      render(<Footer />);
      const emailLink = screen.getByTestId('footer-email');
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', 'mailto:niewinskihubert@gmail.com');
    });
  });

  describe('Copyright', () => {
    it('should display copyright notice', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
      expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    });

    it('should display author name in copyright', () => {
      render(<Footer />);
      const copyrightText = screen.getByText(/© \d{4} Hubert Niewiński/);
      expect(copyrightText).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic HTML structure', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    it('should have aria labels for social links', () => {
      render(<Footer />);
      // Check by testid since Footer uses visible text instead of aria-labels
      expect(screen.getByTestId('footer-linkedin')).toBeInTheDocument();
      expect(screen.getByTestId('footer-github')).toBeInTheDocument();
      expect(screen.getByTestId('footer-email')).toBeInTheDocument();
    });

    it('should have proper link targets for external links', () => {
      render(<Footer />);
      const externalLinks = screen.getAllByRole('link', { name: /profile/i });
      externalLinks.forEach((link) => {
        if (link.getAttribute('target') === '_blank') {
          expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        }
      });
    });
  });

  describe('Responsive Design', () => {
    it('should have grid layout classes', () => {
      const { container } = render(<Footer />);
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('grid-cols-1', 'sm:grid-cols-3');
    });

    it('should have responsive text sizes', () => {
      const { container } = render(<Footer />);
      const headings = container.querySelectorAll('h3');
      headings.forEach((heading) => {
        expect(heading.className).toMatch(/text-base|sm:text-lg/);
      });
    });
  });

  describe('Visual Design', () => {
    it('should have backdrop blur effect', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass('backdrop-blur-sm');
    });

    it('should have border styling', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass('border-t');
    });

    it('should have hover effects on links', () => {
      const { container } = render(<Footer />);
      const links = container.querySelectorAll('a[data-test-id^="footer-link-"]');
      links.forEach((link) => {
        expect(link.className).toMatch(/hover:text-blue-400/);
      });
    });
  });
});
