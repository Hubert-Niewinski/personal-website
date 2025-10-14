import { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import {
  generatePersonSchema,
  generateWebsiteSchema,
  generateProfessionalServiceSchema,
} from '@/lib/structured-data';
import { siteConfig } from '@/constants/metadata';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();
  const serviceSchema = generateProfessionalServiceSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HomeClient />
    </>
  );
}
