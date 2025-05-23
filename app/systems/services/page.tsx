/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import DownloadSection from '@/components/downloadSection';
// import { useLocomotiveScroll } from 'react-locomotive-scroll'; // Removed
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Removed

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  // const { scroll } = useLocomotiveScroll(); // Removed

  useEffect(() => {
    if (!mainRef.current) return;

    // Locomotive Scroll initialization removed
    // scroll.init({
    //   el: mainRef.current,
    //   smooth: true, 
    //   multiplier: 1,
    //   class: 'is-inview'
    // });

    const sections = [
      { className: '.service-section', start: 'top 80%', end: 'bottom 20%' },
      // Note: '.how-it-works-item' class is targeted by GSAP but not found in this page's JSX.
      // If this animation is intended for elements within a child component or was an oversight, it won't apply.
      { className: '.how-it-works-item', start: 'top 70%', end: 'bottom 20%' }, 
      { className: '.why-choose-us-item', start: 'top 70%', end: 'bottom 20%' },
      { className: '.impact-item', start: 'top 70%', end: 'bottom 20%' },
      { className: '.download-section', start: 'top 80%', end: 'bottom 20%' }, // Assumes DownloadSection component has this class
    ];

    sections.forEach(({ className, start, end }) => {
      const elements = gsap.utils.toArray(className) as HTMLElement[];
      if (elements.length > 0) {
        gsap.fromTo(elements, 
          { opacity: 0, y: -50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4, 
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: elements[0], // Use the first element as trigger for a group, or handle individually
              start: start,
              end: end,
              // scroller: scroll.el, // Removed, GSAP defaults to viewport scroll
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Parallax effect for background
    // Ensure an element with class 'parallax-bg' and a background-image exists for this to be effective.
    const parallaxBgElement = document.querySelector('.parallax-bg');
    if (parallaxBgElement) {
      gsap.fromTo('.parallax-bg',
        { backgroundPosition: '50% 0%' },
        {
          backgroundPosition: '50% 100%',
          ease: 'none', // Typically 'none' or 'linear' for scrub animations
          scrollTrigger: {
            trigger: '.parallax-bg',
            start: 'top top',
            end: 'bottom top',
            // scroller: scroll.el, // Removed
            scrub: true,
          },
        }
      );
    }

    // Update ScrollTrigger when locomotive scroll updates - Removed
    // scroll.on('scroll', ScrollTrigger.update);
    // GSAP's ScrollTrigger updates automatically with native scroll.

    // Clean up GSAP ScrollTriggers
    return () => {
      // scroll.destroy(); // Removed
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []); // Removed scroll from dependencies

  return (
    // Removed data-scroll-container, kept ref if needed for other purposes or future scroller setup
    <div ref={mainRef} className="services-page bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* <Navbar /> */}

      {/* Removed data-scroll-section */}
      <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <motion.h1
          // Removed data-scroll and data-scroll-speed
          className="text-4xl pt-8 font-bold text-center text-black"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: -50 }} // Note: y: -50 in animate might be slightly off screen top. Consider y:0.
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Explore Our Services
        </motion.h1>

        {/* Driver Services */}
        {/* Removed data-scroll-section */}
        <section className="service-section mb-36">
          {/* Commented out section was already commented */}
          {/* <div className="flex flex-col lg:flex-row items-center justify-between mb-24"> ... </div> */}

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
            {/* Removed data-scroll and data-scroll-speed */}
            <div className="lg:w-1/2 mb-12 lg:mr-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image src="/images/AiGenimages/chef-with-clients.jpeg" alt="Driver Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              </motion.div>
            </div>
            {/* Removed data-scroll and data-scroll-speed */}
            <div className="lg:w-1/2 lg:ml-12">
              <motion.h2
                className="text-3xl font-bold mb-8 text-black"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Gourmet Dining at Your Doorstep
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Indulge in restaurant-quality cuisine from the comfort of your home. Our skilled chefs bring culinary excellence to your kitchen.              
              </motion.p>
              <motion.ul
                className="space-y-4 mb-8 text-gray-800"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {['Customized meal planning', 'Fresh, high-quality ingredients', 'Accommodates dietary restrictions and preferences'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-lg"
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0 },
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

        {/* Why Choose Us */}
        {/* Removed data-scroll-section */}
        <section className="why-choose-us-section bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              // Removed data-scroll and data-scroll-speed
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0.5, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4}}
            >
              Why Choose Our Services?
            </motion.h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 md:gap-12">
              {[
                {
                  title: 'Unparalleled Expertise',
                  description: 'Our team of seasoned professionals brings years of experience and in-depth knowledge to every service we offer.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-[#cc4c03]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Experience clarity and fairness with our upfront, competitive pricing. No hidden fees, just honest service.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Customer-Centric Support',
                  description: 'Our dedicated team ensures your satisfaction at every step, delivering personalized care that exceeds expectations.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  // Removed data-scroll and data-scroll-speed
                  className="why-choose-us-item bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
            <motion.div
              // Removed data-scroll and data-scroll-speed
              className="mt-12 text-center"
              initial={{ opacity: 0.5, y: -20 }} // Consider y: 20 for upward animation
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-700 mb-6">
                At <span className="font-bold">Servizo.</span> we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
              </p>
              <Link href="/contact" className="inline-block bg-[#cc4c03] text-white font-semibold py-3 px-6 md:px-8 rounded-full hover:bg-black hover:border-black transition-colors duration-300">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>

        {/* New Section: Service Impact */}
        {/* Removed data-scroll-section */}
        <section className="impact-section min-w-fit py-16 pt-20 pb-20">
          <div className="container px-4">
            <motion.h2
              // Removed data-scroll and data-scroll-speed
              className="text-4xl font-bold mb-12 text-center text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Impact on Your Life
            </motion.h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: 'Time Saved',
                  value: '1,000,000+',
                  description: 'Hours given back to our clients',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Stress Reduced',
                  value: '95%',
                  description: 'Of clients report lower stress levels',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Quality of Life',
                  value: '4.9/5',
                  description: 'Average improvement in life satisfaction',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  // Removed data-scroll and data-scroll-speed
                  className="impact-item bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">{item.title}</h3>
                  <p className="text-4xl font-bold mb-4 text-center text-[#cc4c03]">{item.value}</p>
                  <p className="text-lg leading-relaxed text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
            <motion.div
              // Removed data-scroll and data-scroll-speed
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl font-light leading-relaxed text-gray-700 mb-8">
                Our services don't just solve problems; they transform lives. Experience the Servizo difference today.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <DownloadSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;