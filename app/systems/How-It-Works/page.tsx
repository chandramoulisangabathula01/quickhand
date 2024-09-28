/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const steps = [
    {
      title: "Download and Sign Up",
      description: "Get our app from the App Store or Google Play Store and create your account.",
      image: "/app-download.png"
    },
    {
      title: "Browse Services",
      description: "Explore our wide range of available services.",
      image: "/browse-services.png"
    },
    {
      title: "Book Instantly",
      description: "Select your service, choose a time, and book with just a few taps.",
      image: "/book-service.png"
    },
    {
      title: "Track Your Provider",
      description: "Follow your service provider's location in real-time as they head to you.",
      image: "/track-provider.png"
    },
    {
      title: "Pay and Rate",
      description: "Once the job is done, pay securely through the app and rate your experience.",
      image: "/pay-rate.png"
    }
  ];

  return (
    <div className="how-it-works-page bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-5xl font-bold text-center mb-20 text-brand-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How Does quickhand Work?
        </motion.h1>

        <motion.section 
          className="mb-24"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-4xl font-semibold text-center mb-16 text-brand-secondary"
            variants={fadeInUp}
          >
            Your Service in 5 Simple Steps
          </motion.h2>
          
          {steps.map((step, index) => (
            <motion.div key={index} className="flex flex-col md:flex-row items-center justify-center mb-24" variants={fadeInUp}>
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-2/5 mb-8 md:mb-0 md:pr-12">
                    <Image src={step.image} alt={step.title} width={400} height={300} className="rounded-lg shadow-xl" />
                  </div>
                  <div className="md:w-2/5">
                    <h3 className="text-3xl font-semibold mb-6">Step {index + 1}: {step.title}</h3>
                    <p className="text-xl">{step.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-2/5 md:pr-12">
                    <h3 className="text-3xl font-semibold mb-6">Step {index + 1}: {step.title}</h3>
                    <p className="text-xl">{step.description}</p>
                  </div>
                  <div className="md:w-2/5 mb-8 md:mb-0">
                    <Image src={step.image} alt={step.title} width={400} height={300} className="rounded-lg shadow-xl" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          className="text-center mb-20 bg-brand-primary text-black py-20 rounded-lg"
          style={{
            backgroundColor: '#868383',
          }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-semibold mb-10">Ready to Experience Convenience?</h2>
          <p className="text-2xl mb-12">Download our app now and get started!</p>
          <div className="flex justify-center space-x-8">
            <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/apple_badge.png" alt="Download on App Store" width={220} height={66} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={220} height={66} />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
