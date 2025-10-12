export interface NavigationItem {
  icon: string;
  section: string;
  label: string;
  isExternalPage?: boolean; // true for pages like /resume, false for hash links
}

export const navigationItems: NavigationItem[] = [
  { 
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", 
    section: '/', 
    label: 'Home',
    isExternalPage: true
  },
  { 
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", 
    section: '/resume', 
    label: 'Resume',
    isExternalPage: true
  },
  { 
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", 
    section: '/speaking', 
    label: 'Speaking',
    isExternalPage: true
  },
  { 
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", 
    section: '/blog', 
    label: 'Blog',
    isExternalPage: true
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hubert-niewinski',
    icon: 'github',
    ariaLabel: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hubert-niewinski',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn'
  },
  {
    name: 'Email',
    url: 'mailto:niewinskihubert@gmail.com',
    icon: 'email',
    ariaLabel: 'Email'
  }
];
