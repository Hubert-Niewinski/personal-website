import { Metadata } from 'next';
import { getAllPublishedPosts } from '@/lib/mdx';
import { BlogClient } from './BlogClient';
import { siteConfig } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on software testing, test automation, AI in QA, and quality assurance best practices. Articles by Hubert Niewiński, QA Engineer with 6 years of experience.',
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      'Insights on software testing, test automation, AI in QA, and quality assurance best practices.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  // Fetch posts on server side
  const allPosts = getAllPublishedPosts();

  return <BlogClient allPosts={allPosts} />;
}
