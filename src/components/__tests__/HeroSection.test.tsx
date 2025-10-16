import { render, screen } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

// Mock Next.js Image component
type NextImageMockProps = React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean };

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: NextImageMockProps) => {
    const { priority, ...rest } = props;
    void priority;

    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} />;
  },
}));

describe('HeroSection', () => {
  describe('Rendering', () => {
    it('should render the hero section', () => {
      const { container } = render(<HeroSection />);
      const section = container.querySelector('[data-test-id="hero-section"]');
      expect(section).toBeInTheDocument();
    });

    it('should render the main heading with name', () => {
      render(<HeroSection />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Hubert Niewiński');
    });

    it('should render the subtitle', () => {
      render(<HeroSection />);
      expect(screen.getByText('Software Engineer and Public Speaker')).toBeInTheDocument();
    });

    it('should render profile photo', () => {
      render(<HeroSection />);
      const photo = screen.getByAltText('Hubert Niewiński - Software Engineer and Public Speaker');
      expect(photo).toBeInTheDocument();
    });

    it('should render CTA button', () => {
      render(<HeroSection />);
      const button = screen.getByText('Get In Touch');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('should display job title and company', () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/Senior Test Automation Engineer and Technical Assessor at Sii Poland/i)
      ).toBeInTheDocument();
    });

    it('should mention test automation specialization', () => {
      render(<HeroSection />);
      expect(screen.getByText(/Test automation is my core specialization/i)).toBeInTheDocument();
    });

    it('should mention additional skills', () => {
      render(<HeroSection />);
      const description = screen.getByText(
        /full-stack development, DevOps practices, and AI technologies/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention speaking experience', () => {
      render(<HeroSection />);
      expect(screen.getByText(/Regular speaker at IT meetups/i)).toBeInTheDocument();
      expect(screen.getByText(/meet.js, BiałQA/i)).toBeInTheDocument();
    });

    it('should mention Toastmasters membership', () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/Toastmasters International member for 6\+ years/i)
      ).toBeInTheDocument();
    });

    it('should include basketball hobby with humor', () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/passion level: 100%, talent level: debatable at best/i)
      ).toBeInTheDocument();
    });
  });

  describe('Location and Languages', () => {
    it('should display location information', () => {
      render(<HeroSection />);
      expect(screen.getByText(/Based in Białystok, Poland/i)).toBeInTheDocument();
    });

    it('should display language proficiencies', () => {
      render(<HeroSection />);
      const languageText = screen.getByText(
        /Polish \(Native\), English \(Fluent\), German \(Intermediate\)/i
      );
      expect(languageText).toBeInTheDocument();
    });

    it('should display location with emoji', () => {
      render(<HeroSection />);
      expect(screen.getByText(/📍/)).toBeInTheDocument();
    });

    it('should display languages with emoji', () => {
      render(<HeroSection />);
      expect(screen.getByText(/🗣️/)).toBeInTheDocument();
    });
  });

  describe('Image Configuration', () => {
    it('should load profile image with correct path', () => {
      render(<HeroSection />);
      const image = screen.getByAltText('Hubert Niewiński - Software Engineer and Public Speaker');
      expect(image).toHaveAttribute('src', '/profile.jpeg');
    });

    it('should have proper image dimensions', () => {
      render(<HeroSection />);
      const image = screen.getByAltText('Hubert Niewiński - Software Engineer and Public Speaker');
      expect(image).toHaveAttribute('width', '288');
      expect(image).toHaveAttribute('height', '384');
    });
  });

  describe('CTA Button', () => {
    it('should have mailto link', () => {
      render(<HeroSection />);
      const button = screen.getByRole('link', { name: /get in touch/i });
      expect(button).toHaveAttribute('href', 'mailto:niewinskihubert@gmail.com');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<HeroSection />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading.tagName).toBe('H1');
    });

    it('should have descriptive alt text for profile photo', () => {
      render(<HeroSection />);
      const image = screen.getByAltText('Hubert Niewiński - Software Engineer and Public Speaker');
      expect(image).toHaveAccessibleName();
    });

    it('should have proper section structure with data-test-id', () => {
      const { container } = render(<HeroSection />);
      expect(container.querySelector('[data-test-id="hero-section"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="profile-photo"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="hero-subtitle"]')).toBeInTheDocument();
      expect(container.querySelector('[data-test-id="hero-cta"]')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive text classes', () => {
      render(<HeroSection />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-3xl', 'sm:text-4xl', 'lg:text-5xl');
    });

    it('should have responsive padding', () => {
      const { container } = render(<HeroSection />);
      const section = container.querySelector('[data-test-id="hero-section"]');
      expect(section).toHaveClass('px-4', 'sm:px-8');
    });
  });
});
