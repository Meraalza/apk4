import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { BlogCard } from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-xl text-gray-600">Stay informed with our latest news and insights</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}