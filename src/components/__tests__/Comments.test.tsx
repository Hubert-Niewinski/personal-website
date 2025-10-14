import { render, screen } from '@testing-library/react';
import { Comments } from '../Comments';

// Mock the Giscus component
jest.mock('@giscus/react', () => {
  return function MockGiscus(props: Record<string, unknown>) {
    return (
      <div data-testid="giscus-mock" data-props={JSON.stringify(props)}>
        Giscus Comments Mock
      </div>
    );
  };
});

describe('Comments', () => {
  describe('Rendering', () => {
    it('should render comments section with heading', () => {
      render(<Comments />);

      expect(screen.getByText('Comments')).toBeInTheDocument();
      expect(screen.getByTestId('giscus-mock')).toBeInTheDocument();
    });

    it('should render with optional term prop', () => {
      render(<Comments term="test-blog-post" />);

      expect(screen.getByTestId('giscus-mock')).toBeInTheDocument();
    });

    it('should render without term prop', () => {
      render(<Comments />);

      expect(screen.getByTestId('giscus-mock')).toBeInTheDocument();
    });
  });

  describe('Giscus Configuration', () => {
    it('should pass correct repository configuration to Giscus', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.repo).toBe('Hubert-Niewinski/personal-website');
      expect(props.repoId).toBe('R_kgDOQBLQRA');
    });

    it('should configure Giscus with correct category settings', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.category).toBe('General');
      expect(props.categoryId).toBe('DIC_kwDOQBLQRM4CwoJ3');
    });

    it('should use pathname mapping by default', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.mapping).toBe('pathname');
    });

    it('should use purple_dark theme', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.theme).toBe('purple_dark');
    });

    it('should configure with correct feature flags', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.reactionsEnabled).toBe('1');
      expect(props.emitMetadata).toBe('0');
      expect(props.strict).toBe('0');
    });

    it('should set input position to top', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.inputPosition).toBe('top');
    });

    it('should use English language', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.lang).toBe('en');
    });

    it('should pass term prop when provided', () => {
      const testTerm = 'specific-blog-post-slug';
      render(<Comments term={testTerm} />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.term).toBe(testTerm);
    });

    it('should have comments ID', () => {
      render(<Comments />);

      const giscusElement = screen.getByTestId('giscus-mock');
      const props = JSON.parse(giscusElement.getAttribute('data-props') || '{}');

      expect(props.id).toBe('comments');
    });
  });

  describe('Styling', () => {
    it('should have proper border and spacing', () => {
      const { container } = render(<Comments />);

      const wrapperDiv = container.firstChild as HTMLElement;
      expect(wrapperDiv).toHaveClass('mt-12', 'pt-8', 'border-t', 'border-slate-700/50');
    });

    it('should have proper heading styles', () => {
      render(<Comments />);

      const heading = screen.getByText('Comments');
      expect(heading.tagName).toBe('H2');
      expect(heading).toHaveClass('text-2xl', 'font-bold', 'mb-6', 'text-white');
    });
  });
});
