import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { BlogHeader } from '../components/blog/BlogHeader';
import { BlogContent } from '../components/blog/BlogContent';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader
          title={post.title}
          category={post.category}
          date={post.date}
          author={post.author}
          readTime={post.readTime}
        />
        <BlogContent
          content={post.content}
          image={post.image}
        />
      </div>
    </PageLayout>
  );
}