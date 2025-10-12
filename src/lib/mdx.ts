import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogCategory } from '@/constants/blog';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all MDX files from a specific category directory
 */
export function getPostFiles(category?: BlogCategory): string[] {
  if (category) {
    const categoryPath = path.join(contentDirectory, category);
    if (!fs.existsSync(categoryPath)) {
      return [];
    }
    return fs.readdirSync(categoryPath).filter(file => file.endsWith('.mdx'));
  }
  
  // Get files from all categories
  const categories: BlogCategory[] = ['it', 'speaking', 'offtopic'];
  const allFiles: string[] = [];
  
  categories.forEach(cat => {
    const categoryPath = path.join(contentDirectory, cat);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.mdx'))
        .map(file => `${cat}/${file}`);
      allFiles.push(...files);
    }
  });
  
  return allFiles;
}

/**
 * Read and parse a single MDX file
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Try to find the file in any category
    const categories: BlogCategory[] = ['it', 'speaking', 'offtopic'];
    
    for (const category of categories) {
      const filePath = path.join(contentDirectory, category, `${slug}.mdx`);
      
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          id: data.id || slug,
          title: data.title,
          slug: slug,
          category: category,
          excerpt: data.excerpt,
          content: content,
          date: data.date,
          readTime: data.readTime || calculateReadTime(content),
          tags: data.tags || [],
          coverImage: data.coverImage,
          published: data.published !== false, // Default to true
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts from all categories
 */
export function getAllPosts(): BlogPost[] {
  const files = getPostFiles();
  
  const posts = files
    .map(file => {
      // Extract slug from file path (e.g., "it/my-post.mdx")
      const [, filename] = file.split('/');
      const slug = filename.replace('.mdx', '');
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  
  return posts;
}

/**
 * Get all published posts
 */
export function getAllPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.published);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPublishedPosts().filter(post => post.category === category);
}

/**
 * Get recent posts (default: 3 most recent)
 */
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPublishedPosts().slice(0, limit);
}

/**
 * Calculate reading time based on content
 * Assumes average reading speed of 200 words per minute
 */
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const posts = getAllPublishedPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}
