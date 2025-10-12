import { BlogPost } from '@/constants/blog';
import { Badge } from '@/components/ui/Badge';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article 
      className="group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:shadow-xl hover:shadow-slate-500/20"
    >
      {/* Category Badge */}
      <div className="mb-4">
        <Badge variant="category">
          {post.category === 'it' ? 'IT & Development' 
            : post.category === 'speaking' ? 'Public Speaking' 
            : 'Off Topic'}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-slate-300 transition-colors text-white">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm mb-4 line-clamp-3 text-slate-300">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag, idx) => (
          <Badge key={idx} variant="tag">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </time>
        <span>{post.readTime}</span>
      </div>

      {/* Read More Button */}
      <div className="mt-6">
        <a 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
        >
          Read Full Article
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
