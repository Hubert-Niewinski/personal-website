import { getAllPublishedPosts } from '@/lib/mdx';
import { BlogClient } from './BlogClient';

export default function BlogPage() {
  // Fetch posts on server side
  const allPosts = getAllPublishedPosts();

  return <BlogClient allPosts={allPosts} />;
}
