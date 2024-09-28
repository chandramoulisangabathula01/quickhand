/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/no-unescaped-entities */
// import { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Link from 'next/link';
// import { LayoutGrid } from './ui/layout-grid';

import Link from "next/link";
import { LayoutGrid } from "./ui/layout-grid";

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection: React.FC = () => {
//   const controls = useAnimation();
//   const sectionRef = useRef(null);
//   const [, setCurrentImageIndex] = useState(0);

//   const images = [
//     { src: "/chefteam.png", alt: "chef meal" },
//     { src: "/elderCare2.png", alt: "caretaker" },
//     { src: "/driverService.png", alt: "driver" },
//   ];

//   useEffect(() => {
//     const section = sectionRef.current;

//     gsap.fromTo('.service-professional', 
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 75%',
//         },
//       }
//     );

//     controls.start({ opacity: 1, y: 0 });

//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [controls, images.length]);

//   return (
//     <>
//     <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden scroll-smooth">
//       <div className="container px-4 relative z-10 mx-auto">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800"
//               initial={{ opacity: 0, y: -50 }}
//               animate={controls}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               Get Services Delivered at Your Doorstep!
//             </motion.h1>
//             <motion.p
//               className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-600"
//               initial={{ opacity: 0, y: -30 }}
//               animate={controls}
//               transition={{ duration: 1, delay: 0.4 }}
//             >
//               Quick, reliable, and professional services available with a tap on the app.
//             </motion.p>
//             <div className="flex flex-wrap gap-4 mb-6">
//               <Link href="https://apps.apple.com/your-app" className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-2.5 px-4 sm:px-6 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black transform hover:scale-105">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 384 512">
//                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
//                 </svg>
//                 <span className="ml-2 sm:ml-4 flex flex-col items-start leading-none">
//                   <span className="text-xs">Download on the</span>
//                   <span className="font-semibold">App Store</span>
//                 </span>
//               </Link>
//               <Link href="https://play.google.com/store/apps/your-app" className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-2.5 px-4 sm:px-6 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black transform hover:scale-105">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 512 512">
//                   <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
//                 </svg>
//                 <span className="ml-2 sm:ml-4 flex flex-col items-start leading-none">
//                   <span className="text-xs">GET IT ON</span>
//                   <span className="font-semibold">Google Play</span>
//                 </span>
//               </Link>
//             </div>
//             <Link href="/demo" className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-105">
//               Watch how it works
//             </Link>
//           </div>
//           <div className="w-full h-[60vh] md:w-1/2">
//             <div className="hidden md:block">
//               <LayoutGridDemo />
//             </div>
//             <div className="md:hidden">
//               <div className="w-full h-[40vh] sm:h-[50vh] bg-white rounded-lg shadow-lg overflow-hidden">
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 >
//                   <source src="/DriverServices.mp4" type="video/mp4" />
//                   <source src="/DriverServices.webm" type="video/webm" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   </>
//   );
// };

// export default HeroSection;

// function LayoutGridDemo() {
//   return (
//     <div className="h-[60vh] sm:h-screen md:h-screen w-full">
//       <LayoutGrid cards={cards as any[]} />
//     </div>
//   );
// }

// const SkeletonOne = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         House in the woods
//       </p>
//       <p className="font-normal text-sm sm:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//         A serene and tranquil retreat, this house in the woods offers a peaceful
//         escape from the hustle and bustle of city life.
//       </p>
//     </div>
//   );
// };

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         House above the clouds
//       </p>
//       <p className="font-normal text-sm sm:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. It's a place where the sky meets home,
//         and tranquility is a way of life.
//       </p>
//     </div>
//   );
// };

// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         Greens all over
//       </p>
//       <p className="font-normal text-sm sm:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature's beauty. It's the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
//         Rivers are serene
//       </p>
//       <p className="font-normal text-sm sm:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It's the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     video: "/DriverServices.mp4",
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     video: "/DriverServices.mp4",
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];


import React from 'react'

function hero() {
  return (
    <section className="hero  pb-10">
      <style jsx>{`
         {
          background-color: #E5D9F2;
        }
      `}</style>
<div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row ">
    <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col mt-12 items-start justify-center px-6 md:px-12 py-8 bg-gradient-to-br  rounded-3xl ">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary text-left leading-tight">Get Services Delivered at Your Doorstep!</h1>
      <p className="text-md md:text-xl mb-8 text-brand-secondary text-left">Quick, reliable, and professional services available with a tap on the app.</p>

        <Link href="/systems/services" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-md text-white bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 mb-10">
          View our Services
        </Link>
        <h5 className="text-2xl text-brand-primary text-left mb-6 font-semibold">Download our app</h5>
      <div className="flex space-x-6 mb-6">
        <Link href="https://apps.apple.com/your-app" className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-3 px-6 sm:px-8 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 384 512">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          <span className="ml-3 sm:ml-4 flex flex-col items-start leading-none">
            <span className="text-xs">Download on the</span>
            <span className="font-semibold">App Store</span>
          </span>
        </Link>
        <Link href="https://play.google.com/store/apps/your-app" className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-3 px-6 sm:px-8 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
          </svg>
          <span className="ml-3 sm:ml-4 flex flex-col items-start leading-none">
            <span className="text-xs">GET IT ON</span>
            <span className="font-semibold">Google Play</span>
          </span>
        </Link>
      </div>
      <div className="mt-12 flex justify-center items-center">
        {/* <Link href="/demo" className="inline-flex items-center px-44 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch our demo video
        </Link> */}
      </div>
    </div>
    <div className="md:w-1/2">
      <LayoutGridDemo />
    </div>
  </div>
</div>
</section>

  )
}

export default hero



function LayoutGridDemo() {
  return (
    <div className="h-[80vh] mt-6  w-[80vh]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It's a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature's beauty. It's the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It's the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    video: "/videos/ProChefClip.mp4",
    thumbnail: "",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    video: "/videos/ProDriverClip.mp4",
    thumbnail: "",  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    video: "/videos/AllMixMIniClip.mp4",
    thumbnail: "",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    video: "/videos/elderlyCareClip.mp4",
    thumbnail: "",
  },
];
