/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (mainRef.current) {
      // GSAP animations
      gsap.from('.service-section', {
        opacity: 1,
        y: 100,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.service-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.how-it-works-item', {
        opacity: 1,
        y: 50,
        // stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scale: 0.8,
        scrollTrigger: {
          trigger: '.how-it-works-section',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: true,
        },
      });

      // Parallax effect for background
      gsap.to('.parallax-bg', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Framer Motion animations
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="services-page bg-gradient-to-b from-gray-100 to-white text-gray-900" ref={mainRef}>
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl font-extrabold text-center   text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Explore Our Services
        </motion.h1>

        {/* Driver Services */}
        <section className="service-section mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-24">
            <div className="lg:w-1/2 mb-12 lg:ml-12 lg:mb-0 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image src="/driverService.png" alt="Driver Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              </motion.div>
            </div>
            <div className="lg:w-1/2 ">
              <motion.h2 
                className="text-4xl font-bold mb-8 text-black"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Personal Driver, One Click Away
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience stress-free transportation with our punctual and courteous drivers, ready to make your journey smooth and comfortable.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8 text-gray-800"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {['Safe and reliable transportation', 'Professional and courteous drivers', 'Available for various needs: errands, appointments, and more'].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mr-12 lg:mb-0 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image src="/chefteam.png" alt="Driver Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              </motion.div>
            </div>
            <div className="lg:w-1/2 lg:ml-12">
              <motion.h2 
                className="text-4xl font-bold mb-8 text-black"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gourmet Dining at Your Doorstep
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Indulge in restaurant-quality cuisine from the comfort of your home. Our skilled chefs bring culinary excellence to your kitchen.              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8 text-gray-800"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {['Customized meal planning', 'Fresh, high-quality ingredients', 'Accommodates dietary restrictions and preferences'].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-lg"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works-section py-10 mb-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center  text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 2, scale: 1.1 }}
              
              transition={{ duration: 0.8 }}
            >
              How It Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "Download the App", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ), description: "Get our app from your preferred app store" },
                { step: "Browse Services", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ), description: "Explore our wide range of premium services" },
                { step: "Schedule", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ), description: "Pick a time that works best for you" },
                { step: "Enjoy", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), description: "Sit back and enjoy our top-notch service" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="how-it-works-item flex flex-col items-center text-center"
                >
                  <div 
                    className="bg-white rounded-full p-6 shadow-md mb-6"
                  >
                    {item.icon}
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">Step {index + 1}</h3>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-1">{item.step}</h4>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-gray-300 to-gray-300 text-gray-800 p-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our Services?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Unparalleled Expertise',
                  description: 'Our team of seasoned professionals brings years of experience and in-depth knowledge to every service we offer.',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Experience clarity and fairness with our upfront, competitive pricing. No hidden fees, just honest service.',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Customer-Centric Support',
                  description: 'Our dedicated team ensures your satisfaction at every step, delivering personalized care that exceeds expectations.',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-center">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl font-light leading-relaxed text-gray-700 mb-8">
                At <span className="font-bold">Servizo.</span> we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
              </p>
              <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <motion.section 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-black">Ready to Experience Premium Service?</h2>
          <p className="text-2xl mb-12 text-gray-700">Download our app now and unlock a world of convenience!</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-110">
              <Image src="/apple_badge.png" alt="Download on App Store" width={200} height={60} className="rounded-lg shadow-md" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-110">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={200} height={60} className="rounded-lg shadow-md" />
            </Link>
          </div>
        </motion.section> */}
        
       

      </main>
       {/* DOWNLOAD SECTION */}

       <div id="download" className="bg-gray-100"
      // style={{ backgroundColor: "#B7B7B7" }}
      >
        <div className="container mx-auto  flex flex-col lg:flex-row items-center">
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

export default ServicesPage;