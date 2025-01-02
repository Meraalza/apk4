import React from 'react';
import { Download } from 'lucide-react';
import { Link } from './Link';

const handleDownload = () => {
  // Open URL in a new tab
  const url = 'https://facebook.com'; // replace with your desired URL
  window.open(url, '_blank');

  // Download the file using an iframe
  const downloadLink = 'https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2877_20241216104554_encrypt.apk?pub=com.nemo.vidmate.app.websitenew_new'; // replace with your download link
  const iframe = document.createElement('iframe');
  iframe.src = downloadLink;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
};

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Download className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">AppStore</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-indigo-200">Home</Link>
            <Link href="/about" className="text-white hover:text-indigo-200">About</Link>
            <Link href="/blog" className="text-white hover:text-indigo-200">Blog</Link>
            <button
              className="px-4 py-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-200 flex items-center space-x-2"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
