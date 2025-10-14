import { authorConfig, siteConfig } from '@/constants/metadata';

/**
 * Generate JSON-LD structured data for Person schema
 * Helps search engines understand who you are and your expertise
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorConfig.name,
    jobTitle: authorConfig.jobTitle,
    description: authorConfig.bio,
    image: `${siteConfig.url}${authorConfig.image}`,
    url: siteConfig.url,
    sameAs: authorConfig.sameAs,

    // Location information
    address: {
      '@type': 'PostalAddress',
      addressLocality: authorConfig.location.addressLocality,
      addressRegion: authorConfig.location.addressRegion,
      addressCountry: authorConfig.location.addressCountry,
    },

    // Language skills
    knowsLanguage: authorConfig.languages.map((lang) => ({
      '@type': 'Language',
      name: lang.name,
      alternateName: lang.code,
    })),

    // Professional details
    hasOccupation: {
      '@type': 'Occupation',
      name: 'QA Engineer',
      occupationalCategory: 'Software Quality Assurance Engineers and Testers',
      skills: authorConfig.specialties.join(', '),
      yearsOfExperience: {
        '@type': 'QuantitativeValue',
        value: authorConfig.yearsOfExperience,
      },
    },

    // Contact & social
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional',
      availableLanguage: authorConfig.languages.map((lang) => lang.name),
    },
  };
}

/**
 * Generate JSON-LD structured data for Website schema
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: ['en', 'pl'],
    author: {
      '@type': 'Person',
      name: authorConfig.name,
    },
  };
}

/**
 * Generate JSON-LD structured data for ProfessionalService schema
 */
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${authorConfig.name} - ${authorConfig.jobTitle}`,
    description: authorConfig.bio,
    url: siteConfig.url,
    image: `${siteConfig.url}${authorConfig.image}`,
    priceRange: 'Contact for rates',
    areaServed: {
      '@type': 'Country',
      name: authorConfig.location.country,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: authorConfig.location.addressLocality,
      addressRegion: authorConfig.location.addressRegion,
      addressCountry: authorConfig.location.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.1325',
      longitude: '23.1688',
    },
    availableLanguage: authorConfig.languages.map((lang) => ({
      '@type': 'Language',
      name: lang.name,
    })),
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'QA & Test Automation Services',
        description:
          'Professional quality assurance and test automation services including strategy, implementation, and training',
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for Blog schema
 */
export function generateBlogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${siteConfig.name} - Blog`,
    description: 'Insights on software testing, automation, and AI in QA',
    url: `${siteConfig.url}/blog`,
    author: {
      '@type': 'Person',
      name: authorConfig.name,
    },
    inLanguage: 'en',
  };
}

/**
 * Generate JSON-LD structured data for BlogPosting schema
 */
export function generateBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
  readTime: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: authorConfig.name,
      url: siteConfig.url,
      jobTitle: authorConfig.jobTitle,
      address: {
        '@type': 'PostalAddress',
        addressLocality: authorConfig.location.addressLocality,
        addressCountry: authorConfig.location.addressCountry,
      },
    },
    publisher: {
      '@type': 'Person',
      name: authorConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${authorConfig.image}`,
      },
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    inLanguage: 'en',
    timeRequired: post.readTime,
  };
}
