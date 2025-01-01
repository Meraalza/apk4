import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  content: string;
  image: string;
}

export function BlogContent({ content, image }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <img
        src={image}
        alt="Blog cover"
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}