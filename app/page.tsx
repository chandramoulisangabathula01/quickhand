"use client";
import { useEffect, useState } from 'react';
import gsap from 'gsap';
// import Navbar from '@/components/navbar';
import LandingPage from './systems/landingpage/page';
import CookieConsent from '@/components/CookieConsent';
// import LoadingLayout from "@/app/LoadingLayout";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload your components and assets here
    Promise.all([
      // Add your preload promises here
      // Example: Image preloading
      // new Promise(resolve => {
      //   const img = new Image();
      //   img.onload = resolve;
      //   img.src = '/path-to-image.jpg';
      // }),
      // Add more promises for other assets
    ]).then(() => {
      setIsLoaded(true);
      // GSAP animation
      gsap.fromTo('.title', 
        { y: 0, opacity: 0 },
        { 
          y: 50, 
          opacity: 1, 
          duration: 2,
          immediateRender: false,
          ease: 'power2.out'
        }
      );
    });
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="scroll-smooth overflow-hidden">
      <LandingPage />
      <CookieConsent /> {/* Add Cookie Consent component here */}
    </div>
  );
};

export default HomePage;
