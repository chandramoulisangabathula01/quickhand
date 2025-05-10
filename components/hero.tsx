/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { LayoutGrid } from "./ui/layout-grid";
import React from 'react';

function Hero() {
  return (
    <section className="hero pb-10 bg-gradient-to-br from-white to-gray-100">
      <style jsx>{`
        {
          background-color: #ffffff;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col mt-12 items-start px-4 sm:px-6 lg:px-12 bg-gradient-to-br rounded-3xl">
            <p className="text-sm sm:text-md lg:text-lg font-semibold mb-4 uppercase text-[#cc4c03] text-left leading-tight">Culinary Excellence at Your Doorstep</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-black text-left lg:leading-tight">Professional Chef Services On Demand!</h1>
            <p className="text-sm sm:text-md lg:text-xl mb-8 text-gray-400 text-left lg:py-4">Gourmet dining experiences in the comfort of your home {'->'} just a tap away.</p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/systems/services" className="inline-flex items-center justify-center px-8 sm:px-16 py-3 sm:py-6 border border-transparent text-lg sm:text-xl font-medium rounded-md shadow-md text-white bg-black hover:bg-[#cc4c03] transition-all duration-300 transform hover:scale-105">
                View Chef Services
              </Link>
              <Link href="#download" className="inline-flex hover:border-[#cc4c03] items-center justify-center border-2 border-black rounded-md bg-transparent py-3 px-6 text-black bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
                <span className="flex flex-col items-start leading-none">
                  <p className="text-lg sm:text-xl font-bold">Download App</p>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:block ">
            <LayoutGridDemo />
          </div>
          <div className="w-full  lg:hidden ">
            <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source src="/videos/ProChefClip.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

function LayoutGridDemo() {
  return (
    <div className="xmd:h-[100%] xmd:w-full  h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[70vh] mt-[2vh] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] mx-auto">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/chef" className="text-white hover:text-[#cc4c03] transition-colors" aria-label="Learn more about our chef services">
          Chef at Your Service
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        Our chefs are professional, reliable, and always ready to create culinary masterpieces for you.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/chef" className="text-white hover:text-[#cc4c03] transition-colors" aria-label="Learn about our chef specialties">
          Gourmet Dining Experience
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
       From intimate dinners to large gatherings, our chefs create memorable culinary experiences
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/chef" className="text-white hover:text-[#cc4c03] transition-colors" aria-label="View our chef specialties">
          Specialized Chef Services
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        Our services are designed to meet all your needs the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <a href="/services/driver" className="text-white hover:text-brand-secondary transition-colors" aria-label="Learn more about our driver services">
          Driver at Your Service
        </a>
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        Our drivers are professional, reliable, and always ready to assist you with a smile.
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
    thumbnail: {
      src: "",
      width: 0,
      height: 0,
      alt: ""
    }
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    video: "",
    thumbnail: {
      src: "/images/AiGenimages/chef-pose1.jpeg",
      width: 800,
      height: 600,
      alt: "Coming Soon"
    },
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    // video: "/videos/AllMixMIniClip.mp4",
    video: "",
    thumbnail: {
      src: "/images/AiGenimages/female-chef.jpeg",
      // width: 0,
      // height: 0,
      width: 800,
      height: 600,
      alt: ""
    }
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-2",
    // video: "/videos/AllMixMIniClip.mp4",
    video: "",
    thumbnail: {
      src: "/images/AiGenimages/chef-with-clients.jpeg",
      width: 800,
      height: 600,
      alt: ""
    }
  },
];