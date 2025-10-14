/**
 * Centralized SEO and metadata configuration
 * Used across the site for consistent branding and SEO optimization
 */

export const siteConfig = {
  name: 'Hubert Niewiński',
  title: 'Hubert Niewiński - QA Engineer & Test Automation Expert',
  description:
    'QA Engineer and Test Automation Expert with 6+ years of experience. Public speaker, conference presenter, and B2B consultant based in Białystok, Poland. Specializing in AI in testing, automation frameworks, and quality assurance best practices.',
  url: 'https://hubertniewinski.com',
  ogImage: 'https://hubertniewinski.com/profile.jpeg',
  links: {
    github: 'https://github.com/Hubert-Niewinski',
    linkedin: 'https://www.linkedin.com/in/hubert-niewinski',
    email: 'mailto:niewinskihubert@gmail.com', // TODO: Update with actual email
  },
} as const;

export const authorConfig = {
  name: 'Hubert Niewiński',
  jobTitle: 'QA Engineer & Test Automation Expert',
  image: '/profile.jpeg',
  bio: 'QA Engineer with 6 years of experience specializing in test automation, AI in testing, and quality assurance. Public speaker and conference presenter sharing insights on modern testing practices.',

  // Location information
  location: {
    city: 'Białystok',
    country: 'Poland',
    countryCode: 'PL',
    addressLocality: 'Białystok',
    addressRegion: 'Podlaskie',
    addressCountry: 'PL',
  },

  // Language proficiency
  languages: [
    { code: 'pl', name: 'Polish', proficiency: 'Native' },
    { code: 'en', name: 'English', proficiency: 'Fluent' },
    { code: 'de', name: 'German', proficiency: 'Intermediate' },
  ],

  // Professional details
  yearsOfExperience: 6,
  availability: 'Open to B2B cooperation',
  specialties: [
    'Test Automation',
    'QA Strategy',
    'AI in Testing',
    'Selenium WebDriver',
    'Cypress',
    'API Testing',
    'Performance Testing',
    'CI/CD Integration',
  ],

  // Social profiles
  sameAs: ['https://www.linkedin.com/in/hubert-niewinski', 'https://github.com/Hubert-Niewinski'],
} as const;

export const keywords = [
  'QA Engineer',
  'Test Automation',
  'Quality Assurance',
  'Selenium',
  'Cypress',
  'API Testing',
  'AI in Testing',
  'Software Testing',
  'Test Automation Expert',
  'QA Consultant',
  'Public Speaker',
  'Testing Conference',
  'Białystok',
  'Poland',
  'B2B Cooperation',
] as const;
