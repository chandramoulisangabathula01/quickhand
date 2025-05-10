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
      'header', // Targets the <motion.header> which renders as a <header> tag
      { y: -100 },
      { y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <motion.header
      // Added h-[74px] for a fixed height
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b-2 border-[#cc4c03]/20 h-[74px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Added h-full to make nav take up the parent's 74px height (minus border effectively) */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 flex justify-between items-center h-full">
        <div className="flex items-center lg:hidden h-full"> {/* Ensure mobile part also respects centering */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            {/* Font sizes already defined here drive the height calculation */}
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl'>Servizo<span className="text-[#cc4c03]">.</span></h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full h-full space-x-6 xl:space-x-12"> {/* Ensure desktop part also respects centering */}
          <Link href="/" className="flex items-center">
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl'>Servizo<span className="text-[#cc4c03]">.</span></h2>
          </Link>
          <div className="flex items-center space-x-6 xl:space-x-12">
            <NavLinks />
            <Link href="#download" className="inline-flex items-center justify-center border-2 border-[#cc4c03] rounded-md py-2 px-4 lg:py-3 lg:px-6 bg-[#cc4c03] text-white hover:text-white hover:bg-black hover:border-black transition-all duration-200 ease-in-out transform hover:scale-105">
              <span className="flex flex-col items-start leading-none">
                <p className="text-base lg:text-lg xl:text-xl font-bold">Download App</p>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="lg:hidden">
          <Link href="#download" className="inline-flex items-center justify-center border-2 border-[#cc4c03] rounded-md py-2 px-4 bg-[#cc4c03] text-white hover:text-white hover:bg-black hover:border-black transition-all duration-200 ease-in-out transform hover:scale-105">
            <span className="flex flex-col items-start leading-none">
              <p className="text-sm font-bold">Download</p>
            </span>
          </Link>
        </div>
      </nav>
      {/* This dropdown will appear below the 74px fixed bar.
          Its background and shadow will apply to its own area. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Slightly changed animation for context
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg absolute w-full" // Added absolute positioning
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              <NavLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLinks: React.FC = () => (
  <nav className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
    <ul className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/systems/services">Chef Services</NavLink></li>
      <li><NavLink href="/systems/How-It-Works">How It Works</NavLink></li>
      <li><NavLink href="/systems/about-us">About Us</NavLink></li>
      {/* <li><NavLink href="/systems/contact">Contact Us</NavLink></li> */}
      <li><NavLink href="/systems/careers">Careers</NavLink></li>
    </ul>
  </nav>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <Link
      href={href}
      className="block lg:inline-block text-sm items-center justify-center lg:text-base xl:text-lg text-gray-800 hover:text-[#cc4c03] transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-100/50"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;