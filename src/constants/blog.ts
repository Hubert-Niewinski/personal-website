export type BlogCategory = 'it' | 'speaking' | 'offtopic';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  content?: string; // Full content (optional for now)
  date: string; // Format: 'YYYY-MM-DD'
  readTime: string; // e.g., '5 min read'
  tags: string[];
  coverImage?: string;
  published: boolean;
}

export const blogCategories = {
  it: {
    id: 'it' as BlogCategory,
    name: 'IT & Development',
    description: 'Technical articles, tutorials, and insights on software development, testing, and DevOps.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  speaking: {
    id: 'speaking' as BlogCategory,
    name: 'Public Speaking',
    description: 'Thoughts on public speaking, presentation tips, and experiences from IT meetups and Toastmasters.',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
  },
  offtopic: {
    id: 'offtopic' as BlogCategory,
    name: 'Off Topic',
    description: 'Life, hobbies, and everything else outside the professional sphere.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
};

// Sample blog posts - replace with your actual content
export const blogPosts: BlogPost[] = [
  // IT & Development Posts
  {
    id: '1',
    title: 'Getting Started with Test Automation in 2025',
    slug: 'getting-started-test-automation-2025',
    category: 'it',
    excerpt: 'A comprehensive guide to starting your test automation journey with modern tools and frameworks.',
    date: '2025-10-01',
    readTime: '8 min read',
    tags: ['Test Automation', 'Selenium', 'Cypress', 'Best Practices'],
    published: true
  },
  {
    id: '2',
    title: 'DevOps Pipeline Setup: From Zero to Hero',
    slug: 'devops-pipeline-setup',
    category: 'it',
    excerpt: 'Learn how to set up a complete CI/CD pipeline using modern DevOps tools and practices.',
    date: '2025-09-15',
    readTime: '12 min read',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes'],
    published: true
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large Applications',
    slug: 'typescript-best-practices',
    category: 'it',
    excerpt: 'Essential TypeScript patterns and practices for maintaining large-scale applications.',
    date: '2025-08-20',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    published: true
  },

  // Public Speaking Posts
  {
    id: '4',
    title: 'How to Prepare for Your First Tech Talk',
    slug: 'first-tech-talk-preparation',
    category: 'speaking',
    excerpt: 'Tips and strategies for preparing and delivering your first technical presentation at a meetup.',
    date: '2025-09-05',
    readTime: '6 min read',
    tags: ['Public Speaking', 'Meetups', 'Presentations'],
    published: true
  },
  {
    id: '5',
    title: 'Winning Speech Contests: Lessons from Toastmasters',
    slug: 'winning-speech-contests-toastmasters',
    category: 'speaking',
    excerpt: 'My journey in Toastmasters and key lessons learned from competing in speech contests.',
    date: '2025-07-10',
    readTime: '7 min read',
    tags: ['Toastmasters', 'Speech Contests', 'Communication Skills'],
    published: true
  },

  // Off Topic Posts
  {
    id: '6',
    title: 'The Parallels Between Basketball and Software Engineering',
    slug: 'basketball-software-engineering',
    category: 'offtopic',
    excerpt: 'How teamwork, practice, and strategy in basketball apply to software development.',
    date: '2025-06-15',
    readTime: '5 min read',
    tags: ['Basketball', 'Life Lessons', 'Teamwork'],
    published: true
  }
];

// Helper functions
export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.published);
};

export const getAllPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return getAllPublishedPosts().slice(0, limit);
};
