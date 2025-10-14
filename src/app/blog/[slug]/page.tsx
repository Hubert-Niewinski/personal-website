import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { BackgroundGradient } from '@/components/BackgroundGradient';
import { MDXContent } from '@/components/MDXContent';
import { ShareButtons } from '@/components/ShareButtons';
import { Comments } from '@/components/Comments';
import { GradientText } from '@/components/ui/GradientText';
import { CONTAINER_CLASS } from '@/types/styles';
import { blogCategories } from '@/constants/blog';
import { siteConfig, authorConfig } from '@/constants/metadata';
import { generateBlogPostSchema } from '@/lib/structured-data';
import 'highlight.js/styles/github-dark.css';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const postUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: authorConfig.name }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [authorConfig.name],
      tags: post.tags,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const category = blogCategories[post.category];
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Generate structured data for blog post
  const blogPostSchema = generateBlogPostSchema(post);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <div className={`${CONTAINER_CLASS} relative overflow-hidden min-h-screen`}>
        {/* Subtle animated gradient overlay */}
        <BackgroundGradient />

        <div className="relative z-10">
          <Navigation />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
            <article className="max-w-5xl mx-auto">
              {/* Back to blog link */}
              <Link
                href="/blog"
                className="inline-flex items-center text-sm mb-8 transition-colors text-slate-400 hover:text-slate-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </Link>

              {/* Post Header */}
              <header className="mb-8">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">
                    {category.name}
                  </span>
                </div>

                {/* Title */}
                <GradientText as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  {post.title}
                </GradientText>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-slate-800/30 text-slate-400"
                      >
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Post Content */}
              <div>
                <MDXContent content={post.content || ''} />
              </div>

              {/* Share Buttons */}
              <div className="mt-12">
                <ShareButtons
                  url={`https://hubertniewinski.com/blog/${post.slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>

              {/* Comments Section */}
              <Comments term={post.slug} />
            </article>
          </div>

          <Footer />
        </div>
        <BackToTop />
      </div>
    </>
  );
}
