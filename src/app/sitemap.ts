import { MetadataRoute } from 'next';
import { getAllPublishedPosts } from '@/lib/mdx';
import { siteConfig } from '@/constants/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPublishedPosts();

  // Static pages
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/speaking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Blog post pages
  const blogPages = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
