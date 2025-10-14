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
      <div>
        <PageHeader
          title="Blog"
          subtitle="Thoughts on software development, public speaking, and life"
          className="max-w-3xl mx-auto"
        />
        {/* RSS Feed Button */}
        <div className="text-center mt-8 mb-8">
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
            </svg>
            <span>Subscribe via RSS</span>
            <svg
              className="w-4 h-4 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

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
