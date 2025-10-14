'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navigationItems, socialLinks } from '@/constants/navigation';
import { useScroll } from '@/hooks/useScroll';
import { Icon, LinkedInIcon, GitHubIcon } from '@/components/ui/Icon';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll();
  const pathname = usePathname();

  return (
    <nav className="w-full mb-8 sm:mb-12 lg:mb-16" data-test-id="main-navigation">
      <div className="relative">
        {/* Desktop & Tablet Navigation */}
        <div
          className={`hidden md:flex w-full items-center justify-between backdrop-blur-xl px-8 lg:px-16 py-8 shadow-2xl transition-all duration-300 relative ${
            scrolled
              ? 'bg-gradient-to-r from-black/20 via-black/30 to-black/20'
              : 'bg-gradient-to-r from-black/30 via-black/40 to-black/30'
          }`}
        >
          {/* Animated gradient border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer"></div>
          </div>

          {/* Left: Name with Icon Badge */}
          <div className="flex items-center gap-3">
            {/* Icon Badge */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
              <span className="text-lg font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                HN
              </span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
              Hubert Niewiński
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center space-x-3">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.section;
              return (
                <a
                  key={index}
                  href={item.isExternalPage ? item.section : `#${item.section}`}
                  className={`group relative flex items-center space-x-2.5 px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? 'bg-blue-500/25 border-2 border-blue-400/60 shadow-lg shadow-blue-500/20'
                      : 'hover:bg-white/15 border-2 border-transparent hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                  data-test-id={`nav-${item.section}`}
                >
                  {/* Icon */}
                  <Icon
                    name={item.icon}
                    className={`w-6 h-6 transition-colors duration-200 flex-shrink-0 ${
                      isActive
                        ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]'
                        : 'text-slate-400 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]'
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-blue-200 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]'
                        : 'text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Hover glow effect with gradient background */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 -z-10 ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                        : 'bg-gradient-to-br from-slate-500/0 to-slate-600/0 group-hover:from-blue-500/15 group-hover:to-purple-500/15'
                    }`}
                  ></div>
                </a>
              );
            })}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-2">
            {/* GitHub */}
            <a
              href={socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label={socialLinks[0].ariaLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl"></div>
              <svg
                className="relative w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label={socialLinks[1].ariaLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl"></div>
              <svg
                className="relative w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={socialLinks[2].url}
              className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label={socialLinks[2].ariaLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl"></div>
              <svg
                className="relative w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div
            className={`flex items-center justify-between px-6 py-4 backdrop-blur-xl shadow-xl ${
              scrolled
                ? 'bg-gradient-to-r from-black/20 via-black/30 to-black/20'
                : 'bg-gradient-to-r from-black/30 via-black/40 to-black/30'
            }`}
          >
            <span className="text-lg font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Hubert Niewiński
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-gradient-to-b from-slate-900/95 via-purple-900/90 to-slate-900/95 border-t border-purple-500/20 shadow-2xl shadow-purple-900/50 z-50">
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.section;
                  return (
                    <a
                      key={index}
                      href={item.isExternalPage ? item.section : `#${item.section}`}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name={item.icon} className="w-5 h-5 flex-shrink-0" />
                      <span className="text-base font-medium">{item.label}</span>
                    </a>
                  );
                })}
              </div>
              <div className="px-6 py-4 border-t border-white/10 flex space-x-4">
                {/* GitHub */}
                <a
                  href={socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={socialLinks[0].ariaLabel}
                >
                  <GitHubIcon className="w-5 h-5 text-gray-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={socialLinks[1].ariaLabel}
                >
                  <LinkedInIcon className="w-5 h-5 text-gray-400" />
                </a>

                {/* Email */}
                <a
                  href={socialLinks[2].url}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={socialLinks[2].ariaLabel}
                >
                  <Icon name="email" className="w-5 h-5 text-gray-400" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
