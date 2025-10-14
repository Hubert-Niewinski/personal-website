import { render, screen } from '@testing-library/react';
import { ServicesSection } from '../ServicesSection';
import { services, stats } from '@/constants/services';

// Mock child components
jest.mock('../ServiceCard', () => ({
  ServiceCard: ({ service, index }: { service: { title: string }; index: number }) => (
    <div data-testid={`service-card-${index}`}>{service.title}</div>
  ),
}));

jest.mock('@/components/ui/GradientText', () => ({
  GradientText: ({
    children,
    as: Component = 'div',
    ...props
  }: {
    children: React.ReactNode;
    as?: React.ElementType;
    [key: string]: unknown;
  }) => <Component {...props}>{children}</Component>,
}));

describe('ServicesSection', () => {
  describe('Rendering', () => {
    it('should render services section', () => {
      const { container } = render(<ServicesSection />);
      const section = container.querySelector('[data-test-id="services-section"]');
      expect(section).toBeInTheDocument();
    });

    it('should render section heading', () => {
      render(<ServicesSection />);
      const heading = screen.getByText('What I Can Help You With');
      expect(heading).toHaveTextContent('What I Can Help You With');
    });

    it('should render section subtitle', () => {
      render(<ServicesSection />);
      const subtitle = screen.getByText(
        'Comprehensive solutions for your testing, development, and DevOps needs'
      );
      expect(subtitle).toBeInTheDocument();
    });

    it('should render all service cards', () => {
      render(<ServicesSection />);
      services.forEach((_, index) => {
        expect(screen.getByTestId(`service-card-${index}`)).toBeInTheDocument();
      });
    });

    it('should render achievements section', () => {
      const { container } = render(<ServicesSection />);
      const achievementsSection = container.querySelector('[data-test-id="achievements-section"]');
      expect(achievementsSection).toBeInTheDocument();
    });

    it('should render Experience & Impact heading', () => {
      render(<ServicesSection />);
      expect(screen.getByText('Experience & Impact')).toBeInTheDocument();
    });
  });

  describe('CTA Section', () => {
    it('should render main CTA text', () => {
      render(<ServicesSection />);
      expect(
        screen.getByText(/Interested in working together\? I'd love to hear about your project\./i)
      ).toBeInTheDocument();
    });

    it('should render referral text', () => {
      render(<ServicesSection />);
      expect(
        screen.getByText(
          /If it's outside my expertise, I'm happy to recommend someone from my network who would be a better fit\./i
        )
      ).toBeInTheDocument();
    });

    it('should not render obsolete "Continue reading" text', () => {
      render(<ServicesSection />);
      expect(screen.queryByText(/Continue reading to learn more/i)).not.toBeInTheDocument();
    });
  });

  describe('Stats Section', () => {
    it('should render all stats', () => {
      render(<ServicesSection />);

      stats.forEach((stat) => {
        // Some values may appear multiple times (like "10+"), use getAllByText
        const values = screen.queryAllByText(stat.value);
        expect(values.length).toBeGreaterThanOrEqual(1);
        expect(screen.getByText(stat.label)).toBeInTheDocument();
      });
    });

    it('should render correct number of stat cards', () => {
      const { container } = render(<ServicesSection />);
      // Stats are rendered in a grid with specific classes
      const statCards = container.querySelectorAll('[data-test-id="achievements-section"] .group');
      expect(statCards.length).toBe(stats.length);
    });
  });

  describe('Layout and Styling', () => {
    it('should have proper grid layout for services', () => {
      const { container } = render(<ServicesSection />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
    });

    it('should have responsive padding', () => {
      const { container } = render(<ServicesSection />);
      const section = container.querySelector('[data-test-id="services-section"]');
      expect(section).toHaveClass('px-4', 'sm:px-8');
    });

    it('should have proper spacing between sections', () => {
      const { container } = render(<ServicesSection />);
      const section = container.querySelector('[data-test-id="services-section"]');
      expect(section).toHaveClass('mt-8', 'sm:mt-12', 'lg:mt-16');
      expect(section).toHaveClass('mb-8', 'sm:mb-12', 'lg:mb-16');
    });

    it('should have proper grid layout for stats', () => {
      const { container } = render(<ServicesSection />);
      const achievementsSection = container.querySelector('[data-test-id="achievements-section"]');
      const grid = achievementsSection?.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-2', 'md:grid-cols-3');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<ServicesSection />);
      const servicesHeading = screen.getByText('What I Can Help You With');
      const impactHeading = screen.getByText('Experience & Impact');

      expect(servicesHeading.tagName).toBe('H2');
      expect(impactHeading.tagName).toBe('H2');
    });

    it('should have test IDs for key sections', () => {
      const { container } = render(<ServicesSection />);
      expect(container.querySelector('[data-test-id="services-section"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="services-title"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="services-subtitle"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="achievements-section"]')).toBeInTheDocument();
    });
  });

  describe('Content Verification', () => {
    it('should render subtitle without punctuation at the end', () => {
      render(<ServicesSection />);
      const subtitle = screen.getByText(
        'Comprehensive solutions for your testing, development, and DevOps needs'
      );
      const text = subtitle.textContent;

      // Should not end with period, colon, or other punctuation (UI convention)
      expect(text).not.toMatch(/[.:!?]$/);
    });

    it('should have professional but approachable CTA tone', () => {
      render(<ServicesSection />);

      // Check for professional language
      expect(screen.getByText(/Interested in working together/i)).toBeInTheDocument();
      expect(screen.getByText(/I'd love to hear about your project/i)).toBeInTheDocument();

      // Should not have overly casual language
      expect(screen.queryByText(/Let's talk/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/No worries/i)).not.toBeInTheDocument();
    });
  });

  describe('Services Data Integration', () => {
    it('should pass correct service data to ServiceCard', () => {
      render(<ServicesSection />);

      services.forEach((service, index) => {
        const card = screen.getByTestId(`service-card-${index}`);
        expect(card).toHaveTextContent(service.title);
      });
    });

    it('should render services in correct order', () => {
      render(<ServicesSection />);

      const cards = services.map((_, index) => screen.getByTestId(`service-card-${index}`));

      expect(cards).toHaveLength(services.length);
      cards.forEach((card, index) => {
        expect(card).toHaveTextContent(services[index].title);
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('should have responsive text sizes for heading', () => {
      render(<ServicesSection />);
      const heading = screen.getByText('What I Can Help You With');
      expect(heading).toHaveClass('text-2xl', 'sm:text-3xl', 'lg:text-4xl');
    });

    it('should have responsive text sizes for subtitle', () => {
      render(<ServicesSection />);
      const subtitle = screen.getByText(
        'Comprehensive solutions for your testing, development, and DevOps needs'
      );
      expect(subtitle).toHaveClass('text-base', 'sm:text-lg');
    });

    it('should have responsive gap spacing', () => {
      const { container } = render(<ServicesSection />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('gap-4', 'sm:gap-6', 'lg:gap-8');
    });
  });
});
