import React from 'react';
import { Link } from './Link';
import { Download, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Download className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold">Social Media Pro</span>
            </div>
            <p className="mt-4 text-indigo-200">Your trusted social media management tool.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-indigo-200 hover:text-white">About Us</Link>
              <Link href="/blog" className="block text-indigo-200 hover:text-white">Blog</Link>
              <Link href="/contact" className="block text-indigo-200 hover:text-white">Contact Us</Link>
              <Link href="/privacy" className="block text-indigo-200 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="block text-indigo-200 hover:text-white">Terms of Service</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-200">support@socialmediapro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-indigo-800">
          <p className="text-center text-indigo-200">© {new Date().getFullYear()} Social Media Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}