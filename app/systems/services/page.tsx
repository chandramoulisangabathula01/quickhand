/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page bg-gradient-to-b from-gray-100 to-white text-gray-900">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-20 text-black">Explore Our Services</h1>

        {/* Driver Services */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Image src="/driverService.png" alt="Driver Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h2 className="text-4xl font-bold mb-8 text-black">Your Personal Driver, One Click Away</h2>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Experience stress-free transportation with our punctual and courteous drivers, ready to make your journey smooth and comfortable.
              </p>
              <ul className="space-y-4 mb-8 text-gray-800">
                {['Safe and reliable transportation', 'Professional and courteous drivers', 'Available for various needs: errands, appointments, and more'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">Book a Ride</button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:order-2">
              <Image src="/chefteam.png" alt="Chef Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-1/2 lg:pr-16 lg:order-1">
              <h2 className="text-4xl font-bold mb-8 text-black">Gourmet Dining at Your Doorstep</h2>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Indulge in restaurant-quality cuisine from the comfort of your home. Our skilled chefs bring culinary excellence to your kitchen.
              </p>
              <ul className="space-y-4 mb-8 text-gray-800">
                {['Customized meal planning', 'Fresh, high-quality ingredients', 'Accommodates dietary restrictions and preferences'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">Schedule a Chef</button>
            </div>
          </div>
        </section>

        {/* Caretaker Services */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Image src="/elderCare2.png" alt="Caretaker Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h2 className="text-4xl font-bold mb-8 text-black">Compassionate Care, Unmatched Support</h2>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Our dedicated caretakers provide personalized support and companionship, ensuring comfort and peace of mind for seniors and their families.
              </p>
              <ul className="space-y-4 mb-8 text-gray-800">
                {['Experienced and compassionate caregivers', 'Personalized care plans', 'Assistance with daily activities and companionship'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">Request a Caretaker</button>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "Download the App", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ), description: "Get our app from your preferred app store" },
                { step: "Browse Services", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ), description: "Explore our wide range of premium services" },
                { step: "Schedule", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ), description: "Pick a time that works best for you" },
                { step: "Enjoy", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), description: "Sit back and enjoy our top-notch service" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white rounded-full p-8 shadow-lg mb-6 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Step {index + 1}</h3>
                  <h4 className="text-xl font-medium mb-3 text-gray-700">{item.step}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-900 text-white p-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Transparent Pricing',
                  description: 'Experience clarity and fairness with our upfront, competitive pricing. No hidden fees, just honest service.',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Customer-Centric Support',
                  description: 'Our dedicated team ensures your satisfaction at every step, delivering personalized care that exceeds expectations.',
                  icon: (
                    <svg className="w-12 h-12 mb-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-70 transition-all duration-300">
                  {item.icon}
                  <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-white">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-2xl text-center font-light leading-relaxed text-gray-300">
              At [Business Name], we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8 text-black">Ready to Experience Premium Service?</h2>
          <p className="text-2xl mb-12 text-gray-700">Download our app now and unlock a world of convenience!</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://apps.apple.com/your-app" className="inline-block transition-transform hover:scale-110">
              <Image src="/apple_badge.png" alt="Download on App Store" width={200} height={60} className="rounded-lg shadow-md" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block transition-transform hover:scale-110">
              <Image src="/google_badge.png" alt="Get it on Google Play" width={200} height={60} className="rounded-lg shadow-md" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;