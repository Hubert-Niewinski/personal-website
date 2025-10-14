import { Metadata } from 'next';
import { siteConfig } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Public Speaking',
  description:
    'Conference presentations and talks by Hubert Niewiński on software testing, test automation, and AI in QA. Speaker at Meet.js, BiałQA meetups, and testing conferences across Poland.',
  openGraph: {
    title: `Public Speaking | ${siteConfig.name}`,
    description:
      'Conference presentations and talks on software testing, test automation, and AI in QA.',
    url: `${siteConfig.url}/speaking`,
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/speaking`,
  },
};

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
