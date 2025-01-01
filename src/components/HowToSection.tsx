import React from 'react';
import { Download, Smartphone, Settings, Check } from 'lucide-react';

const STEPS = [
  {
    icon: Download,
    title: 'Download App',
    description: 'Get the app from our official website'
  },
  {
    icon: Smartphone,
    title: 'Install',
    description: 'Follow the installation wizard'
  },
  {
    icon: Settings,
    title: 'Setup',
    description: 'Configure your preferences'
  },
  {
    icon: Check,
    title: 'Ready to Use',
    description: 'Start managing your social media'
  }
];

export function HowToSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}