/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page bg-white text-gray-800">
      <Navbar />
      
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-brand-primary">Our Services</h1>

        {/* Driver Services */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center  lg:mr-24">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/driverService.png" alt="Driver Service" width={500} height={300} className="rounded-lg shadow-md lg:ml-24" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-6 text-brand-secondary">Your Personal Driver is Just a Click Away</h2>
              <p className="text-lg mb-6 text-gray-600">
                No more stress about transportation. Our drivers are punctual, courteous, and here to make your life easier.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Safe and reliable transportation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional and courteous drivers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Available for various needs: errands, appointments, and more
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chef Services */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center lg:ml-24 lg:mr-24">
            <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 ">
              <Image src="/chefteam.png" alt="Chef Service" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pr-12 md:order-1">
              <h2 className="text-3xl font-semibold mb-6 text-brand-secondary">Enjoy Restaurant-Quality Food in the Comfort of Your Home</h2>
              <p className="text-lg mb-6 text-gray-600">
                From family dinners to special diets, our skilled chefs bring gourmet cooking right to your kitchen.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customized meal planning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fresh, high-quality ingredients
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Accommodates dietary restrictions and preferences
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Caretaker Services */}
        <section className="mb-24 ">
          <div className="flex flex-col md:flex-row items-center  lg:mr-24">
            <div className="md:w-1/2 mb-8 md:mb-0 ">
              <Image src="/elderCare2.png" alt="Caretaker Service" width={500} height={300} className="rounded-lg shadow-md lg:ml-24" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-6 text-brand-secondary">Caring Hands, Peace of Mind</h2>
              <p className="text-lg mb-6 text-gray-600">
                From personal care to emotional support, we offer trusted care services designed to meet the unique needs of seniors.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Experienced and compassionate caregivers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personalized care plans
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Assistance with daily activities and companionship
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Service Information */}
        <section className="bg-slate-200 text-black p-16 rounded-lg shadow-lg mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-100 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 mr-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-semibold">Transparent Pricing</h3>
              </div>
              <p className="text-lg">Experience clarity and fairness with our upfront, competitive pricing. No hidden fees, just honest service.</p>
            </div>
            <div className="bg-white bg-opacity-100 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 mr-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-semibold">Customer-Centric Support</h3>
              </div>
              <p className="text-lg">Our dedicated team ensures your satisfaction at every step, delivering personalized care that exceeds expectations.</p>
            </div>
          </div>
          <p className="mt-12 text-xl text-center font-light leading-relaxed">
            At [Business Name], we're committed to enhancing your life through seamless, worry-free experiences. Trust us to deliver excellence in every service, every time.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-24">
          <h2 className="text-3xl font-semibold mb-8 text-brand-primary">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-gray-600">Download our app now and experience convenience at your fingertips!</p>
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

export default ServicesPage;
