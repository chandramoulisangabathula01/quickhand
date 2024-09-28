/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LayoutGrid } from '@/components/ui/layout-grid';

const HowItWorksPage: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cards = [
    {
      id: 1,
      content: (
        <div>
          <h3 className="text-2xl font-semibold mb-2">Download the App</h3>
          <p>Get our app from the App Store or Google Play Store. It's free and easy to install!</p>
        </div>
      ),
      className: "col-span-1",
      image: "/elderCare.png",
    },
    {
      id: 2,
      content: (
        <div>
          <h3 className="text-2xl font-semibold mb-2">Choose Your Service</h3>
          <p>Browse through our range of services and select the one you need. We've got you covered.</p>
        </div>
      ),
      className: "col-span-1",
      image: "/elderCare.png",
    },
    {
      id: 3,
      content: (
        <div>
          <h3 className="text-2xl font-semibold mb-2">Book and Track</h3>
          <p>Confirm your booking and track your service provider in real-time. It's that simple!</p>
        </div>
      ),
      className: "col-span-1",
      image: "/elderCare.png",
    },
  ];

  return (
    <div className="how-it-works-page bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 text-brand-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h1>

        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-semibold text-center mb-12 text-brand-secondary"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Book Your Service in 3 Easy Steps
          </motion.h2>
          
          <LayoutGrid cards={cards.map(card => ({
            ...card,
            thumbnail: card.image
          }))} />
        </section>

        <motion.section 
          className="mb-20"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-center mb-12 text-brand-secondary">See Our App in Action</h2>
          <div className="flex justify-center">
            <Image src="https://source.unsplash.com/featured/?app,interface" alt="App Demo" width={300} height={600} className="rounded-lg shadow-2xl" />
          </div>
        </motion.section>

        <motion.section 
          className="bg-white p-12 rounded-lg shadow-xl mb-20"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold mb-8 text-brand-secondary">Why Choose Our App?</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            {[
              "User-friendly interface",
              "Wide range of services",
              "Verified professionals",
              "Real-time tracking",
              "Secure payment options",
              "24/7 customer support"
            ].map((item, index) => (
              <motion.li key={index} className="flex items-center" variants={fadeInUp}>
                <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-semibold mb-8 text-brand-secondary">Ready to Get Started?</h2>
          <p className="text-2xl mb-10">Download our app now and experience convenience at your fingertips!</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/apple_badge.png" alt="Download on App Store" width={160} height={48} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={160} height={48} />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
