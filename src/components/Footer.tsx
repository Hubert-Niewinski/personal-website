export function Footer() {
  return (
    <footer className="mt-8 sm:mt-12 lg:mt-16 border-t border-gray-700/50 bg-black/20 backdrop-blur-sm" data-test-id="site-footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* About Column */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left" data-test-id="footer-about">
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">
              Hubert Niewiński
            </h3>
            <p className="text-xs sm:text-sm leading-[1.7] text-[#C8C8E0]">
              Test Automation Engineer and Technical Assessor at Sii Poland. Active public speaker at IT meetups 
              and Toastmasters International member for 5+ years. Passionate about cloud technologies, DevOps, 
              and sharing knowledge through speaking and writing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left" data-test-id="footer-links">
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-link-about">
                About
              </a>
              <a href="#resume" className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-link-resume">
                Resume
              </a>
              <a href="#speaking" className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-link-speaking">
                Speaking Engagements
              </a>
              <a href="#blog" className="text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-link-blog">
                Technical Blog
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1" data-test-id="footer-contact">
            <h3 className="text-base sm:text-lg font-semibold text-slate-300">
              Connect
            </h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:niewinskihubert@gmail.com" className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-email">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                niewinskihubert@gmail.com
              </a>
              <a href="https://linkedin.com/in/hubert-niewinski" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-linkedin">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
              <a href="https://github.com/hubert-niewinski" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors text-gray-300 hover:text-blue-400" data-test-id="footer-github">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/30 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0" data-test-id="footer-bottom">
          <div className="text-xs sm:text-sm text-center sm:text-left text-gray-400">
            © {new Date().getFullYear()} Hubert Niewiński. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-xs text-gray-500">
              Built with Next.js & TypeScript
            </span>
            <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
