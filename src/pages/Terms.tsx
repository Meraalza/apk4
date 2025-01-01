import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function Terms() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By downloading, installing, or using Social Media Pro, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. License and Usage</h2>
            <p className="text-gray-600 mb-4">
              We grant you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Download and install the application on your devices</li>
              <li>Use the application for personal or business purposes</li>
              <li>Access and use available features and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
            <p className="text-gray-600 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse or abuse our services</li>
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}