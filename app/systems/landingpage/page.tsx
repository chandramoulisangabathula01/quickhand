/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { LayoutGrid } from "@/components/ui/layout-grid"; // Note: LayoutGrid is imported but not used
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/hero';
import DownloadSection from '@/components/downloadSection';
// import { useLocomotiveScroll } from 'react-locomotive-scroll'; // Removed
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Removed

const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Kept ref, though its use with LocomotiveScroll is removed
  // const { scroll } = useLocomotiveScroll(); // Removed

  const [state, setState] = useState({
    isLoaded: false,
    currentImageIndex: 0,
    selectedFaq: null as number | null
  });

  useEffect(() => {
    // Locomotive Scroll initialization removed
    // if (containerRef.current && scroll) {
    //   scroll.init({
    //     el: containerRef.current,
    //     smooth: true,
    //     multiplier: 1,
    //     class: "is-reveal"
    //   });
    // }

    setState(prev => ({ ...prev, isLoaded: true }));
    const interval = setInterval(() => {
      setState(prev => ({ 
        ...prev, 
        currentImageIndex: (prev.currentImageIndex + 1) % 3 
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Removed scroll from dependencies

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // useEffect for scroll.update() removed as scroll object is removed
  // useEffect(() => {
  //   if (scroll) {
  //     scroll.update();
  //   }
  // }, [scroll]);

  const animations = useMemo(() => ({
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
      },
    }
  }), []);

  // images variable is declared but not used. If intended for use, integrate it.
  const images = [
    { src: "/chefteam.png", alt: "Chef Service" }
  ];

  const handleFaqClick = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      selectedFaq: prev.selectedFaq === index ? null : index
    }));
  }, []);

  return (
    <>
    {/* Removed data-scroll-container */}
    <div ref={containerRef} className="landing-page bg-white text-gray-800">
      {/* Removed data-scroll-section */}
      <div>
        <Hero />
      </div>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animations.staggerChildren}
        className="features py-12 sm:py-16 md:py-20 lg:py-24"
        // Removed data-scroll-section
      >
        {/* Removed data-scroll and data-scroll-speed */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={animations.fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us?</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "calendar", alt: "Easy Booking", title: "Easy Booking", description: "Find and book services quickly." },
              { icon: "user-check", alt: "Verified Professionals", title: "Verified Professionals", description: "Trusted, qualified experts at your service." },
              { icon: "map-pin", alt: "Real-Time Tracking", title: "Real-Time Tracking", description: "Track your service provider's arrival." },
              { icon: "star", alt: "Superior Service", title: "Superior Service", description: "Unmatched quality and reliability " }
            ].map((feature, index) => (
              // Removed data-scroll and data-scroll-speed
              <motion.div key={index} variants={animations.fadeInUp} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-[#cc4c03]">
                    {feature.icon === "calendar" && (
                      <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8zM3 10h18M8 2v4M16 2v4" />
                    )}
                    {feature.icon === "user-check" && (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <polyline points="16 11 18 13 22 9" />
                      </>
                    )}
                    {feature.icon === "map-pin" && (
                      <>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </>
                    )}
                    {feature.icon === "star" && (
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    )}
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#cc4c03]">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          {/* Removed data-scroll and data-scroll-speed */}
          <motion.div variants={animations.fadeInUp} className="text-center mt-8 sm:mt-12">
            <Link href="/systems/How-It-Works" className="inline-block bg-black hover:bg-[#cc4c03] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md" aria-label="Learn more about how it works">
              <span className="flex items-center">
                <span>Learn more about how it works</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Removed data-scroll-section */}
      <section className="our-services py-16 sm:py-24 bg-gradient-to-br from-[#fff7f0] to-[#f5e6d8]">
        {/* Removed data-scroll and data-scroll-speed */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <Image 
              src="/3.png"
              alt="Professional Chef"
              width={320}
              height={320}
              className="rounded-3xl shadow-2xl border-8 border-[#cc4c03]/20 object-cover bg-white"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#cc4c03] leading-tight">Professional Chefs, At Your Service</h2>
            <p className="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto md:mx-0">Experience restaurant-quality meals in the comfort of your home. Our expert chefs craft unforgettable dining experiences for intimate dinners or grand celebrations, tailored to your tastes and preferences.</p>
            <Link href="/systems/services">
              <span className="inline-block bg-[#cc4c03] hover:bg-black text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">Book a Chef Now</span>
            </Link>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        animate={controls} // This controls object is linked to the "features" section's useInView. Re-check if this section needs its own useInView.
        variants={animations.staggerChildren}
        className="app-demo py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={animations.fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#cc4c03]">See How It Works!</motion.h2>
          <motion.div variants={animations.fadeInUp} className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <video controls src="/videos/app_demo.mp4" title="App Demo Video" autoPlay loop muted className="rounded-lg shadow-md w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials section was already commented out */}
      {/* <motion.section ... </motion.section> */}

    </div>
    {/* app features & benefits (These sections are outside the main div with containerRef, which is fine for native scrolling) */}
    <motion.section 
      // This controls object is linked to the "features" section's useInView. 
      // For independent animation, these sections should have their own useInView setup.
      initial="hidden"
      animate={controls} 
      variants={animations.staggerChildren}
      className="app-features py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={animations.fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-black to-[#cc4c03]"
        >
          App Benefits
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Live Notifications",
              description: "Get real-time updates on your service status",
              icon: "🔔"
            },
            { 
              title: "Schedule Management",
              description: "Easily manage bookings and schedules",
              icon: "📅"
            },
            { 
              title: "In-App Payments",
              description: "Convenient and secure payment options",
              icon: "💳"
            },
            { 
              title: "Service Reviews",
              description: "Leave reviews and check ratings",
              icon: "⭐"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={animations.fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* FAQ */}
    <motion.section 
      initial="hidden"
      animate={controls} // Same as above, consider separate useInView for independent animation
      variants={animations.staggerChildren}
      className="faq py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2 
          variants={animations.fadeInUp}
          className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-black to-[#cc4c03]"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {[
            { 
              question: "How do I book a service?",
              answer: "Simply use our app or website to book a service with just a few clicks. Browse through available services, select your preferred time slot, and confirm your booking instantly."
            },
            { 
              question: "What if I need to cancel?",
              answer: "You can easily cancel or reschedule through our app up to 4 hours before the scheduled service time. Our flexible cancellation policy ensures a hassle-free experience."
            },
            { 
              question: "Are all service providers verified?",
              answer: "Yes, all our professionals undergo a thorough verification process including background checks, skill assessment, and training to ensure the highest quality of service."
            },
            { 
              question: "Can I track my service provider?",
              answer: "Absolutely! Use our real-time tracking feature to monitor your service provider's location and estimated arrival time, ensuring complete transparency and convenience."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={animations.fadeInUp}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                onClick={() => handleFaqClick(index)}
              >
                <span className={`font-semibold text-lg ${state.selectedFaq === index ? 'text-[#cc4c03]' : 'text-black'}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: state.selectedFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: state.selectedFaq === index ? "auto" : 0,
                  opacity: state.selectedFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-50"
              >
                <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    <DownloadSection />
    
    <Footer />
    </>
  );
};

export default LandingPage;