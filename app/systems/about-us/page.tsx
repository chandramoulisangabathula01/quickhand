/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        {/* Company Overview Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image src="/company-image.jpg" alt="Our Company" width={500} height={300} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 2020, our company was born out of a simple idea: to make everyday services accessible at the tap of a button. We've grown from a small startup to a thriving platform connecting thousands of users with skilled professionals.
              </p>
              <p className="text-lg mb-4">
                Our mission is to revolutionize the service industry by providing a seamless, reliable, and efficient platform for both customers and service providers.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Image src="/icon-quality.svg" alt="Quality" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>We're committed to providing top-notch services through our vetted professionals.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="/icon-innovation.svg" alt="Innovation" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We continuously strive to improve our platform and services to meet evolving needs.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="/icon-trust.svg" alt="Trust" width={64} height={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p>We build lasting relationships with our users and service providers based on trust and reliability.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image src="/team-member-1.jpg" alt="John Doe" width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="text-center">
              <Image src="/team-member-2.jpg" alt="Jane Smith" width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
            <div className="text-center">
              <Image src="/team-member-3.jpg" alt="Mike Johnson" width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 p-8 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8">Experience the convenience of our services today. Download our app and become part of our growing community!</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://apps.apple.com/your-app" className="inline-block">
              <Image src="/apple_badge.png" alt="Download on App Store" width={135} height={40} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={135} height={40} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
