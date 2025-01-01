import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function Privacy() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us when using our application:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account information (email, username)</li>
              <li>Profile data and preferences</li>
              <li>Usage statistics and analytics</li>
              <li>Device information and identifiers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Your information helps us provide and improve our services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personalize your experience</li>
              <li>Improve our services</li>
              <li>Communicate with you</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}