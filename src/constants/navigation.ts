export interface NavigationItem {
  icon: string;
  section: string;
  label: string;
  isExternalPage?: boolean; // true for pages like /resume, false for hash links
}

export const navigationItems: NavigationItem[] = [
  {
    icon: 'home',
    section: '/',
    label: 'Home',
    isExternalPage: true,
  },
  {
    icon: 'document',
    section: '/resume',
    label: 'Resume',
    isExternalPage: true,
  },
  {
    icon: 'microphone',
    section: '/speaking',
    label: 'Speaking',
    isExternalPage: true,
  },
  {
    icon: 'edit',
    section: '/blog',
    label: 'Blog',
    isExternalPage: true,
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
  displayText?: string;
  isExternal?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/hubert-niewinski',
    icon: 'github',
    ariaLabel: 'GitHub',
    displayText: 'GitHub Portfolio',
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hubert-niewinski',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn',
    displayText: 'LinkedIn Profile',
    isExternal: true,
  },
  {
    name: 'Email',
    url: 'mailto:niewinskihubert@gmail.com',
    icon: 'email',
    ariaLabel: 'Email',
    displayText: 'niewinskihubert@gmail.com',
    isExternal: false,
  },
];
