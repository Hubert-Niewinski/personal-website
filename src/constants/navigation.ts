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

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hubert-niewinski',
    icon: 'github',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hubert-niewinski',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:niewinskihubert@gmail.com',
    icon: 'email',
    ariaLabel: 'Email',
  },
];
