import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg">
            <p>
              Social Media Pro was founded in 2023 with a simple mission: to make social media management accessible and efficient for everyone.
            </p>
            <p>
              Our team of dedicated professionals works tirelessly to develop and improve our platform, ensuring that our users have access to the best tools for their social media management needs.
            </p>
            <h2>Our Mission</h2>
            <p>
              To empower individuals and businesses to effectively manage their social media presence and grow their online audience through innovative tools and solutions.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>Innovation in everything we do</li>
              <li>User-first approach to development</li>
              <li>Commitment to security and privacy</li>
              <li>Continuous improvement and adaptation</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}