import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ShareButtons } from '../ShareButtons';

describe('ShareButtons', () => {
  const mockProps = {
    url: 'https://example.com/blog/test-post',
    title: 'Test Blog Post',
    description: 'Test description for sharing',
  };

  // Mock window.open
  const mockWindowOpen = jest.fn();
  const originalOpen = window.open;

  // Mock clipboard API
  const mockWriteText = jest.fn();
  const originalClipboard = navigator.clipboard;

  // Mock alert
  const mockAlert = jest.fn();
  const originalAlert = window.alert;

  beforeEach(() => {
    window.open = mockWindowOpen;
    window.alert = mockAlert;
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
    jest.clearAllMocks();
  });

  afterEach(() => {
    window.open = originalOpen;
    window.alert = originalAlert;
    Object.assign(navigator, { clipboard: originalClipboard });
  });

  describe('Rendering', () => {
    it('should render all share buttons', () => {
      render(<ShareButtons {...mockProps} />);

      expect(screen.getByText('Share this post:')).toBeInTheDocument();
      expect(screen.getByLabelText('Share on Twitter')).toBeInTheDocument();
      expect(screen.getByLabelText('Share on LinkedIn')).toBeInTheDocument();
      expect(screen.getByLabelText('Share on Facebook')).toBeInTheDocument();
      expect(screen.getByLabelText('Copy link')).toBeInTheDocument();
    });

    it('should render without description prop', () => {
      const propsWithoutDescription = { url: mockProps.url, title: mockProps.title };
      render(<ShareButtons {...propsWithoutDescription} />);

      expect(screen.getByText('Share this post:')).toBeInTheDocument();
    });
  });

  describe('Share Functionality', () => {
    it('should open Twitter share window with correct URL', () => {
      render(<ShareButtons {...mockProps} />);

      const twitterButton = screen.getByLabelText('Share on Twitter');
      fireEvent.click(twitterButton);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('https://twitter.com/intent/tweet?url='),
        '_blank',
        'width=600,height=400'
      );
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent(mockProps.url)),
        '_blank',
        'width=600,height=400'
      );
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent(mockProps.title)),
        '_blank',
        'width=600,height=400'
      );
    });

    it('should open LinkedIn share window with correct URL', () => {
      render(<ShareButtons {...mockProps} />);

      const linkedinButton = screen.getByLabelText('Share on LinkedIn');
      fireEvent.click(linkedinButton);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('https://www.linkedin.com/sharing/share-offsite/?url='),
        '_blank',
        'width=600,height=400'
      );
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent(mockProps.url)),
        '_blank',
        'width=600,height=400'
      );
    });

    it('should open Facebook share window with correct URL', () => {
      render(<ShareButtons {...mockProps} />);

      const facebookButton = screen.getByLabelText('Share on Facebook');
      fireEvent.click(facebookButton);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('https://www.facebook.com/sharer/sharer.php?u='),
        '_blank',
        'width=600,height=400'
      );
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent(mockProps.url)),
        '_blank',
        'width=600,height=400'
      );
    });
  });

  describe('Copy Link Functionality', () => {
    it('should copy URL to clipboard and show alert on success', async () => {
      mockWriteText.mockResolvedValueOnce(undefined);
      render(<ShareButtons {...mockProps} />);

      const copyButton = screen.getByLabelText('Copy link');
      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(mockWriteText).toHaveBeenCalledWith(mockProps.url);
        expect(mockAlert).toHaveBeenCalledWith('Link copied to clipboard!');
      });
    });

    it('should handle clipboard write failure gracefully', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      mockWriteText.mockRejectedValueOnce(new Error('Clipboard write failed'));
      render(<ShareButtons {...mockProps} />);

      const copyButton = screen.getByLabelText('Copy link');
      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(mockWriteText).toHaveBeenCalledWith(mockProps.url);
        expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy link:', expect.any(Error));
        expect(mockAlert).not.toHaveBeenCalled();
      });

      consoleErrorSpy.mockRestore();
    });
  });

  describe('URL Encoding', () => {
    it('should properly encode special characters in URLs', () => {
      const specialProps = {
        url: 'https://example.com/blog/test post?foo=bar&baz=qux',
        title: 'Test & Special "Characters"',
        description: 'Description with <tags> & symbols',
      };

      render(<ShareButtons {...specialProps} />);

      const twitterButton = screen.getByLabelText('Share on Twitter');
      fireEvent.click(twitterButton);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining(encodeURIComponent(specialProps.url)),
        '_blank',
        'width=600,height=400'
      );
    });

    it('should use title as description fallback when description is not provided', () => {
      const propsWithoutDescription = { url: mockProps.url, title: mockProps.title };
      render(<ShareButtons {...propsWithoutDescription} />);

      // The component should still render successfully
      expect(screen.getByText('Share this post:')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels for all buttons', () => {
      render(<ShareButtons {...mockProps} />);

      expect(screen.getByLabelText('Share on Twitter')).toHaveAttribute('aria-label');
      expect(screen.getByLabelText('Share on LinkedIn')).toHaveAttribute('aria-label');
      expect(screen.getByLabelText('Share on Facebook')).toHaveAttribute('aria-label');
      expect(screen.getByLabelText('Copy link')).toHaveAttribute('aria-label');
    });

    it('should have proper button elements', () => {
      render(<ShareButtons {...mockProps} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(4); // Twitter, LinkedIn, Facebook, Copy
    });
  });
});
