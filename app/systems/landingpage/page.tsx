/* eslint-disable @next/next/no-img-element */
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
import DownloadSection from '@/components/downloadSection';

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

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
    }, 3000);

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
    <>
    <div className="landing-page bg-white text-gray-800">
      <Hero />
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="features py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us?</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "calendar", alt: "Easy Booking", title: "Easy Booking", description: "Find and book services quickly." },
              { icon: "user-check", alt: "Verified Professionals", title: "Verified Professionals", description: "Trusted, qualified experts at your service." },
              { icon: "map-pin", alt: "Real-Time Tracking", title: "Real-Time Tracking", description: "Track your service provider's arrival." },
              { icon: "star", alt: "Superior Service", title: "Superior Service", description: "Unmatched quality and reliability " }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-brand-primary">
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
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-brand-secondary">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="text-center mt-8 sm:mt-12">
            <Link href="/systems/How-It-Works" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-md">
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

      <section className="our-services py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { img: "/1.png", title: "Drivers", description: "Professional drivers at your service. Whether you need a ride to the airport or a chauffeur for a special event, our skilled drivers ensure a safe and comfortable journey." },
              { img: "/3.png", title: "Chefs", description: "Experienced chefs ready to create culinary delights in your home. From intimate dinners to large gatherings, our chefs bring restaurant-quality meals to your table." },
              { img: "/2.png", title: "Caretakers", description: "Coming Soon" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center">
                <img src={service.img} alt={service.title} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mt-6" />
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="app-demo py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-brand-primary">See How It Works!</motion.h2>
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <video controls src="/videos/app_demo.mp4" title="App Demo Video" autoPlay loop muted className="rounded-lg shadow-md w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="testimonials py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">Voices of Excellence</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { quote: "Transformed my approach to home services. Expert assistance at my fingertips!", name: "Sarah Johnson", role: "Homeowner", image: "/customer1.png" },
              { quote: "The real-time tracking feature is revolutionary. It's elevated our entire business model.", name: "Michael Chen", role: "Startup Founder", image: "/customer2.png" },
              { quote: "Unparalleled quality of professionals. Every service has been nothing short of outstanding.", name: "Olivia Rodriguez", role: "Property Manager", image: "/customer3.png" }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4 border-2 border-brand-primary" />
                  <div>
                    <p className="font-semibold text-base sm:text-lg text-brand-primary">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="flex justify-end">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
    </div>
    {/* app features & benefits */}
    <motion.section 
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
      className="app-features py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
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
              variants={fadeInUp}
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
      animate={controls}
      variants={staggerChildren}
      className="faq py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
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
              variants={fadeInUp}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <motion.span
                  animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: selectedFaq === index ? "auto" : 0,
                  opacity: selectedFaq === index ? 1 : 0
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


// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Footer from '@/components/footer';
// import { LayoutGrid } from "@/components/ui/layout-grid";
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Hero from '@/components/hero';
// import DownloadSection from '@/components/downloadSection';

// const LandingPage: React.FC = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const images = [
//     { src: "/driverService.png", alt: "Driver Service" },
//     { src: "/chefteam.png", alt: "Chef Service" },
//     { src: "/elderCare2.png", alt: "Caretaker Service" }
//   ];

//   return (
//     <>
//       <div className="landing-page bg-white text-gray-800">
//         <Hero />
        
//         <motion.section
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={staggerChildren}
//           className="features py-12 sm:py-16 md:py-20 lg:py-24"
//         >
//           {/* "Why Choose Us" Section */}
//           {/* Existing Content */}
//         </motion.section>

//         {/* "Our Services" Section */}
//         {/* Existing Content */}

//         {/* New Sections */}
        
//         <section className="app-features py-12 sm:py-16 md:py-20 bg-gray-50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">App Benefits</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//               {[
//                 { title: "Live Notifications", description: "Get real-time updates on your service status." },
//                 { title: "Schedule Management", description: "Easily manage bookings and schedules." },
//                 { title: "In-App Payments", description: "Convenient and secure payment options." },
//                 { title: "Service Reviews", description: "Leave reviews and check ratings." }
//               ].map((feature, index) => (
//                 <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
//                   <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                   <p>{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="service-area py-12 sm:py-16 md:py-20 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Where We Operate</h2>
//             <div className="flex justify-center">
//               <img src="/map.png" alt="Service Coverage Map" className="rounded-lg shadow-lg w-full max-w-3xl" />
//             </div>
//           </div>
//         </section>

//         <section className="faq py-12 sm:py-16 md:py-20 bg-gray-50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//               {[
//                 { question: "How do I book a service?", answer: "Simply use our app or website to book a service with just a few clicks." },
//                 { question: "What if I need to cancel?", answer: "You can easily cancel or reschedule through our app." },
//                 { question: "Are all service providers verified?", answer: "Yes, all our professionals go through a thorough verification process." },
//                 { question: "Can I track my service provider?", answer: "Absolutely, use real-time tracking to stay updated on their arrival." }
//               ].map((faq, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//                   <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
//                   <p>{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <DownloadSection />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default LandingPage;




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
      </motion.section> */}