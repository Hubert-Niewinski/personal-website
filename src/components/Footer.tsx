import Link from 'next/link';
import { Icon, LinkedInIcon, GitHubIcon } from '@/components/ui/Icon';

export function Footer() {
  return (
    <footer
      className="mt-8 sm:mt-12 lg:mt-16 border-t border-gray-700/50 bg-black/20 backdrop-blur-sm"
      data-test-id="site-footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* About Column */}
          <div
            className="space-y-3 sm:space-y-4 text-center flex flex-col items-center"
            data-test-id="footer-about"
          >
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">Hubert Niewiński</h3>
            <p className="text-xs sm:text-sm leading-[1.7] text-[#C8C8E0] text-center">
              Senior Test Automation Engineer at Sii Poland. IT meetup speaker and Toastmasters
              member with 6 years of public speaking experience.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-3 sm:space-y-4 text-center flex flex-col items-center"
            data-test-id="footer-links"
          >
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">Quick Links</h3>
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <Link
                href="/"
                className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-link-home"
              >
                Home
              </Link>
              <Link
                href="/resume"
                className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-link-resume"
              >
                Resume
              </Link>
              <Link
                href="/speaking"
                className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-link-speaking"
              >
                Speaking
              </Link>
              <Link
                href="/blog"
                className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-link-blog"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div
            className="space-y-3 sm:space-y-4 text-center flex flex-col items-center"
            data-test-id="footer-contact"
          >
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">Connect</h3>
            <div className="flex flex-col items-center space-y-2">
              <a
                href="mailto:niewinskihubert@gmail.com"
                className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-email"
              >
                <Icon name="email" className="w-4 h-4 flex-shrink-0" />
                niewinskihubert@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/hubert-niewinski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-linkedin"
              >
                <LinkedInIcon className="w-4 h-4 flex-shrink-0" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/hubert-niewinski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400"
                data-test-id="footer-github"
              >
                <GitHubIcon className="w-4 h-4 flex-shrink-0" />
                GitHub Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/30 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
          data-test-id="footer-bottom"
        >
          <div className="text-xs sm:text-sm text-center sm:text-left text-gray-400">
            © {new Date().getFullYear()} Hubert Niewiński. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-xs text-gray-500">Built with Next.js & TypeScript</span>
            <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
