/* eslint-disable react/no-unescaped-entities */
"use client";
// import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { LayoutGrid } from "@/components/ui/layout-grid";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page bg-white text-gray-800">
      
      
      {/* Hero Section */}
      <section className="hero bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 ml-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">Get Services Delivered at Your Doorstep!</h1>
              <p className="text-xl mb-6">Quick, reliable, and professional services available with a tap on the app.</p>
              <div className="flex space-x-4 mb-4">
                <Link href="https://apps.apple.com/your-app" className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors">Download on the App Store</Link>
                <Link href="https://play.google.com/store/apps/details?id=your-app" className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors">Get it on Google Play</Link>
              </div>
              <div className="mt-6">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch our demo video
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <LayoutGridDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="">
                <Image src="/buynow.png" alt="Easy Booking" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Easy Booking</h3>
              <p>Find and book services quickly.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="/verified.png" alt="Verified Professionals" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Verified Professionals</h3>
              <p>Trusted, qualified experts at your service.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="/realtime.png" alt="Real-Time Tracking" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Real-Time Tracking</h3>
              <p>Track your service provider's arrival.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="/lowprices.png" alt="Affordable Pricing" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Affordable Pricing</h3>
              <p>Clear and competitive rates.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/systems/How-It-Works" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-md">
              <span className="flex items-center">
                <span>Learn more about how it works</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* App Demo Section */}
      <section className="app-demo bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">See How It Works!</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full rounded-lg shadow-md"></iframe>
            </div>
            <div className="text-center">
              <Link href="https://apps.apple.com/your-app" className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors inline-block">Download the App Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">What Our Customers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">"The app is so easy to use! I found a great plumber in minutes."</p>
              <div className="flex items-center">
                <Image src="/customer1.jpg" alt="Customer 1" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-brand-secondary">Jane Doe</p>
                  <p className="text-sm text-gray-600">Homeowner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">"I love being able to track my service provider in real-time. No more waiting around!"</p>
              <div className="flex items-center">
                <Image src="/customer2.jpg" alt="Customer 2" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-brand-secondary">John Smith</p>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">"The professionals on this platform are top-notch. I'm always satisfied with the service."</p>
              <div className="flex items-center">
                <Image src="/customer3.jpg" alt="Customer 3" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-brand-secondary">Emily Brown</p>
                  <p className="text-sm text-gray-600">Apartment Renter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;

function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
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
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
