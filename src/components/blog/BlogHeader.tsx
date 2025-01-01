import React from 'react';
import { Clock, User } from 'lucide-react';

interface BlogHeaderProps {
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: number;
}

export function BlogHeader({ title, category, date, author, readTime }: BlogHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
          {category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {readTime} min read
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="flex items-center space-x-4">
        <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-500" />
            <span className="font-medium">{author.name}</span>
          </div>
          <p className="text-sm text-gray-500">{author.role} • {date}</p>
        </div>
      </div>
    </div>
  );
}