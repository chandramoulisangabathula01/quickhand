/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksPage = () => {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const steps = [
    {
      title: "Step 1: Download and Sign Up",
      description: "Get our app from the App Store or Google Play Store and create your account.",
      image: "/images/mobilelogin.png",
    },
    {
      title: "Step 2: Browse Services",
      description: "Explore our wide range of available services.",
      image: "/images/browse.png",
    },
    {
      title: "Step 3: Book Instantly",
      description: "Select your service, choose a time, and book with just a few taps.",
      image: "/images/mobilelogin.png",
    },
    {
      title: "Step 4: Track Your Provider",
      description: "Follow your service provider's location in real-time as they head to you.",
      image: "/images/browse.png",
    },
    {
      title: "Step 5: Pay and Rate",
      description: "Once the job is done, pay securely through the app and rate your experience.",
      image: "/images/mobilelogin.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      steps.forEach((_step, index) => {
        const triggerElement = `.step-${index}`;

        gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 10%",
            end: "bottom bottom",
            scrub: true,
            pin: ".image-container",
            onEnter: () => setCurrentStep(index),
            onLeaveBack: () => setCurrentStep(index),
            markers: true,
          },
        });
      });

      ScrollTrigger.create({
        trigger: "#download",
        start: "top 90%",
        onEnter: () => setIsFixed(false),
        onLeaveBack: () => setIsFixed(true),
      });
    } else {
      steps.forEach((_step, index) => {
        const triggerElement = `.step-${index}`;

        gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "",
            end: "",
            scrub: true,
            markers: true,
            pin: ".image-container",
            // onEnter: () => setCurrentStep(index),
            onLeaveBack: () => setCurrentStep(index),
          }
        });
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile, steps]);

  const DesktopView = () => (
    <>
      <div className="fixed-section">
        <motion.div
          className={`${isFixed ? 'fixed' : 'absolute'}   flex flex-col items-center lg:w-1/2 transform  ml-16`}
          initial={{ opacity: 0, x: -50 }} // Start from left with opacity 0
          animate={{ opacity: isFixed ? 1 : 0, x: 0 }} // Animate to full opacity and original position
          exit={{ opacity: 0, x: 50 }} // Exit animation
          transition={{ duration: 1 }}
        >
          <Image
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          className={`${isFixed ? 'fixed' : 'absolute'} lg:block flex flex-col items-center lg:w-1/2 top-1/2 right-0 transform -translate-y-1/2`}
          initial={{ opacity: 0, x: 50 }} // Start from left with opacity 0
          animate={{ opacity: isFixed ? 1 : 0, x: 0 }} // Animate to full opacity and original position
          exit={{ opacity: 0, x: -50 }} // Exit animation
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6">{steps[currentStep].title}</h3>
          <p className="text-xl">{steps[currentStep].description}</p>
        </motion.div>
      </div>

      <div className="scroll-sections">
        {steps.map((_step, index) => (
          <div className={`step-${index} h-screen`} key={index}></div>
        ))}
      </div>
    </>
  );

  const MobileView = () => {
    return (
      <div className="py-8 px-4">
        {steps.map((step, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });
  
          return (
            <motion.div
              key={index}
              className="mb-12"
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-lg text-center">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="how-it-works-page" ref={containerRef}>
      <Navbar />

      <h1 className="text-4xl font-semibold fixed top-20 left-0 right-0 mb-10 mt-4 text-center text-black z-10">How it works</h1>
      
      <div className="mt-20"> {/* Added margin-top for spacing */}
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>

      <div id="download" className="bg-gray-100">
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

export default HowItWorksPage;
