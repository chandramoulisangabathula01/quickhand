/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
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
          <h2 className='gap-2 font-bold text-xl'>QuickHands</h2>
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <NavLinks />
          <Link href="https://apps.apple.com/your-app" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-md py-3 px-6 bg-black text-white hover:text-black hover:bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
            <span className="flex flex-col items-start leading-none">
              <p className="text-lg sm:text-xl font-bold">Download App</p>
            </span>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <NavLinks />
            </div>
            <div className="px-4 py-3">
              <AppStoreBadges />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLinks: React.FC = () => (
  <>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/systems/services">Services</NavLink>
    <NavLink href="/systems/How-It-Works">How It Works</NavLink>
    <NavLink href="/systems/about-us">About Us</NavLink>
    <NavLink href="/systems/contact">Contact Us</NavLink>
  </>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link href={href} className="block md:inline-block text-gray-800 hover:text-brand-primary transition-colors duration-200 font-medium">
      {children}
    </Link>
  </motion.div>
);

const AppStoreBadges: React.FC = () => (
  <>
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
  </>
);

export default Navbar;
