/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-20 text-gray-800">Our Premium Services</h1>

        {/* Driver Services */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Image src="/driverService.png" alt="Driver Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h2 className="text-4xl font-bold mb-8 text-gray-700">Your Personal Driver, One Click Away</h2>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Experience stress-free transportation with our punctual and courteous drivers, ready to make your journey smooth and comfortable.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700">
                {['Safe and reliable transportation', 'Professional and courteous drivers', 'Available for various needs: errands, appointments, and more'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">Book a Ride</button>
            </div>
          </div>
        </section>

        {/* Chef Services */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:order-2">
              <Image src="/chefteam.png" alt="Chef Service" width={600} height={400} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-1/2 lg:pr-16 lg:order-1">
              <h2 className="text-4xl font-bold mb-8 text-gray-700">Gourmet Dining at Your Doorstep</h2>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Indulge in restaurant-quality cuisine from the comfort of your home. Our skilled chefs bring culinary excellence to your kitchen.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700">
                {['Customized meal planning', 'Fresh, high-quality ingredients', 'Accommodates dietary restrictions and preferences'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition-colors duration-300">Schedule a Chef</button>
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
              <h2 className="text-4xl font-bold mb-8 text-gray-700">Compassionate Care, Unmatched Support</h2>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Our dedicated caretakers provide personalized support and companionship, ensuring comfort and peace of mind for seniors and their families.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700">
                {['Experienced and compassionate caregivers', 'Personalized care plans', 'Assistance with daily activities and companionship'].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-600 transition-colors duration-300">Request a Caretaker</button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 text-gray-800 p-16 rounded-3xl shadow-2xl mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Transparent Pricing',
                description: 'Experience clarity and fairness with our upfront, competitive pricing. No hidden fees, just honest service.',
                icon: (
                  <svg className="w-12 h-12 mb-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Customer-Centric Support',
                description: 'Our dedicated team ensures your satisfaction at every step, delivering personalized care that exceeds expectations.',
                icon: (
                  <svg className="w-12 h-12 mb-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                {item.icon}
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl text-center font-light leading-relaxed">
            At [Business Name], we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Experience Premium Service?</h2>
          <p className="text-2xl mb-12 text-gray-600">Download our app now and unlock a world of convenience!</p>
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