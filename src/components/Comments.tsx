'use client';

import Giscus from '@giscus/react';

interface CommentsProps {
  /**
   * The term to search for in the repository's discussions
   * Usually the blog post slug or title
   */
  term?: string;
}

export function Comments({ term }: CommentsProps) {
  return (
    <div className="mt-12 pt-8 border-t border-slate-700/50">
      <h2 className="text-2xl font-bold mb-6 text-white">Comments</h2>
      <Giscus
        id="comments"
        repo="Hubert-Niewinski/personal-website"
        repoId="R_kgDOQBLQRA"
        category="General"
        categoryId="DIC_kwDOQBLQRM4CwoJ3"
        mapping="pathname"
        term={term}
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="purple_dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
