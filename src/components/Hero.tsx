import React from 'react';
import { Download, Shield, Smartphone, Star } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-600">4.9 Rating (10K+ Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Social Media <span className="text-indigo-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The ultimate social media management tool. Schedule posts, analyze metrics, and grow your audience - all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=800&fit=crop"
              alt="Social Media Pro App"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">1M+ Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}