'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigationItems, socialLinks } from '@/constants/navigation';
import { useScroll } from '@/hooks/useScroll';
import { Icon } from '@/components/ui/Icon';
import { IconButton } from '@/components/ui/IconButton';
import { ICON_SIZES } from '@/constants/styles';
import { getSocialIcon } from '@/utils/getSocialIcon';

const SOCIAL_ICON_CLASS = 'relative w-5 h-5 transition-colors';

const isLinkActive = (currentPath: string, targetPath: string) => {
  if (targetPath === '/') {
    return currentPath === '/';
  }

  if (currentPath === targetPath) {
    return true;
  }

  return currentPath.startsWith(`${targetPath}/`);
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll();
  const pathname = usePathname() ?? '/';
  const currentPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/';

  return (
    <nav className="w-full mb-8 sm:mb-12 lg:mb-16" data-testid="main-navigation">
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
            {navigationItems.map((item) => {
              const isActive = isLinkActive(currentPath, item.section);
              return (
                <Link
                  key={item.section}
                  href={item.isExternalPage ? item.section : `#${item.section}`}
                  className={`group relative flex items-center space-x-2.5 px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? 'bg-blue-500/25 border-2 border-blue-400/60 shadow-lg shadow-blue-500/20'
                      : 'hover:bg-white/15 border-2 border-transparent hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                  data-testid={`nav-${item.section}`}
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
                </Link>
              );
            })}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                href={link.url}
                aria-label={link.ariaLabel}
                icon={getSocialIcon(link.icon, SOCIAL_ICON_CLASS)}
                isExternal={link.isExternal}
              />
            ))}
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
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
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
              <span className="text-sm font-medium text-gray-200">
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-gradient-to-b from-slate-900/95 via-purple-900/90 to-slate-900/95 border-t border-purple-500/20 shadow-2xl shadow-purple-900/50 z-50">
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item) => {
                  const isActive = isLinkActive(currentPath, item.section);
                  return (
                    <Link
                      key={item.section}
                      href={item.isExternalPage ? item.section : `#${item.section}`}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name={item.icon} className={`${ICON_SIZES.md} flex-shrink-0`} />
                      <span className="text-base font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="px-6 py-4 border-t border-white/10 flex space-x-4">
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.name}
                    href={link.url}
                    aria-label={link.ariaLabel}
                    icon={getSocialIcon(link.icon, ICON_SIZES.md)}
                    isExternal={link.isExternal}
                    variant="soft"
                    size="md"
                    iconClassName="text-gray-400 group-hover:text-white transition-colors"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
