import React from 'react';
import { Download, Shield, Smartphone, Star } from 'lucide-react';

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Download Social Media Pro Today</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join millions of users who trust Social Media Pro for their social media management needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-200 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Now</span>
            </button>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>1M+ Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}