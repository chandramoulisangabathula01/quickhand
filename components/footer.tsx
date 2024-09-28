import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-secondary transition-colors">
                {/* <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} /> */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-secondary transition-colors">
                {/* <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} /> */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-secondary transition-colors">
                {/* <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} /> */}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-primary">Download Our App</h3>
            <div className="flex flex-col space-y-2">
              <Link href="https://apps.apple.com/your-app" className="inline-block">
                <Image src="/apple_badge.png" alt="Download on App Store" width={120} height={40} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block">
                <Image src="/google_badge.png" alt="Get it on Google Play" width={135} height={40} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-primary">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
