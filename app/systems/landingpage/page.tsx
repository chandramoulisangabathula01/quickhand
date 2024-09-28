/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { LayoutGrid } from "@/components/ui/layout-grid";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/hero';
// import HeroSection from '@/components/hero';

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

  const images = [
    { src: "/driverService.png", alt: "Driver Service" },
    { src: "/chefteam.png", alt: "Chef Service" },
    { src: "/elderCare2.png", alt: "Caretaker Service" }
  ];

  return (
    <div className="landing-page bg-white text-gray-800">
      {/* Hero Section */}
      {/* <motion.section

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero bg-white py-4"
      >
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center mx-4 sm:mx-8 md:mx-16 lg:mx-24">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-12 md:mb-0 pr-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                Elevate Your Lifestyle with <span className="text-blue-600">Premium Concierge</span> Services
              </h1>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Experience unparalleled convenience and luxury with our curated selection of premium services. From expert drivers to gourmet chefs and compassionate caregivers, we bring excellence to your doorstep.
              </p>
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {[
                  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Handpicked, vetted professionals" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Seamless booking in minutes" },
                  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", text: "Transparent, competitive pricing" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-4"
                  >
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10 space-y-4"
              >
                <div className="flex space-x-4">
                  <a
                    className="inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-2.5 px-6 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 384 512"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <span className="ml-4 flex flex-col items-start leading-none">
                      <span className="mb-1 text-xs">Download on the</span>
                      <span className="font-semibold">App Store</span>
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-2.5 px-6 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                    </svg>
                    <span className="ml-4 flex flex-col items-start leading-none">
                      <span className="mb-1 text-xs">GET IT ON</span>
                      <span className="font-semibold">Google Play</span>
                    </span>
                  </a>
                </div>
                <Link href="/demo" className="group inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Experience Our Services
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                    borderRadius: ["30%", "50%", "30%"]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-40"
                  style={{ filter: "blur(60px)" }}
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -180, 0],
                    borderRadius: ["40%", "60%", "40%"]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-l from-yellow-200 via-green-200 to-blue-200 opacity-40"
                  style={{ filter: "blur(70px)" }}
                ></motion.div>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.7 }}
                  className="relative z-10"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    width={600}
                    height={400}
                    className="rounded-lg sm:ml-8 md:ml-16 lg:ml-24 shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      

      {/* Key Features Section */}

      <Hero />
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="features bg-gray-50 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">Why Choose Us?</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/buynow.png", alt: "Easy Booking", title: "Easy Booking", description: "Find and book services quickly." },
              { src: "/verified.png", alt: "Verified Professionals", title: "Verified Professionals", description: "Trusted, qualified experts at your service." },
              { src: "/realtime.png", alt: "Real-Time Tracking", title: "Real-Time Tracking", description: "Track your service provider's arrival." },
              { src: "/lowprices.png", alt: "Affordable Pricing", title: "Affordable Pricing", description: "Clear and competitive rates." }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-4"
                >
                  <Image src={feature.src} alt={feature.alt} width={64} height={64} className="mx-auto" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-brand-secondary">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/systems/How-It-Works" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-md">
              <span className="flex items-center">
                <span>Learn more about how it works</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* App Demo Section */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="app-demo bg-gray-50 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 text-brand-primary">See How It Works!</motion.h2>
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full rounded-lg shadow-md"></iframe>
            </div>
            <div className="text-center">
              <Link href="https://apps.apple.com/your-app" className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors inline-block">Download the App Now</Link>
            </div>
          </motion.div>
        </div>
      </motion.section> 

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="testimonials py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 text-brand-primary">What Our Customers Are Saying</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "The app is so easy to use! I found a great plumber in minutes.", name: "Jane Doe", role: "Homeowner", image: "/customer1.png" },
              { quote: "I love being able to track my service provider in real-time. No more waiting around!", name: "John Smith", role: "Business Owner", image: "/customer2.png" },
              { quote: "The professionals on this platform are top-notch. I'm always satisfied with the service.", name: "Emily Brown", role: "Apartment Renter", image: "/customer3.png" }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-brand-secondary">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default LandingPage;
