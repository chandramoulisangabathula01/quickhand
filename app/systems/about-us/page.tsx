/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FaHandshake, FaLightbulb, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">About Us</h1>

        {/* Company Overview Section */}
        <section className="mb-24 bg-gradient-to-r from-gray-100 to-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-16 mb-6 md:mb-0 relative">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Our Company Building" width={500} height={300} className="rounded-lg transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-brand-primary opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-16 relative justify-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-8 text-brand-primary">Our Journey of Innovation</h2>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                In 2020, we embarked on a visionary quest: to redefine convenience in the digital age. What began as a spark of inspiration has flourished into a dynamic ecosystem, seamlessly connecting discerning clients with elite professionals across diverse service domains.
              </p>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                Our mission transcends mere service provision; we're architecting a paradigm shift in the industry. By harnessing cutting-edge technology and human expertise, we're crafting an unparalleled platform that not only meets but anticipates the evolving needs of both service seekers and providers.
              </p>
              <div className="mt-8">
                <Link href="/our-vision" className="inline-block bg-brand-primary text-white py-4 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 text-lg">Discover Our Vision</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <FaHandshake size={72} className="mx-auto text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-lg">We're committed to providing top-notch services through our vetted professionals.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <FaLightbulb size={72} className="mx-auto text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-lg">We continuously strive to improve our platform and services to meet evolving needs.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <FaShieldAlt size={72} className="mx-auto text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trust</h3>
              <p className="text-lg">We build lasting relationships with our users and service providers based on trust and reliability.</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-24 bg-slate-300 text-black rounded-xl p-12 shadow-lg">
          <h2 className="text-4xl font-semibold text-center mb-10 flex items-center justify-center">
            <FaBookOpen className="mr-4" size={36} /> Our Story
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Our journey began with a simple yet powerful idea: to bridge the gap between exceptional service professionals and those seeking quality assistance in their daily lives.
            </p>
            <p className="text-lg leading-relaxed">
              Drawing from our diverse backgrounds in technology, hospitality, and customer service, we recognized the untapped potential in the gig economy. We envisioned a platform that not only connects but elevates the entire service experience.
            </p>
            <p className="text-lg leading-relaxed">
              Our passion stems from personal experiences - times when finding reliable help seemed unnecessarily complicated. This drove us to create a solution that simplifies the process while ensuring top-tier quality.
            </p>
            <p className="text-xl leading-relaxed font-semibold">
              Today, we're not just providing a service; we're fostering a community where skills are valued, trust is paramount, and convenience meets excellence.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image src="/customer1.png" alt="John Doe" width={200} height={200} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">John Doe</h3>
              <p className="text-xl text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image src="/customer2.png" alt="Jane Smith" width={200} height={200} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Jane Smith</h3>
              <p className="text-xl text-gray-600">CTO & Co-founder</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image src="/customer3.png" alt="Mike Johnson" width={200} height={200} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Mike Johnson</h3>
              <p className="text-xl text-gray-600">Head of Operations</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 p-12 rounded-xl text-center mb-16">
          <h2 className="text-4xl font-semibold mb-8">Join Our Community</h2>
          <p className="text-2xl mb-12">Experience the convenience of our services today. Download our app and become part of our growing community!</p>
          <div className="flex justify-center space-x-8">
            <Link href="https://apps.apple.com/your-app" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image src="/apple_badge.png" alt="Download on App Store" width={200} height={60} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={200} height={60} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
