/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { LayoutGrid } from "./ui/layout-grid";
import React from 'react';

function Hero() {
  return (
    <section className="hero pb-10 bg-gradient-to-br from-gray-100 to-white">
      <style jsx>{`
        {
          background-color: #E5D9F2;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col mt-12 items-start px-4 sm:px-6 lg:px-12 bg-gradient-to-br rounded-3xl">
            <p className="text-sm sm:text-md lg:text-lg font-semibold mb-4 uppercase text-green-700 text-left leading-tight">Simplified Living, Elevated Experiences</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-brand-primary text-left lg:leading-tight">Get Services Delivered at Your Doorstep!</h1>
            <p className="text-sm sm:text-md lg:text-xl mb-8 text-gray-400 text-left lg:py-4">Simplified, reliable, and professional {'->'} just a tap away.</p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/systems/services" className="inline-flex items-center justify-center px-8 sm:px-16 py-3 sm:py-6 border border-transparent text-lg sm:text-xl font-medium rounded-md shadow-md text-white bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                View our Services
              </Link>
              <Link href="https://apps.apple.com/your-app" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-md bg-transparent py-3 px-6 text-black bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
                <span className="flex flex-col items-start leading-none">
                  <p className="text-lg sm:text-xl font-bold">Download App</p>
                </span>
              </Link>
            </div>
          
            {/* <div className="mt-12 flex justify-center items-center w-full">
              <Link href="/demo" className="inline-flex items-center px-8 sm:px-16 lg:px-44 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch our demo video
              </Link>
            </div> */}
          </div>
          <div className="lg:w-1/2 hidden lg:block">
            <LayoutGridDemo />
          </div>
          <div className="w-full sm:w-1/2 lg:hidden">
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
    <div className="h-[50vh] sm:h-[60vh] lg:h-[80vh] mt-6 w-full lg:w-[90vh]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
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
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature's beauty. It's the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-sm sm:text-base text-white"></p>
      <p className="font-normal text-xs sm:text-sm lg:text-base my-2 sm:my-4 max-w-lg text-neutral-200">
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
    thumbnail: "",
  },
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
