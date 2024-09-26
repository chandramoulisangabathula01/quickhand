/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="how-it-works-page bg-white text-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-brand-primary">How It Works</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-brand-secondary">Book Your Service in 3 Easy Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6">
                <Image src="/download-icon.svg" alt="Download App" width={80} height={80} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Step 1: Download the App</h3>
              <p className="text-lg">Get our app from the App Store or Google Play Store. It's free and easy to install!</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6">
                <Image src="/choose-service-icon.svg" alt="Choose Service" width={80} height={80} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Step 2: Choose Your Service</h3>
              <p className="text-lg">Browse through our range of services and select the one you need. We've got you covered.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6">
                <Image src="/book-track-icon.svg" alt="Book and Track" width={80} height={80} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Step 3: Book and Track</h3>
              <p className="text-lg">Confirm your booking and track your service provider in real-time. It's that simple!</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-brand-secondary">See Our App in Action</h2>
          <div className="flex justify-center">
            <Image src="/app-demo.gif" alt="App Demo" width={300} height={600} className="rounded-lg shadow-xl" />
          </div>
        </section>

        <section className="bg-gray-50 p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-brand-secondary">Why Choose Our App?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              User-friendly interface
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Wide range of services
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Verified professionals
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Real-time tracking
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Secure payment options
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              24/7 customer support
            </li>
          </ul>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-brand-secondary">Ready to Get Started?</h2>
          <p className="text-xl mb-10">Download our app now and experience convenience at your fingertips!</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/apple_badge.png" alt="Download on App Store" width={160} height={48} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-105">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={160} height={48} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
