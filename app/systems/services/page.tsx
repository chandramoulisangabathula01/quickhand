/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import DownloadSection from '@/components/downloadSection';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { className: '.service-section', start: 'top 80%', end: 'bottom 20%' },
      { className: '.how-it-works-item', start: 'top 70%', end: 'bottom 20%' },
      { className: '.why-choose-us-item', start: 'top 70%', end: 'bottom 20%' },
      { className: '.impact-item', start: 'top 70%', end: 'bottom 20%' },
      { className: '.download-section', start: 'top 80%', end: 'bottom 20%' ,},
    ];

    sections.forEach(({ className, start, end }) => {
      gsap.fromTo(className, 
        { opacity: 0, y: -50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: 'power3.inOut', 
          smooth: true,
          scrollTrigger: {
            trigger: className,
            start: start,
            end: end,
            // markers:true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax effect for background
    gsap.fromTo('.parallax-bg',
      { backgroundPosition: '50% 0%' },
      {
        backgroundPosition: '50% 100%',
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

  }, []); // Added empty dependency array to useEffect

  return (
    <div className="services-page bg-gradient-to-b from-gray-100 to-white text-gray-900 scroll-smooth " ref={mainRef}>
      <Navbar />

      <main className="container mx-auto  py-10 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl pt-8 font-bold text-center text-black"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Explore Our Services
        </motion.h1>

        {/* Driver Services */}
        <section className="service-section mb-36 ">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-24">
            <div className="lg:w-1/2 mb-12 lg:ml-12 lg:pr-12 lg:mb-0 ">
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
                className="text-3xl font-bold mb-8 text-black"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Personal Driver, One Click Away
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
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
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {['Safe and reliable transportation', 'Professional and courteous drivers', 'Available for various needs: errands, appointments, and more'].map((item, index) => (
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
        <section className="why-choose-us-section bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
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
                    <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="why-choose-us-item bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0.5, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-700 mb-6">
                At <span className="font-bold">Servizo.</span> we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
              </p>
              <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>

        {/* New Section: Service Impact */}
        <section className="impact-section min-w-fit py-16 pt-20 pb-20">
          <div className="container px-4">
            <motion.h2
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
                  className="impact-item bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">{item.title}</h3>
                  <p className="text-4xl font-bold mb-4 text-center text-blue-600">{item.value}</p>
                  <p className="text-lg leading-relaxed text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
            <motion.div
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
      {/* DOWNLOAD SECTION */}

      {/* <div id="download" className="bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2  mb-8 lg:mb-0">
            <Image src="/images/mockupmobile.png" alt="App Preview" width={600} height={500} className="rounded-lg" />
          </div>
          <div className="lg:w-1/2 right-0 lg:pl-12">
            <h2 className="text-4xl font-bold mb-8 text-black">Ready to Experience Premium Service?</h2>
            <p className="text-2xl mb-8 text-gray-700">Download our app now and unlock a world of convenience!</p>
            
            <div className="flex flex-row space-x-4 sm:space-x-6 justify-center">
              <Link href="https://play.google.com/store/apps/details?id=your-app">
                <button className="cursor-pointer ">
                  <div className="flex max-w-48 h-12 px-3 gap-2 border border-r-2 border-solid border-gray-500 rounded-xl items-center justify-center hover:bg-gray-800 bg-black text-white sm:h-14">
                    <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
                      <path d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" fill="#FFD400"></path>
                      <path d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" fill="#FF3333"></path>
                      <path d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" fill="#48FF48"></path>
                      <path d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" fill="#3BCCFF"></path>
                    </svg>
                    <div>
                      <div className="text-[.5rem] sm:text-xs text-left text-white">GET IT ON</div>
                      <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl text-white">Google Play</div>
                    </div>
                  </div>
                </button>
              </Link>

              <Link href="https://apps.apple.com/your-app">
                <button className="cursor-pointer">
                  <div className="flex max-w-48 h-12 px-3 gap-2 border border-r-2 border-solid border-gray-500  rounded-xl items-center justify-center bg-black hover:bg-gray-800 text-white sm:gap-3 sm:h-14">
                    <svg viewBox="0 0 384 512" className="w-5 sm:w-7 text-white">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="currentColor"></path>
                    </svg>
                    <div>
                      <div className="text-[.5rem] sm:text-xs text-left text-white">Download on the</div>
                      <div className="text-lg font-semibold font-sans -mt-1 sm:text-2xl text-white">App Store</div>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;