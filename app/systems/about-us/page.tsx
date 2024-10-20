/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutUsHero from '@/components/aboutusHero';

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const ourStorysectionRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            // markers: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    ourStorysectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            // markers: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-us-page">
      <Navbar />
      <AboutUsHero />
    
     

      {/* <section ref={(el) => { if (el) sectionRefs.current[0] = el; }} className="mb-24 rounded-xl  overflow-hidden"
      style={{
        backgroundImage: "url('/images/about-us-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            
            <div className="md:w-[60%] p-8 md:p-24 flex flex-col items-center justify-center left-0">
              <h2 className="text-3xl font-bold mb-8  text-gray-800">Our Journey of Innovation</h2>
              <p className="text-xl mb-8 leading-relaxed text-center text-gray-500">
                Founded in 2020, we set out to redefine convenience in the digital age. Our platform seamlessly connects discerning clients with elite professionals across diverse service domains.                 By harnessing cutting-edge technology and human expertise, we're crafting an unparalleled platform that anticipates and meets the evolving needs of both service seekers and providers.

              </p>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
              </p>
              <Link href="/our-vision" className="inline-block bg-brand-primary text-white py-4 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 text-lg">
                Discover Our Vision
              </Link>
            </div>
          </div>
        </section>       */}
      <main className="container mx-auto px-4 py-10">
        {/* <motion.h1 
          className="text-4xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         We Simplify Your Work with Our Expert Services        </motion.h1> */}
        {/* Company Overview Section */}
        

        {/* Values Section */}
        <section ref={(el) => { if (el) sectionRefs.current[1] = el; }} className="mb-24">
          <h2 className="text-4xl font-semibold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: (
                <svg className="w-12 h-12 mb-6 mx-auto  text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ), title: "Quality", description: "We're committed to providing top-notch services through our vetted professionals." },
              { icon: (
                <svg className="w-12 h-12 mb-6 mx-auto  text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ), title: "Innovation", description: "We continuously strive to improve our platform and services to meet evolving needs." },
              { icon: (
                <svg className="w-12 h-12 mb-6 mx-auto  text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), title: "Trust", description: "We build lasting relationships with our users and service providers based on trust and reliability." }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Our Story Section */}
        <section ref={(el) => { if (el) ourStorysectionRefs.current[2] = el; }} className="mb-24  flex flex-col items-center justify-center h-fit w-fit bg-gray-100 text-black rounded-xl p-12 shadow-lg mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Our Story
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Our journey began with a simple yet powerful idea: to bridge the gap between exceptional service professionals and those seeking quality assistance in their daily lives.
            </p>
            <p className="text-lg leading-relaxed">
              Drawing from our diverse backgrounds in technology, hospitality, and customer service, we recognized the untapped potential in the gig economy. We envisioned a platform that not only connects but elevates the entire service experience.
            </p>
            <p className="text-xl leading-relaxed font-semibold">
              Today, we're not just providing a service; we're fostering a community where skills are valued, trust is paramount, and convenience meets excellence.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        
         
        
      </main>
      <div ref={(el: HTMLElement | null) => { if (el) sectionRefs.current[2] = el }} id="download" className="bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image src="/images/mockupmobile.png" alt="App Preview" width={600} height={500} className="rounded-lg" />
          </div>
          <div className="lg:w-1/2 right-0 lg:pl-12">
            <h2 className="text-4xl font-bold mb-8 text-black">Ready to Experience Premium Service?</h2>
            <p className="text-2xl mb-8 text-gray-700">Download our app now and unlock a world of convenience!</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-110">
                <Image src="/apple_badge.png" alt="Download on App Store" width={200} height={60} className="rounded-lg shadow-md" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-110">
                <Image src="/google_badge.png" alt="Get it on Google Play" width={200} height={60} className="rounded-lg shadow-md" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
