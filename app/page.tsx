// "use client";
// import { useEffect } from 'react';
// import gsap from 'gsap';
// import Navbar from '@/components/navbar';
// import LandingPage from './systems/landingpage/page';

// // import Navbar from '@/public/navbar';
// // import Navbar from '../components/navbar';

// const HomePage = () => {
//   useEffect(() => {
//     gsap.to('.title', { y: 50, opacity: 1, duration: 2 });
//   }, []);

//   return (
//     <div className=" scroll-smooth overflow-hidden">
//       <Navbar />
//       {/* <main className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1 className="text-4xl font-bold mb-4 opacity-0 title">Welcome to Our Service</h1>
//       </main> */}
//       <LandingPage />
      
//     </div>
//   );
// };

// export default HomePage;


"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '@/components/navbar';
import LandingPage from './systems/landingpage/page';
import CookieConsent from '@/components/CookieConsent';

const HomePage = () => {
  useEffect(() => {
    gsap.to('.title', { y: 50, opacity: 1, duration: 2 });
  }, []);

  return (
    <div className="scroll-smooth overflow-hidden">
      <Navbar />
      <LandingPage />
      <CookieConsent /> {/* Add Cookie Consent component here */}
    </div>
  );
};

export default HomePage;
