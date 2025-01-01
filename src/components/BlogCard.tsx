import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export function BlogCard({ id, title, excerpt, date, image, category }: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <span className="text-indigo-600 font-medium group-hover:text-indigo-700">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
}