import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162616677-5d71f37e2b57?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611162616677-5d71f37e2b57?w=400&h=600&fit=crop'
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (IMAGES.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 5 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">App Screenshots</h2>
        <div className="relative">
          <div className="flex justify-center items-center space-x-6">
            {IMAGES.slice(currentIndex, currentIndex + 5).map((image, index) => (
              <div
                key={index}
                className="relative w-64 h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}