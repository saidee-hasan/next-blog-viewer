import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Logo or Text */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">My Blog</h1>
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
