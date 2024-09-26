/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      'header',
      { y: -100 },
      { y: 0, duration: 1, ease: 'bounce.out' }
    );
  }, []);

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-auto h-[40px]"
            whileHover={{ scale: 1.2 }}
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </motion.svg>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <motion.li whileHover={{ scale: 1.5 , color: "red",rotate: 360}}>
            <Link href="/" className="text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/systems/services" className="text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">Services</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/systems/How-It-Works" className="text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">How It Works</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/systems/about-us" className="text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">About Us</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/systems/contact" className="text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">Contact Us</Link>
          </motion.li>
        </ul>
        <div className="flex space-x-4">
          <Link href="https://apps.apple.com/your-app" className="flex-shrink-0">
            <motion.img
              src="/apple_badge.png"
              alt="Download on App Store"
              width={120}
              height={40}
              className="h-10 w-auto"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=your-app" className="flex-shrink-0">
            <motion.img
              src="/google_badge.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
