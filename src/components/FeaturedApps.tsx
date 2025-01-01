import React from 'react';
import { Star } from 'lucide-react';

const FEATURED_APPS = [
  {
    id: 1,
    name: "Social Media Pro",
    category: "Social",
    rating: 4.8,
    downloads: "1M+",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop"
  },
  {
    id: 2,
    name: "Fitness Tracker",
    category: "Health",
    rating: 4.9,
    downloads: "500K+",
    image: "https://images.unsplash.com/photo-1576441862462-9a4a4e67ff39?w=128&h=128&fit=crop"
  },
  {
    id: 3,
    name: "Photo Editor Pro",
    category: "Photography",
    rating: 4.7,
    downloads: "2M+",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop"
  },
  {
    id: 4,
    name: "Music Player",
    category: "Entertainment",
    rating: 4.6,
    downloads: "5M+",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=128&fit=crop"
  }
];

export function FeaturedApps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_APPS.map((app) => (
            <div key={app.id} className="bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{app.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{app.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{app.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{app.downloads}</span>
                </div>
                <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}