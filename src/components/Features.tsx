import React from 'react';
import { BarChart, Clock, Globe, MessageSquare, Share2, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Share2,
    title: 'Multi-Platform Sharing',
    description: 'Share content across all major social networks with a single click'
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'Schedule posts for optimal engagement times automatically'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track performance with detailed metrics and insights'
  },
  {
    icon: Users,
    title: 'Audience Management',
    description: 'Manage and grow your audience effectively'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with audiences worldwide in multiple languages'
  },
  {
    icon: MessageSquare,
    title: 'Engagement Tools',
    description: 'Respond to comments and messages from one inbox'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to manage your social media presence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <feature.icon className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}