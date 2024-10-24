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
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4"
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
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl'>Servizo.</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full space-x-6 xl:space-x-12">
          <Link href="/" className="flex items-center">
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl'>Servizo.</h2>
          </Link>
          <div className="flex items-center space-x-6 xl:space-x-12">
            <NavLinks />
            <Link href="#download" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-md py-2 px-4 lg:py-3 lg:px-6 bg-black text-white hover:text-black hover:bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
              <span className="flex flex-col items-start leading-none">
                <p className="text-base lg:text-lg xl:text-xl font-bold">Download App</p>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="lg:hidden">
          <Link href="#download" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-md py-2 px-4 bg-black text-white hover:text-black hover:bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
            <span className="flex flex-col items-start leading-none">
              <p className="text-sm font-bold">Download</p>
            </span>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <NavLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLinks: React.FC = () => (
  <>
    <NavLink href="/" >Home</NavLink>
    <NavLink href="/systems/services">Services</NavLink>
    <NavLink href="/systems/How-It-Works">How It Works</NavLink>
    <NavLink href="/systems/about-us">About Us</NavLink>
    <NavLink href="/systems/contact">Contact Us</NavLink>
  </>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link href={href} className="block lg:inline-block text-sm items-center justify-center lg:text-base xl:text-lg text-black hover:text-black transition-colors duration-200 font-medium">
      {children}
    </Link>
  </motion.div>
);



export default Navbar;
