import React from 'react';

export function TextSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Social Media Pro?</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Social Media Pro is more than just another social media management tool. It's your complete solution for building and maintaining a strong online presence. Our platform combines powerful features with an intuitive interface, making it perfect for both beginners and professionals.
            </p>
            <p className="mb-6">
              With advanced analytics, automated scheduling, and AI-powered insights, you'll have everything you need to grow your social media presence effectively. Our dedicated support team is always ready to help you succeed.
            </p>
            <p>
              Join the millions of users who trust Social Media Pro to manage their social media presence. Download now and experience the difference yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}