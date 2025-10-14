'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { BlogCard } from '@/components/BlogCard';
import { PageHeader } from '@/components/PageHeader';
import { blogCategories, BlogCategory, BlogPost } from '@/constants/blog';
import { Icon } from '@/components/ui/Icon';

interface BlogClientProps {
  allPosts: BlogPost[];
}

export function BlogClient({ allPosts }: BlogClientProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategory | 'all'>('all');

  const filteredPosts =
    activeFilter === 'all' ? allPosts : allPosts.filter((post) => post.category === activeFilter);

  return (
    <PageLayout>
      <PageHeader
        title="Blog"
        subtitle="Thoughts on software development, public speaking, and life"
        className="max-w-3xl mx-auto"
      />

      {/* Category Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {/* All Posts Filter */}
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/40 border border-slate-700/40 text-slate-300 hover:border-slate-600/60'
            }`}
          >
            All Posts
          </button>

          {/* Category Filters */}
          {Object.values(blogCategories).map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-800/40 border border-slate-700/40 text-slate-300 hover:border-slate-600/60'
              }`}
            >
              <Icon name={category.icon} className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        {activeFilter !== 'all' && (
          <div className="mt-6 text-center">
            <p className="text-sm sm:text-base max-w-2xl mx-auto text-slate-400">
              {blogCategories[activeFilter].description}
            </p>
          </div>
        )}
      </div>

      {/* Posts Count */}
      <div className="mb-8">
        <p className="text-sm text-slate-400">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {activeFilter !== 'all' && ` in ${blogCategories[activeFilter].name}`}
        </p>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <div key={post.id} style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-white">No posts yet</h3>
          <p className="text-slate-400">
            {activeFilter === 'all'
              ? 'Check back soon for new content!'
              : `No posts in ${blogCategories[activeFilter].name} category yet.`}
          </p>
        </div>
      )}
    </PageLayout>
  );
}
