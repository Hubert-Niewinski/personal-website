import { Metadata } from 'next';
import { siteConfig } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Professional resume of Hubert Niewiński - QA Engineer & Test Automation Expert with 6 years of experience. Skills in Selenium, Cypress, API testing, and AI in testing. Based in Białystok, Poland.',
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description:
      'Professional experience, skills, education, and certifications of Hubert Niewiński, QA Engineer & Test Automation Expert.',
    url: `${siteConfig.url}/resume`,
    type: 'profile',
  },
  alternates: {
    canonical: `${siteConfig.url}/resume`,
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
